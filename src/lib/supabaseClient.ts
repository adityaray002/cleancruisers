import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

if (!isSupabaseConfigured) {
  console.error(
    "Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY. Set them in .env (see .env.example). " +
      "Blog admin and dynamic blog listing will not work until these are set."
  );
}

// Fall back to a syntactically valid placeholder so createClient() never throws at import time —
// this file is in the module graph for every page (via Blog/BlogPost), not just /admin, so a throw
// here would take down the entire site. Real calls will just fail gracefully until configured.
export const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseAnonKey || "placeholder-anon-key"
);
