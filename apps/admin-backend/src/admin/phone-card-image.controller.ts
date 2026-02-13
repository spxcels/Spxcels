import {
  Controller,
  Post,
  Delete,
  Param,
  UploadedFile,
  UseInterceptors,
  NotFoundException,
  InternalServerErrorException,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import type { Express } from "express";
import { v2 as cloudinary } from "cloudinary";

import { PrismaService } from "../prisma/prisma.service";
import { phoneMediaStorage } from "../utils/cloudinary-storage";

@Controller("admin/models")
export class PhoneCardImageController {
  constructor(private readonly prisma: PrismaService) {}

  /* ===============================
     POST: Upload / replace card image
  =============================== */
  @Post(":modelId/card-image")
  @UseInterceptors(
    FileInterceptor("file", {
      storage: phoneMediaStorage,
      limits: { fileSize: 5 * 1024 * 1024 },
    }),
  )
  async uploadCardImage(
    @Param("modelId") modelId: string,
    @UploadedFile()
    file: Express.Multer.File & {
      path: string;
      filename: string;
    },
  ) {
    if (!file) {
      throw new InternalServerErrorException("File upload failed");
    }

    const model = await this.prisma.phoneModel.findUnique({
      where: { id: Number(modelId) },
    });

    if (!model) {
      throw new NotFoundException("Phone model not found");
    }

    // Optional: cleanup old card image
    if (model.image) {
      try {
        const publicId = model.image.split("/").pop()?.split(".")[0];
        if (publicId) {
          await cloudinary.uploader.destroy(publicId);
        }
      } catch (err) {
        console.error("Old card image cleanup failed:", err);
      }
    }

    const updated = await this.prisma.phoneModel.update({
      where: { id: Number(modelId) },
      data: { image: file.path },
    });

    return {
      success: true,
      image: updated.image,
    };
  }

  /* ===============================
     DELETE: Remove card image
  =============================== */
  @Delete(":modelId/card-image")
  async deleteCardImage(@Param("modelId") modelId: string) {
    const model = await this.prisma.phoneModel.findUnique({
      where: { id: Number(modelId) },
    });

    if (!model || !model.image) {
      throw new NotFoundException("Card image not found");
    }

    try {
      const publicId = model.image.split("/").pop()?.split(".")[0];
      if (publicId) {
        await cloudinary.uploader.destroy(publicId);
      }
    } catch (err) {
      console.error("Cloudinary delete failed:", err);
    }

    await this.prisma.phoneModel.update({
      where: { id: Number(modelId) },
      data: { image: null },
    });

    return { success: true };
  }
}
