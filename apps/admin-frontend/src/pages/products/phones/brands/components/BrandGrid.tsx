import BrandCard from "./BrandCard";
import EmptyState from "../../../../../components/ui/EmptyState";

type Brand = {
  id: number;
  name: string;
  modelCount: number;
  models: string[];
};

type BrandGridProps = {
  brands: Brand[];
  onOpenBrand: (brandId: number) => void;
  onDeleteBrand: (brandId: number) => void;
};

export default function BrandGrid({
  brands,
  onOpenBrand,
  onDeleteBrand,
}: BrandGridProps) {
  if (brands.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {brands.map((brand) => (
        <BrandCard
          key={brand.id}
          id={brand.id}
          name={brand.name}
          modelCount={brand.modelCount}
          models={brand.models}
          onOpen={() => onOpenBrand(brand.id)}
          onDelete={onDeleteBrand}
        />
      ))}
    </div>
  );
}