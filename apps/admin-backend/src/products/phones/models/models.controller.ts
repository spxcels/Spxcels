import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from "@nestjs/common";

import { ModelsService } from "./models.service";

import {
  CreateModelDto,
  UpdateModelDto,
} from "./dto";

@Controller("products/phones/models")
export class ModelsController {
  constructor(
    private readonly modelsService: ModelsService,
  ) {}

  /* =====================================================
     GET ALL MODELS
  ===================================================== */

  @Get()
  findAll(
    @Query("brand")
    brandId?: string,
  ) {
    return this.modelsService.findAll(
      brandId
        ? Number(brandId)
        : undefined,
    );
  }

  /* =====================================================
     GET MODEL BY ID
  ===================================================== */

  @Get(":id")
  findOne(
    @Param("id", ParseIntPipe)
    id: number,
  ) {
    return this.modelsService.findOne(id);
  }

  /* =====================================================
     CREATE MODEL
  ===================================================== */

  @Post()
  create(
    @Body()
    dto: CreateModelDto,
  ) {
    return this.modelsService.create(dto);
  }

  /* =====================================================
     UPDATE MODEL
  ===================================================== */

  @Patch(":id")
  update(
    @Param("id", ParseIntPipe)
    id: number,

    @Body()
    dto: UpdateModelDto,
  ) {
    return this.modelsService.update(
      id,
      dto,
    );
  }

  /* =====================================================
     DELETE MODEL
  ===================================================== */

  @Delete(":id")
  remove(
    @Param("id", ParseIntPipe)
    id: number,
  ) {
    return this.modelsService.remove(id);
  }
}