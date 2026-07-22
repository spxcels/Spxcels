import { ArrowLeft, Plus } from "lucide-react";

type BrandHeaderProps = {
  brandName: string;
  modelCount: number;
  onBack: () => void;
  onCreateModel: () => void;
};

export default function BrandHeader({
  brandName,
  modelCount,
  onBack,
  onCreateModel,
}: BrandHeaderProps) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      {/* LEFT */}

      <div className="space-y-3">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm transition-colors text-zinc-500 hover:text-violet-400"
        >
          <ArrowLeft size={16} />
          Back to Brands
        </button>

        <div>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-50">
            {brandName}
          </h1>

          <p className="mt-2 text-base text-zinc-400">
            {modelCount} phone models available
          </p>
        </div>
      </div>

      {/* RIGHT */}

      <button
        onClick={onCreateModel}
        className="inline-flex items-center justify-center gap-2 px-5 text-sm font-semibold text-white transition-all h-11 rounded-xl bg-violet-600 hover:bg-violet-500"
      >
        <Plus size={18} />
        New Model
      </button>
    </div>
  );
}