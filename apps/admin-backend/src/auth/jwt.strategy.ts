import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import type { Request } from "express";

interface JwtPayload {
  sub: number;
  email: string;
  iat?: number;
  exp?: number;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request | undefined): string | null => {
          const cookieName =
            process.env.COOKIE_NAME || "spxcel_token";

          const token = req?.cookies?.[cookieName];

          console.log(
            "🔐 JWT COOKIE CHECK:",
            {
              cookieName,
              hasRequest: !!req,
              hasCookies: !!req?.cookies,
              hasToken: typeof token === "string",
            },
          );

          return typeof token === "string"
            ? token
            : null;
        },
      ]),

      ignoreExpiration: false,

      secretOrKey:
        process.env.JWT_SECRET || "change-me",
    });
  }

  validate(payload: JwtPayload) {
    console.log(
      "✅ JWT VALIDATED:",
      {
        id: payload.sub,
        email: payload.email,
      },
    );

    return {
      id: payload.sub,
      email: payload.email,
    };
  }
}