import type {
  ReactNode,
  SelectHTMLAttributes,
} from "react";

import clsx from "clsx";
import { ChevronDown } from "lucide-react";

export type SelectOption = {
  label: string;
  value: string;
};

type SelectProps =
  SelectHTMLAttributes<HTMLSelectElement> & {
    label?: string;

    hint?: string;

    error?: string;

    options: SelectOption[];

    placeholder?: string;

    fullWidth?: boolean;

    leftIcon?: ReactNode;
  };

export default function Select({
  label,
  hint,
  error,
  options,
  placeholder,
  fullWidth = true,
  leftIcon,
  className,
  ...props
}: SelectProps) {
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
          <div className="absolute -translate-y-1/2 left-3 top-1/2 text-zinc-500">
            {leftIcon}
          </div>
        )}

        <select
          {...props}
          className={clsx(
            "h-9 w-full appearance-none rounded-lg border border-zinc-800 bg-zinc-900 px-3 text-sm text-zinc-100 outline-none transition",
            "focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20",
            "disabled:cursor-not-allowed disabled:opacity-50",
            leftIcon && "pl-10",
            "pr-10",
            error &&
              "border-red-500 focus:border-red-500 focus:ring-red-500/20",
            className,
          )}
        >
          {placeholder && (
            <option value="">
              {placeholder}
            </option>
          )}

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>

        <div className="absolute -translate-y-1/2 pointer-events-none right-3 top-1/2 text-zinc-500">
          <ChevronDown size={16} />
        </div>

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