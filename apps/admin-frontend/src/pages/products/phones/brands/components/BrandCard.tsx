import {
  ArrowRight,
  Smartphone,
  Trash2,
} from "lucide-react";

type BrandCardProps = {
  id: number;
  name: string;
  modelCount: number;
  models: string[];
  onOpen: () => void;
  onDelete: (id: number) => void;
};

export default function BrandCard({
  id,
  name,
  modelCount,
  models,
  onOpen,
  onDelete,
}: BrandCardProps) {
  return (
    <div className="flex flex-col p-6 transition-all duration-300 border group rounded-2xl border-zinc-800 bg-zinc-900 hover:border-violet-500 hover:bg-zinc-900/80 hover:shadow-xl hover:shadow-violet-950/20">
      {/* Header */}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-violet-600/10 text-violet-400">
            <Smartphone size={18} />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">
              {name}
            </h2>

            <p className="text-sm text-zinc-500">
              {modelCount} Models
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            if (
              window.confirm(
                `Delete "${name}" brand?`,
              )
            ) {
              onDelete(id);
            }
          }}
          className="flex items-center justify-center w-10 h-10 transition rounded-lg text-zinc-500 hover:bg-red-500/10 hover:text-red-400"
        >
          <Trash2 size={18} />
        </button>
      </div>

      {/* Divider */}

      <div className="h-px my-5 bg-zinc-800" />

      {/* Preview Models */}

      <div className="flex-1 space-y-2">
        {models.length > 0 ? (
          models.slice(0, 3).map((model) => (
            <div
              key={model}
              className="px-3 py-2 text-sm rounded-lg bg-zinc-950 text-zinc-300"
            >
              {model}
            </div>
          ))
        ) : (
          <p className="text-sm text-zinc-500">
            No models available.
          </p>
        )}
      </div>

      {/* Footer */}

      <button
        onClick={onOpen}
        className="flex items-center justify-between px-4 py-3 mt-6 text-sm font-medium transition-all border rounded-xl border-zinc-800 bg-zinc-950 text-violet-400 hover:border-violet-500 hover:text-violet-300"
      >
        <span>Open Brand</span>

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>
    </div>
  );
}