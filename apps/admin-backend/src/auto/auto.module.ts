import { Module } from "@nestjs/common";
import { MetadataController } from "./metadata.controller";
import { DataController } from "./data.controller";
import { StatsController } from "./stats.controller";   // ✅ add this
import { PrismaService } from "../prisma/prisma.service";

@Module({
  controllers: [
    MetadataController,
    DataController,
    StatsController,   // ✅ register new controller
  ],
  providers: [PrismaService],
})
export class AutoModule {}
