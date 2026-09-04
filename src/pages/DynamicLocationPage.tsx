
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  MapPin, Phone, ArrowRight, Car, CheckCircle2, Loader2,
  Droplets, Wind, Layers, Sparkles, Shield, Users, Zap, Clock,
  Star, Wrench, Award, ThumbsUp, Eye,
} from "lucide-react";
import {
  getPublishedLocationPage, LocationPageData, PageSection, SectionType,
} from "@/lib/locationApi";

// ── Icon registry ───────────────────────────────────────────────────────────
const ICONS: Record<string, React.FC<{ className?: string }>> = {
  car: Car, droplets: Droplets, wind: Wind, layers: Layers, sparkles: Sparkles,
  shield: Shield, users: Users, zap: Zap, clock: Clock, "map-pin": MapPin,
  check: CheckCircle2, star: Star, wrench: Wrench, award: Award,
  "thumbs-up": ThumbsUp, eye: Eye,
};
const getIcon = (key: string): React.FC<{ className?: string }> => ICONS[key] ?? Car;

// ── Animation helpers ────────────────────────────────────────────────────────
const CV = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const IV = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };

// Alternating section backgrounds
const sectionClass = (i: number) =>
  i % 2 === 0 ? "bg-gradient-to-b from-black to-gray-900/50" : "";
const sectionStyle = (i: number): React.CSSProperties | undefined =>
  i % 2 !== 0 ? { backgroundColor: "#0a0f0f" } : undefined;

// ── RichText: renders [link text](url) as clickable <a> tags ────────────────
const parseLinks = (line: string): React.ReactNode[] => {
  const result: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0, match: RegExpExecArray | null;
  while ((match = re.exec(line)) !== null) {
    if (match.index > last) result.push(line.slice(last, match.index));
    result.push(
      <a key={match.index} href={match[2]} className="text-green-400 hover:underline font-medium">
        {match[1]}
      </a>
    );
    last = match.index + match[0].length;
  }
  if (last < line.length) result.push(line.slice(last));
  return result.length ? result : [line];
};

const RichText = ({ text, className }: { text?: string; className?: string }) => {
  if (!text) return null;
  const lines = text.split("\n");
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i}>
          {parseLinks(line)}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </span>
  );
};

// ── Shared sub-components ────────────────────────────────────────────────────
const Eyebrow = ({ t }: { t?: string }) =>
  t ? <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">{t}</span> : null;

const SectionH2 = ({ t, city }: { t?: string; city: string }) =>
  t ? (
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
      {t.replace(/\{city\}/g, city)}
    </h2>
  ) : null;

