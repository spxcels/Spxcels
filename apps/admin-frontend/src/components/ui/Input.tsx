import type {
  InputHTMLAttributes,
  ReactNode,
} from "react";

import clsx from "clsx";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;

  hint?: string;

  error?: string;

  leftIcon?: ReactNode;

  rightIcon?: ReactNode;

  fullWidth?: boolean;
};

export default function Input({
  label,
  hint,
  error,
  leftIcon,
  rightIcon,
  fullWidth = true,
  className,
  ...props
}: InputProps) {
  return (
    <div
      className={clsx(
        "space-y-2",
        fullWidth && "w-full",
      )}
    >
      {label && (
        <label className="block text-xs font-medium tracking-wide uppercase text-zinc-500">
          {label}
        </label>
      )}

      <div className="relative">

        {leftIcon && (
          <div className="absolute inset-y-0 flex items-center left-3 text-zinc-500">
            {leftIcon}
          </div>
        )}

        <input
          {...props}
          className={clsx(
            "h-9 w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 text-sm text-zinc-100 outline-none transition-all",
            "placeholder:text-zinc-600",
            "focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20",
            leftIcon && "pl-10",
            rightIcon && "pr-10",
            error &&
              "border-red-500 focus:border-red-500 focus:ring-red-500/20",
            className,
          )}
        />

        {rightIcon && (
          <div className="absolute inset-y-0 flex items-center right-3 text-zinc-500">
            {rightIcon}
          </div>
        )}

      </div>

      {error ? (
        <p className="text-xs text-red-400">
          {error}
        </p>
      ) : (
        hint && (
          <p className="text-xs text-zinc-500">
            {hint}
          </p>
        )
      )}
    </div>
  );
}