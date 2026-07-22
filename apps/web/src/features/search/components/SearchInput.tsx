"use client";

import { Search } from "lucide-react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchInput({
  value,
  onChange,
  placeholder = "Search phones, brands, news...",
}: SearchInputProps) {
  return (
    <div className="relative">
      <Search
        size={18}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
      />

      <input
        autoFocus
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        placeholder={placeholder}
        className="h-14 w-full rounded-2xl border border-border/50 bg-background/70 pl-12 pr-4 text-base outline-none backdrop-blur-xl transition-all placeholder:text-muted-foreground focus:border-sky-500/60 focus:ring-2 focus:ring-sky-500/20"
      />
    </div>
  );
}