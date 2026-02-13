import { useState } from "react";
import { Input, Button } from "@spxcel/ui";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    try {
      setLoading(true);
      await login(email, password);
      navigate("/admin/dashboard");
    } catch (err: any) {
      setError(err?.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <div className="w-[380px] rounded-2xl bg-white shadow-lg border border-slate-200">
        {/* Header */}
        <div className="px-6 py-5 border-b bg-slate-50 rounded-t-2xl">
          <h1 className="text-xl font-semibold text-slate-900">
            Spxcel Admin Login
          </h1>
          <p className="text-sm text-slate-600">
            Sign in to manage your dashboard
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500"
          />

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pr-12 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute -translate-y-1/2 right-3 top-1/2 text-slate-400 hover:text-indigo-600"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full text-white bg-indigo-600 hover:bg-indigo-700"
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>

        {/* Footer */}
        <div className="px-6 py-4 text-xs text-center border-t text-slate-500 bg-slate-50 rounded-b-2xl">
          © {new Date().getFullYear()} spxcel · Secure Admin Access
        </div>
      </div>
    </div>
  );
}
