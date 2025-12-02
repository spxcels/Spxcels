import {
  Controller,
  Get,
  Patch,
  UseGuards,
  Req,
  Body,
  BadRequestException
} from "@nestjs/common";
import type { Request } from "express";

import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { AdminService } from "./admin.service";
import { ChangePasswordDto } from "./dto/change-password.dto";

// ✅ FIXED — CORRECT IMPORT
import type { AuthenticatedRequest } from "../types/auth-request";

@Controller("admin/auth")
export class AdminAuthController {
  constructor(private adminService: AdminService) {}

  @UseGuards(JwtAuthGuard)
  @Get("me")
  getLoggedUser(@Req() req: AuthenticatedRequest) {
    return { userId: req.user.id };
  }

  @UseGuards(JwtAuthGuard)
  @Patch("change-password")
  async changePassword(
    @Req() req: AuthenticatedRequest,
    @Body() dto: ChangePasswordDto
  ) {
    if (!dto.oldPassword || !dto.newPassword) {
      throw new BadRequestException("Missing password fields");
    }

    return this.adminService.changePassword(
      req.user.id,
      dto.oldPassword,
      dto.newPassword
    );
  }
}
