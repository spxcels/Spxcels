import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ScheduleModule } from "@nestjs/schedule";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

// 🔐 Authentication
import { AuthModule } from "./auth/auth.module";

// ☁️ Cloudinary
import { CloudinaryModule } from "./cloudinary/cloudinary.module";

// ⚙️ Prisma ORM
import { PrismaModule } from "./prisma/prisma.module";

// ⚙️ Admin Config
import { AdminConfigModule } from "./admin-config/admin-config.module";

// 🧠 Admin
import { AdminModule } from "./admin/admin.module";

// 🔍 Search
import { SearchModule } from "./search/search.module";

// 🤖 Auto Admin System
import { AutoModule } from "./products/phones/auto/auto.module";

// 📱 Phone Domain
import { BrandsModule } from "./products/phones/brands/brands.module";
import { CardImageModule } from "./products/phones/media/card-image/card-image.module";
import { ModelsModule } from "./products/phones/models/models.module";
import { OrganizerModule } from "./products/phones/organizer/organizer.module";
import { SpecificationsModule } from "./products/phones/specifications/specifications.module";

@Module({
  imports: [
    // 🌍 Environment
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // ⏰ Scheduler
    ScheduleModule.forRoot(),

    // ⚙️ Core
    PrismaModule,
    AuthModule,
    CloudinaryModule,

    // ⚙️ Admin Configuration
    AdminConfigModule,

    // 🤖 Automation
    AutoModule,

    // 📱 Phone Domain
    BrandsModule,
    ModelsModule,
    SpecificationsModule,
    CardImageModule,
    OrganizerModule,

    // 🔍 Search
    SearchModule,

    // 🧠 Admin
    AdminModule,
  ],

  controllers: [
    AppController,
  ],

  providers: [
    AppService,
  ],
})
export class AppModule {}