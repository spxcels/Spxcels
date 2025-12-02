import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";

import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { PrismaModule } from "../prisma/prisma.module";
import { JwtStrategy } from "./jwt.strategy";

@Module({
  imports: [
    PrismaModule,
    PassportModule,

    JwtModule.register({
      secret: process.env.JWT_SECRET || "change-me",
      signOptions: {
        // Fully typed for NestJS v10+ strict mode (StringValue type)
        expiresIn:
          (process.env.JWT_EXPIRES_IN as `${number}${"s" | "m" | "h" | "d"}`) ??
          "7d",
      },
    }),
  ],

  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
