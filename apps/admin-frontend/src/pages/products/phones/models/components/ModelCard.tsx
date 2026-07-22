import {
  ArrowRight,
  CheckCircle2,
  ImageOff,
  Smartphone,
  Trash2,
} from "lucide-react";

type ModelCardProps = {
  id: number;

  image?: string | null;

  name: string;

  brand: string;

  variants: string[];

  colors: string[];

  hasSpecifications: boolean;

  hasCardImage: boolean;

  onOpen: () => void;

  onDelete: (id: number) => void;
};

type StatusPillProps = {
  active: boolean;
  label: string;
};

function StatusPill({
  active,
  label,
}: StatusPillProps) {
  return (
    <div
      className={[
        "flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-zinc-950",
        active
          ? "text-white"
          : "text-zinc-500",
      ].join(" ")}
    >
      <CheckCircle2
        size={15}
        className={
          active
            ? "text-green-500"
            : "text-zinc-600"
        }
      />

      {label}
    </div>
  );
}

export default function ModelCard({
  id,
  image,
  name,
  brand,
  variants,
  colors,
  hasSpecifications,
  hasCardImage,
  onOpen,
  onDelete,
}: ModelCardProps) {
  return (
    <div
      className="flex flex-col p-6 transition-all duration-300 border group rounded-2xl border-zinc-800 bg-zinc-900 hover:border-violet-500 hover:bg-zinc-900/80 hover:shadow-xl hover:shadow-violet-950/20"
    >
      {/* HEADER */}

      <div className="flex items-start justify-between">

        <div className="flex items-center gap-3">

          {image ? (
            <img
              src={image}
              alt={name}
              className="object-cover w-10 h-10 rounded-xl bg-zinc-950"
            />
          ) : (
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-violet-600/10 text-violet-400">
              <Smartphone size={18} />
            </div>
          )}

          <div>

            <h2 className="text-lg font-semibold text-white">
              {name}
            </h2>

            <p className="text-sm text-zinc-500">
              {brand}
            </p>

          </div>

        </div>

        <button
          onClick={() => {
            if (
              window.confirm(
                `Delete "${name}"?`,
              )
            ) {
              onDelete(id);
            }
          }}
          className="p-2 transition rounded-lg text-zinc-500 hover:bg-red-500/10 hover:text-red-400"
        >
          <Trash2 size={16} />
        </button>

      </div>

      {/* DIVIDER */}

      <div className="h-px my-5 bg-zinc-800" />

      {/* STATUS */}

      <div className="flex flex-wrap gap-3">

        <StatusPill
          active={hasSpecifications}
          label="Specifications"
        />

        <StatusPill
          active={hasCardImage}
          label="Card Image"
        />

      </div>

      {/* DIVIDER */}

      <div className="h-px my-5 bg-zinc-800" />

      {/* VARIANTS */}

      <div>

        <p className="mb-2 text-sm font-semibold text-zinc-400">
          Variants
        </p>

        <div className="flex flex-wrap gap-2">

          {variants.length > 0 ? (
            variants
              .slice(0, 3)
              .map((variant) => (
                <div
                  key={variant}
                  className="px-3 py-2 text-sm rounded-lg bg-zinc-950 text-zinc-300"
                >
                  {variant}
                </div>
              ))
          ) : (
            <p className="text-sm text-zinc-500">
              No variants available.
            </p>
          )}

        </div>

      </div>

      {/* COLORS */}

      <div className="mt-5">

        <p className="mb-2 text-sm font-semibold text-zinc-400">
          Colors
        </p>

        <div className="flex flex-wrap gap-2">

          {colors.length > 0 ? (
            colors
              .slice(0, 3)
              .map((color) => (
                <div
                  key={color}
                  className="px-3 py-2 text-sm rounded-lg bg-zinc-950 text-zinc-300"
                >
                  {color}
                </div>
              ))
          ) : (
            <p className="text-sm text-zinc-500">
              No colors available.
            </p>
          )}

        </div>

      </div>

      {/* FOOTER */}

      <button
        onClick={onOpen}
        className="flex items-center justify-between px-4 py-3 mt-6 text-sm font-medium transition-all border rounded-xl border-zinc-800 bg-zinc-950 text-violet-400 hover:border-violet-500 hover:text-violet-300"
      >
        <span>Manage Phone</span>

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />

      </button>

    </div>
  );
}