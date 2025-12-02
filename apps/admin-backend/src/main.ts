import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import cookieParser from "cookie-parser";
import { json, urlencoded } from "express"; 
import { PrismaService } from "./prisma/prisma.service";
import { AdminConfigService } from "./admin-config/admin-config.service";

async function bootstrap() {
  // 👇 IMPORTANT: enable body parser BEFORE creating modules
  const app = await NestFactory.create(AppModule, {
    bodyParser: false,
  });

  app.use(json({ limit: "10mb" }));
  app.use(urlencoded({ extended: true, limit: "10mb" }));

  // Load AdminConfig DB URL
  const adminConfigService = app.get(AdminConfigService);
  const dbConfig = await adminConfigService.getDbUrl();

  if (dbConfig?.value) {
    console.log("🔄 Using DATABASE_URL from AdminConfig");
    process.env.DATABASE_URL = dbConfig.value;
  } else {
    console.log("⚠️ Using default DATABASE_URL");
  }

  const prismaService = app.get(PrismaService);
  await prismaService.$disconnect();
  await prismaService.$connect();

  // CORS
  app.enableCors({
    origin: "http://localhost:5173",
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

  // Graceful shutdown
  await prismaService.enableShutdownHooks(app);

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`🚀 Backend running at http://localhost:${port}`);
}

bootstrap();
