import type { ReactNode } from "react";

type OrganizerLayoutProps = {
  sidebar: ReactNode;

  workspace: ReactNode;

  preview: ReactNode;
};

export default function OrganizerLayout({
  sidebar,
  workspace,
  preview,
}: OrganizerLayoutProps) {
  return (
    <div className="grid min-h-[750px] grid-cols-[260px_1fr_420px] gap-6">

      {/* LEFT SIDEBAR */}

      <aside className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
        {sidebar}
      </aside>

      {/* CENTER WORKSPACE */}

      <main className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
        {workspace}
      </main>

      {/* RIGHT PREVIEW */}

      <aside className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
        {preview}
      </aside>

    </div>
  );
}