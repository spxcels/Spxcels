import { Search } from "lucide-react";

type ModelSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function ModelSearch({
  value,
  onChange,
}: ModelSearchProps) {
  return (
    <div className="relative w-full">
      <Search
        size={18}
        className="absolute -translate-y-1/2 left-4 top-1/2 text-zinc-500"
      />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search phone models..."
        className="w-full h-12 pl-12 pr-4 text-white transition-all duration-200 border outline-none rounded-xl border-zinc-800 bg-zinc-900 placeholder:text-zinc-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
      />
    </div>
  );
}