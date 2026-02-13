import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "@/api/axios";
import { Trash2 } from "lucide-react";

/* ===============================
   TYPES
=============================== */
type Media = {
  id: number;
  url: string;
  publicId?: string;
  type: "IMAGE" | "VIDEO";
};

export default function EntityMedia() {
  const { modelId } = useParams<{ modelId: string }>();

  const [media, setMedia] = useState<Media[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /* ===============================
     LOAD GALLERY MEDIA
  =============================== */
  const loadMedia = async () => {
    if (!modelId) return;

    const res = await api.get<Media[]>(
      `/admin/models/${modelId}/media`
    );

    setMedia(res.data);
  };

  useEffect(() => {
    loadMedia().catch(console.error);
  }, [modelId]);

  /* ===============================
     UPLOAD (GALLERY ONLY)
  =============================== */
  const upload = async () => {
    if (!file || !modelId) return;

    setLoading(true);
    setError(null);

    const form = new FormData();
    form.append("file", file);

    try {
      await api.post(
        `/admin/models/${modelId}/media`,
        form
      );

      setFile(null);
      await loadMedia();
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
     DELETE
  =============================== */
  const remove = async (mediaId: number) => {
    if (!modelId) return;
    if (!confirm("Delete this media?")) return;

    try {
      await api.delete(
        `/admin/models/${modelId}/media/${mediaId}`
      );
      await loadMedia();
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  /* ===============================
     UI
  =============================== */
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">
        Media Gallery
      </h1>

      {/* UPLOAD */}
      <div className="flex items-center gap-3">
        <input
          type="file"
          accept="image/*,video/*"
          onChange={(e) =>
            setFile(e.target.files?.[0] ?? null)
          }
        />
        <button
          onClick={upload}
          disabled={!file || loading}
          className="px-4 py-2 text-sm text-white bg-gray-900 rounded-lg disabled:opacity-50"
        >
          {loading ? "Uploading…" : "Upload Media"}
        </button>
      </div>

      {error && (
        <p className="text-sm text-red-600">
          {error}
        </p>
      )}

      {/* GALLERY */}
      {media.length === 0 ? (
        <p className="text-sm text-gray-500">
          No media uploaded yet
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {media.map((m) => (
            <div
              key={m.id}
              className="relative overflow-hidden border rounded-lg"
            >
              <img
                src={m.url}
                className="object-cover w-full h-40"
              />
              <button
                onClick={() => remove(m.id)}
                className="absolute p-1 text-white rounded top-2 right-2 bg-black/60"
              >
                <Trash2 size={14} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
