import { ArrowLeft } from "lucide-react";

type PageHeaderProps = {
  title: string;
  description: string;
  onBack: () => void;
};

export default function PageHeader({
  title,
  description,
  onBack,
}: PageHeaderProps) {
  return (
    <div className="space-y-4">
      {/* Back */}

      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm transition-colors text-zinc-500 hover:text-violet-400"
      >
        <ArrowLeft size={16} />

        Back
      </button>

      {/* Title */}

      <div>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-50">
          {title}
        </h1>

        <p className="mt-2 text-base text-zinc-400">
          {description}
        </p>
      </div>
    </div>
  );
}