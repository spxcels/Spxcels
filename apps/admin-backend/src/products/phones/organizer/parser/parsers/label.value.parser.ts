import { Injectable } from "@nestjs/common";

import type {
  ParsedField,
} from "../parser.types";

@Injectable()
export class LabelValueParser {
  parse(
    lines: string[],
  ): ParsedField[] {
    const fields: ParsedField[] = [];

    let current: ParsedField | null =
      null;

    for (const line of lines) {
      const text = line.trim();

      if (!text) {
        continue;
      }

      if (this.isLabel(text)) {
        if (current) {
          fields.push(current);
        }

        current = {
          label: text,
          value: [],
          variants: [],
        };

        continue;
      }

      if (!current) {
        continue;
      }

      current.value.push(text);
    }

    if (current) {
      fields.push(current);
    }

    return fields;
  }

  private isLabel(
    text: string,
  ): boolean {
    if (text.length > 50) {
      return false;
    }

    if (/^\d/.test(text)) {
      return false;
    }

    if (
      text.includes(":") ||
      text.includes(",") ||
      text.includes(";")
    ) {
      return false;
    }

    return true;
  }
}