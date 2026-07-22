import {
  RefreshCcw,
  Save,
} from "lucide-react";

type SpecificationsToolbarProps = {
  hasChanges?: boolean;

  isSaving?: boolean;

  onImportAgain: () => void;

  onSave?: () => void;
};

export default function SpecificationsToolbar({
  hasChanges = false,
  isSaving = false,
  onImportAgain,
  onSave,
}: SpecificationsToolbarProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border rounded-2xl border-zinc-800 bg-zinc-900">
      {/* TITLE */}

      <div>
        <h2 className="text-lg font-semibold text-white">
          Organized Specifications
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Review and edit organized specifications before saving.
        </p>
      </div>

      {/* ACTIONS */}

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onImportAgain}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition border rounded-xl border-zinc-700 hover:bg-zinc-800"
        >
          <RefreshCcw size={16} />

          Import Again
        </button>

        <button
          type="button"
          disabled={!hasChanges || isSaving}
          onClick={onSave}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition rounded-xl bg-violet-600 hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Save size={16} />

          {isSaving
            ? "Saving..."
            : "Save Changes"}
        </button>
      </div>
    </div>
  );
}