import {
  Controller,
  Post,
  Body,
  Res,
  HttpCode,
  UnauthorizedException,
  UseGuards,
  Req,
  Get,
  Patch,
} from "@nestjs/common";

import type { Response } from "express";
import { AuthService } from "./auth.service";
import { PrismaService } from "../prisma/prisma.service";
import { JwtAuthGuard } from "./jwt-auth.guard";
import type { AuthenticatedRequest } from "../types/auth-request";

import { IsEmail, IsString, MinLength } from "class-validator";
import * as bcrypt from "bcrypt";

// ==============================
// DTOs
// ==============================
class LoginDto {
  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(1)
  password!: string;
}

class ChangePasswordDto {
  @IsString()
  @MinLength(1)
  oldPassword!: string;

  @IsString()
  @MinLength(1)
  newPassword!: string;
}

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly prisma: PrismaService
  ) {}

  // =====================================================
  // LOGIN
  // =====================================================
  @HttpCode(200)
  @Post("login")
  async login(
    @Body() body: LoginDto,
    @Res({ passthrough: true }) res: Response
  ) {
    const { email, password } = body;

    const admin = await this.prisma.admin.findUnique({
      where: { email },
    });

    if (!admin) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const passwordMatch = await bcrypt.compare(password, admin.password);
    if (!passwordMatch) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const token = this.authService.login({
      id: admin.id,
      email: admin.email,
    });

    // 🔑 CRITICAL FIX: cross-site cookie
    res.cookie(process.env.COOKIE_NAME ?? "spex_token", token, {
      httpOnly: true,
      sameSite: "none", // ✅ REQUIRED for Vercel ↔ Render
      secure: true,     // ✅ REQUIRED when sameSite = none
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    });

    return {
      id: admin.id,
      email: admin.email,
      name: admin.name,
    };
  }

  // =====================================================
  // AUTH ME
  // =====================================================
  @UseGuards(JwtAuthGuard)
  @Get("me")
  me(@Req() req: AuthenticatedRequest) {
    return req.user;
  }

  // =====================================================
  // CHANGE PASSWORD (LOGGED-IN ADMIN)
  // =====================================================
  @UseGuards(JwtAuthGuard)
  @Patch("change-password")
  async changePassword(
    @Body() body: ChangePasswordDto,
    @Req() req: AuthenticatedRequest
  ) {
    const { oldPassword, newPassword } = body;

    const admin = await this.prisma.admin.findUnique({
      where: { id: req.user.id },
    });

    if (!admin) {
      throw new UnauthorizedException("User not found");
    }

    const oldMatch = await bcrypt.compare(oldPassword, admin.password);
    if (!oldMatch) {
      throw new UnauthorizedException("Incorrect old password");
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await this.prisma.admin.update({
      where: { id: admin.id },
      data: { password: hashedPassword },
    });

    return { ok: true };
  }

  // =====================================================
  // LOGOUT
  // =====================================================
  @Post("logout")
  logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie(process.env.COOKIE_NAME ?? "spex_token", {
      sameSite: "none",
      secure: true,
    });
    return { ok: true };
  }
}
