import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAffiliates, createAffiliate, updateAffiliate, deleteAffiliate } from "@/api/affiliates";

type Affiliate = {
  id: number;
  storeName: string;
  url: string;
  price?: string;
  currency?: string;
};

export default function AffiliateManager() {
  const { modelId } = useParams<{ modelId: string }>();
  const navigate = useNavigate();
  const numericModelId = Number(modelId);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [affiliates, setAffiliates] = useState<Affiliate[]>([]);

  const [newRow, setNewRow] = useState({
    storeName: "",
    url: "",
    price: "",
    currency: "INR",
  });

  /* ================= LOAD ================= */

  useEffect(() => {
    if (!numericModelId) return;

    const load = async () => {
      try {
        const data = await getAffiliates(numericModelId);
        setAffiliates(data ?? []);
      } catch (err) {
        console.error("Failed to load affiliates", err);
        alert("Failed to load affiliates");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [numericModelId]);

  /* ================= CREATE ================= */

  const addAffiliate = async () => {
    if (!newRow.storeName || !newRow.url) {
      alert("Store name and URL required");
      return;
    }

    setSaving(true);

    try {
      const created = await createAffiliate(numericModelId, newRow);
      setAffiliates((prev) => [...prev, created]);
      setNewRow({
        storeName: "",
        url: "",
        price: "",
        currency: "INR",
      });
    } catch (err) {
      console.error("Create failed", err);
      alert("Failed to create affiliate");
    } finally {
      setSaving(false);
    }
  };

  /* ================= UPDATE ================= */

  const updateField = async (
    id: number,
    key: keyof Affiliate,
    value: string
  ) => {
    const updated = affiliates.map((a) =>
      a.id === id ? { ...a, [key]: value } : a
    );
    setAffiliates(updated);

    try {
      await updateAffiliate(numericModelId, id, { [key]: value });
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  /* ================= DELETE ================= */

  const remove = async (id: number) => {
    if (!confirm("Delete affiliate?")) return;

    try {
      await deleteAffiliate(numericModelId, id);
      setAffiliates((prev) => prev.filter((a) => a.id !== id));
    } catch (err) {
      console.error("Delete failed", err);
      alert("Failed to delete");
    }
  };

  /* ================= UI ================= */

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-5xl space-y-6">
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-blue-600 hover:underline"
      >
        ← Back
      </button>

      <h1 className="text-2xl font-semibold">Affiliate Links</h1>

      <div className="overflow-x-auto border rounded-lg">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Store</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Currency</th>
              <th className="p-3 text-left">URL</th>
              <th className="p-3"></th>
            </tr>
          </thead>

          <tbody>
            {affiliates.map((a) => (
              <tr key={a.id} className="border-t">
                <td className="p-2">
                  <input
                    value={a.storeName}
                    onChange={(e) =>
                      updateField(a.id, "storeName", e.target.value)
                    }
                    className="w-full px-2 py-1 border rounded"
                  />
                </td>

                <td className="p-2">
                  <input
                    value={a.price ?? ""}
                    onChange={(e) =>
                      updateField(a.id, "price", e.target.value)
                    }
                    className="w-full px-2 py-1 border rounded"
                  />
                </td>

                <td className="p-2">
                  <input
                    value={a.currency ?? ""}
                    onChange={(e) =>
                      updateField(a.id, "currency", e.target.value)
                    }
                    className="w-full px-2 py-1 border rounded"
                  />
                </td>

                <td className="p-2">
                  <input
                    value={a.url}
                    onChange={(e) =>
                      updateField(a.id, "url", e.target.value)
                    }
                    className="w-full px-2 py-1 border rounded"
                  />
                </td>

                <td className="p-2 text-right">
                  <button
                    onClick={() => remove(a.id)}
                    className="text-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {/* NEW ROW */}
            <tr className="border-t bg-gray-50">
              <td className="p-2">
                <input
                  value={newRow.storeName}
                  onChange={(e) =>
                    setNewRow((p) => ({ ...p, storeName: e.target.value }))
                  }
                  placeholder="Store"
                  className="w-full px-2 py-1 border rounded"
                />
              </td>

              <td className="p-2">
                <input
                  value={newRow.price}
                  onChange={(e) =>
                    setNewRow((p) => ({ ...p, price: e.target.value }))
                  }
                  placeholder="Price"
                  className="w-full px-2 py-1 border rounded"
                />
              </td>

              <td className="p-2">
                <input
                  value={newRow.currency}
                  onChange={(e) =>
                    setNewRow((p) => ({ ...p, currency: e.target.value }))
                  }
                  className="w-full px-2 py-1 border rounded"
                />
              </td>

              <td className="p-2">
                <input
                  value={newRow.url}
                  onChange={(e) =>
                    setNewRow((p) => ({ ...p, url: e.target.value }))
                  }
                  placeholder="Affiliate URL"
                  className="w-full px-2 py-1 border rounded"
                />
              </td>

              <td className="p-2 text-right">
                <button
                  onClick={addAffiliate}
                  disabled={saving}
                  className="px-3 py-1 text-white bg-blue-600 rounded"
                >
                  Add
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
