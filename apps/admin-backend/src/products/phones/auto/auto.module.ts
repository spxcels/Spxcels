import { Module } from "@nestjs/common";

import { MetadataController } from "./metadata.controller";
import { DataController } from "./data.controller";
import { StatsController } from "./stats.controller";

import { PrismaService } from "../../../prisma/prisma.service";

import { CreateModelService } from "./engine/create-model.service";
import { AutomationService } from "./automation.service";
import { AutomationGateway } from "./gateway/automation.gateway";

@Module({
  controllers: [
    MetadataController,
    DataController,
    StatsController,
  ],

  providers: [
    PrismaService,

    CreateModelService,
    AutomationService,
    AutomationGateway,
  ],

  exports: [
    CreateModelService,
    AutomationService,
    AutomationGateway,
  ],
})
export class AutoModule {}