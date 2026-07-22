import { Injectable } from "@nestjs/common";

import type {
  ParsedVariant,
} from "../parser.types";

@Injectable()
export class VariantParser {
  parse(
    values: string[],
  ): ParsedVariant[] {
    return values.map((line) => {
      const text = line.trim();

      // Match "... - A3526"

      const match = text.match(
        /^(.*)\s+-\s+([A-Za-z0-9-]+)$/,
      );

      if (!match) {
        return {
          value: text,
        };
      }

      return {
        value: match[1].trim(),
        model: match[2].trim(),
      };
    });
  }
}