import {
  Eye,
  Save,
  X,
} from "lucide-react";

import SpecificationsEditor from "./ImportSpecificationsForm";

import OrganizerPreview from "../../organizer/components/OrganizerPreview";

type ImportSpecificationsModalProps = {
  open: boolean;

  raw: string;

  onChange: (
    value: string,
  ) => void;

  sections: any[];

  canOrganize: boolean;

  isOrganizing: boolean;

  isSaving: boolean;

  onPreview: () => void;

  onSave: () => void;

  onClose: () => void;
};

export default function ImportSpecificationsModal({
  open,
  raw,
  onChange,
  sections,
  canOrganize,
  isOrganizing,
  isSaving,
  onPreview,
  onSave,
  onClose,
}: ImportSpecificationsModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-8 bg-black/70">

      <div className="flex h-[90vh] w-full max-w-7xl flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">

        {/* HEADER */}

        <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-800">

          <div>

            <h2 className="text-2xl font-bold text-white">
              Import Specifications
            </h2>

            <p className="mt-1 text-sm text-zinc-500">
              Paste GSMArena specifications, preview the organized
              result and save.
            </p>

          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 transition rounded-lg text-zinc-400 hover:bg-zinc-800 hover:text-white"
          >
            <X size={20} />
          </button>

        </div>

        {/* BODY */}

        <div className="grid flex-1 gap-6 overflow-hidden p-6 xl:grid-cols-[1fr_420px]">

          <SpecificationsEditor
            value={raw}
            onChange={onChange}
          />

          <OrganizerPreview
            sections={sections}
          />

        </div>

        {/* FOOTER */}

        <div className="flex items-center justify-between px-6 py-5 border-t border-zinc-800">

          <button
            type="button"
            onClick={onClose}
            className="px-6 py-3 font-semibold text-white transition border rounded-xl border-zinc-700 hover:border-zinc-500"
          >
            Cancel
          </button>

          <div className="flex items-center gap-4">

            <button
              type="button"
              onClick={onPreview}
              disabled={
                !canOrganize ||
                isOrganizing
              }
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white transition border rounded-xl border-zinc-700 hover:border-violet-500 disabled:opacity-50"
            >
              <Eye size={18} />

              {isOrganizing
                ? "Previewing..."
                : "Preview"}
            </button>

            <button
              type="button"
              onClick={onSave}
              disabled={isSaving}
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white transition rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-50"
            >
              <Save size={18} />

              {isSaving
                ? "Saving..."
                : "Save"}
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}