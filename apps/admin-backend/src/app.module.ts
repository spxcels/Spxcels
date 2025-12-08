import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

// 🔐 Authentication
import { AuthModule } from "./auth/auth.module";

// ⚙️ Prisma ORM
import { PrismaModule } from "./prisma/prisma.module";

// ⚙️ Admin Config module
import { AdminConfigModule } from "./admin-config/admin-config.module";

// 🛠 Auto admin system
import { AutoModule } from "./auto/auto.module";

@Module({
  imports: [
    // ⭐ Load environment variables FIRST
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env', // <-- CORRECT FIX
    }),

    // Order matters!
    AdminConfigModule, 
    PrismaModule,
    AuthModule,
    AutoModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
