import { useEffect, useState } from "react";
import { Save, X } from "lucide-react";

type CreateBrandModalProps = {
  open: boolean;
  onClose: () => void;
  onCreate: (data: { name: string; slug: string }) => void;
};

export default function CreateBrandModal({ open, onClose, onCreate }: CreateBrandModalProps) {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");

  useEffect(() => {
    if (open) {
      setName("");
      setSlug("");
    }
  }, [open]);

  useEffect(() => {
    if (!name.trim()) {
      setSlug("");
      return;
    }
    setSlug(name.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]/g, ""));
  }, [name]);

  if (!open) return null;

  const submit = () => {
    if (!name.trim()) return;
    onCreate({ name: name.trim(), slug });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-lg border shadow-2xl rounded-2xl border-zinc-800 bg-zinc-900">

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-800">
          <div>
            <h2 className="text-2xl font-bold text-white">Create Brand</h2>
            <p className="mt-1 text-sm text-zinc-500">Add a new phone brand.</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 transition rounded-lg text-zinc-400 hover:bg-zinc-800 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {[
            { label: "Brand Name", name: "brand-name", value: name, onChange: setName, placeholder: "Enter brand name" },
            { label: "Slug", name: "brand-slug", value: slug, onChange: setSlug, placeholder: "brand-slug" },
          ].map(({ label, name, value, onChange, placeholder }) => (
            <div key={name}>
              <label className="block mb-2 text-sm font-medium text-zinc-300">{label}</label>
              <input
                autoComplete="new-password"
                name={name}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full h-12 px-4 text-white border outline-none rounded-xl border-zinc-800 bg-zinc-950 focus:border-violet-500"
              />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-6 border-t border-zinc-800">
          <button
            onClick={onClose}
            className="px-5 text-sm font-medium text-white transition h-11 rounded-xl bg-zinc-800 hover:bg-zinc-700"
          >
            Cancel
          </button>
          <button
            onClick={submit}
            disabled={!name.trim()}
            className="inline-flex items-center gap-2 px-5 text-sm font-semibold text-white transition h-11 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Save size={18} />
            Create Brand
          </button>
        </div>

      </div>
    </div>
  );
}