type ImportSpecificationsFormProps = {
  rawSpecifications: string;
  onChange: (value: string) => void;
  onCancel: () => void;
  onSave: () => void;
  isOrganizing: boolean;
};

export default function ImportSpecificationsForm({
  rawSpecifications,
  onChange,
  onCancel,
  onSave,
  isOrganizing,
}: ImportSpecificationsFormProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-white">
          Paste Raw Specifications
        </h2>

        <p className="mt-2 text-zinc-500">
          Paste GSMArena specifications below.
        </p>
      </div>

      <textarea
        value={rawSpecifications}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Paste raw specifications here..."
        className="min-h-[450px] w-full rounded-xl border border-zinc-700 bg-zinc-950 p-4 text-white outline-none transition focus:border-violet-500"
      />

      <div className="mt-6 flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          disabled={isOrganizing}
          className="rounded-xl border border-zinc-700 px-5 py-2 text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={onSave}
          disabled={isOrganizing}
          className="rounded-xl bg-violet-600 px-6 py-2 font-semibold text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isOrganizing
            ? "Organizing..."
            : "Save & Organize"}
        </button>
      </div>
    </div>
  );
}