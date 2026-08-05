-- CleanCruisers blog admin — run this once in the Supabase SQL Editor
-- (Dashboard → SQL Editor → New query → paste this whole file → Run)

-- ── Table ──────────────────────────────────────────────────────────
create table if not exists public.blog_posts (
  slug              text primary key,
  title             text not null,
  excerpt           text not null default '',
  content           text not null default '',
  image             text not null default '',
  category          text not null default 'Car Care Tips',
  author            text not null default 'CleanCruisers Team',
  author_image      text not null default '/LOGOFINAL.png',
  read_time         text not null default '5 min read',
  meta_title        text,
  meta_description  text,
  published         boolean not null default false,
  published_at      timestamptz,
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now()
);

-- keep updated_at fresh on every edit
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists blog_posts_set_updated_at on public.blog_posts;
create trigger blog_posts_set_updated_at
  before update on public.blog_posts
  for each row execute function public.set_updated_at();

-- ── Row Level Security ────────────────────────────────────────────
alter table public.blog_posts enable row level security;

drop policy if exists "Public can read published posts" on public.blog_posts;
create policy "Public can read published posts"
  on public.blog_posts for select
  to anon, authenticated
  using (published = true);

drop policy if exists "Authenticated users can read all posts" on public.blog_posts;
create policy "Authenticated users can read all posts"
  on public.blog_posts for select
  to authenticated
  using (true);

drop policy if exists "Authenticated users can insert posts" on public.blog_posts;
create policy "Authenticated users can insert posts"
  on public.blog_posts for insert
  to authenticated
  with check (true);

drop policy if exists "Authenticated users can update posts" on public.blog_posts;
create policy "Authenticated users can update posts"
  on public.blog_posts for update
  to authenticated
  using (true)
  with check (true);

drop policy if exists "Authenticated users can delete posts" on public.blog_posts;
create policy "Authenticated users can delete posts"
  on public.blog_posts for delete
  to authenticated
  using (true);

-- ── Storage bucket for blog images ────────────────────────────────
insert into storage.buckets (id, name, public)
values ('blog-images', 'blog-images', true)
on conflict (id) do nothing;

drop policy if exists "Public can view blog images" on storage.objects;
create policy "Public can view blog images"
  on storage.objects for select
  to anon, authenticated
  using (bucket_id = 'blog-images');

drop policy if exists "Authenticated users can upload blog images" on storage.objects;
create policy "Authenticated users can upload blog images"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'blog-images');

drop policy if exists "Authenticated users can update blog images" on storage.objects;
create policy "Authenticated users can update blog images"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'blog-images');

drop policy if exists "Authenticated users can delete blog images" on storage.objects;
create policy "Authenticated users can delete blog images"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'blog-images');
