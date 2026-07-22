import type { HTMLAttributes, ReactNode } from "react";

import clsx from "clsx";

type PageProps = {
  children: ReactNode;
  className?: string;
};

type HeaderProps = {
  title: string;
  description?: string;
  actions?: ReactNode;
};

type ContentProps = {
  children: ReactNode;
  className?: string;
};

function Page({
  children,
  className,
}: PageProps) {
  return (
    <div
      className={clsx(
        "mx-auto flex w-full max-w-7xl flex-col gap-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

function Header({
  title,
  description,
  actions,
}: HeaderProps) {
  return (
    <div className="flex flex-col gap-4 pb-5 border-b border-zinc-800 lg:flex-row lg:items-center lg:justify-between">

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

    </div>
  );
}

function Content({
  children,
  className,
}: ContentProps) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-5",
        className,
      )}
    >
      {children}
    </div>
  );
}

function Grid({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        "grid gap-5 lg:grid-cols-2 xl:grid-cols-3",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

Page.Header = Header;
Page.Content = Content;
Page.Grid = Grid;

export default Page;