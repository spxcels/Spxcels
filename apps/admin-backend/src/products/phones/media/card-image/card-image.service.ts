import { 
  BadRequestException, 
  Injectable, 
  NotFoundException 
} from "@nestjs/common";

import { CloudinaryService } from "../../../../cloudinary/cloudinary.service";
import { PrismaService } from "../../../../prisma/prisma.service";

@Injectable()
export class CardImageService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  async get(modelId: number) {
    const model = await this.prisma.phoneModel.findUnique({
      where: { id: modelId },
      select: {
        id: true,
        name: true,
        slug: true,
        cardImage: true,
      },
    });

    if (!model) {
      throw new NotFoundException("Phone model not found.");
    }

    return model;
  }

  async upload(modelId: number, file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException("Image file is required.");
    }

    const model = await this.prisma.phoneModel.findUnique({
      where: { id: modelId },
      include: { brand: true },
    });

    if (!model) {
      throw new NotFoundException("Phone model not found.");
    }

    const uploadedImage = await this.cloudinaryService.uploadCardImage(
      file,
      model.brand.slug,
      model.slug,
    );

    const updatedModel = await this.prisma.phoneModel.update({
      where: { id: modelId },
      data: { cardImage: uploadedImage.secure_url },
      select: {
        id: true,
        name: true,
        slug: true,
        cardImage: true,
      },
    });

    return {
      success: true,
      message: "Card image uploaded successfully.",
      model: updatedModel,
    };
  }

  async remove(modelId: number) {
    const model = await this.prisma.phoneModel.findUnique({
      where: { id: modelId },
      include: { brand: true },
    });

    if (!model) {
      throw new NotFoundException("Phone model not found.");
    }

    if (model.cardImage) {
      await this.cloudinaryService.deleteCardImage(
        model.brand.slug,
        model.slug,
      );
    }

    const updatedModel = await this.prisma.phoneModel.update({
      where: { id: modelId },
      data: { cardImage: null },
      select: {
        id: true,
        name: true,
        slug: true,
        cardImage: true,
      },
    });

    return {
      success: true,
      message: "Card image removed successfully.",
      model: updatedModel,
    };
  }
}
