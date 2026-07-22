import type {
  ReactNode,
  TextareaHTMLAttributes,
} from "react";

import clsx from "clsx";

type TextareaProps =
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string;

    hint?: string;

    error?: string;

    leftIcon?: ReactNode;

    fullWidth?: boolean;
  };

export default function Textarea({
  label,
  hint,
  error,
  leftIcon,
  fullWidth = true,
  className,
  ...props
}: TextareaProps) {
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
          <div className="absolute top-3 left-3 text-zinc-500">
            {leftIcon}
          </div>
        )}

        <textarea
          {...props}
          className={clsx(
            "w-full min-h-[120px] resize-y rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2.5 text-sm text-zinc-100 outline-none transition",
            "placeholder:text-zinc-600",
            "focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20",
            leftIcon && "pl-10",
            error &&
              "border-red-500 focus:border-red-500 focus:ring-red-500/20",
            className,
          )}
        />

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