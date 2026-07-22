import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import clsx from "clsx";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "danger";

type ButtonSize =
  | "sm"
  | "md"
  | "lg";

type ButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;

    variant?: ButtonVariant;

    size?: ButtonSize;

    loading?: boolean;

    leftIcon?: ReactNode;

    rightIcon?: ReactNode;

    fullWidth?: boolean;
  };

const variantClasses = {
  primary:
    "bg-violet-600 text-white hover:bg-violet-500 border border-violet-600",

  secondary:
    "bg-zinc-900 text-zinc-200 border border-zinc-800 hover:bg-zinc-800",

  ghost:
    "bg-transparent text-zinc-400 hover:bg-zinc-900 hover:text-white",

  danger:
    "bg-red-600 text-white hover:bg-red-500 border border-red-600",
};

const sizeClasses = {
  sm: "h-8 px-3 text-xs",

  md: "h-9 px-4 text-sm",

  lg: "h-10 px-5 text-sm",
};

export default function Button({
  children,

  variant = "primary",

  size = "md",

  loading = false,

  disabled,

  leftIcon,

  rightIcon,

  fullWidth = false,

  className,

  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-violet-500/40",
        "disabled:pointer-events-none disabled:opacity-50",

        variantClasses[variant],

        sizeClasses[size],

        fullWidth && "w-full",

        className,
      )}
      {...props}
    >
      {leftIcon}

      {loading ? "Loading..." : children}

      {!loading && rightIcon}
    </button>
  );
}