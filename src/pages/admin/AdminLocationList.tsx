
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAdminAuth } from "@/context/AdminAuthContext";
import { listAllLocationPages, deleteLocationPage, LocationPageData } from "@/lib/locationApi";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2, LogOut, Loader2, ExternalLink, MapPin, ArrowLeft } from "lucide-react";

const AdminLocationList = () => {
  const { signOut } = useAdminAuth();
  const navigate = useNavigate();
  const [pages, setPages] = useState<LocationPageData[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingSlug, setDeletingSlug] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    try {
      const data = await listAllLocationPages();
      setPages(data);
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load pages");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const handleDelete = async (slug: string, city: string) => {
    if (!window.confirm(`Delete "${city}" page? This cannot be undone.`)) return;
    setDeletingSlug(slug);
    try {
      await deleteLocationPage(slug);
      setPages((prev) => prev.filter((p) => p.slug !== slug));
    } catch (e) {
      alert(e instanceof Error ? e.message : "Failed to delete");
    } finally {
      setDeletingSlug(null);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="border-b border-neutral-800 sticky top-0 bg-neutral-950/95 backdrop-blur z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate("/admin")} className="text-neutral-400 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-lg font-bold flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-400" /> Location Pages
              </h1>
              <p className="text-neutral-500 text-xs">{pages.length} page{pages.length !== 1 ? "s" : ""}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={() => navigate("/admin/locations/new")}
              className="bg-green-400 hover:bg-green-500 text-black font-semibold gap-2">
              <Plus className="w-4 h-4" /> New Location
            </Button>
            <Button variant="ghost" onClick={async () => { await signOut(); navigate("/admin/login"); }}
              className="text-neutral-400 hover:text-white gap-2">
              <LogOut className="w-4 h-4" /> Log Out
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {loading && (
          <div className="flex items-center justify-center py-20 text-neutral-400">
            <Loader2 className="w-5 h-5 animate-spin mr-2" /> Loading...
          </div>
        )}

        {error && (
          <div className="text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3 mb-6">
            {error}
            <p className="text-xs mt-1 text-red-300">Make sure the <code>location_pages</code> table exists in Supabase.</p>
          </div>
        )}

        {!loading && !error && pages.length === 0 && (
          <div className="text-center py-20 text-neutral-400">
            <MapPin className="w-10 h-10 mx-auto mb-4 opacity-30" />
            <p className="mb-4">No location pages yet.</p>
            <Button onClick={() => navigate("/admin/locations/new")} className="bg-green-400 hover:bg-green-500 text-black">
              Create first location page
            </Button>
          </div>
        )}

        <div className="space-y-3">
          {pages.map((page) => (
            <div key={page.slug}
              className="flex items-center justify-between gap-4 bg-neutral-900 border border-neutral-800 rounded-xl p-4">
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-green-400" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-medium truncate">{page.city_name}</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${
                      page.is_published ? "bg-green-400/10 text-green-400" : "bg-yellow-400/10 text-yellow-400"
                    }`}>
                      {page.is_published ? "Published" : "Draft"}
                    </span>
                  </div>
                  <p className="text-neutral-500 text-xs mt-0.5">
                    /car-wash-in-{page.slug}/ &middot; {page.area_label}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {page.is_published && (
                  <a href={`/car-wash-in-${page.slug}/`} target="_blank" rel="noopener noreferrer"
                    className="p-2 text-neutral-400 hover:text-white transition-colors" title="View live">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <Link to={`/admin/locations/edit/${page.slug}`}
                  className="p-2 text-neutral-400 hover:text-white transition-colors" title="Edit">
                  <Pencil className="w-4 h-4" />
                </Link>
                <button onClick={() => handleDelete(page.slug, page.city_name)}
                  disabled={deletingSlug === page.slug}
                  className="p-2 text-neutral-400 hover:text-red-400 transition-colors disabled:opacity-50" title="Delete">
                  {deletingSlug === page.slug ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdminLocationList;
