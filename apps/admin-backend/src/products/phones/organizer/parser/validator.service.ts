import { Injectable } from "@nestjs/common";

import type {
  ParsedSection,
} from "./parser.types";

@Injectable()
export class ValidatorService {
  validate(
    sections: ParsedSection[],
  ): string[] {
    const warnings: string[] = [];

    for (const section of sections) {
      if (!section.fields.length) {
        warnings.push(
          `Section "${section.title}" has no fields.`,
        );
      }

      for (const field of section.fields) {
        if (!field.value.length) {
          warnings.push(
            `"${field.label}" has no value.`,
          );
        }
      }
    }

    return warnings;
  }
}