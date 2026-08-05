import { useState, FormEvent } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useAdminAuth } from "@/context/AdminAuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

const AdminLogin = () => {
  const { user, loading: authLoading, signIn } = useAdminAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  if (!authLoading && user) {
    return <Navigate to="/admin" replace />;
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const { error: signInError } = await signIn(email, password);
    setSubmitting(false);
    if (signInError) {
      setError(signInError);
      return;
    }
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white">CleanCruisers</h1>
          <p className="text-neutral-400 text-sm mt-1">Blog Admin Panel</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-neutral-900 border border-neutral-700/50 rounded-2xl p-6 space-y-4"
        >
          <div>
            <label className="text-sm text-neutral-300 mb-1.5 block">Email</label>
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="agency@example.com"
              className="bg-neutral-800 border-neutral-700 text-white"
              autoFocus
            />
          </div>

          <div>
            <label className="text-sm text-neutral-300 mb-1.5 block">Password</label>
            <Input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="bg-neutral-800 border-neutral-700 text-white"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          <Button
            type="submit"
            disabled={submitting}
            className="w-full bg-green-400 hover:bg-green-500 text-black font-semibold h-11"
          >
            {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Log In"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
