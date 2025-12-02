import { useEffect, useState } from "react";
import { auto } from "@/api/auto";

interface MeResponse {
  id: number;
  email: string;
  name?: string;
}

export default function AccountSettings() {
  const [user, setUser] = useState<MeResponse | null>(null);
  const [loading, setLoading] = useState(true);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  // ===============================
  // 🔐 Load logged-in user
  // ===============================
  useEffect(() => {
    auto
      .me()
      .then((res: MeResponse) => {
        console.log("AccountSettings → /auth/me response:", res);
        setUser(res);
        setError("");
      })
      .catch((err) => {
        console.error("Failed to load user:", err);
        setError("Failed to load user info");
      })
      .finally(() => setLoading(false));
  }, []);

  // ===============================
  // 🔐 Update password handler
  // ===============================
  const updatePassword = async () => {
    setError("");
    setStatus("");

    if (!oldPassword || !newPassword || !confirmPassword) {
      setError("All password fields are required");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("New password and Confirm password do not match");
      return;
    }

    try {
      await auto.changePassword(oldPassword, newPassword);

      setStatus("Password updated successfully!");
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      console.error("Password update failed:", err);
      setError("Failed to update password");
    }
  };

  return (
    <div className="p-8 text-white">
      <h1 className="mb-6 text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
        Account Settings
      </h1>

      <div className="max-w-xl p-6 border shadow-lg rounded-2xl bg-white/5 backdrop-blur border-white/10">

        {/* USER INFO */}
        <p className="mb-6 text-lg opacity-80">
          Logged in as:{" "}
          <span className="font-semibold text-purple-300">
            {loading
              ? "Loading..."
              : user
              ? `${user.email} (ID: ${user.id})`
              : "Failed to load"}
          </span>
        </p>

        {/* ERROR MESSAGE */}
        {error && (
          <div className="p-3 mb-4 text-red-300 border rounded-lg bg-red-500/10 border-red-500/20">
            {error}
          </div>
        )}

        {/* SUCCESS MESSAGE */}
        {status && (
          <div className="p-3 mb-4 text-green-300 border rounded-lg bg-green-500/10 border-green-500/20">
            {status}
          </div>
        )}

        {/* OLD PASSWORD */}
        <div className="mb-4">
          <label className="block mb-1 opacity-70">Old Password</label>
          <div className="relative">
            <input
              type={showOldPassword ? "text" : "password"}
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="w-full p-3 pr-12 transition border outline-none rounded-xl bg-black/40 border-white/10 focus:border-purple-400"
              placeholder="Enter old password"
            />
            <button
              type="button"
              onClick={() => setShowOldPassword(!showOldPassword)}
              className="absolute text-gray-300 -translate-y-1/2 right-3 top-1/2 hover:text-white"
            >
              {showOldPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>
        </div>

        {/* NEW PASSWORD */}
        <div className="mb-4">
          <label className="block mb-1 opacity-70">New Password</label>
          <div className="relative">
            <input
              type={showNewPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-3 pr-12 transition border outline-none rounded-xl bg-black/40 border-white/10 focus:border-purple-400"
              placeholder="Enter new password"
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute text-gray-300 -translate-y-1/2 right-3 top-1/2 hover:text-white"
            >
              {showNewPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="mb-6">
          <label className="block mb-1 opacity-70">Confirm New Password</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 pr-12 transition border outline-none rounded-xl bg-black/40 border-white/10 focus:border-purple-400"
              placeholder="Confirm new password"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute text-gray-300 -translate-y-1/2 right-3 top-1/2 hover:text-white"
            >
              {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <button
          onClick={updatePassword}
          className="w-full px-5 py-3 font-semibold text-white transition rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 active:scale-95"
        >
          Update Password
        </button>
      </div>
    </div>
  );
}
