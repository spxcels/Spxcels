import type { ReactNode } from "react";

import clsx from "clsx";

type SectionProps = {
  title?: string;

  description?: string;

  actions?: ReactNode;

  children: ReactNode;

  className?: string;
};

export default function Section({
  title,
  description,
  actions,
  children,
  className,
}: SectionProps) {
  return (
    <section
      className={clsx(
        "overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900",
        className,
      )}
    >
      {(title || description || actions) && (
        <header className="flex flex-col gap-4 px-5 py-4 border-b border-zinc-800 lg:flex-row lg:items-center lg:justify-between">

          <div className="min-w-0">

            {title && (
              <h2 className="text-base font-semibold text-zinc-100">
                {title}
              </h2>
            )}

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
      )}

      <div className="p-5 space-y-5">

        {children}

      </div>

    </section>
  );
}