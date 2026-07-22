import {
  BadRequestException,
  ValidationPipe,
} from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import cookieParser from "cookie-parser";
import {
  json,
  urlencoded,
} from "express";

import { AppModule } from "./app.module";
import { PrismaService } from "./prisma/prisma.service";

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
    {
      bodyParser: false,
    },
  );

  /* ==============================
     Body Parsers
  ============================== */

  app.use(
    json({
      limit: "10mb",
    }),
  );

  app.use(
    urlencoded({
      extended: true,
      limit: "10mb",
    }),
  );

  /* ==============================
     Cookie Parser
  ============================== */

  app.use(cookieParser());

  /* ==============================
     CORS
  ============================== */

  app.enableCors({
    origin: [
      "http://localhost:3001", // Public Website (Next.js)
      "http://localhost:5173", // Admin Frontend (Vite)
      "https://spxcel-admin-frontend.vercel.app",
    ],
    credentials: true,
  });

  /* ==============================
     Global Validation
  ============================== */

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,

      exceptionFactory: (
        validationErrors,
      ) => {
        console.log(
          "\n========== VALIDATION ERRORS ==========",
        );

        console.dir(
          validationErrors,
          {
            depth: null,
          },
        );

        return new BadRequestException(
          validationErrors,
        );
      },
    }),
  );

  /* ==============================
     Prisma
  ============================== */

  const prisma =
    app.get(PrismaService);

  await prisma.$connect();

  await prisma.enableShutdownHooks(
    app,
  );

  /* ==============================
     Start Server
  ============================== */

  const port =
    process.env.PORT || 3000;

  await app.listen(port);

  console.log(
    `🚀 Backend running on http://localhost:${port}`,
  );
}

void bootstrap();