import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import cookieParser from "cookie-parser";
import { json, urlencoded } from "express";
import { PrismaService } from "./prisma/prisma.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: false,
  });

  /* ==============================
     Body Parsers
  ============================== */
  app.use(json({ limit: "10mb" }));
  app.use(urlencoded({ extended: true, limit: "10mb" }));

  /* ==============================
     Cookie Parser
  ============================== */
  app.use(cookieParser());

  /* ==============================
     CORS (Required for cookies)
  ============================== */
  app.enableCors({
    origin: [
      "http://localhost:5173",
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
    })
  );

  /* ==============================
     Prisma
  ============================== */
  const prisma = app.get(PrismaService);
  await prisma.$connect();
  await prisma.enableShutdownHooks(app);

  /* ==============================
     Start Server
  ============================== */
  const port = process.env.PORT || 3000;
  await app.listen(port);

  console.log(`🚀 Backend running on http://localhost:${port}`);
}

bootstrap();
