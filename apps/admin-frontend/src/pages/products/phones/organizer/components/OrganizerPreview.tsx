import type {
  OrganizerSection,
} from "../types";

type OrganizerPreviewProps = {
  sections?: OrganizerSection[];
};

export default function OrganizerPreview({
  sections = [],
}: OrganizerPreviewProps) {
  return (
    <div className="flex flex-col h-full">

      {/* HEADER */}

      <div className="px-6 py-4 border-b border-zinc-800">

        <h2 className="text-lg font-semibold text-white">
          Organizer Preview
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Preview the structured data generated from the raw specifications.
        </p>

      </div>

      {/* CONTENT */}

      <div className="flex-1 p-6 overflow-auto">

        {sections.length === 0 ? (
          <div className="flex items-center justify-center h-full">

            <div className="text-center">

              <h3 className="text-lg font-semibold text-white">
                Nothing Organized Yet
              </h3>

              <p className="max-w-xs mt-2 text-sm text-zinc-500">
                Run the organizer to generate structured sections from the
                raw specifications.
              </p>

            </div>

          </div>
        ) : (
          <div className="space-y-5">

            {sections.map((section) => (
              <div
                key={section.title}
                className="border rounded-xl border-zinc-800 bg-zinc-950"
              >

                <div className="px-4 py-3 border-b border-zinc-800">

                  <h3 className="font-semibold text-white">
                    {section.title}
                  </h3>

                </div>

                <div className="p-4 space-y-4">

                  {section.fields.map((field) => (
                    <div
                      key={field.label}
                    >
                      <h4 className="text-sm font-medium text-violet-400">
                        {field.label}
                      </h4>

                      <ul className="mt-2 space-y-1">

                        {field.value.map((value) => (
                          <li
                            key={value}
                            className="text-sm text-zinc-300"
                          >
                            • {value}
                          </li>
                        ))}

                      </ul>

                    </div>
                  ))}

                </div>

              </div>
            ))}

          </div>
        )}

      </div>

    </div>
  );
}