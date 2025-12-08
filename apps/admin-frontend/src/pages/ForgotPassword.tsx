import { useState } from "react";
import axios from "axios";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email) {
      setErrorMsg("Email is required");
      return;
    }

    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/forgot-password`,
        { email }
      );

      setSuccessMsg(
        "If an account exists with this email, a reset link has been sent."
      );
      setEmail("");
    } catch (err: any) {
      setErrorMsg(
        err?.response?.data?.message || "Failed to request password reset"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="w-full max-w-md p-8 border shadow-lg rounded-2xl backdrop-blur-xl bg-white/10 border-white/10">
        <h2 className="mb-6 text-3xl font-semibold text-center text-white">
          Forgot Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email field */}
          <div>
            <label className="block mb-1 text-sm text-white">Email Address</label>
            <input
              type="email"
              className="w-full p-3 text-white placeholder-gray-300 border rounded-lg bg-white/20 focus:outline-none border-white/20 focus:border-purple-400"
              placeholder="admin@spexcel.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Error */}
          {errorMsg && (
            <p className="text-sm text-center text-red-400">{errorMsg}</p>
          )}

          {/* Success */}
          {successMsg && (
            <p className="text-sm text-center text-green-400">{successMsg}</p>
          )}

          {/* Submit */}
          <button
            disabled={loading}
            className="w-full py-3 font-medium text-white transition rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
      </div>
    </div>
  );
}
