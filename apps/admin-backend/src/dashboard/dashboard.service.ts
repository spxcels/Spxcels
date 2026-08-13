import { Injectable } from "@nestjs/common";

import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class DashboardService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async getStats() {
    const [
      brands,
      models,
      specs,
      media,
      affiliates,
      admins,
    ] = await Promise.all([
      this.prisma.phoneBrand.count(),
      this.prisma.phoneModel.count(),
      this.prisma.phoneSpecs.count(),
      this.prisma.phoneMedia.count(),
      this.prisma.affiliateLink.count(),
      this.prisma.admin.count(),
    ]);

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
