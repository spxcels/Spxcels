/* =========================================================
   PHONE SPECS SECTION — PRO BUILDER
   DRAG HANDLE + COLLAPSIBLE SECTIONS (FINAL)
========================================================= */

import {
  Plus,
  Trash2,
  GripVertical,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

import {
  DndContext,
  closestCenter,
} from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

/* =========================
   TYPES
========================= */

type SpecsValue = {
  text: string;
  link?: string;
};

type SpecsRow = {
  label: string;
  values: SpecsValue[];
};

type SpecsSectionType = {
  id?: string;
  title: string;
  rows: SpecsRow[];
};

export type PhoneSpecsDraft = {
  specs?: {
    sections: SpecsSectionType[];
  };
};

type Props = {
  specs: PhoneSpecsDraft;
  update: (
    key: keyof PhoneSpecsDraft,
    value: any
  ) => void;
};

/* =========================
   SORTABLE SECTION
========================= */

function SortableSection({
  id,
  children,
}: {
  id: string;
  children: (dragHandle: any) => React.ReactNode;
}) {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children({ ...attributes, ...listeners })}
    </div>
  );
}

/* =========================
   MAIN
========================= */

export default function SpecsSection({
  specs,
  update,
}: Props) {
  const sections =
    specs?.specs?.sections ?? [];

  const [open, setOpen] =
    useState<Record<string, boolean>>({});

  const updateSections = (
    newSections: SpecsSectionType[]
  ) =>
    update("specs", { sections: newSections });

  const getId = (
    s: SpecsSectionType,
    i: number
  ) => s.id ?? `section-${i}`;

  const toggle = (id: string) =>
    setOpen((p) => ({
      ...p,
      [id]: !p[id],
    }));

  const isOpen = (id: string) =>
    open[id] ?? true;

  /* ---------- DRAG ---------- */

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = sections.findIndex(
      (_, i) => getId(sections[i], i) === active.id
    );

    const newIndex = sections.findIndex(
      (_, i) => getId(sections[i], i) === over.id
    );

    updateSections(
      arrayMove(sections, oldIndex, newIndex)
    );
  };

  /* ---------- CRUD ---------- */

  const addSection = () =>
    updateSections([
      ...sections,
      {
        id: crypto.randomUUID(),
        title: "NEW SECTION",
        rows: [],
      },
    ]);

  const deleteSection = (i: number) => {
    const copy = [...sections];
    copy.splice(i, 1);
    updateSections(copy);
  };

  const addRow = (s: number) => {
    const copy = [...sections];
    copy[s].rows.push({
      label: "",
      values: [{ text: "" }],
    });
    updateSections(copy);
  };

  const deleteRow = (s: number, r: number) => {
    const copy = [...sections];
    copy[s].rows.splice(r, 1);
    updateSections(copy);
  };

  const updateTitle = (
    s: number,
    value: string
  ) => {
    const copy = [...sections];
    copy[s].title = value;
    updateSections(copy);
  };

  const updateRow = (
    s: number,
    r: number,
    key: "label" | "value",
    value: string
  ) => {
    const copy = [...sections];

    if (key === "label")
      copy[s].rows[r].label = value;
    else
      copy[s].rows[r].values[0].text = value;

    updateSections(copy);
  };

  /* ========================= UI ========================= */

  return (
    <section className="p-6 space-y-6 bg-white border rounded-lg">

      <div>
        <h2 className="text-lg font-semibold">
          Specifications Builder
        </h2>
        <p className="text-sm text-gray-500">
          Drag sections & collapse groups
        </p>
      </div>

      <button
        onClick={addSection}
        className="flex items-center gap-2 px-3 py-2 text-sm text-white bg-blue-600 rounded-lg"
      >
        <Plus size={16} />
        Add Section
      </button>

      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={sections.map((s, i) =>
            getId(s, i)
          )}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-6">
            {sections.map((section, sIndex) => {
              const id = getId(section, sIndex);

              return (
                <SortableSection key={id} id={id}>
                  {(dragHandle) => (
                    <div className="p-4 border rounded-lg bg-gray-50">

                      {/* HEADER */}
                      <div className="flex items-center gap-3">

                        <button
                          {...dragHandle}
                          className="p-2 border rounded-lg cursor-grab"
                        >
                          <GripVertical size={16} />
                        </button>

                        <button
                          onClick={() => toggle(id)}
                          className="p-2 border rounded-lg"
                        >
                          {isOpen(id)
                            ? <ChevronDown size={16}/>
                            : <ChevronRight size={16}/>
                          }
                        </button>

                        <input
                          value={section.title}
                          onChange={(e) =>
                            updateTitle(
                              sIndex,
                              e.target.value
                            )
                          }
                          className="flex-1 px-3 py-2 font-medium border rounded-lg"
                        />

                        <button
                          onClick={() =>
                            deleteSection(sIndex)
                          }
                          className="p-2 text-red-600 border rounded-lg"
                        >
                          <Trash2 size={16}/>
                        </button>
                      </div>

                      {/* CONTENT */}
                      {isOpen(id) && (
                        <div className="mt-4 space-y-3">
                          {section.rows.map((row, rIndex) => (
                            <div
                              key={rIndex}
                              className="grid gap-3 md:grid-cols-2"
                            >
                              <input
                                value={row.label}
                                onChange={(e)=>
                                  updateRow(
                                    sIndex,
                                    rIndex,
                                    "label",
                                    e.target.value
                                  )
                                }
                                className="px-3 py-2 border rounded-lg"
                              />

                              <div className="flex gap-2">
                                <input
                                  value={row.values[0]?.text ?? ""}
                                  onChange={(e)=>
                                    updateRow(
                                      sIndex,
                                      rIndex,
                                      "value",
                                      e.target.value
                                    )
                                  }
                                  className="flex-1 px-3 py-2 border rounded-lg"
                                />

                                <button
                                  onClick={()=>deleteRow(sIndex,rIndex)}
                                  className="px-2 text-red-600 border rounded-lg"
                                >
                                  <Trash2 size={14}/>
                                </button>
                              </div>
                            </div>
                          ))}

                          <button
                            onClick={() => addRow(sIndex)}
                            className="text-sm text-blue-600 hover:underline"
                          >
                            + Add Row
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </SortableSection>
              );
            })}
          </div>
        </SortableContext>
      </DndContext>

    </section>
  );
}