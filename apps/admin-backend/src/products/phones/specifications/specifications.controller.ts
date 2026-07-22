import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from "@nestjs/common";

import { SpecificationsService } from "./specifications.service";

import {
  CreatePhoneSpecDto,
  UpdatePhoneSpecDto,
} from "./dto";

@Controller("products/phones/specifications")
export class SpecificationsController {
  constructor(
    private readonly specificationsService: SpecificationsService,
  ) {}

  /* =====================================================
     GET SPECIFICATIONS
  ===================================================== */

  @Get(":modelId")
  findOne(
    @Param("modelId", ParseIntPipe)
    modelId: number,
  ) {
    return this.specificationsService.findOne(
      modelId,
    );
  }

  /* =====================================================
     CREATE SPECIFICATIONS
  ===================================================== */

  @Post()
  create(
    @Body()
    dto: CreatePhoneSpecDto,
  ) {
    return this.specificationsService.create(
      dto,
    );
  }

  /* =====================================================
     UPDATE SPECIFICATIONS
  ===================================================== */

  @Put(":modelId")
  update(
    @Param("modelId", ParseIntPipe)
    modelId: number,

    @Body()
    dto: UpdatePhoneSpecDto,
  ) {
    console.log(
      "========== UPDATE SPECIFICATIONS ==========",
    );

    console.log(
      "Model ID:",
      modelId,
    );

    console.log(
      "DTO:",
      JSON.stringify(dto, null, 2),
    );

    return this.specificationsService.update(
      modelId,
      dto,
    );
  }

  /* =====================================================
     UPSERT SPECIFICATIONS
  ===================================================== */

  @Post("upsert")
  upsert(
    @Body()
    dto: CreatePhoneSpecDto,
  ) {
    return this.specificationsService.upsert(
      dto,
    );
  }
}