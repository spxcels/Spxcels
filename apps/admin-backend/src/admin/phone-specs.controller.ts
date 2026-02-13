import {
  Controller,
  Get,
  Put,
  Param,
  Body,
  ParseIntPipe,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Controller("admin/models")
export class PhoneSpecsController {
  constructor(private prisma: PrismaService) {}

  /* =====================================================
     GET SPECS BY MODEL ID
     GET /api/admin/models/:modelId/specs
  ===================================================== */
  @Get(":modelId/specs")
  async getSpecs(@Param("modelId", ParseIntPipe) modelId: number) {
    return this.prisma.phoneSpecs.findUnique({
      where: { modelId },
    });
  }

  /* =====================================================
     UPSERT SPECS (CREATE IF NOT EXISTS)
     PUT /api/admin/models/:modelId/specs
  ===================================================== */
  @Put(":modelId/specs")
  async upsertSpecs(
    @Param("modelId", ParseIntPipe) modelId: number,
    @Body() data: any
  ) {
    return this.prisma.phoneSpecs.upsert({
      where: { modelId }, // because modelId is @unique
      update: {
        ...data,
      },
      create: {
        modelId,
        ...data,
      },
    });
  }
}
