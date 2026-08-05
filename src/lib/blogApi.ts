import { supabase } from "@/lib/supabaseClient";
import type { BlogPost } from "@/data/blogPosts";

export interface AdminBlogPost extends BlogPost {
  published: boolean;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPostInput {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  authorImage: string;
  readTime: string;
  metaTitle?: string;
  metaDescription?: string;
  published: boolean;
}

// DB row (snake_case) -> app shape (camelCase)
const formatDate = (iso: string | null) => {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rowToAdminPost = (row: any): AdminBlogPost => ({
  id: row.slug,
  title: row.title,
  excerpt: row.excerpt,
  content: row.content,
  image: row.image,
  category: row.category,
  author: row.author,
  authorImage: row.author_image,
  date: formatDate(row.published_at ?? row.created_at),
  readTime: row.read_time,
  metaTitle: row.meta_title ?? undefined,
  metaDescription: row.meta_description ?? undefined,
  published: row.published,
  publishedAt: row.published_at,
  createdAt: row.created_at,
  updatedAt: row.updated_at,
});

export const slugify = (title: string): string =>
  title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

export const estimateReadTime = (content: string): string => {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
};

// ── Public site reads (published only) ──────────────────────────────
export async function listPublishedPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("published", true)
    .order("published_at", { ascending: false, nullsFirst: false })
    .order("created_at", { ascending: false });

  if (error) throw error;
  return (data ?? []).map(rowToAdminPost);
}

export async function getPublishedPostBySlug(slug: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();

  if (error) throw error;
  return data ? rowToAdminPost(data) : null;
}

// ── Admin reads/writes (all posts) ──────────────────────────────────
export async function listAllPostsForAdmin(): Promise<AdminBlogPost[]> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return (data ?? []).map(rowToAdminPost);
}

export async function getPostForAdmin(slug: string): Promise<AdminBlogPost | null> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error) throw error;
  return data ? rowToAdminPost(data) : null;
}

export async function createPost(input: BlogPostInput): Promise<void> {
  const { error } = await supabase.from("blog_posts").insert({
    slug: input.slug,
    title: input.title,
    excerpt: input.excerpt,
    content: input.content,
    image: input.image,
    category: input.category,
    author: input.author,
    author_image: input.authorImage,
    read_time: input.readTime,
    meta_title: input.metaTitle || null,
    meta_description: input.metaDescription || null,
    published: input.published,
    published_at: input.published ? new Date().toISOString() : null,
  });
  if (error) throw error;
}

export async function updatePost(
  originalSlug: string,
  input: BlogPostInput,
  wasPublished: boolean
): Promise<void> {
  const { error } = await supabase
    .from("blog_posts")
    .update({
      slug: input.slug,
      title: input.title,
      excerpt: input.excerpt,
      content: input.content,
      image: input.image,
      category: input.category,
      author: input.author,
      author_image: input.authorImage,
      read_time: input.readTime,
      meta_title: input.metaTitle || null,
      meta_description: input.metaDescription || null,
      published: input.published,
      // set published_at the first time a post goes live; keep it stable after that
      ...(!wasPublished && input.published ? { published_at: new Date().toISOString() } : {}),
    })
    .eq("slug", originalSlug);
  if (error) throw error;
}

export async function deletePost(slug: string): Promise<void> {
  const { error } = await supabase.from("blog_posts").delete().eq("slug", slug);
  if (error) throw error;
}

export async function uploadBlogImage(file: File): Promise<string> {
  const ext = file.name.split(".").pop();
  const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
  const { error } = await supabase.storage.from("blog-images").upload(path, file);
  if (error) throw error;
  const { data } = supabase.storage.from("blog-images").getPublicUrl(path);
  return data.publicUrl;
}
