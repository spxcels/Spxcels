import {
  RefreshCw,
  Save,
  Trash2,
} from "lucide-react";

type UploadActionsProps = {
  canSave: boolean;
  canRemove: boolean;

  isUploading?: boolean;
  isDeleting?: boolean;

  showSaveButton?: boolean;

  onReplace: () => void;
  onRemove: () => void;
  onSave: () => void;
};

export default function UploadActions({
  canSave,
  canRemove,

  isUploading = false,
  isDeleting = false,

  showSaveButton = true,

  onReplace,
  onRemove,
  onSave,
}: UploadActionsProps) {
  return (
    <div className="flex flex-wrap justify-end gap-3">
      <button
        type="button"
        onClick={onReplace}
        className="inline-flex items-center gap-2 px-5 text-sm font-medium text-white transition-all h-11 rounded-xl bg-zinc-800 hover:bg-zinc-700"
      >
        <RefreshCw size={18} />

        Replace
      </button>

      <button
        type="button"
        onClick={onRemove}
        disabled={
          !canRemove ||
          isDeleting
        }
        className="inline-flex items-center gap-2 px-5 text-sm font-medium text-red-400 transition-all border h-11 rounded-xl border-red-500/30 bg-red-500/10 hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Trash2 size={18} />

        {isDeleting
          ? "Removing..."
          : "Remove"}
      </button>

      {showSaveButton && (
        <button
          type="button"
          onClick={onSave}
          disabled={
            !canSave ||
            isUploading
          }
          className="inline-flex items-center gap-2 px-6 text-sm font-semibold text-white transition-all h-11 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Save size={18} />

          {isUploading
            ? "Uploading..."
            : "Save Image"}
        </button>
      )}
    </div>
  );
}