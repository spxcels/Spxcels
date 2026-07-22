type EmptyStateProps = {
  onAddSpecifications: () => void;
};

export default function EmptyState({
  onAddSpecifications,
}: EmptyStateProps) {
  return (
    <div className="p-8 border rounded-2xl border-zinc-800 bg-zinc-900">
      <div className="py-10 text-center">
        <h2 className="text-2xl font-semibold text-white">
          No Specifications
        </h2>

        <p className="mt-3 text-zinc-500">
          Import raw specifications to begin organizing this phone.
        </p>

        <button
          type="button"
          onClick={onAddSpecifications}
          className="px-6 py-3 mt-8 font-semibold text-white transition rounded-xl bg-violet-600 hover:bg-violet-500"
        >
          + Add Specifications
        </button>
      </div>
    </div>
  );
}