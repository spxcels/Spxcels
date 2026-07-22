import type {
  OrganizerField,
} from "../types";

type SpecificationFieldProps = {
  field: OrganizerField;
};

export default function SpecificationField({
  field,
}: SpecificationFieldProps) {
  return (
    <div className="grid grid-cols-[220px_1fr] gap-8 border-b border-zinc-800 px-6 py-5 last:border-b-0">
      {/* LABEL */}

      <div className="font-medium text-zinc-400">
        {field.label}
      </div>

      {/* VALUE */}

      <div className="space-y-2">
        {field.value.length > 0 ? (
          field.value.map((value, index) => (
            <div
              key={index}
              className="text-white break-words whitespace-pre-wrap"
            >
              {value}
            </div>
          ))
        ) : (
          <span className="text-zinc-600">
            —
          </span>
        )}
      </div>
    </div>
  );
}