const Wrap = ({ i, children }: { i: number; children: React.ReactNode }) => (
  <section className={`py-16 md:py-20 px-4 ${sectionClass(i)}`} style={sectionStyle(i)}>
    <div className="max-w-5xl mx-auto">{children}</div>
  </section>
);

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-gray-800 rounded-xl overflow-hidden hover:border-green-500/30 transition-all cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between p-5 gap-4">
        <span className="text-gray-200 text-sm sm:text-base font-medium">{q}</span>
        <span
          className={`text-2xl flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}
          style={{ color: open ? "#4ade80" : "#6b7280" }}
        >+</span>
      </div>
      {open && (
        <div className="px-5 pb-5 border-t border-gray-800">
          <p className="text-gray-400 text-sm leading-relaxed pt-4"><RichText text={a} /></p>
        </div>
      )}
    </div>
  );
};

// ── Section renderers ────────────────────────────────────────────────────────
const renderSection = (s: PageSection, i: number, city: string) => {
  const key = s._id;
  const eyebrow = <Eyebrow t={s.eyebrow} />;
  const h2 = <SectionH2 t={s.heading} city={city} />;
  const sub = (t?: string) => t?.replace(/\{city\}/g, city) ?? "";

  switch (s.type) {
    // ── plain prose ──────────────────────────────────────────────────────────
    case "text_block":
      return (
        <Wrap key={key} i={i}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            {eyebrow}{h2}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed"><RichText text={sub(s.body)} /></p>
          </motion.div>
        </Wrap>
      );

    // ── checked bullets ──────────────────────────────────────────────────────
    case "bullet_list":
      return (
        <Wrap key={key} i={i}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            {eyebrow}{h2}
          </motion.div>
          <motion.ul variants={CV} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3 mb-4">
            {(s.items || []).map((item, j) => (
              <motion.li key={j} variants={IV} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm sm:text-base"><RichText text={item} /></span>
              </motion.li>
            ))}
          </motion.ul>
          {s.note && (
            <div className="p-5 bg-yellow-500/5 border border-yellow-500/20 rounded-xl">
              <p className="text-gray-300 text-sm leading-relaxed">
                <span className="text-yellow-400 font-semibold">Note: </span><RichText text={s.note} />
              </p>
            </div>
          )}
        </Wrap>
      );

    // ── service cards ────────────────────────────────────────────────────────
    case "service_cards":
      return (
        <Wrap key={key} i={i}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            {eyebrow}{h2}
          </motion.div>
          <motion.div variants={CV} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(s.cards || []).map((card, j) => {
              const Icon = getIcon(card.icon);
              return (
                <motion.div key={j} variants={IV} whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative p-6 bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl hover:border-green-500/40 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-green-400" />
                    </div>
                    <h3 className="text-white font-semibold text-base mb-2">{card.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed"><RichText text={card.desc} /></p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </Wrap>
      );

    // ── numbered steps ───────────────────────────────────────────────────────
    case "process_steps":
      return (
        <Wrap key={key} i={i}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            {eyebrow}{h2}
          </motion.div>
          <motion.div variants={CV} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
            {(s.steps || []).map((step, j) => (
              <motion.div key={j} variants={IV}
                className="flex items-start gap-6 p-5 bg-gray-900/60 border border-gray-800 rounded-xl hover:border-green-500/30 transition-all">
                <span className="text-green-400 font-bold text-2xl tabular-nums flex-shrink-0 leading-none mt-0.5">
                  {String(j + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-white font-semibold text-base mb-1">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed"><RichText text={step.desc} /></p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Wrap>
      );

    // ── icon + text grid ─────────────────────────────────────────────────────
    case "grid_points":
      return (
        <Wrap key={key} i={i}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            {eyebrow}{h2}
          </motion.div>
          <motion.div variants={CV} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 gap-4">
            {(s.points || []).map((pt, j) => {
              const Icon = getIcon(pt.icon);
              return (
                <motion.div key={j} variants={IV} whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-5 bg-gray-900/60 border border-gray-800 rounded-xl hover:border-green-500/30 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-green-400" />
                  </div>
                  <span className="text-gray-200 text-sm sm:text-base"><RichText text={pt.text} /></span>
                </motion.div>
              );
            })}
          </motion.div>
        </Wrap>
      );

    // ── how often frequency cards ────────────────────────────────────────────
    case "how_often_cards":
      return (
        <Wrap key={key} i={i}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            {eyebrow}{h2}
          </motion.div>
          <motion.div variants={CV} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 gap-4">
            {(s.how_often || []).map((c, j) => (
              <motion.div key={j} variants={IV} className="p-5 bg-gray-900/60 border border-gray-800 rounded-xl">
                <p className="text-green-400 text-xs font-semibold uppercase tracking-wider mb-1">{c.label}</p>
                <p className="text-white font-semibold text-base mb-1">{c.freq}</p>
                <p className="text-gray-500 text-sm">{c.note}</p>
              </motion.div>
            ))}
          </motion.div>
        </Wrap>
      );

    // ── FAQ accordion ────────────────────────────────────────────────────────
    case "faq":
      return (
        <Wrap key={key} i={i}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            {eyebrow}{h2}
          </motion.div>
          <div className="space-y-3">
            {(s.faq_items || []).map((faq, j) => <FaqItem key={j} q={faq.q} a={faq.a} />)}
          </div>
        </Wrap>
      );

    // ── area chips ───────────────────────────────────────────────────────────
    case "nearby_areas":
      return (
        <Wrap key={key} i={i}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            {eyebrow}{h2}
            <div className="flex flex-wrap gap-2 mt-4">
              {(s.areas || []).map((a, j) => (
                <a key={j} href={a.link}
                  className="px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm hover:bg-green-500/20 transition-all font-medium">
                  Car Wash in {a.name}
                </a>
              ))}
            </div>
          </motion.div>
        </Wrap>
      );

    // ── pricing text ─────────────────────────────────────────────────────────
    case "pricing":
      return (
        <Wrap key={key} i={i}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl">
            {eyebrow}{h2}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed"><RichText text={sub(s.body)} /></p>
          </motion.div>
        </Wrap>
      );

    // ── two column text ──────────────────────────────────────────────────────
    case "two_col_text":
      return (
        <Wrap key={key} i={i}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            {eyebrow}{h2}
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            <div className="p-6 bg-gray-900/60 border border-gray-800 rounded-2xl">
              {s.left_heading && <h3 className="text-white font-bold text-base mb-3">{s.left_heading}</h3>}
              <p className="text-gray-400 text-sm leading-relaxed"><RichText text={sub(s.left_body)} /></p>
            </div>
            <div className="p-6 bg-gray-900/60 border border-gray-800 rounded-2xl">
              {s.right_heading && <h3 className="text-white font-bold text-base mb-3">{s.right_heading}</h3>}
              <p className="text-gray-400 text-sm leading-relaxed"><RichText text={sub(s.right_body)} /></p>
            </div>
          </div>
        </Wrap>
      );

    // ── warning callout ──────────────────────────────────────────────────────
    case "warning_box":
      return (
        <Wrap key={key} i={i}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="p-5 bg-yellow-500/5 border border-yellow-500/20 rounded-xl">
              {s.heading && <p className="text-yellow-400 font-semibold text-sm mb-2">{s.heading}</p>}
              {s.body && <p className="text-gray-300 text-sm leading-relaxed"><RichText text={s.body} /></p>}
            </div>
          </motion.div>
        </Wrap>
      );

    default:
      return null;
  }
};

// ── Page ─────────────────────────────────────────────────────────────────────
const DynamicLocationPage = () => {
  const { city } = useParams<{ city: string }>();
  const navigate = useNavigate();
  const [page, setPage] = useState<LocationPageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!city) { setNotFound(true); setLoading(false); return; }
    getPublishedLocationPage(city)
      .then((d) => { if (d) setPage(d); else setNotFound(true); })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [city]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-green-400 animate-spin" />
      </div>
    );
  }

  if (notFound || !page) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Page Not Found</h1>
        <p className="text-gray-400">This location page doesn't exist or hasn't been published yet.</p>
        <Button onClick={() => navigate("/")} className="bg-green-500 hover:bg-green-400 text-black">Go Home</Button>
      </div>
    );
  }

  const canonicalUrl = `https://cleancruisers.in/car-wash-in-${page.slug}/`;

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>{page.meta_title || `Car Wash in ${page.city_name} | Doorstep Car Wash at Home`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={page.meta_description || `Doorstep car wash in ${page.city_name} — CleanCruisers.`} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={page.meta_title || `Car Wash in ${page.city_name} | Doorstep Car Wash`} />
        <meta property="og:description" content={page.meta_description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://cleancruisers.in/LOGOFINAL.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={page.meta_title || `Car Wash in ${page.city_name} | Doorstep Car Wash`} />
        <meta name="twitter:image" content="https://cleancruisers.in/LOGOFINAL.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "CleanCruisers",
          "image": "https://cleancruisers.in/LOGOFINAL.png",
          "url": "https://cleancruisers.in",
          "telephone": "+918920230357",
          "priceRange": "₹₹",
          "areaServed": `${page.city_name}, ${page.area_label}`,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": page.city_name,
            "addressRegion": page.area_label,
            "addressCountry": "India",
          },
        })}</script>
      </Helmet>

      <Header />

      {/* ── Hero ── */}
      <section className="relative py-20 md:py-28 px-4 overflow-hidden" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-green-400/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-medium">
                {page.hero_badge || `Serving ${page.city_name} & ${page.area_label}`}
              </span>
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {page.hero_title || `Car Wash in ${page.city_name} — Doorstep Car Cleaning at Your Location`}
            </h1>
            {page.hero_intro && (
              <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-8">
                <RichText text={page.hero_intro} />
              </p>
            )}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button onClick={() => navigate("/booking")}
                className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-6 text-base rounded-xl shadow-lg shadow-green-500/25">
                BOOK NOW <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <a href="tel:8920230357"
                className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-gray-700 rounded-xl text-white hover:border-green-500/50 transition-all">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="font-semibold">8920230357</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Dynamic sections ── */}
      {page.sections.map((section, i) => renderSection(section, i, page.city_name))}

      {/* ── CTA ── */}
      <section className="py-16 md:py-24 px-4" style={{ backgroundColor: page.sections.length % 2 === 0 ? "#0a0f0f" : undefined }}>
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-green-500/10 to-green-600/20 rounded-3xl" />
            <div className="absolute inset-0 border border-green-500/30 rounded-3xl" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-400/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-400/10 rounded-full blur-3xl" />
            <div className="relative p-8 sm:p-12 text-center">
              <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Car className="w-8 h-8 text-green-400" />
              </motion.div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Your Car Has Earned a Real Clean in {page.city_name}
              </h2>
              <p className="text-gray-300 text-sm sm:text-base mb-8 max-w-xl mx-auto">
                Book your doorstep car wash in {page.city_name} — professional cleaning at your home, office or society parking.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button onClick={() => navigate("/booking")}
                  className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-6 text-base rounded-xl shadow-lg shadow-green-500/25">
                  Book Your {page.city_name} Car Wash Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <a href="tel:8920230357"
                  className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-gray-700 rounded-xl text-white hover:border-green-500/50 transition-all">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-gray-500">Call us now</p>
                    <p className="text-base font-semibold">8920230357</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DynamicLocationPage;
