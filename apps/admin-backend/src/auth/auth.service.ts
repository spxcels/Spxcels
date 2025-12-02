import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "../prisma/prisma.service";
import bcrypt from "bcryptjs";

interface AdminPayload {
  id: number;
  email: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService
  ) {}

  // --------------------------------------------------
  // VALIDATE ADMIN CREDENTIALS
  // --------------------------------------------------
  async validateAdmin(email: string, password: string) {
    const admin = await this.prisma.admin.findUnique({
      where: { email },
    });

    if (!admin) {
      throw new UnauthorizedException("Invalid email or password");
    }

    const passwordMatch = await bcrypt.compare(password, admin.password);
    if (!passwordMatch) {
      throw new UnauthorizedException("Invalid email or password");
    }

    return {
      id: admin.id,
      email: admin.email,
      name: admin.name,
    };
  }

  // --------------------------------------------------
  // LOGIN → CREATE JWT TOKEN
  // --------------------------------------------------
  login(adminPayload: AdminPayload) {
    const payload = {
      sub: adminPayload.id,
      email: adminPayload.email,
    };

    return this.jwtService.sign(payload);
  }

  // --------------------------------------------------
  // VERIFY JWT TOKEN + RETURN PAYLOAD
  // --------------------------------------------------
  getAdminFromToken(token: string) {
    try {
      return this.jwtService.verify(token) as {
        sub: number;
        email: string;
        iat: number;
        exp: number;
      };
    } catch {
      throw new UnauthorizedException("Invalid or expired token");
    }
  }
}
