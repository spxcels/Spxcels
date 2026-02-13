import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { auto } from "@/api/auto";

export default function AccountSettings() {
  const { user } = useAuth();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const updatePassword = async () => {
    setError("");
    setStatus("");

    if (!oldPassword || !newPassword || !confirmPassword) {
      setError("All password fields are required");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match");
      return;
    }

    try {
      setLoading(true);
      await auto.changePassword(oldPassword, newPassword);

      setStatus("Password updated successfully");
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      console.error(err);
      setError("Failed to update password");
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="p-6 text-sm text-gray-500">
        Loading security settings...
      </div>
    );
  }

  return (
    <div className="max-w-3xl p-6">
      {/* PAGE TITLE */}
      <h1 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-gray-100">
        Security
      </h1>
      <p className="mb-6 text-sm text-gray-500">
        Change your account password
      </p>

      {/* CARD */}
      <div className="p-6 bg-white border border-gray-200 rounded-xl dark:bg-zinc-900 dark:border-zinc-800">
        {/* USER INFO */}
        <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
          Logged in as{" "}
          <span className="font-medium text-gray-900 dark:text-gray-100">
            {user.email}
          </span>
        </p>

        {/* ERROR */}
        {error && (
          <div className="p-3 mb-4 text-sm text-red-600 border border-red-200 rounded-lg bg-red-50 dark:bg-red-500/10 dark:border-red-500/20 dark:text-red-400">
            {error}
          </div>
        )}

        {/* SUCCESS */}
        {status && (
          <div className="p-3 mb-4 text-sm text-green-600 border border-green-200 rounded-lg bg-green-50 dark:bg-green-500/10 dark:border-green-500/20 dark:text-green-400">
            {status}
          </div>
        )}

        {/* OLD PASSWORD */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">
            Old password
          </label>
          <div className="relative">
            <input
              type={showOldPassword ? "text" : "password"}
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="w-full px-3 py-2 pr-10 border rounded-lg dark:bg-zinc-950 dark:border-zinc-700"
            />
            <button
              type="button"
              onClick={() => setShowOldPassword(!showOldPassword)}
              className="absolute text-gray-500 -translate-y-1/2 right-3 top-1/2"
            >
              👁️
            </button>
          </div>
        </div>

        {/* NEW PASSWORD */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">
            New password
          </label>
          <div className="relative">
            <input
              type={showNewPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-3 py-2 pr-10 border rounded-lg dark:bg-zinc-950 dark:border-zinc-700"
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute text-gray-500 -translate-y-1/2 right-3 top-1/2"
            >
              👁️
            </button>
          </div>
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="mb-6">
          <label className="block mb-1 text-sm font-medium">
            Confirm new password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 pr-10 border rounded-lg dark:bg-zinc-950 dark:border-zinc-700"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute text-gray-500 -translate-y-1/2 right-3 top-1/2"
            >
              👁️
            </button>
          </div>
        </div>

        {/* SUBMIT */}
        <button
          onClick={updatePassword}
          disabled={loading}
          className="w-full px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 disabled:opacity-50 dark:bg-gray-100 dark:text-gray-900"
        >
          {loading ? "Updating..." : "Update password"}
        </button>
      </div>
    </div>
  );
}
