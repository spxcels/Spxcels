import type { ReactNode } from "react";
import clsx from "clsx";

type CardProps = {
  children: ReactNode;

  title?: string;

  description?: string;

  actions?: ReactNode;

  className?: string;
};

export default function Card({
  children,
  title,
  description,
  actions,
  className,
}: CardProps) {
  return (
    <section
      className={clsx(
        "overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 shadow-sm",
        className,
      )}
    >
      {(title || description || actions) && (
        <header className="flex items-start justify-between gap-4 px-5 py-4 border-b border-zinc-800">

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

      <div className="p-5">
        {children}
      </div>
    </section>
  );
}