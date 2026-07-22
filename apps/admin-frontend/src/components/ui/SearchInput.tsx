import type {
  InputHTMLAttributes,
} from "react";

import clsx from "clsx";
import {
  Search,
  X,
} from "lucide-react";

type SearchInputProps =
  InputHTMLAttributes<HTMLInputElement> & {
    onClear?: () => void;
  };

export default function SearchInput({
  value,
  onClear,
  className,
  ...props
}: SearchInputProps) {
  const hasValue =
    typeof value === "string" &&
    value.length > 0;

  return (
    <div className="relative w-full">

      {/* SEARCH ICON */}

      <Search
        size={16}
        className="absolute -translate-y-1/2 left-3 top-1/2 text-zinc-500"
      />

      {/* INPUT */}

      <input
        value={value}
        className={clsx(
          "h-9 w-full rounded-lg border border-zinc-800 bg-zinc-900 pl-10 pr-10 text-sm text-zinc-100 outline-none transition",
          "placeholder:text-zinc-500",
          "focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20",
          className,
        )}
        placeholder="Search..."
        {...props}
      />

      {/* CLEAR */}

      {hasValue && (
        <button
          type="button"
          onClick={onClear}
          className="absolute flex items-center justify-center w-6 h-6 transition -translate-y-1/2 rounded-md right-2 top-1/2 text-zinc-500 hover:bg-zinc-800 hover:text-white"
        >
          <X size={14} />
        </button>
      )}

    </div>
  );
}