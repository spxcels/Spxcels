import { Injectable } from "@nestjs/common";

import { TokenizerService } from "./tokenizer.service";
import { NormalizerService } from "./normalizer.service";
import { ValidatorService } from "./validator.service";
import { ResultBuilder } from "./result.builder";

import { GsmarenaParser } from "./parsers/gsmarena.parser";
import { VariantParser } from "./parsers/variant.parser";

import type {
  ParserResult,
} from "./parser.types";

@Injectable()
export class ParserService {
  constructor(
    private readonly tokenizer: TokenizerService,
    private readonly gsmarenaParser: GsmarenaParser,
    private readonly variantParser: VariantParser,
    private readonly normalizer: NormalizerService,
    private readonly validator: ValidatorService,
    private readonly resultBuilder: ResultBuilder,
  ) {}

  parse(
    raw: string,
  ): ParserResult {
    const text = raw.trim();

    if (!text) {
      return this.resultBuilder.build(
        [],
        ["No specifications provided."],
        [],
      );
    }

    // ------------------------------------------
    // Tokenize
    // ------------------------------------------

    const lines =
      this.tokenizer.tokenize(text);

    // ------------------------------------------
    // Parse GSMArena rows
    // ------------------------------------------

    let sections =
      this.gsmarenaParser.parse(
        lines,
      );

    // ------------------------------------------
    // Parse variants
    // ------------------------------------------

    sections =
      sections.map(
        (section) => ({
          ...section,
          fields:
            section.fields.map(
              (field) => ({
                ...field,
                variants:
                  this.variantParser.parse(
                    field.value,
                  ),
              }),
            ),
        }),
      );

    // ------------------------------------------
    // Normalize
    // ------------------------------------------

    sections =
      this.normalizer.normalize(
        sections,
      );

    // ------------------------------------------
    // Validate
    // ------------------------------------------

    const warnings =
      this.validator.validate(
        sections,
      );

    // ------------------------------------------
    // Build Result
    // ------------------------------------------

    return this.resultBuilder.build(
      sections,
      warnings,
      [],
    );
  }
}