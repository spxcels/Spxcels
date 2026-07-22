import { Module } from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";

import { CloudinaryModule } from "../../../../cloudinary/cloudinary.module";
import { PrismaModule } from "../../../../prisma/prisma.module";

import { CardImageController } from "./card-image.controller";
import { CardImageService } from "./card-image.service";

@Module({
  imports: [
    PrismaModule,
    CloudinaryModule,
    MulterModule.register({
      limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB
    }),
  ],
  controllers: [CardImageController],
  providers: [CardImageService],
  exports: [CardImageService],
})
export class CardImageModule {}
