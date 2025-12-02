import { useEffect, useState } from "react";
import { auto } from "@/api/auto";

export default function DatabaseSettings() {
  const [dbUrl, setDbUrl] = useState("");
  const [loading, setLoading] = useState(true);

  // Load DB URL on page open
  useEffect(() => {
    async function load() {
      try {
        const res = await auto.getDbUrl(); // ✅ FIXED
        if (res?.value) setDbUrl(res.value);
      } catch (err) {
        console.error("Failed to load DB URL:", err);
      }
      setLoading(false);
    }

    load();
  }, []);

  // Save DB URL
  const save = async () => {
    try {
      await auto.updateDbUrl(dbUrl); // ✅ FIXED
      alert("Database URL updated successfully!");
    } catch (err) {
      alert("Failed to update database URL");
      console.error(err);
    }
  };

  if (loading) return <div className="p-6 text-white">Loading...</div>;

  return (
    <div className="p-6 text-white">
      <h1 className="mb-4 text-2xl font-bold">Database URL Settings</h1>

      <textarea
        className="w-full p-3 bg-black border border-gray-700 rounded-lg"
        rows={5}
        value={dbUrl}
        onChange={(e) => setDbUrl(e.target.value)}
      />

      <button
        onClick={save}
        className="px-6 py-2 mt-4 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600"
      >
        Save
      </button>
    </div>
  );
}
