import {
  Controller,
  Get,
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
export class PhoneMediaController {
  constructor(private readonly prisma: PrismaService) {}

  /* ===============================
     GET: Slider media (ALL images)
  =============================== */
  @Get(":modelId/media")
  async getModelMedia(@Param("modelId") modelId: string) {
    return this.prisma.phoneMedia.findMany({
      where: { modelId: Number(modelId) },
      orderBy: { createdAt: "asc" }, // slider order
    });
  }

  /* ===============================
     POST: Upload slider image
  =============================== */
  @Post(":modelId/media")
  @UseInterceptors(
    FileInterceptor("file", {
      storage: phoneMediaStorage,
      limits: { fileSize: 5 * 1024 * 1024 },
    }),
  )
  async uploadModelMedia(
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

    return this.prisma.phoneMedia.create({
      data: {
        modelId: Number(modelId),
        url: file.path,
        publicId: file.filename,
        type: "IMAGE",
      },
    });
  }

  /* ===============================
     DELETE: Remove slider image
  =============================== */
  @Delete(":modelId/media/:mediaId")
  async deleteModelMedia(
    @Param("modelId") modelId: string,
    @Param("mediaId") mediaId: string,
  ) {
    const media = await this.prisma.phoneMedia.findFirst({
      where: {
        id: Number(mediaId),
        modelId: Number(modelId),
      },
    });

    if (!media) {
      throw new NotFoundException("Media not found");
    }

    // Cloudinary cleanup (best effort)
    if (media.publicId) {
      try {
        await cloudinary.uploader.destroy(media.publicId);
      } catch (err) {
        console.error("Cloudinary delete failed:", err);
      }
    }

    await this.prisma.phoneMedia.delete({
      where: { id: media.id },
    });

    return { success: true };
  }
}
