import {
  Body,
  Controller,
  Post,
} from "@nestjs/common";

import { OrganizerService } from "./organizer.service";

import {
  OrganizeSpecificationsDto,
} from "./dto";

import type {
  ParserResult,
} from "./parser/parser.types";

@Controller("products/phones/organizer")
export class OrganizerController {
  constructor(
    private readonly organizerService: OrganizerService,
  ) {}

  @Post("preview")
  preview(
    @Body()
    dto: OrganizeSpecificationsDto,
  ): ParserResult {
    return this.organizerService.organize(
      dto.raw,
    );
  }
}