import { Textarea } from "@/components/ui";

type OrganizerWorkspaceProps = {
  raw: string;

  onChange: (value: string) => void;
};

export default function OrganizerWorkspace({
  raw,
  onChange,
}: OrganizerWorkspaceProps) {
  return (
    <div className="flex flex-col h-full">

      {/* HEADER */}

      <div className="px-6 py-4 border-b border-zinc-800">

        <h2 className="text-lg font-semibold text-white">
          Raw Specifications
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Paste raw GSMArena specifications here and preview the parsed result.
        </p>

      </div>

      {/* CONTENT */}

      <div className="flex-1 p-6">

        <Textarea
          value={raw}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Paste raw specifications here..."
          className="h-full min-h-[520px] resize-none font-mono text-sm leading-7"
        />

      </div>

    </div>
  );
}