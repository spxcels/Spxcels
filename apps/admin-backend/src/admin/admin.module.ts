import { Module } from "@nestjs/common";
import { AdminController } from "./admin.controller";
import { AdminAuthController } from "./admin-auth.controller";
import { AdminService } from "./admin.service";
import { PrismaService } from "../prisma/prisma.service";

@Module({
  controllers: [
    AdminController,
    AdminAuthController
  ],
  providers: [AdminService, PrismaService]
})
export class AdminModule {}
