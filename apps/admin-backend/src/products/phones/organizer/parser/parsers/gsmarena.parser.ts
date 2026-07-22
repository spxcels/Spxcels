import { Injectable } from "@nestjs/common";

import type {
  ParsedField,
  ParsedSection,
} from "../parser.types";

@Injectable()
export class GsmarenaParser {
  private readonly sectionTitles = new Set([
    "Versions",
    "Network",
    "Launch",
    "Body",
    "Display",
    "Platform",
    "Memory",
    "Main Camera",
    "Selfie camera",
    "Sound",
    "Comms",
    "Features",
    "Battery",
    "Misc",
    "Our Tests",
    "Performance",
    "EU LABEL",
  ]);

  parse(
    lines: string[],
  ): ParsedSection[] {
    const sections: ParsedSection[] = [];

    let currentSection: ParsedSection | null =
      null;

    let currentField: ParsedField | null =
      null;

    for (const rawLine of lines) {
      const columns = rawLine
        .split("\t")
        .map((column) => column.trim());

      while (
        columns.length > 0 &&
        columns[columns.length - 1] === ""
      ) {
        columns.pop();
      }

      if (columns.length === 0) {
        continue;
      }

      const first =
        columns[0] ?? "";

      const second =
        columns[1] ?? "";

      const remaining =
        columns
          .slice(2)
          .join(" ")
          .trim();

      // ------------------------------------------
      // New Section
      // ------------------------------------------

      if (
        this.sectionTitles.has(first)
      ) {
        currentSection = {
          title: first,
          fields: [],
        };

        sections.push(currentSection);

        currentField = null;

        if (columns.length >= 2) {
          currentField = {
            label: second,
            value: remaining
              ? [remaining]
              : [],
            variants: [],
          };

          currentSection.fields.push(
            currentField,
          );
        }

        continue;
      }

      // ------------------------------------------
      // New Field
      // ------------------------------------------

      if (
        currentSection !== null &&
        columns.length >= 2 &&
        first
      ) {
        currentField = {
          label: first,
          value: [],
          variants: [],
        };

        if (second) {
          currentField.value.push(
            second,
          );
        }

        if (remaining) {
          currentField.value.push(
            remaining,
          );
        }

        currentSection.fields.push(
          currentField,
        );

        continue;
      }

      // ------------------------------------------
      // Continuation Line
      // ------------------------------------------

      if (currentField !== null) {
        const continuation =
          columns.join(" ").trim();

        if (continuation) {
          currentField.value.push(
            continuation,
          );
        }

        continue;
      }
    }

    return sections;
  }
}