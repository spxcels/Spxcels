import { Search, X } from "lucide-react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="relative w-full">

      <Search
        size={16}
        className="absolute -translate-y-1/2 pointer-events-none left-3 top-1/2 text-zinc-500"
      />

      <input
        type="text"
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        placeholder="Search brands or phone models..."
        className="w-full h-10 pl-10 pr-10 text-sm transition border rounded-lg outline-none  border-zinc-800 bg-zinc-900 text-zinc-100 placeholder:text-zinc-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
      />

      {value.length > 0 && (
        <button
          type="button"
          onClick={() =>
            onChange("")
          }
          className="absolute flex items-center justify-center transition -translate-y-1/2 rounded-md  right-2 top-1/2 h-7 w-7 text-zinc-500 hover:bg-zinc-800 hover:text-zinc-100"
        >
          <X size={14} />
        </button>
      )}

    </div>
  );
}