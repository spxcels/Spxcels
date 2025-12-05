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

  // Load DATABASE_URL from AdminConfig (optional dynamic config)
  try {
    const adminConfigService = app.get(AdminConfigService);
    const dbConfig = await adminConfigService.getDbUrl();

    if (dbConfig?.value) {
      console.log("🔄 Using DATABASE_URL from AdminConfig");
      process.env.DATABASE_URL = dbConfig.value;
    } else {
      console.log("⚠️ Using default DATABASE_URL");
    }
  } catch (err) {
    console.error("⚠️ AdminConfig not available yet, using default DATABASE_URL");
  }

  // Prisma
  const prismaService = app.get(PrismaService);
  await prismaService.$connect();
  await prismaService.enableShutdownHooks(app);

  // CORS
  app.enableCors({
    origin: [
      process.env.ADMIN_FRONTEND_URL,
      process.env.WEB_FRONTEND_URL,
      "http://localhost:5173",
    ].filter(Boolean),
    credentials: true,
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

  // PORT for Render
  const port = process.env.PORT || 3000;

  // IMPORTANT: Bind to 0.0.0.0 for Render
  await app.listen(port, "0.0.0.0");

  console.log(`🚀 Backend running on port ${port}`);
}

bootstrap();
