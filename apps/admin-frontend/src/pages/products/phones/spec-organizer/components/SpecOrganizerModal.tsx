import {
  Eye,
  Save,
  X,
} from "lucide-react";

import SpecOrganizerEditor from "./ImportSpecificationsForm";
import SpecOrganizerPreview from "./SpecificationsViewer";

import type {
  OrganizerSection,
} from "../types";

type SpecOrganizerModalProps = {
  open: boolean;

  raw: string;

  onChange: (
    value: string,
  ) => void;

  sections: OrganizerSection[];

  canOrganize: boolean;

  isOrganizing: boolean;

  isSaving: boolean;

  onPreview: () => void;

  onSave: () => void;

  onClose: () => void;
};

export default function SpecOrganizerModal({
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
}: SpecOrganizerModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-8">

      <div className="flex h-[92vh] w-full max-w-7xl flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">

        {/* HEADER */}

        <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-5">

          <div>

            <h2 className="text-2xl font-bold text-white">
              Import Specifications
            </h2>

            <p className="mt-1 text-sm text-zinc-500">
              Paste GSMArena specifications, preview the organized
              result and save it.
            </p>

          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-zinc-500 transition hover:bg-zinc-800 hover:text-white"
          >
            <X size={20} />
          </button>

        </div>

        {/* BODY */}

        <div className="grid flex-1 gap-6 overflow-hidden p-6 xl:grid-cols-[1fr_420px]">

          <SpecOrganizerEditor
            value={raw}
            onChange={onChange}
          />

          <SpecOrganizerPreview
            sections={sections}
          />

        </div>

        {/* FOOTER */}

        <div className="flex items-center justify-between border-t border-zinc-800 px-6 py-5">

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-zinc-700 px-6 py-3 font-semibold text-white transition hover:border-zinc-500"
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
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-6 py-3 font-semibold text-white transition hover:border-violet-500 disabled:opacity-50"
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
              className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-500 disabled:opacity-50"
            >
              <Save size={18} />

              {isSaving
                ? "Saving..."
                : "Save Specifications"}
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}