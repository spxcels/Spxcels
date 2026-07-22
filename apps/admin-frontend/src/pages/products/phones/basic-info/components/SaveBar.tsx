import { Save } from "lucide-react";

type SaveBarProps = {
  loading?: boolean;
  label?: string;
  onSave: () => void;
};

export default function SaveBar({
  loading = false,
  label = "Save Changes",
  onSave,
}: SaveBarProps) {
  return (
    <div className="flex justify-end">
      <button
        type="button"
        onClick={onSave}
        disabled={loading}
        className="inline-flex items-center gap-2 px-5 text-sm font-semibold text-white transition h-11 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Save size={18} />

        {loading ? "Saving..." : label}
      </button>
    </div>
  );
}