import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";

import { PrismaService } from "../../../prisma/prisma.service";
import { CreateBrandDto, UpdateBrandDto } from "./dto";

@Injectable()
export class BrandsService {
  constructor(private readonly prisma: PrismaService) {}

  // ── Find All ──────────────────────────────────────────────────────────────

  async findAll() {
    const brands = await this.prisma.phoneBrand.findMany({
      orderBy: { name: "asc" },
      include: {
        models: {
          orderBy: { name: "asc" },
          select: { name: true },
          take: 3,
        },
        _count: {
          select: { models: true },
        },
      },
    });

    return brands.map(({ _count, models, ...brand }) => ({
      ...brand,
      modelCount: _count.models,
      models: models.map((m) => m.name),
    }));
  }

  // ── Find One ──────────────────────────────────────────────────────────────

  async findOne(id: number) {
    const brand = await this.prisma.phoneBrand.findUnique({ where: { id } });

    if (!brand) {
      throw new NotFoundException(`Brand #${id} not found`);
    }

    return brand;
  }

  // ── Create ────────────────────────────────────────────────────────────────

  async create(dto: CreateBrandDto) {
    const slug = dto.slug ?? slugify(dto.name);

    const conflict = await this.prisma.phoneBrand.findFirst({
      where: { OR: [{ name: dto.name }, { slug }] },
      select: { id: true },
    });

    if (conflict) {
      throw new BadRequestException(
        "A brand with that name or slug already exists",
      );
    }

    return this.prisma.phoneBrand.create({
      data: {
        name: dto.name,
        slug,
        gsmarenaSlug: dto.gsmarenaSlug ?? slug,
        specsSource: dto.specsSource ?? "gsmarena",
        mediaSource: dto.mediaSource ?? "manual",
      },
    });
  }

  // ── Update ────────────────────────────────────────────────────────────────

  async update(id: number, dto: UpdateBrandDto) {
    await this.findOne(id);

    return this.prisma.phoneBrand.update({ where: { id }, data: dto });
  }

  // ── Remove ────────────────────────────────────────────────────────────────

  async remove(id: number) {
    const brand = await this.prisma.phoneBrand.findUnique({
      where: { id },
      select: { _count: { select: { models: true } } },
    });

    if (!brand) {
      throw new NotFoundException(`Brand #${id} not found`);
    }

    if (brand._count.models > 0) {
      throw new BadRequestException(
        `Cannot delete: brand still has ${brand._count.models} model(s). Remove them first.`,
      );
    }

    await this.prisma.phoneBrand.delete({ where: { id } });

    return { message: "Brand deleted successfully" };
  }
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function slugify(name: string): string {
  return name.toLowerCase().trim().replace(/\s+/g, "-");
}