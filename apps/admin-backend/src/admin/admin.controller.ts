import { Controller, Get, UseGuards, Req } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { Request } from "express";

interface RequestUser {
  id: number;
  email: string;
}

interface AuthenticatedRequest extends Request {
  user?: RequestUser;
}

@Controller("admin")
export class AdminController {
  @UseGuards(JwtAuthGuard)
  @Get("profile")
  getProfile(@Req() req: AuthenticatedRequest) {
    return req.user ?? null;
  }
}
