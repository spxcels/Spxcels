import { Controller, Get } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Controller("auto/metadata")
export class MetadataController {
  constructor(private prisma: PrismaService) {}

  @Get("tables")
  async getTables() {
    return await this.prisma.$queryRawUnsafe(`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema='public' AND table_type='BASE TABLE'
    `);
  }

  @Get("columns")
  async getColumns() {
    return await this.prisma.$queryRawUnsafe(`
      SELECT table_name, column_name, data_type, is_nullable
      FROM information_schema.columns
      WHERE table_schema='public'
    `);
  }
}
