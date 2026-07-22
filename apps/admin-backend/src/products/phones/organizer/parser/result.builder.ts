import { Injectable } from "@nestjs/common";

import type {
  ParsedSection,
  ParserResult,
} from "./parser.types";

@Injectable()
export class ResultBuilder {
  build(
    sections: ParsedSection[],
    warnings: string[],
    errors: string[] = [],
  ): ParserResult {
    return {
      sections,
      warnings,
      errors,
    };
  }
}