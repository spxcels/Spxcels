import { PackagePlus } from "lucide-react";

type EmptyStateProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  onAction?: () => void;
};

export default function EmptyState({
  title = "No phone brands found",
  description = "Start by creating your first brand and adding phone models.",
  buttonText = "New Brand",
  onAction,
}: EmptyStateProps) {
  return (
    <div
      className="
        flex
        min-h-[420px]
        flex-col
        items-center
        justify-center
        rounded-2xl
        border
        border-dashed
        border-zinc-800
        bg-zinc-900/40
        px-8
        text-center
      "
    >
      {/* Icon */}
      <div
        className="flex items-center justify-center w-16 h-16 mb-6  rounded-2xl bg-violet-600/10 text-violet-400"
      >
        <PackagePlus size={30} />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-semibold text-white">
        {title}
      </h2>

      {/* Description */}
      <p className="max-w-md mt-3 text-sm leading-6 text-zinc-400">
        {description}
      </p>

      {/* Action */}
      {onAction && (
        <button
          onClick={onAction}
          className="px-6 py-3 mt-8 text-sm font-medium text-white transition-all duration-200  rounded-xl bg-violet-600 hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-950/30"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}