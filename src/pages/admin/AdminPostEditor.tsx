import { useEffect, useState, FormEvent, ChangeEvent } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import {
  getPostForAdmin,
  createPost,
  updatePost,
  uploadBlogImage,
  slugify,
  estimateReadTime,
  BlogPostInput,
} from "@/lib/blogApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Loader2, Upload } from "lucide-react";

const CATEGORY_OPTIONS = [
  "Car Care Tips",
  "Interior Care",
  "Detailing",
  "Seasonal Care",
  "Guides",
];

const emptyForm: BlogPostInput = {
  slug: "",
  title: "",
  excerpt: "",
  content: "",
  image: "",
  category: "Car Care Tips",
  author: "CleanCruisers Team",
  authorImage: "/LOGOFINAL.png",
  readTime: "5 min read",
  metaTitle: "",
  metaDescription: "",
  published: false,
};

const AdminPostEditor = () => {
  const { slug: editSlug } = useParams<{ slug: string }>();
  const isEditMode = Boolean(editSlug);
  const navigate = useNavigate();

  const [form, setForm] = useState<BlogPostInput>(emptyForm);
  const [wasPublished, setWasPublished] = useState(false);
  const [slugTouched, setSlugTouched] = useState(false);
  const [loading, setLoading] = useState(isEditMode);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!isEditMode || !editSlug) return;
    (async () => {
      try {
        const post = await getPostForAdmin(editSlug);
        if (!post) {
          setNotFound(true);
          return;
        }
        setForm({
          slug: post.id,
          title: post.title,
          excerpt: post.excerpt,
          content: post.content,
          image: post.image,
          category: post.category,
          author: post.author,
          authorImage: post.authorImage,
          readTime: post.readTime,
          metaTitle: post.metaTitle ?? "",
          metaDescription: post.metaDescription ?? "",
          published: post.published,
        });
        setWasPublished(post.published);
        setSlugTouched(true);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to load post");
      } finally {
        setLoading(false);
      }
    })();
  }, [isEditMode, editSlug]);

  const update = <K extends keyof BlogPostInput>(key: K, value: BlogPostInput[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleTitleChange = (title: string) => {
    update("title", title);
    if (!slugTouched) {
      update("slug", slugify(title));
    }
  };

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError(null);
    try {
      const url = await uploadBlogImage(file);
      update("image", url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleAutoReadTime = () => update("readTime", estimateReadTime(form.content));

  const handleSubmit = async (e: FormEvent, publishOverride?: boolean) => {
    e.preventDefault();
    setError(null);

    if (!form.title.trim() || !form.slug.trim() || !form.content.trim()) {
      setError("Title, URL slug, and content are required.");
      return;
    }

    const payload: BlogPostInput = {
      ...form,
      published: publishOverride ?? form.published,
    };

    setSaving(true);
    try {
      if (isEditMode && editSlug) {
        await updatePost(editSlug, payload, wasPublished);
      } else {
        await createPost(payload);
      }
      navigate("/admin");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save post");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center text-neutral-400">
        <Loader2 className="w-5 h-5 animate-spin mr-2" /> Loading...
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center text-neutral-400 gap-4">
        <p>Post not found.</p>
        <Link to="/admin" className="text-green-400 hover:underline">
          Back to dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="border-b border-neutral-800 sticky top-0 bg-neutral-950/95 backdrop-blur z-10">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-3">
          <Link to="/admin" className="text-neutral-400 hover:text-white">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-lg font-bold">{isEditMode ? "Edit Post" : "New Post"}</h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
              {error}
            </div>
          )}

          <div>
            <Label className="text-neutral-300 mb-1.5 block">Title</Label>
            <Input
              value={form.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="5 Tips for a Cleaner Car This Monsoon"
              className="bg-neutral-900 border-neutral-700 text-white"
              required
            />
          </div>

          <div>
            <Label className="text-neutral-300 mb-1.5 block">
              URL Slug <span className="text-neutral-500">(cleancruisers.in/blog/...)</span>
            </Label>
            <Input
              value={form.slug}
              onChange={(e) => {
                setSlugTouched(true);
                update("slug", slugify(e.target.value));
              }}
              placeholder="5-tips-cleaner-car-monsoon"
              className="bg-neutral-900 border-neutral-700 text-white font-mono text-sm"
              required
            />
          </div>

          <div>
            <Label className="text-neutral-300 mb-1.5 block">Excerpt / Meta Description</Label>
            <Textarea
              value={form.excerpt}
              onChange={(e) => update("excerpt", e.target.value)}
              placeholder="One or two sentences shown on the blog listing card"
              className="bg-neutral-900 border-neutral-700 text-white min-h-[70px]"
            />
          </div>

          <div>
            <Label className="text-neutral-300 mb-1.5 block">Cover Image</Label>
            <div className="flex items-center gap-3">
              {form.image && (
                <img src={form.image} alt="" className="w-20 h-14 object-cover rounded-lg bg-neutral-800" />
              )}
              <label className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg cursor-pointer hover:border-neutral-500 text-sm text-neutral-300">
                {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                {uploading ? "Uploading..." : "Upload Image"}
                <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} disabled={uploading} />
              </label>
              <Input
                value={form.image}
                onChange={(e) => update("image", e.target.value)}
                placeholder="or paste an image URL"
                className="bg-neutral-900 border-neutral-700 text-white text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-neutral-300 mb-1.5 block">Category</Label>
              <Input
                value={form.category}
                onChange={(e) => update("category", e.target.value)}
                list="category-options"
                className="bg-neutral-900 border-neutral-700 text-white"
              />
              <datalist id="category-options">
                {CATEGORY_OPTIONS.map((c) => (
                  <option key={c} value={c} />
                ))}
              </datalist>
            </div>
            <div>
              <Label className="text-neutral-300 mb-1.5 block">Read Time</Label>
              <div className="flex gap-2">
                <Input
                  value={form.readTime}
                  onChange={(e) => update("readTime", e.target.value)}
                  className="bg-neutral-900 border-neutral-700 text-white"
                />
                <Button type="button" variant="ghost" onClick={handleAutoReadTime} className="text-neutral-400 shrink-0 text-xs">
                  Auto
                </Button>
              </div>
            </div>
          </div>

          <div>
            <Label className="text-neutral-300 mb-1.5 block">
              Content <span className="text-neutral-500">(Markdown — ## for headings, [text](url) for links)</span>
            </Label>
            <Tabs defaultValue="write">
              <TabsList className="bg-neutral-900">
                <TabsTrigger value="write">Write</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
              </TabsList>
              <TabsContent value="write">
                <Textarea
                  value={form.content}
                  onChange={(e) => update("content", e.target.value)}
                  placeholder={"## Your First Heading\n\nWrite your blog content here in Markdown..."}
                  className="bg-neutral-900 border-neutral-700 text-white min-h-[400px] font-mono text-sm"
                  required
                />
              </TabsContent>
              <TabsContent value="preview">
                <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-6 min-h-[400px] prose prose-invert prose-sm max-w-none">
                  {form.content ? (
                    <ReactMarkdown>{form.content}</ReactMarkdown>
                  ) : (
                    <p className="text-neutral-500">Nothing to preview yet.</p>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="border-t border-neutral-800 pt-6 space-y-4">
            <p className="text-sm text-neutral-400 font-medium">SEO (optional — falls back to title/excerpt)</p>
            <div>
              <Label className="text-neutral-300 mb-1.5 block">Meta Title</Label>
              <Input
                value={form.metaTitle}
                onChange={(e) => update("metaTitle", e.target.value)}
                className="bg-neutral-900 border-neutral-700 text-white"
              />
            </div>
            <div>
              <Label className="text-neutral-300 mb-1.5 block">Meta Description</Label>
              <Textarea
                value={form.metaDescription}
                onChange={(e) => update("metaDescription", e.target.value)}
                className="bg-neutral-900 border-neutral-700 text-white min-h-[60px]"
              />
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 pt-4 pb-12">
            <Button type="button" variant="ghost" onClick={() => navigate("/admin")} className="text-neutral-400">
              Cancel
            </Button>
            <div className="flex gap-3">
              <Button
                type="button"
                disabled={saving}
                onClick={(e) => handleSubmit(e, false)}
                variant="outline"
                className="border-neutral-600 text-neutral-300 hover:text-white"
              >
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : "Save as Draft"}
              </Button>
              <Button
                type="button"
                disabled={saving}
                onClick={(e) => handleSubmit(e, true)}
                className="bg-green-400 hover:bg-green-500 text-black font-semibold"
              >
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : "Publish"}
              </Button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AdminPostEditor;
