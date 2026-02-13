import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "@/api/axios";
import { Trash2, Upload } from "lucide-react";

/* ===============================
   TYPES
=============================== */
type PhoneModel = {
  id: number;
  name: string;
  image: string | null;
};

export default function PhoneCardImage() {
  const { modelId } = useParams<{ modelId: string }>();

  const [model, setModel] = useState<PhoneModel | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /* ===============================
     LOAD MODEL (CARD IMAGE)
  =============================== */
  const loadModel = async () => {
    if (!modelId) return;

    const res = await api.get<PhoneModel>(
      `/auto/data/phone_models/${modelId}`
    );

    setModel(res.data);
  };

  useEffect(() => {
    loadModel().catch(console.error);
  }, [modelId]);

  /* ===============================
     UPLOAD CARD IMAGE
  =============================== */
  const upload = async () => {
    if (!file || !modelId) return;

    setLoading(true);
    setError(null);

    const form = new FormData();
    form.append("file", file);

    try {
      await api.post(
        `/admin/models/${modelId}/card-image`,
        form
      );

      setFile(null);
      await loadModel();
    } catch (err: any) {
      console.error(err);
      setError(
        err?.response?.data?.message ??
          "Upload failed"
      );
    } finally {
      setLoading(false);
    }
  };

  /* ===============================
     DELETE CARD IMAGE
  =============================== */
  const remove = async () => {
    if (!modelId) return;
    if (!confirm("Remove card image?")) return;

    setLoading(true);

    try {
      await api.delete(
        `/admin/models/${modelId}/card-image`
      );
      await loadModel();
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    } finally {
      setLoading(false);
    }
  };

  /* ===============================
     UI
  =============================== */
  return (
    <div className="max-w-3xl p-6 space-y-6">
      <header>
        <h1 className="text-2xl font-semibold">
          Phone Card Image
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          This image is used for listings, cards, and comparisons.
        </p>
      </header>

      {/* PREVIEW */}
      <div className="border rounded-lg p-4">
        {model?.image ? (
          <div className="relative w-64">
            <img
              src={model.image}
              className="object-cover w-full h-40 rounded-lg"
            />
            <button
              onClick={remove}
              disabled={loading}
              className="absolute top-2 right-2 p-1 text-white bg-black/60 rounded"
            >
              <Trash2 size={14} />
            </button>
          </div>
        ) : (
          <p className="text-sm text-gray-500">
            No card image uploaded
          </p>
        )}
      </div>

      {/* UPLOAD */}
      <div className="flex items-center gap-3">
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setFile(e.target.files?.[0] ?? null)
          }
        />
        <button
          onClick={upload}
          disabled={!file || loading}
          className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-gray-900 rounded-lg disabled:opacity-50"
        >
          <Upload size={14} />
          {loading ? "Uploading…" : "Upload Card Image"}
        </button>
      </div>

      {error && (
        <p className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
