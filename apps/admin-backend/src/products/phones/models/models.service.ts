import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "../../../prisma/prisma.service";
import { CreateModelDto, UpdateModelDto } from "./dto";

@Injectable()
export class ModelsService {
  constructor(private readonly prisma: PrismaService) {}

  /* =====================================================
     MODEL RESPONSE MAPPER
  ===================================================== */
  private mapModel(model: any) {
    return {
      id: model.id,
      name: model.name,
      slug: model.slug,
      brandId: model.brandId,
      brand: model.brand.name,
      image: model.cardImage,
      colors: model.colors,
      variants: model.variants,
      automationStatus: model.automationStatus,
      hasSpecifications: model.specs !== null,
      hasCardImage: model.cardImage !== null,
      createdAt: model.createdAt,
      updatedAt: model.updatedAt,
    };
  }

  /* =====================================================
     GET ALL MODELS
  ===================================================== */
  async findAll(brandId?: number) {
    const models = await this.prisma.phoneModel.findMany({
      where: brandId ? { brandId } : undefined,
      orderBy: { name: "asc" },
      include: {
        brand: { select: { id: true, name: true } },
        specs: { select: { id: true } },
      },
    });

    return models.map((model) => this.mapModel(model));
  }

  /* =====================================================
     GET MODEL BY ID
  ===================================================== */
  async findOne(id: number) {
    const model = await this.prisma.phoneModel.findUnique({
      where: { id },
      include: {
        brand: { select: { id: true, name: true } },
        specs: { select: { id: true } },
      },
    });

    if (!model) {
      throw new NotFoundException("Model not found");
    }

    return this.mapModel(model);
  }

  /* =====================================================
     CREATE MODEL
  ===================================================== */
  async create(dto: CreateModelDto) {
    const exists = await this.prisma.phoneModel.findFirst({
      where: { brandId: dto.brandId, name: dto.name },
    });

    if (exists) {
      throw new BadRequestException("Model already exists");
    }

    return this.prisma.phoneModel.create({ data: dto });
  }

  /* =====================================================
     UPDATE MODEL
  ===================================================== */
  async update(id: number, dto: UpdateModelDto) {
    await this.findOne(id);

    return this.prisma.phoneModel.update({
      where: { id },
      data: dto,
    });
  }

  /* =====================================================
     DELETE MODEL
  ===================================================== */
  async remove(id: number) {
    await this.findOne(id);

    await this.prisma.phoneModel.delete({ where: { id } });

    return { message: "Model deleted successfully" };
  }

  /* =====================================================
     SEARCH MODELS
  ===================================================== */
  async search(query: string, limit = 8) {
    return this.prisma.phoneModel.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: "insensitive" } },
          { brand: { name: { contains: query, mode: "insensitive" } } },
        ],
      },
      take: limit,
      orderBy: { name: "asc" },
      include: {
        brand: { select: { id: true, name: true } },
      },
    });
  }
}
