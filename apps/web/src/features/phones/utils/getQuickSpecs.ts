import type {
  PhoneSpecs,
  QuickSpec,
} from "../types/specs";

interface QuickSpecConfig {
  label: string;
  section: string;
  field: string;
}

const QUICK_SPECS: QuickSpecConfig[] = [
  {
    label: "Chipset",
    section: "Platform",
    field: "Chipset",
  },
  {
    label: "CPU",
    section: "Platform",
    field: "CPU",
  },
  {
    label: "GPU",
    section: "Platform",
    field: "GPU",
  },
  {
    label: "Battery",
    section: "Battery",
    field: "Type",
  },
];

function getFieldValue(
  label: string,
  value: string | string[] | null,
): string | undefined {
  if (value == null) {
    return undefined;
  }

  const values = Array.isArray(value)
    ? value.filter(Boolean)
    : [value];

  if (values.length === 0) {
    return undefined;
  }

  switch (label) {
    case "Chipset": {
      return values[0]
        .replace(/\s*\(.+\)/, "")
        .trim();
    }

    case "CPU": {
      return values[0]
        .replace(/\s*\(.+\)/, "")
        .trim();
    }

    case "GPU": {
      return values[0]
        .replace(/\s*\(.+\)/, "")
        .trim();
    }

    case "Battery": {
      // Prefer the largest battery capacity if multiple variants exist.
      let best: number | null = null;

      for (const item of values) {
        const matches = [
          ...item.matchAll(/(\d+)\s*mAh/gi),
        ];

        for (const match of matches) {
          const capacity = Number(match[1]);

          if (
            best === null ||
            capacity > best
          ) {
            best = capacity;
          }
        }
      }

      if (best !== null) {
        return `Li-Ion ${best} mAh`;
      }

      return values.find(
        (item) =>
          item.trim().length > 0 &&
          item !==
            "Market-dependent versions:",
      );
    }

    default:
      return values[0];
  }
}

export function getQuickSpecs(
  specs?: PhoneSpecs | null,
): QuickSpec[] {
  if (!specs) {
    return [];
  }

  const result: QuickSpec[] = [];

  for (const config of QUICK_SPECS) {
    const section = specs.sections.find(
      (section) =>
        section.title === config.section,
    );

    if (!section) {
      continue;
    }

    const field = section.fields.find(
      (field) =>
        field.label === config.field,
    );

    if (!field) {
      continue;
    }

    const value = getFieldValue(
      config.label,
      field.value,
    );

    if (!value) {
      continue;
    }

    result.push({
      label: config.label,
      value,
    });
  }

  return result;
}