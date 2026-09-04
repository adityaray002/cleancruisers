
import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ChevronUp, ChevronDown, Trash2, Plus, ArrowLeft, Loader2, ChevronDown as Caret,
  GripVertical, Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  LocationPageData, PageSection, SectionType, SECTION_LABELS, SECTION_TYPES,
  ICON_OPTIONS, makeSection, slugifyCity,
  createLocationPage, updateLocationPage, getLocationPageForAdmin,
} from "@/lib/locationApi";

// ── helpers ──────────────────────────────────────────────────────────────────
const inp =
  "w-full bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-green-500 transition-colors";
const label = "block text-xs font-medium text-neutral-400 mb-1";
const fieldRow = "space-y-1";

const EMPTY_PAGE: Omit<LocationPageData, "id" | "created_at" | "updated_at"> = {
  slug: "",
  city_name: "",
  area_label: "Delhi NCR",
  meta_title: "",
  meta_description: "",
  hero_title: "",
  hero_intro: "",
  hero_badge: "",
  sections: [],
  is_published: false,
};

// ── Section type menu ─────────────────────────────────────────────────────────
const AddSectionMenu = ({ onAdd }: { onAdd: (t: SectionType) => void }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 text-green-400 text-sm rounded-lg hover:bg-green-500/20 transition-colors"
      >
        <Plus className="w-4 h-4" /> Add Section <Caret className="w-3 h-3" />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 w-56 bg-neutral-900 border border-neutral-700 rounded-xl shadow-xl z-20 overflow-hidden">
          {SECTION_TYPES.map((t) => (
            <button
              key={t}
              onClick={() => { onAdd(t); setOpen(false); }}
              className="w-full text-left px-4 py-2.5 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors"
            >
              {SECTION_LABELS[t]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// ── Icon picker ───────────────────────────────────────────────────────────────
const IconPicker = ({ value, onChange }: { value: string; onChange: (v: string) => void }) => (
  <select
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className={inp}
  >
    {ICON_OPTIONS.map((o) => (
      <option key={o.key} value={o.key}>{o.label}</option>
    ))}
  </select>
);

// ── Section field editors ─────────────────────────────────────────────────────
const SectionFields = ({
  section, onChange,
}: {
  section: PageSection;
  onChange: (updated: Partial<PageSection>) => void;
}) => {
  const upd = (patch: Partial<PageSection>) => onChange(patch);

  const listAdd = <K extends keyof PageSection>(key: K, item: any) =>
    upd({ [key]: [...((section[key] as any[]) || []), item] });
  const listDel = <K extends keyof PageSection>(key: K, i: number) =>
    upd({ [key]: ((section[key] as any[]) || []).filter((_: any, j: number) => j !== i) });
  const listSet = <K extends keyof PageSection>(key: K, i: number, patch: any) =>
    upd({
      [key]: ((section[key] as any[]) || []).map((item: any, j: number) =>
        j === i ? { ...item, ...patch } : item
      ),
    });

  const CommonHeader = () => (
    <div className="grid sm:grid-cols-2 gap-3 pb-3 border-b border-neutral-800 mb-3">
      <div className={fieldRow}>
        <label className={label}>Eyebrow label (green, optional)</label>
        <input className={inp} placeholder="e.g. Why It Matters" value={section.eyebrow || ""} onChange={(e) => upd({ eyebrow: e.target.value })} />
      </div>
      <div className={fieldRow}>
        <label className={label}>Heading <span className="text-neutral-600">(use {"{city}"} for city name)</span></label>
        <input className={inp} placeholder="e.g. Why Cars in {city} Get Dirty" value={section.heading || ""} onChange={(e) => upd({ heading: e.target.value })} />
      </div>
    </div>
  );

  switch (section.type) {
    // ── Text Block ────────────────────────────────────────────────────────────
    case "text_block":
    case "pricing":
      return (
        <div className="space-y-3">
          <CommonHeader />
          <div className={fieldRow}>
            <label className={label}>Body text <span className="text-neutral-600">({"{city}"} works here too)</span></label>
            <textarea rows={5} className={inp} placeholder="Write the paragraph content here..." value={section.body || ""} onChange={(e) => upd({ body: e.target.value })} />
          </div>
        </div>
      );

    // ── Warning Box ───────────────────────────────────────────────────────────
    case "warning_box":
      return (
        <div className="space-y-3">
          <div className={fieldRow}>
            <label className={label}>Title / Bold text (optional)</label>
            <input className={inp} placeholder="e.g. Important note" value={section.heading || ""} onChange={(e) => upd({ heading: e.target.value })} />
          </div>
          <div className={fieldRow}>
            <label className={label}>Box content</label>
            <textarea rows={3} className={inp} placeholder="Warning or callout text..." value={section.body || ""} onChange={(e) => upd({ body: e.target.value })} />
          </div>
        </div>
      );

    // ── Bullet List ───────────────────────────────────────────────────────────
    case "bullet_list":
      return (
        <div className="space-y-3">
          <CommonHeader />
          <div className={fieldRow}>
            <label className={label}>Bullet points</label>
            {(section.items || []).map((item, i) => (
              <div key={i} className="flex gap-2 mb-2">
                <input className={inp} placeholder={`Bullet ${i + 1}`} value={item} onChange={(e) => {
                  const arr = [...(section.items || [])];
                  arr[i] = e.target.value;
                  upd({ items: arr });
                }} />
                <button onClick={() => listDel("items", i)} className="text-neutral-500 hover:text-red-400 flex-shrink-0">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
            <button onClick={() => listAdd("items", "")} className="text-xs text-green-400 hover:text-green-300 flex items-center gap-1 mt-1">
              <Plus className="w-3 h-3" /> Add bullet
            </button>
          </div>
          <div className={fieldRow}>
            <label className={label}>Bottom note / callout (optional — shown in yellow box)</label>
            <textarea rows={2} className={inp} placeholder="e.g. Using a dry cloth makes things worse..." value={section.note || ""} onChange={(e) => upd({ note: e.target.value })} />
          </div>
        </div>
      );

    // ── Service Cards ─────────────────────────────────────────────────────────
    case "service_cards":
      return (
        <div className="space-y-3">
          <CommonHeader />
          {(section.cards || []).map((card, i) => (
            <div key={i} className="p-3 bg-neutral-950 border border-neutral-800 rounded-lg space-y-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-neutral-400">Card {i + 1}</span>
                <button onClick={() => listDel("cards", i)} className="text-neutral-600 hover:text-red-400">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="grid sm:grid-cols-3 gap-2">
                <div className={fieldRow}>
                  <label className={label}>Icon</label>
                  <IconPicker value={card.icon} onChange={(v) => listSet("cards", i, { icon: v })} />
                </div>
                <div className={fieldRow}>
                  <label className={label}>Card title</label>
                  <input className={inp} placeholder="e.g. Interior Deep Cleaning" value={card.name} onChange={(e) => listSet("cards", i, { name: e.target.value })} />
                </div>
                <div className={fieldRow}>
                  <label className={label}>Description</label>
                  <input className={inp} placeholder="Short description" value={card.desc} onChange={(e) => listSet("cards", i, { desc: e.target.value })} />
                </div>
              </div>
            </div>
          ))}
          <button onClick={() => listAdd("cards", { icon: "car", name: "", desc: "" })}
            className="text-xs text-green-400 hover:text-green-300 flex items-center gap-1">
            <Plus className="w-3 h-3" /> Add card
          </button>
        </div>
      );

    // ── Process Steps ─────────────────────────────────────────────────────────
    case "process_steps":
      return (
        <div className="space-y-3">
          <CommonHeader />
          {(section.steps || []).map((step, i) => (
            <div key={i} className="p-3 bg-neutral-950 border border-neutral-800 rounded-lg space-y-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-neutral-400">Step {i + 1}</span>
                <button onClick={() => listDel("steps", i)} className="text-neutral-600 hover:text-red-400">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <input className={inp} placeholder="Step title" value={step.title} onChange={(e) => listSet("steps", i, { title: e.target.value })} />
              <textarea rows={2} className={inp} placeholder="Step description" value={step.desc} onChange={(e) => listSet("steps", i, { desc: e.target.value })} />
            </div>
          ))}
          <button onClick={() => listAdd("steps", { title: "", desc: "" })}
            className="text-xs text-green-400 hover:text-green-300 flex items-center gap-1">
            <Plus className="w-3 h-3" /> Add step
          </button>
        </div>
      );

    // ── Grid Points (Why Choose) ──────────────────────────────────────────────
    case "grid_points":
      return (
        <div className="space-y-3">
          <CommonHeader />
          {(section.points || []).map((pt, i) => (
            <div key={i} className="flex gap-2 items-center">
              <div className="w-32 flex-shrink-0">
                <IconPicker value={pt.icon} onChange={(v) => listSet("points", i, { icon: v })} />
              </div>
              <input className={inp} placeholder="Point text" value={pt.text} onChange={(e) => listSet("points", i, { text: e.target.value })} />
              <button onClick={() => listDel("points", i)} className="text-neutral-600 hover:text-red-400 flex-shrink-0">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
          <button onClick={() => listAdd("points", { icon: "check", text: "" })}
            className="text-xs text-green-400 hover:text-green-300 flex items-center gap-1">
            <Plus className="w-3 h-3" /> Add point
          </button>
        </div>
      );

    // ── How Often Cards ───────────────────────────────────────────────────────
    case "how_often_cards":
      return (
        <div className="space-y-3">
          <CommonHeader />
          {(section.how_often || []).map((c, i) => (
            <div key={i} className="p-3 bg-neutral-950 border border-neutral-800 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-neutral-400">Card {i + 1}</span>
                <button onClick={() => listDel("how_often", i)} className="text-neutral-600 hover:text-red-400">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="grid sm:grid-cols-3 gap-2">
                <div className={fieldRow}>
                  <label className={label}>Label (green, small)</label>
                  <input className={inp} placeholder="e.g. Exterior wash" value={c.label} onChange={(e) => listSet("how_often", i, { label: e.target.value })} />
                </div>
                <div className={fieldRow}>
                  <label className={label}>Frequency</label>
                  <input className={inp} placeholder="e.g. Every 1–2 weeks" value={c.freq} onChange={(e) => listSet("how_often", i, { freq: e.target.value })} />
                </div>
                <div className={fieldRow}>
                  <label className={label}>Note</label>
                  <input className={inp} placeholder="Context or tip" value={c.note} onChange={(e) => listSet("how_often", i, { note: e.target.value })} />
                </div>
              </div>
            </div>
          ))}
          <button onClick={() => listAdd("how_often", { label: "", freq: "", note: "" })}
            className="text-xs text-green-400 hover:text-green-300 flex items-center gap-1">
            <Plus className="w-3 h-3" /> Add card
          </button>
        </div>
      );

    // ── FAQ ───────────────────────────────────────────────────────────────────
    case "faq":
      return (
        <div className="space-y-3">
          <CommonHeader />
          {(section.faq_items || []).map((faq, i) => (
            <div key={i} className="p-3 bg-neutral-950 border border-neutral-800 rounded-lg space-y-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-neutral-400">Q{i + 1}</span>
                <button onClick={() => listDel("faq_items", i)} className="text-neutral-600 hover:text-red-400">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <input className={inp} placeholder="Question" value={faq.q} onChange={(e) => listSet("faq_items", i, { q: e.target.value })} />
              <textarea rows={2} className={inp} placeholder="Answer" value={faq.a} onChange={(e) => listSet("faq_items", i, { a: e.target.value })} />
            </div>
          ))}
          <button onClick={() => listAdd("faq_items", { q: "", a: "" })}
            className="text-xs text-green-400 hover:text-green-300 flex items-center gap-1">
            <Plus className="w-3 h-3" /> Add question
          </button>
        </div>
      );

    // ── Nearby Areas ──────────────────────────────────────────────────────────
    case "nearby_areas":
      return (
        <div className="space-y-3">
          <CommonHeader />
          {(section.areas || []).map((area, i) => (
            <div key={i} className="flex gap-2 items-center">
              <input className={inp} placeholder="Area name (e.g. Noida)" value={area.name} onChange={(e) => listSet("areas", i, { name: e.target.value })} />
              <input className={inp} placeholder="Link (e.g. /car-wash-in-noida/)" value={area.link} onChange={(e) => listSet("areas", i, { link: e.target.value })} />
              <button onClick={() => listDel("areas", i)} className="text-neutral-600 hover:text-red-400 flex-shrink-0">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
          <button onClick={() => listAdd("areas", { name: "", link: "" })}
            className="text-xs text-green-400 hover:text-green-300 flex items-center gap-1">
            <Plus className="w-3 h-3" /> Add area
          </button>
        </div>
      );

    // ── Two Column Text ───────────────────────────────────────────────────────
    case "two_col_text":
      return (
        <div className="space-y-3">
          <CommonHeader />
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="space-y-2 p-3 bg-neutral-950 border border-neutral-800 rounded-lg">
              <label className={label}>Left column heading (optional)</label>
              <input className={inp} placeholder="Heading" value={section.left_heading || ""} onChange={(e) => upd({ left_heading: e.target.value })} />
              <label className={label}>Left column body</label>
              <textarea rows={4} className={inp} placeholder="Left side content..." value={section.left_body || ""} onChange={(e) => upd({ left_body: e.target.value })} />
            </div>
            <div className="space-y-2 p-3 bg-neutral-950 border border-neutral-800 rounded-lg">
              <label className={label}>Right column heading (optional)</label>
              <input className={inp} placeholder="Heading" value={section.right_heading || ""} onChange={(e) => upd({ right_heading: e.target.value })} />
              <label className={label}>Right column body</label>
              <textarea rows={4} className={inp} placeholder="Right side content..." value={section.right_body || ""} onChange={(e) => upd({ right_body: e.target.value })} />
            </div>
          </div>
        </div>
      );

    default:
      return <p className="text-neutral-500 text-sm">Unknown section type.</p>;
  }
};

// ── Section card in the list ──────────────────────────────────────────────────
const SectionCard = ({
  section, index, total,
  onMove, onDelete, onChange,
}: {
  section: PageSection; index: number; total: number;
  onMove: (dir: -1 | 1) => void;
  onDelete: () => void;
  onChange: (patch: Partial<PageSection>) => void;
}) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="border border-neutral-800 rounded-xl overflow-hidden">
      {/* header */}
      <div className="flex items-center gap-2 px-3 py-2.5 bg-neutral-900 cursor-pointer" onClick={() => setOpen((o) => !o)}>
        <GripVertical className="w-4 h-4 text-neutral-600 flex-shrink-0" />
        <span className="text-xs px-2 py-0.5 bg-green-500/10 text-green-400 rounded font-medium flex-shrink-0">
          {SECTION_LABELS[section.type]}
        </span>
        <span className="text-sm text-neutral-300 truncate flex-1">{section.heading || section.eyebrow || ""}</span>
        <div className="flex items-center gap-1 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
          <button onClick={() => onMove(-1)} disabled={index === 0}
            className="p-1 text-neutral-500 hover:text-white disabled:opacity-30 transition-colors">
            <ChevronUp className="w-4 h-4" />
          </button>
          <button onClick={() => onMove(1)} disabled={index === total - 1}
            className="p-1 text-neutral-500 hover:text-white disabled:opacity-30 transition-colors">
            <ChevronDown className="w-4 h-4" />
          </button>
          <button onClick={onDelete}
            className="p-1 text-neutral-500 hover:text-red-400 transition-colors ml-1">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
        <Caret className={`w-4 h-4 text-neutral-500 flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </div>
      {/* body */}
      {open && (
        <div className="p-4 bg-neutral-950/60 space-y-3">
          <SectionFields section={section} onChange={onChange} />
        </div>
      )}
    </div>
  );
};

// ── Main editor ───────────────────────────────────────────────────────────────
const AdminLocationEditor = () => {
  const { slug: editSlug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const isEdit = Boolean(editSlug);

  const [page, setPage] = useState<typeof EMPTY_PAGE & Partial<Pick<LocationPageData, "id">>>(EMPTY_PAGE);
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [autoSlug, setAutoSlug] = useState(!isEdit);

  useEffect(() => {
    if (!editSlug) return;
    getLocationPageForAdmin(editSlug).then((data) => {
      if (data) setPage(data);
      setLoading(false);
    });
  }, [editSlug]);

  const set = (patch: Partial<typeof page>) => setPage((p) => ({ ...p, ...patch }));

  const handleCityChange = (val: string) => {
    set({ city_name: val });
    if (autoSlug) {
      const slug = slugifyCity(val);
      set({
        city_name: val,
        slug,
        hero_title: val ? `Car Wash in ${val} — Doorstep Car Cleaning at Your Location` : "",
        meta_title: val ? `Car Wash in ${val} | Doorstep Car Wash at Home` : "",
        hero_badge: val ? `Serving ${val} & Delhi NCR` : "",
      });
    }
  };

  const addSection = (type: SectionType) => {
    set({ sections: [...page.sections, makeSection(type)] });
  };

  const updateSection = (i: number, patch: Partial<PageSection>) => {
    set({
      sections: page.sections.map((s, j) => (j === i ? { ...s, ...patch } : s)),
    });
  };

  const deleteSection = (i: number) => {
    set({ sections: page.sections.filter((_, j) => j !== i) });
  };

  const moveSection = (i: number, dir: -1 | 1) => {
    const arr = [...page.sections];
    const ni = i + dir;
    if (ni < 0 || ni >= arr.length) return;
    [arr[i], arr[ni]] = [arr[ni], arr[i]];
    set({ sections: arr });
  };

  const save = async (publish: boolean) => {
    if (!page.city_name) { setError("City name is required."); return; }
    if (!page.slug) { setError("Slug is required."); return; }
    setSaving(true);
    setError(null);
    try {
      const payload = { ...page, is_published: publish };
      if (isEdit && editSlug) {
        await updateLocationPage(editSlug, payload);
      } else {
        await createLocationPage(payload);
      }
      navigate("/admin/locations");
    } catch (e: any) {
      setError(e?.message || "Failed to save. Check Supabase connection.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
        <Loader2 className="w-6 h-6 text-green-400 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white pb-16">
      {/* header */}
      <header className="border-b border-neutral-800 sticky top-0 bg-neutral-950/95 backdrop-blur z-10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <button onClick={() => navigate("/admin/locations")} className="flex items-center gap-1.5 text-neutral-400 hover:text-white text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <h1 className="text-sm font-semibold text-neutral-200 flex-1 text-center truncate">
            {isEdit ? `Editing: ${page.city_name}` : "New Location Page"}
          </h1>
          <div className="flex items-center gap-2">
            {isEdit && (
              <a href={`/car-wash-in-${editSlug}/`} target="_blank" rel="noopener noreferrer"
                className="p-1.5 text-neutral-400 hover:text-white transition-colors" title="Preview live page">
                <Eye className="w-4 h-4" />
              </a>
            )}
            <Button onClick={() => save(false)} disabled={saving} variant="outline"
              className="border-neutral-700 text-neutral-300 hover:text-white text-xs h-8 px-3">
              {saving ? <Loader2 className="w-3 h-3 animate-spin mr-1" /> : null} Save Draft
            </Button>
            <Button onClick={() => save(true)} disabled={saving}
              className="bg-green-500 hover:bg-green-400 text-black text-xs font-bold h-8 px-3">
              {saving ? <Loader2 className="w-3 h-3 animate-spin mr-1" /> : null}
              {page.is_published ? "Update" : "Publish"}
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 space-y-8">
        {error && (
          <div className="text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3 text-sm">
            {error}
          </div>
        )}

        {/* ── Meta / Page info ── */}
        <section>
          <h2 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">Page Info & SEO</h2>
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className={fieldRow}>
                <label className={label}>City Name *</label>
                <input className={inp} placeholder="e.g. Dwarka" value={page.city_name}
                  onChange={(e) => handleCityChange(e.target.value)} />
              </div>
              <div className={fieldRow}>
                <label className={label}>Area / Region</label>
                <input className={inp} placeholder="e.g. Delhi NCR" value={page.area_label}
                  onChange={(e) => set({ area_label: e.target.value })} />
              </div>
            </div>
            <div className={fieldRow}>
              <label className={label}>
                URL Slug *
                <span className="ml-2 text-neutral-600">cleancruisers.in/car-wash-in-<strong className="text-green-500">{page.slug || "slug"}</strong>/</span>
                {autoSlug && !isEdit && (
                  <button onClick={() => setAutoSlug(false)} className="ml-2 text-neutral-600 hover:text-neutral-400 text-xs underline">
                    (edit manually)
                  </button>
                )}
              </label>
              <input className={inp} placeholder="e.g. dwarka" value={page.slug}
                onChange={(e) => { setAutoSlug(false); set({ slug: e.target.value }); }}
                readOnly={isEdit}
              />
            </div>
            <div className={fieldRow}>
              <label className={label}>Meta Title</label>
              <input className={inp} placeholder="Car Wash in {City} | Doorstep Car Wash at Home" value={page.meta_title}
                onChange={(e) => set({ meta_title: e.target.value })} />
              <p className="text-xs text-neutral-600 mt-1">{page.meta_title.length}/60 chars</p>
            </div>
            <div className={fieldRow}>
              <label className={label}>Meta Description</label>
              <textarea rows={2} className={inp} placeholder="Short description for Google search results..." value={page.meta_description}
                onChange={(e) => set({ meta_description: e.target.value })} />
              <p className="text-xs text-neutral-600 mt-1">{page.meta_description.length}/160 chars</p>
            </div>
          </div>
        </section>

        {/* ── Hero ── */}
        <section>
          <h2 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
            Hero Section <span className="text-neutral-700 normal-case">(always shown first)</span>
          </h2>
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 space-y-4">
            <div className={fieldRow}>
              <label className={label}>Badge text (small green pill at top)</label>
              <input className={inp} placeholder="e.g. Serving Dwarka & Delhi NCR" value={page.hero_badge}
                onChange={(e) => set({ hero_badge: e.target.value })} />
            </div>
            <div className={fieldRow}>
              <label className={label}>H1 Title</label>
              <input className={inp} placeholder="Car Wash in {City} — Doorstep Car Cleaning at Your Location" value={page.hero_title}
                onChange={(e) => set({ hero_title: e.target.value })} />
            </div>
            <div className={fieldRow}>
              <label className={label}>Intro paragraph (shown below H1)</label>
              <textarea rows={4} className={inp} placeholder="Short intro about the service in this city..." value={page.hero_intro}
                onChange={(e) => set({ hero_intro: e.target.value })} />
            </div>
          </div>
        </section>

        {/* ── Sections builder ── */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
              Content Sections
              <span className="text-neutral-700 normal-case ml-2">({page.sections.length} section{page.sections.length !== 1 ? "s" : ""})</span>
            </h2>
          </div>

          {page.sections.length === 0 && (
            <div className="border border-dashed border-neutral-800 rounded-xl p-8 text-center text-neutral-600 text-sm mb-4">
              No sections yet. Add sections below — in any order, any combination.
            </div>
          )}

          <div className="space-y-3 mb-4">
            {page.sections.map((section, i) => (
              <SectionCard
                key={section._id}
                section={section}
                index={i}
                total={page.sections.length}
                onMove={(dir) => moveSection(i, dir)}
                onDelete={() => deleteSection(i)}
                onChange={(patch) => updateSection(i, patch)}
              />
            ))}
          </div>

          <AddSectionMenu onAdd={addSection} />

          <p className="text-xs text-neutral-700 mt-3">
            Tip: use <code className="text-neutral-500">{"{city}"}</code> anywhere in headings or body text — it gets replaced with the city name on the live page.
          </p>
        </section>

        {/* ── Bottom save bar ── */}
        <div className="flex items-center gap-3 pt-4 border-t border-neutral-800">
          <Button onClick={() => save(false)} disabled={saving} variant="outline"
            className="border-neutral-700 text-neutral-300 hover:text-white">
            {saving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null} Save as Draft
          </Button>
          <Button onClick={() => save(true)} disabled={saving}
            className="bg-green-500 hover:bg-green-400 text-black font-bold">
            {saving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
            {page.is_published ? "Update & Publish" : "Publish Now"}
          </Button>
          {isEdit && (
            <a href={`/car-wash-in-${editSlug}/`} target="_blank" rel="noopener noreferrer"
              className="text-xs text-neutral-500 hover:text-green-400 flex items-center gap-1 ml-auto">
              <Eye className="w-3.5 h-3.5" /> Preview live page
            </a>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminLocationEditor;
