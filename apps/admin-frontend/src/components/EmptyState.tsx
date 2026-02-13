type EmptyStateProps = {
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
};

export default function EmptyState({
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="p-8 text-center">
      <h1 className="mb-2 text-2xl font-semibold">
        {title}
      </h1>

      {description && (
        <p className="mb-6 text-sm text-gray-500">
          {description}
        </p>
      )}

      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
