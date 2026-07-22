import { Plus } from "lucide-react";

type PhoneHeaderProps = {
  onCreateBrand: () => void;
};

export default function PhoneHeader({
  onCreateBrand,
}: PhoneHeaderProps) {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
      {/* LEFT */}

      <div className="space-y-1">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-50">
          Phones
        </h1>

        <p className="max-w-2xl text-sm text-zinc-500">
          Manage brands, phone models, media and specifications from one place.
        </p>
      </div>

      {/* RIGHT */}

      <div className="flex items-center">
        <button
          type="button"
          onClick={onCreateBrand}
          className="inline-flex items-center justify-center gap-2 px-4 text-sm font-medium transition border rounded-lg h-9 border-zinc-800 bg-zinc-900 text-zinc-100 hover:border-violet-500 hover:bg-zinc-800"
        >
          <Plus size={16} />
          New Brand
        </button>
      </div>
    </div>
  );
}