import type {
  OrganizerField,
} from "../types";

type SpecificationFieldEditorProps = {
  field: OrganizerField;

  onChange: (
    value: string[],
  ) => void;
};

export default function SpecificationFieldEditor({
  field,
  onChange,
}: SpecificationFieldEditorProps) {
  function updateValue(
    index: number,
    value: string,
  ) {
    const nextValues = [...field.value];

    nextValues[index] = value;

    onChange(nextValues);
  }

  return (
    <div className="grid grid-cols-[220px_1fr] gap-8 border-b border-zinc-800 px-6 py-5 last:border-b-0">
      {/* LABEL */}

      <div className="pt-3 font-medium text-zinc-400">
        {field.label}
      </div>

      {/* VALUES */}

      <div className="space-y-3">
        {field.value.length > 0 ? (
          field.value.map(
            (value, index) => (
              <textarea
                key={index}
                value={value}
                rows={Math.max(
                  2,
                  value.split("\n").length,
                )}
                onChange={(e) =>
                  updateValue(
                    index,
                    e.target.value,
                  )
                }
                className="w-full px-4 py-3 text-white transition border outline-none rounded-xl border-zinc-700 bg-zinc-950 focus:border-violet-500"
              />
            ),
          )
        ) : (
          <textarea
            value=""
            rows={2}
            placeholder="Enter specification..."
            onChange={(e) =>
              onChange([
                e.target.value,
              ])
            }
            className="w-full px-4 py-3 text-white transition border outline-none rounded-xl border-zinc-700 bg-zinc-950 focus:border-violet-500"
          />
        )}
      </div>
    </div>
  );
}