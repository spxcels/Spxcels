import { Injectable } from "@nestjs/common";

import { ParserService } from "./parser/parser.service";

import type {
  ParserResult,
} from "./parser/parser.types";

@Injectable()
export class OrganizerService {
  constructor(
    private readonly parser: ParserService,
  ) {}

  organize(
    raw: string,
  ): ParserResult {
    return this.parser.parse(raw);
  }
}