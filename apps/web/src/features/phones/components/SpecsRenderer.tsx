import React from "react";

type AnyValue =
  | string
  | number
  | boolean
  | null
  | AnyValue[]
  | { [key: string]: AnyValue };

interface Props {
  data: AnyValue;
  level?: number;
}

function isObject(value: AnyValue): value is Record<string, AnyValue> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/* ================= MEMORY FORMATTER ================= */

function formatMemory(value: string) {
  if (value.includes("/") && value.includes("RAM")) {
    return value;
  }

  const regex = /(\d+(?:GB|TB))\s*(?:storage)?\s*\+?\s*(\d+GB)\s*RAM/gi;

  const groups: Record<string, string[]> = {};
  let match;

  while ((match = regex.exec(value)) !== null) {
    const storage = match[1];
    const ram = match[2];

    if (!groups[ram]) groups[ram] = [];

    if (!groups[ram].includes(storage)) {
      groups[ram].push(storage);
    }
  }

  if (Object.keys(groups).length === 0) {
    return value;
  }

  return Object.entries(groups)
    .map(([ram, storage]) => `${storage.join(" / ")} (${ram} RAM)`)
    .join(" / ");
}

/* ================= RENDERER ================= */

export default function SpecsRenderer({ data, level = 0 }: Props) {
  /* ---------- primitive ---------- */
  if (
    typeof data === "string" ||
    typeof data === "number" ||
    typeof data === "boolean"
  ) {
    return <span>{formatMemory(String(data))}</span>;
  }

  /* ---------- null ---------- */
  if (data === null) {
    return <span className="text-gray-400">—</span>;
  }

  /* ---------- array ---------- */
  if (Array.isArray(data)) {
    return (
      <ul className="ml-4 list-disc space-y-1">
        {data.map((item, index) => (
          <li key={`${level}-${index}`}>
            <SpecsRenderer data={item} level={level + 1} />
          </li>
        ))}
      </ul>
    );
  }

  /* ---------- object ---------- */
  if (isObject(data)) {
    return (
      <div className="space-y-2">
        {Object.entries(data).map(([key, value]) => (
          <div
            key={`${level}-${key}`}
            className="border-b border-gray-200 pb-2 last:border-b-0"
          >
            <div className="font-medium capitalize text-gray-700">
              {key.replace(/_/g, " ")}
            </div>

            <div className="ml-2 mt-1 text-gray-600">
              <SpecsRenderer data={value} level={level + 1} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
}