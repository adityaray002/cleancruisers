# Blog Admin Panel — Setup Guide

The blog admin panel lets your SEO agency create/edit/publish blog posts themselves at
`yoursite.com/admin`, without touching code. Posts they publish appear live on `/blog`
automatically. This is a one-time setup — do these steps once, then it just works.

## 1. Create a free Supabase project

1. Go to https://supabase.com → sign up (free) → **New Project**.
2. Pick any name/region, set a database password (save it somewhere safe), and wait ~2 min for it to provision.

## 2. Create the database table

1. In the Supabase dashboard, open **SQL Editor** → **New query**.
2. Paste the entire contents of [`supabase/schema.sql`](supabase/schema.sql) from this repo and click **Run**.
3. This creates the `blog_posts` table, security rules (so only logged-in users can post, everyone can read published posts), and a `blog-images` storage bucket for photo uploads.

## 3. Get your API keys

1. In Supabase: **Project Settings → API**.
2. Copy the **Project URL** and the **anon / public** key (NOT the `service_role` key — that one stays secret).
3. Open `.env` in this project and fill in:
   ```
   VITE_SUPABASE_URL=<your project URL>
   VITE_SUPABASE_ANON_KEY=<your anon key>
   ```
4. Add the same two variables in **Netlify → Site settings → Environment variables** so the live site works too, then trigger a redeploy.

## 4. Migrate your existing 10 blog posts

This pushes everything currently in `src/data/blogPosts.ts` into the new database, so nothing is lost.

1. In Supabase: **Project Settings → API**, copy the **service_role** key (secret — only used once, on your machine).
2. Run this once from the project folder:
   ```bash
   SUPABASE_URL=<your project URL> SUPABASE_SERVICE_ROLE_KEY=<service_role key> npx tsx scripts/seed-blog-posts.ts
   ```
   (On Windows PowerShell: `$env:SUPABASE_URL="..."; $env:SUPABASE_SERVICE_ROLE_KEY="..."; npx tsx scripts/seed-blog-posts.ts`)
3. You should see "Seeded: ..." for all 10 posts.

## 5. Create a login for your SEO agency

1. In Supabase: **Authentication → Users → Add user**.
2. Enter the agency's email and set a password (or use "send invite" if you've set up email sending).
3. Share with them: the login URL (`yoursite.com/admin/login`), their email, and password.

You (Aditya) can also add yourself as a user here if you want your own login.

## 6. Test it

1. `npm run dev`, go to `http://localhost:8080/admin/login`, log in.
2. Click **New Post**, fill in the form, hit **Publish**.
3. Check `http://localhost:8080/blog` — the new post should appear as the featured post.

## What the agency can do

- Log in at `/admin`
- Create a new post, upload a cover image, write content in Markdown (`## Heading`, `[link](url)`, `- bullet`)
- Save as **Draft** (not visible on the site) or **Publish** (goes live immediately)
- Edit or delete any existing post
- They do **not** need GitHub, code, or your involvement for routine posting.

## Notes / things to know

- `src/data/blogPosts.ts` is no longer read by the live site — it's kept as a historical backup. New posts only need to go through `/admin` now.
- Blog pages now fetch data at runtime from Supabase instead of being baked into the build. This means search-engine prerendering (`react-snap`) may snapshot a loading state for `/blog` and `/blog/:id` instead of the full article text — worth revisiting later if organic search traffic to blog pages matters a lot; happy to fix if so.
- `.env` was removed from git tracking (it was previously committed) since it now holds real config — commit that removal along with a `.gitignore` update next time you push.
