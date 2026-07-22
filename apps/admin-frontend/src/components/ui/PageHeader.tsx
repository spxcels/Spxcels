import type { ReactNode } from "react";

type PageHeaderProps = {
  title: string;

  description?: string;

  actions?: ReactNode;
};

export default function PageHeader({
  title,
  description,
  actions,
}: PageHeaderProps) {
  return (
    <header className="flex flex-col gap-4 pb-4 border-b border-zinc-800 lg:flex-row lg:items-center lg:justify-between">

      <div className="min-w-0">

        <h1 className="text-3xl font-semibold tracking-tight text-zinc-50">
          {title}
        </h1>

        {description && (
          <p className="mt-1 text-sm text-zinc-500">
            {description}
          </p>
        )}

      </div>

      {actions && (
        <div className="flex items-center gap-2 shrink-0">
          {actions}
        </div>
      )}

    </header>
  );
}