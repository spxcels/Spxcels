import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

// 🔐 Authentication
import { AuthModule } from "./auth/auth.module";

// ⚙️ Prisma ORM
import { PrismaModule } from "./prisma/prisma.module";

// ⚙️ Admin Config
import { AdminConfigModule } from "./admin-config/admin-config.module";

// 🛠 Auto Admin System
import { AutoModule } from "./auto/auto.module";

// 🧠 Admin (phones, media, etc.)
import { AdminModule } from "./admin/admin.module";

@Module({
  imports: [
    /**
     * ✅ LOAD ENV VARIABLES FIRST
     * - Automatically loads .env from process cwd
     * - Required for Cloudinary, JWT, DB, etc.
     */
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    /**
     * ⚙️ Core modules
     */
    PrismaModule,
    AuthModule,

    /**
     * 🛠 Admin tools
     */
    AdminConfigModule,
    AutoModule,

    /**
     * 🧠 Domain Admin (phones, models, media)
     */
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
