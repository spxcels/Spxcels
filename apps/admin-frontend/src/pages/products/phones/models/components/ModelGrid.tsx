import ModelCard from "./ModelCard";

export type PhoneModel = {
  id: number;
  image?: string | null;
  name: string;
  brand: string;
  variants: string[];
  colors: string[];
  hasSpecifications: boolean;
  hasCardImage: boolean;
};

type ModelGridProps = {
  models: PhoneModel[];
  onOpen: (id: number) => void;
  onDelete: (id: number) => void;
};

function EmptyState() {
  return (
    <div className="flex items-center justify-center py-24 border border-dashed rounded-2xl border-zinc-800 bg-zinc-900/40">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-white">No phone models found</h3>
        <p className="mt-2 text-sm text-zinc-500">Create your first phone model to get started.</p>
      </div>
    </div>
  );
}

export default function ModelGrid({ models, onOpen, onDelete }: ModelGridProps) {
  if (models.length === 0) return <EmptyState />;

  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      {models.map((model) => (
        <ModelCard
          key={model.id}
          {...model}
          onOpen={() => onOpen(model.id)}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
