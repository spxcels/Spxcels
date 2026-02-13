import { Module } from "@nestjs/common";
import { AdminController } from "./admin.controller";
import { PhoneMediaController } from "./phone-media.controller";
import { PhoneCardImageController } from "./phone-card-image.controller";
import { PhoneSpecsController } from "./phone-specs.controller";
import { AffiliateLinksController } from "./affiliate-links.controller"; // ✅ ADD THIS

import { AdminService } from "./admin.service";
import { PrismaService } from "../prisma/prisma.service";

@Module({
  controllers: [
    AdminController,
    PhoneMediaController,
    PhoneCardImageController,
    PhoneSpecsController,
    AffiliateLinksController, // ✅ REGISTER HERE
  ],
  providers: [
    AdminService,
    PrismaService,
  ],
})
export class AdminModule {}
