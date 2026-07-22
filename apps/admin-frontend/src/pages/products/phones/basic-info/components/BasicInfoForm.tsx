import TagInput from "./TagInput";

type BasicInfoFormProps = {
  name: string;
  slug: string;

  newColor: string;
  newVariant: string;

  colors: string[];
  variants: string[];

  onNameChange: (value: string) => void;
  onSlugChange: (value: string) => void;

  onNewColorChange: (value: string) => void;
  onNewVariantChange: (value: string) => void;

  onAddColor: () => void;
  onAddVariant: () => void;

  onRemoveColor: (color: string) => void;
  onRemoveVariant: (variant: string) => void;

  phonePlaceholder?: string;
};

export default function BasicInfoForm({
  name,
  slug,

  newColor,
  newVariant,

  colors,
  variants,

  onNameChange,
  onSlugChange,

  onNewColorChange,
  onNewVariantChange,

  onAddColor,
  onAddVariant,

  onRemoveColor,
  onRemoveVariant,

  phonePlaceholder = "Enter phone model name",
}: BasicInfoFormProps) {
  return (
    <div className="p-6 space-y-8 border rounded-2xl border-zinc-800 bg-zinc-900">
      {/* Phone Name */}

      <div>
        <label className="block mb-2 text-sm font-medium text-zinc-300">
          Phone Name
        </label>

        <input
          value={name}
          onChange={(e) =>
            onNameChange(e.target.value)
          }
          placeholder={phonePlaceholder}
          className="w-full h-12 px-4 text-white border outline-none rounded-xl border-zinc-800 bg-zinc-950 focus:border-violet-500"
        />
      </div>

      {/* Slug */}

      <div>
        <label className="block mb-2 text-sm font-medium text-zinc-300">
          Slug
        </label>

        <input
          value={slug}
          onChange={(e) =>
            onSlugChange(e.target.value)
          }
          placeholder="Generated automatically"
          className="w-full h-12 px-4 text-white border outline-none rounded-xl border-zinc-800 bg-zinc-950 focus:border-violet-500"
        />
      </div>

      {/* Colors */}

      <TagInput
        label="Colors"
        placeholder="Add a color"
        value={newColor}
        items={colors}
        onValueChange={onNewColorChange}
        onAdd={onAddColor}
        onRemove={onRemoveColor}
      />

      {/* Variants */}

      <TagInput
        label="Variants"
        placeholder="Add a variant"
        value={newVariant}
        items={variants}
        onValueChange={onNewVariantChange}
        onAdd={onAddVariant}
        onRemove={onRemoveVariant}
      />
    </div>
  );
}