import { supabase } from "./supabaseClient";

export type SectionType =
  | "text_block"
  | "bullet_list"
  | "service_cards"
  | "process_steps"
  | "grid_points"
  | "how_often_cards"
  | "faq"
  | "nearby_areas"
  | "pricing"
  | "two_col_text"
  | "warning_box";

export interface FaqItem { q: string; a: string; }
export interface NearbyArea { name: string; link: string; }
export interface ServiceCard { icon: string; name: string; desc: string; }
export interface ProcessStep { title: string; desc: string; }
export interface GridPoint { icon: string; text: string; }
export interface HowOftenCard { label: string; freq: string; note: string; }

export interface PageSection {
  _id: string; // client-side only — stripped before saving
  type: SectionType;
  eyebrow?: string;   // green label above heading
  heading?: string;   // supports {city} placeholder
  body?: string;      // text_block / pricing / warning_box; supports {city}
  items?: string[];   // bullet_list
  note?: string;      // bullet_list bottom callout
  cards?: ServiceCard[];        // service_cards
  steps?: ProcessStep[];        // process_steps
  points?: GridPoint[];         // grid_points
  how_often?: HowOftenCard[];   // how_often_cards
  faq_items?: FaqItem[];        // faq
  areas?: NearbyArea[];         // nearby_areas
  left_heading?: string;  // two_col_text
  left_body?: string;
  right_heading?: string;
  right_body?: string;
}

export interface LocationPageData {
  id?: string;
  slug: string;
  city_name: string;
  area_label: string;
  meta_title: string;
  meta_description: string;
  hero_title: string;
  hero_intro: string;
  hero_badge: string;
  sections: PageSection[];
  is_published: boolean;
  created_at?: string;
  updated_at?: string;
}

// strip client-only _id before persisting
const stripIds = (sections: PageSection[]) =>
  sections.map(({ _id, ...rest }) => rest);

// inject _id after loading
const injectIds = (sections: any[]): PageSection[] =>
  (sections || []).map((s) => ({ ...s, _id: crypto.randomUUID() }));

export const getPublishedLocationPage = async (slug: string): Promise<LocationPageData | null> => {
  const { data, error } = await supabase
    .from("location_pages")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();
  if (error || !data) return null;
  return { ...data, sections: injectIds(data.sections) };
};

export const listAllLocationPages = async () => {
  const { data, error } = await supabase
    .from("location_pages")
    .select("id, slug, city_name, is_published, created_at, updated_at")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data ?? [];
};

export const getLocationPageForAdmin = async (slug: string): Promise<LocationPageData | null> => {
  const { data, error } = await supabase
    .from("location_pages")
    .select("*")
    .eq("slug", slug)
    .single();
  if (error || !data) return null;
  return { ...data, sections: injectIds(data.sections) };
};

export const createLocationPage = async (
  page: Omit<LocationPageData, "id" | "created_at" | "updated_at">
) => {
  const { data, error } = await supabase
    .from("location_pages")
    .insert({ ...page, sections: stripIds(page.sections) })
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const updateLocationPage = async (slug: string, page: Partial<LocationPageData>) => {
  const payload: any = { ...page, updated_at: new Date().toISOString() };
  if (page.sections) payload.sections = stripIds(page.sections);
  const { data, error } = await supabase
    .from("location_pages")
    .update(payload)
    .eq("slug", slug)
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const deleteLocationPage = async (slug: string) => {
  const { error } = await supabase.from("location_pages").delete().eq("slug", slug);
  if (error) throw error;
};

export const slugifyCity = (name: string) =>
  name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

export const SECTION_LABELS: Record<SectionType, string> = {
  text_block: "Text Block",
  bullet_list: "Bullet List",
  service_cards: "Service Cards",
  process_steps: "Process / Steps",
  grid_points: "Grid Points",
  how_often_cards: "How Often Cards",
  faq: "FAQ Accordion",
  nearby_areas: "Nearby Areas",
  pricing: "Pricing",
  two_col_text: "Two Column Text",
  warning_box: "Warning / Callout Box",
};

export const SECTION_TYPES: SectionType[] = [
  "text_block",
  "bullet_list",
  "service_cards",
  "process_steps",
  "grid_points",
  "how_often_cards",
  "faq",
  "nearby_areas",
  "pricing",
  "two_col_text",
  "warning_box",
];

export const ICON_OPTIONS = [
  { key: "car", label: "Car" },
  { key: "droplets", label: "Droplets / Water" },
  { key: "wind", label: "Wind / Steam" },
  { key: "layers", label: "Layers / Foam" },
  { key: "sparkles", label: "Sparkles / Premium" },
  { key: "shield", label: "Shield / Safety" },
  { key: "users", label: "Users / Team" },
  { key: "zap", label: "Zap / Fast" },
  { key: "clock", label: "Clock / Time" },
  { key: "map-pin", label: "Map Pin / Location" },
  { key: "check", label: "Checkmark" },
  { key: "star", label: "Star / Quality" },
  { key: "wrench", label: "Wrench / Tools" },
  { key: "award", label: "Award / Excellence" },
  { key: "thumbs-up", label: "Thumbs Up" },
  { key: "eye", label: "Eye / Inspection" },
];

export const makeSection = (type: SectionType): PageSection => {
  const base: PageSection = { _id: crypto.randomUUID(), type, eyebrow: "", heading: "" };
  switch (type) {
    case "text_block":
    case "pricing": return { ...base, body: "" };
    case "warning_box": return { ...base, body: "" };
    case "bullet_list": return { ...base, items: [""], note: "" };
    case "service_cards": return { ...base, cards: [{ icon: "car", name: "", desc: "" }] };
    case "process_steps": return { ...base, steps: [{ title: "", desc: "" }] };
    case "grid_points": return { ...base, points: [{ icon: "check", text: "" }] };
    case "how_often_cards": return { ...base, how_often: [{ label: "", freq: "", note: "" }] };
    case "faq": return { ...base, faq_items: [{ q: "", a: "" }] };
    case "nearby_areas": return { ...base, areas: [{ name: "", link: "" }] };
    case "two_col_text": return { ...base, left_heading: "", left_body: "", right_heading: "", right_body: "" };
    default: return base;
  }
};
