import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAdminAuth } from "@/context/AdminAuthContext";
import { listAllPostsForAdmin, deletePost, AdminBlogPost } from "@/lib/blogApi";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2, LogOut, Loader2, ExternalLink, MapPin } from "lucide-react";

const AdminDashboard = () => {
  const { signOut } = useAdminAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<AdminBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingSlug, setDeletingSlug] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    try {
      const data = await listAllPostsForAdmin();
      setPosts(data);
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load posts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (slug: string, title: string) => {
    if (!window.confirm(`Delete "${title}"? This cannot be undone.`)) return;
    setDeletingSlug(slug);
    try {
      await deletePost(slug);
      setPosts((prev) => prev.filter((p) => p.id !== slug));
    } catch (e) {
      alert(e instanceof Error ? e.message : "Failed to delete post");
    } finally {
      setDeletingSlug(null);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="border-b border-neutral-800 sticky top-0 bg-neutral-950/95 backdrop-blur z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold">CleanCruisers Blog Admin</h1>
            <p className="text-neutral-500 text-xs">{posts.length} post{posts.length !== 1 ? "s" : ""}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={() => navigate("/admin/locations")}
              variant="outline"
              className="border-neutral-700 text-neutral-300 hover:text-white font-semibold gap-2"
            >
              <MapPin className="w-4 h-4 text-green-400" /> Location Pages
            </Button>
            <Button
              onClick={() => navigate("/admin/new")}
              className="bg-green-400 hover:bg-green-500 text-black font-semibold gap-2"
            >
              <Plus className="w-4 h-4" /> New Post
            </Button>
            <Button variant="ghost" onClick={handleSignOut} className="text-neutral-400 hover:text-white gap-2">
              <LogOut className="w-4 h-4" /> Log Out
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {loading && (
          <div className="flex items-center justify-center py-20 text-neutral-400">
            <Loader2 className="w-5 h-5 animate-spin mr-2" /> Loading posts...
          </div>
        )}

        {error && (
          <div className="text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3 mb-6">
            {error}
          </div>
        )}

        {!loading && !error && posts.length === 0 && (
          <div className="text-center py-20 text-neutral-400">
            <p className="mb-4">No blog posts yet.</p>
            <Button onClick={() => navigate("/admin/new")} className="bg-green-400 hover:bg-green-500 text-black">
              Write your first post
            </Button>
          </div>
        )}

        <div className="space-y-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex items-center justify-between gap-4 bg-neutral-900 border border-neutral-800 rounded-xl p-4"
            >
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <img
                  src={post.image || "/LOGOFINAL.png"}
                  alt=""
                  className="w-14 h-14 rounded-lg object-cover bg-neutral-800 shrink-0"
                  onError={(e) => ((e.target as HTMLImageElement).src = "/LOGOFINAL.png")}
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-medium truncate">{post.title}</p>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${
                        post.published
                          ? "bg-green-400/10 text-green-400"
                          : "bg-yellow-400/10 text-yellow-400"
                      }`}
                    >
                      {post.published ? "Published" : "Draft"}
                    </span>
                  </div>
                  <p className="text-neutral-500 text-xs mt-0.5 truncate">
                    {post.category} &middot; {post.date || "Not published yet"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {post.published && (
                  <a
                    href={`/blog/${post.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-neutral-400 hover:text-white transition-colors"
                    title="View live"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <Link
                  to={`/admin/edit/${post.id}`}
                  className="p-2 text-neutral-400 hover:text-white transition-colors"
                  title="Edit"
                >
                  <Pencil className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => handleDelete(post.id, post.title)}
                  disabled={deletingSlug === post.id}
                  className="p-2 text-neutral-400 hover:text-red-400 transition-colors disabled:opacity-50"
                  title="Delete"
                >
                  {deletingSlug === post.id ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Trash2 className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
