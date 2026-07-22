import { Controller, Get } from "@nestjs/common";
import { PrismaService } from "../../../prisma/prisma.service";

@Controller("auto/stats")
export class StatsController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getStats() {
    const brands = await this.prisma.phoneBrand.count();
    const models = await this.prisma.phoneModel.count();
    const specs = await this.prisma.phoneSpecs.count();
    const media = await this.prisma.phoneMedia.count();
    const affiliates = await this.prisma.affiliateLink.count();
    const admins = await this.prisma.admin.count();

    return {
      brands,
      models,
      specs,
      media,
      affiliates,
      admins,
    };
  }
}
