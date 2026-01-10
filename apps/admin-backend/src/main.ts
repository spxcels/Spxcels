import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import cookieParser from "cookie-parser";
import { json, urlencoded } from "express";
import { PrismaService } from "./prisma/prisma.service";
import { AdminConfigService } from "./admin-config/admin-config.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: false,
  });

  // Body parser
  app.use(json({ limit: "10mb" }));
  app.use(urlencoded({ extended: true, limit: "10mb" }));

  // Load DATABASE_URL from AdminConfig
  try {
    const adminConfigService = app.get(AdminConfigService);
    const dbConfig = await adminConfigService.getDbUrl();

    if (dbConfig?.value) {
      console.log("🔄 Using DATABASE_URL from AdminConfig");
      process.env.DATABASE_URL = dbConfig.value;
    }
  } catch {
    console.warn("⚠️ Using default DATABASE_URL");
  }

  // Prisma
  const prismaService = app.get(PrismaService);
  await prismaService.$connect();
  await prismaService.enableShutdownHooks(app);

  // ✅ CORS — EXPLICIT, NO GUESSING
  app.enableCors({
    origin: [
      "https://spxcel-admin-frontend.vercel.app", // ✅ PROD
      "http://localhost:5173",                    // ✅ DEV
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  });

  // Cookies
  app.use(cookieParser());

  // Validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    })
  );

  const port = process.env.PORT || 10000;
  await app.listen(port, "0.0.0.0");

  console.log(`🚀 Backend running on port ${port}`);
}

bootstrap();
