import { Injectable, BadRequestException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { validateDbUrl } from "../utils/validate-db-url";

@Injectable()
export class AdminConfigService {
  constructor(private prisma: PrismaService) {}

  async getDbUrl() {
    return this.prisma.adminConfig.findUnique({
      where: { key: "DATABASE_URL" },
    });
  }

  async updateDbUrl(value: string) {
    if (!validateDbUrl(value)) {
      throw new BadRequestException("Invalid database URL");
    }

    return this.prisma.adminConfig.upsert({
      where: { key: "DATABASE_URL" },
      update: { value },
      create: { key: "DATABASE_URL", value },
    });
  }
}
