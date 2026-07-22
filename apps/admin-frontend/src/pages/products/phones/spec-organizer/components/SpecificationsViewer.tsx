import type {
  OrganizerResult,
  OrganizerSection,
} from "@/pages/products/phones/spec-organizer/types";

import SpecificationSection from "./SpecificationSection";

type SpecificationsViewerProps = {
  data: OrganizerResult;

  onSectionChange: (
    section: OrganizerSection,
  ) => void;
};

export default function SpecificationsViewer({
  data,
  onSectionChange,
}: SpecificationsViewerProps) {
  return (
    <div className="space-y-6">
      {/* WARNINGS */}

      {data.warnings.length > 0 && (
        <div className="rounded-xl border border-yellow-700 bg-yellow-950/30 p-4">
          <h2 className="text-lg font-semibold text-yellow-300">
            Warnings
          </h2>

          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-yellow-200">
            {data.warnings.map((warning, index) => (
              <li key={index}>{warning}</li>
            ))}
          </ul>
        </div>
      )}

      {/* ERRORS */}

      {data.errors.length > 0 && (
        <div className="rounded-xl border border-red-700 bg-red-950/30 p-4">
          <h2 className="text-lg font-semibold text-red-300">
            Errors
          </h2>

          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-red-200">
            {data.errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      {/* SPECIFICATION SECTIONS */}

      {data.sections.map((section) => (
        <SpecificationSection
          key={section.title}
          section={section}
          onSave={onSectionChange}
        />
      ))}
    </div>
  );
}