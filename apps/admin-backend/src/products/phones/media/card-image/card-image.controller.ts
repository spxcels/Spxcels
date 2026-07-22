import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";

import { CardImageService } from "./card-image.service";

@Controller("admin/products/phones/models/:modelId/card-image")
export class CardImageController {
  constructor(private readonly cardImageService: CardImageService) {}

  @Get()
  getCardImage(@Param("modelId", ParseIntPipe) modelId: number) {
    return this.cardImageService.get(modelId);
  }

  @Post()
  @UseInterceptors(FileInterceptor("image"))
  uploadCardImage(
    @Param("modelId", ParseIntPipe) modelId: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.cardImageService.upload(modelId, file);
  }

  @Delete()
  deleteCardImage(@Param("modelId", ParseIntPipe) modelId: number) {
    return this.cardImageService.remove(modelId);
  }
}
