import { Module } from "@nestjs/common";
import { AdminConfigService } from "./admin-config.service";
import { AdminConfigController } from "./admin-config.controller";
import { PrismaService } from "../prisma/prisma.service";

@Module({
  controllers: [AdminConfigController],
  providers: [AdminConfigService, PrismaService],
  exports: [AdminConfigService],
})
export class AdminConfigModule {}
