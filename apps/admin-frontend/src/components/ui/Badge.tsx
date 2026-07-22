import type { ReactNode } from "react";
import clsx from "clsx";

type BadgeVariant =
  | "default"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "purple";

type BadgeProps = {
  children: ReactNode;

  variant?: BadgeVariant;

  className?: string;
};

const variants = {
  default:
    "bg-zinc-800 text-zinc-300 border-zinc-700",

  success:
    "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",

  warning:
    "bg-amber-500/10 text-amber-400 border-amber-500/20",

  danger:
    "bg-red-500/10 text-red-400 border-red-500/20",

  info:
    "bg-sky-500/10 text-sky-400 border-sky-500/20",

  purple:
    "bg-violet-500/10 text-violet-400 border-violet-500/20",
};

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-md border px-2 py-1 text-xs font-medium",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}