import { ArrowLeft } from "lucide-react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";

import { useOrganizer } from "@/hooks/useOrganizer";

import OrganizerLayout from "./components/OrganizerLayout";
import OrganizerPreview from "./components/OrganizerPreview";
import OrganizerWorkspace from "./components/OrganizerWorkspace";

export default function OrganizerPage() {
  const navigate = useNavigate();

  const { modelId } = useParams();

  const organizer =
    useOrganizer();

  return (
    <div className="mx-auto max-w-7xl space-y-8 pb-24">

      {/* Header */}

      <div>
        <button
          type="button"
          onClick={() =>
            navigate(
              `/admin/products/phones/editor/${modelId}`,
            )
          }
          className="flex items-center gap-2 text-sm text-zinc-500 transition hover:text-violet-400"
        >
          <ArrowLeft size={16} />
          Back
        </button>

        <h1 className="mt-4 text-4xl font-bold text-white">
          Specifications Organizer
        </h1>

        <p className="mt-2 max-w-3xl text-zinc-500">
          Paste raw specifications and preview how the organizer
          converts them into structured Spexcel data.
        </p>
      </div>

      <OrganizerLayout
        sidebar={
          <div className="space-y-4 p-6">

            <button
              type="button"
              onClick={organizer.organize}
              disabled={
                !organizer.canOrganize ||
                organizer.isOrganizing
              }
              className="w-full rounded-lg bg-violet-600 px-4 py-2 font-medium text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {organizer.isOrganizing
                ? "Organizing..."
                : "Preview"}
            </button>

          </div>
        }
        workspace={
          <OrganizerWorkspace
            raw={organizer.raw}
            onChange={organizer.setRaw}
          />
        }
        preview={
          <OrganizerPreview
            sections={
              organizer.result?.sections ?? []
            }
          />
        }
      />

    </div>
  );
}