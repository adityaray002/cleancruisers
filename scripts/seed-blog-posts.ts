// One-time migration: pushes the existing hardcoded posts in src/data/blogPosts.ts
// into the new Supabase blog_posts table, so nothing is lost when the admin panel
// takes over as the source of truth.
//
// Usage (run once, after running supabase/schema.sql):
//   SUPABASE_URL=https://xxxx.supabase.co SUPABASE_SERVICE_ROLE_KEY=xxxx npx tsx scripts/seed-blog-posts.ts
//
// The service role key bypasses RLS so this script can insert directly — get it from
// Supabase Dashboard → Project Settings → API → service_role (secret, NOT the anon key).
// Do not commit it anywhere; only pass it on the command line for this one run.

import { createClient } from "@supabase/supabase-js";
import { blogPosts } from "../src/data/blogPosts";

const url = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey) {
  console.error("Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY env vars before running this script.");
  process.exit(1);
}

const supabase = createClient(url, serviceKey);

async function main() {
  console.log(`Seeding ${blogPosts.length} posts...`);

  for (const post of blogPosts) {
    const publishedAt = new Date(post.date);
    const row = {
      slug: post.id,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      image: post.image,
      category: post.category,
      author: post.author,
      author_image: post.authorImage,
      read_time: post.readTime,
      meta_title: post.metaTitle ?? null,
      meta_description: post.metaDescription ?? null,
      published: true,
      published_at: isNaN(publishedAt.getTime()) ? new Date().toISOString() : publishedAt.toISOString(),
    };

    const { error } = await supabase.from("blog_posts").upsert(row, { onConflict: "slug" });
    if (error) {
      console.error(`Failed to seed "${post.id}":`, error.message);
    } else {
      console.log(`Seeded: ${post.id}`);
    }
  }

  console.log("Done.");
}

main();
