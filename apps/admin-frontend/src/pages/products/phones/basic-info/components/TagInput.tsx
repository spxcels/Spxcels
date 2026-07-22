import { Plus, X } from "lucide-react";

type TagInputProps = {
  label: string;
  placeholder: string;

  value: string;
  items: string[];

  onValueChange: (value: string) => void;
  onAdd: () => void;
  onRemove: (item: string) => void;
};

export default function TagInput({
  label,
  placeholder,

  value,
  items,

  onValueChange,
  onAdd,
  onRemove,
}: TagInputProps) {
  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-zinc-300">
        {label}
      </label>

      <div className="flex gap-2">
        <input
          value={value}
          onChange={(e) =>
            onValueChange(
              e.target.value,
            )
          }
          onKeyDown={(e) => {
            if (
              e.key === "Enter" &&
              value.trim()
            ) {
              e.preventDefault();
              onAdd();
            }
          }}
          placeholder={placeholder}
          className="flex-1 h-12 px-4 text-white border outline-none rounded-xl border-zinc-800 bg-zinc-950 focus:border-violet-500"
        />

        <button
          type="button"
          onClick={onAdd}
          disabled={!value.trim()}
          className="flex items-center justify-center w-12 transition rounded-xl bg-violet-600 hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Plus size={18} />
        </button>
      </div>

      {items.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 px-3 py-2 text-sm text-white rounded-xl bg-zinc-950"
            >
              {item}

              <button
                type="button"
                onClick={() =>
                  onRemove(item)
                }
                className="transition hover:text-red-400"
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}