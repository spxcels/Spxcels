import type { ReactNode } from "react";

import clsx from "clsx";

type ToolbarProps = {
  children: ReactNode;

  className?: string;
};

type LeftProps = {
  children: ReactNode;
};

type RightProps = {
  children: ReactNode;
};

function Toolbar({
  children,
  className,
}: ToolbarProps) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-3 rounded-xl border border-zinc-800 bg-zinc-900 p-4 lg:flex-row lg:items-center lg:justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
}

function Left({
  children,
}: LeftProps) {
  return (
    <div className="flex flex-wrap items-center flex-1 gap-2">
      {children}
    </div>
  );
}

function Right({
  children,
}: RightProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 shrink-0">
      {children}
    </div>
  );
}

Toolbar.Left = Left;
Toolbar.Right = Right;

export default Toolbar;