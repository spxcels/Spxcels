import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Controller("admin/models")
export class AffiliateLinksController {
  constructor(private prisma: PrismaService) {}

  /* =========================
     GET ALL FOR MODEL
  ========================= */
  @Get(":modelId/affiliates")
  async getAll(
    @Param("modelId", ParseIntPipe) modelId: number
  ) {
    return this.prisma.affiliateLink.findMany({
      where: { modelId },
      orderBy: { createdAt: "desc" },
    });
  }

  /* =========================
     CREATE
  ========================= */
  @Post(":modelId/affiliates")
  async create(
    @Param("modelId", ParseIntPipe) modelId: number,
    @Body()
    data: {
      storeName: string;
      url: string;
      price?: string;
      currency?: string;
    }
  ) {
    return this.prisma.affiliateLink.create({
      data: {
        modelId,
        storeName: data.storeName.trim(),
        url: data.url.trim(),
        price: data.price,
        currency: data.currency,
      },
    });
  }

  /* =========================
     UPDATE
  ========================= */
  @Put(":modelId/affiliates/:id")
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body()
    data: {
      storeName?: string;
      url?: string;
      price?: string;
      currency?: string;
    }
  ) {
    return this.prisma.affiliateLink.update({
      where: { id },
      data,
    });
  }

  /* =========================
     DELETE
  ========================= */
  @Delete(":modelId/affiliates/:id")
  async delete(
    @Param("id", ParseIntPipe) id: number
  ) {
    return this.prisma.affiliateLink.delete({
      where: { id },
    });
  }
}
