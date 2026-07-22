import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from "@nestjs/common";

import { BrandsService } from "./brands.service";

import {
  CreateBrandDto,
  UpdateBrandDto,
} from "./dto";

@Controller("products/phones/brands")
export class BrandsController {
  constructor(
    private readonly brandsService: BrandsService,
  ) {}

  /* =====================================================
     GET ALL BRANDS
  ===================================================== */

  @Get()
  findAll() {
    return this.brandsService.findAll();
  }

  /* =====================================================
     GET BRAND BY ID
  ===================================================== */

  @Get(":id")
  findOne(
    @Param("id", ParseIntPipe)
    id: number,
  ) {
    return this.brandsService.findOne(id);
  }

  /* =====================================================
     CREATE BRAND
  ===================================================== */

  @Post()
  create(
    @Body()
    dto: CreateBrandDto,
  ) {
    return this.brandsService.create(dto);
  }

  /* =====================================================
     UPDATE BRAND
  ===================================================== */

  @Patch(":id")
  update(
    @Param("id", ParseIntPipe)
    id: number,

    @Body()
    dto: UpdateBrandDto,
  ) {
    return this.brandsService.update(
      id,
      dto,
    );
  }

  /* =====================================================
     DELETE BRAND
  ===================================================== */

  @Delete(":id")
  remove(
    @Param("id", ParseIntPipe)
    id: number,
  ) {
    return this.brandsService.remove(id);
  }
}