import { Module } from "@nestjs/common";

import { PrismaModule } from "../../../prisma/prisma.module";

import { SpecificationsController } from "./specifications.controller";
import { SpecificationsService } from "./specifications.service";

@Module({
  imports: [PrismaModule],

  controllers: [
    SpecificationsController,
  ],

  providers: [
    SpecificationsService,
  ],

  exports: [
    SpecificationsService,
  ],
})
export class SpecificationsModule {}