import BasicInfoForm from "@/pages/products/phones/basic-info/components/BasicInfoForm";

type BasicInfoStepProps = {
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

export default function BasicInfoStep({
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

  phonePlaceholder,
}: BasicInfoStepProps) {
  return (
    <BasicInfoForm
      name={name}
      slug={slug}
      newColor={newColor}
      newVariant={newVariant}
      colors={colors}
      variants={variants}
      onNameChange={onNameChange}
      onSlugChange={onSlugChange}
      onNewColorChange={onNewColorChange}
      onNewVariantChange={onNewVariantChange}
      onAddColor={onAddColor}
      onAddVariant={onAddVariant}
      onRemoveColor={onRemoveColor}
      onRemoveVariant={onRemoveVariant}
      phonePlaceholder={phonePlaceholder}
    />
  );
}