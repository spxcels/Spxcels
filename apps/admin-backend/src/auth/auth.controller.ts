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
import bcrypt from "bcryptjs";

// ------------------------------
// DTOs
// ------------------------------
class LoginDto {
  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(1)
  password!: string;
}

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly prisma: PrismaService
  ) {}

  // ==================================================================
  // LOGIN
  // ==================================================================
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

    const isProd = process.env.NODE_ENV === "production";

    res.cookie(process.env.COOKIE_NAME || "spex_token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: isProd,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    return {
      id: admin.id,
      email: admin.email,
      name: admin.name,
    };
  }

  // ==================================================================
  // AUTH ME
  // ==================================================================
  @UseGuards(JwtAuthGuard)
  @Get("me")
  me(@Req() req: AuthenticatedRequest) {
    return req.user;
  }

  // ==================================================================
  // CHANGE PASSWORD (LOGGED IN USER)
  // ==================================================================
  @UseGuards(JwtAuthGuard)
  @Patch("change-password")
  async changePassword(
    @Body() body: { oldPassword: string; newPassword: string },
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

    const hashed = await bcrypt.hash(newPassword, 10);

    await this.prisma.admin.update({
      where: { id: admin.id },
      data: { password: hashed },
    });

    return { ok: true };
  }

  // ==================================================================
  // LOGOUT
  // ==================================================================
  @Post("logout")
  logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie(process.env.COOKIE_NAME || "spex_token");
    return { ok: true };
  }
}
