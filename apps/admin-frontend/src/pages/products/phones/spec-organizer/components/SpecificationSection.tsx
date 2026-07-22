import { useState } from "react";

import {
  Check,
  Pencil,
  X,
} from "lucide-react";

import SpecificationField from "./SpecificationField";
import SpecificationFieldEditor from "./SpecificationFieldEditor";

import type {
  OrganizerField,
  OrganizerSection,
} from "../types";

type SpecificationSectionProps = {
  section: OrganizerSection;

  onSave: (
    section: OrganizerSection,
  ) => void;
};

export default function SpecificationSection({
  section,
  onSave,
}: SpecificationSectionProps) {
  const [isEditing, setIsEditing] =
    useState(false);

  const [editedSection, setEditedSection] =
    useState(section);

  function updateField(
    index: number,
    values: string[],
  ) {
    const nextFields = [
      ...editedSection.fields,
    ];

    nextFields[index] = {
      ...nextFields[index],
      value: values,
    };

    setEditedSection({
      ...editedSection,
      fields: nextFields,
    });
  }

  function handleCancel() {
    setEditedSection(section);

    setIsEditing(false);
  }

  function handleSave() {
    console.log(
      "✅ Section Save Clicked",
    );

    console.log(
      "Edited Section:",
      editedSection,
    );

    onSave(editedSection);

    console.log(
      "✅ onSave callback called",
    );

    setIsEditing(false);
  }

  return (
    <div className="overflow-hidden border rounded-2xl border-zinc-800 bg-zinc-900">
      {/* HEADER */}

      <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">
        <h2 className="text-xl font-semibold text-white">
          {editedSection.title}
        </h2>

        {!isEditing ? (
          <button
            type="button"
            onClick={() =>
              setIsEditing(true)
            }
            className="p-2 transition rounded-lg text-zinc-500 hover:bg-zinc-800 hover:text-violet-400"
          >
            <Pencil size={18} />
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCancel}
              className="p-2 transition rounded-lg text-zinc-500 hover:bg-zinc-800 hover:text-red-400"
            >
              <X size={18} />
            </button>

            <button
              type="button"
              onClick={handleSave}
              className="p-2 transition rounded-lg text-zinc-500 hover:bg-zinc-800 hover:text-green-400"
            >
              <Check size={18} />
            </button>
          </div>
        )}
      </div>

      {/* FIELDS */}

      <div>
        {editedSection.fields.map(
          (
            field: OrganizerField,
            index,
          ) =>
            isEditing ? (
              <SpecificationFieldEditor
                key={`${editedSection.title}-${field.label}-${index}`}
                field={field}
                onChange={(values) =>
                  updateField(
                    index,
                    values,
                  )
                }
              />
            ) : (
              <SpecificationField
                key={`${editedSection.title}-${field.label}-${index}`}
                field={field}
              />
            ),
        )}
      </div>
    </div>
  );
}