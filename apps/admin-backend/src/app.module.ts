import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

// 🔐 Authentication
import { AuthModule } from "./auth/auth.module";

// ⚙️ Prisma ORM (uses AdminConfig for dynamic DB url)
import { PrismaModule } from "./prisma/prisma.module";

// ⚙️ Admin Config module (must load BEFORE PrismaModule)
import { AdminConfigModule } from "./admin-config/admin-config.module";

// 🛠 Auto admin system
import { AutoModule } from "./auto/auto.module";

@Module({
  imports: [
    // Order matters!

    AdminConfigModule, // ⭐ must load first (Prisma depends on it)
    PrismaModule,      // ORM (dynamic DB URL enabled)
    AuthModule,        // Login, JWT

    AutoModule,        // Your admin auto API
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
