import { Module } from "@nestjs/common";

import { OrganizerController } from "./organizer.controller";
import { OrganizerService } from "./organizer.service";

import { ParserService } from "./parser/parser.service";
import { TokenizerService } from "./parser/tokenizer.service";
import { NormalizerService } from "./parser/normalizer.service";
import { ValidatorService } from "./parser/validator.service";
import { ResultBuilder } from "./parser/result.builder";

import { GsmarenaParser } from "./parser/parsers/gsmarena.parser";
import { VariantParser } from "./parser/parsers/variant.parser";

@Module({
  controllers: [
    OrganizerController,
  ],
  providers: [
    OrganizerService,

    ParserService,

    TokenizerService,
    NormalizerService,
    ValidatorService,
    ResultBuilder,

    GsmarenaParser,
    VariantParser,
  ],
})
export class OrganizerModule {}