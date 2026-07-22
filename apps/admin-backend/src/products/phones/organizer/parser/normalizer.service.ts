import { Injectable } from "@nestjs/common";

import type {
  ParsedField,
  ParsedSection,
} from "./parser.types";

@Injectable()
export class NormalizerService {
  normalize(
    sections: ParsedSection[],
  ): ParsedSection[] {
    return sections.map((section) => ({
      ...section,
      title: this.normalizeTitle(
        section.title,
      ),
      fields: section.fields.map(
        (field) => ({
          ...field,
          label: this.normalizeLabel(
            field.label,
          ),
        }),
      ),
    }));
  }

  private normalizeTitle(
    title: string,
  ): string {
    return title.trim();
  }

  private normalizeLabel(
    label: string,
  ): string {
    return label.trim();
  }
}