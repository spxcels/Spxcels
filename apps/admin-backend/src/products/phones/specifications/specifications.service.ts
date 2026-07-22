import {
  Injectable,
  NotFoundException,
} from "@nestjs/common";

import { Prisma } from "@prisma/client";

import { PrismaService } from "../../../prisma/prisma.service";

import {
  CreatePhoneSpecDto,
  UpdatePhoneSpecDto,
} from "./dto";

@Injectable()
export class SpecificationsService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  /* =====================================================
     BUILD JSON
  ===================================================== */

  private buildJson(
    dto: CreatePhoneSpecDto | UpdatePhoneSpecDto,
  ): Prisma.InputJsonValue {
    return {
      raw: dto.raw,

      sections: dto.sections,

      warnings: dto.warnings,

      errors: dto.errors,
    } as Prisma.InputJsonValue;
  }

  /* =====================================================
     GET SPECIFICATIONS
  ===================================================== */

  async findOne(
    modelId: number,
  ) {
    const specs =
      await this.prisma.phoneSpecs.findUnique({
        where: {
          modelId,
        },
      });

    if (!specs) {
      throw new NotFoundException(
        "Phone specifications not found",
      );
    }

    const data =
      (specs.specs as {
        raw?: string;

        sections?: unknown[];

        warnings?: string[];

        errors?: string[];
      }) ?? {};

    return {
      raw:
        data.raw ?? "",

      sections:
        data.sections ?? [],

      warnings:
        data.warnings ?? [],

      errors:
        data.errors ?? [],
    };
  }

  /* =====================================================
     CREATE SPECIFICATIONS
  ===================================================== */

  async create(
    dto: CreatePhoneSpecDto,
  ) {
    const model =
      await this.prisma.phoneModel.findUnique({
        where: {
          id: dto.phoneModelId,
        },
      });

    if (!model) {
      throw new NotFoundException(
        "Phone model not found",
      );
    }

    return this.prisma.phoneSpecs.create({
      data: {
        modelId: dto.phoneModelId,

        specs: this.buildJson(dto),
      },
    });
  }

  /* =====================================================
     UPDATE SPECIFICATIONS
  ===================================================== */

  async update(
    modelId: number,
    dto: UpdatePhoneSpecDto,
  ) {
    await this.findOne(modelId);

    return this.prisma.phoneSpecs.update({
      where: {
        modelId,
      },
      data: {
        specs: this.buildJson(dto),
      },
    });
  }

  /* =====================================================
     UPSERT SPECIFICATIONS
  ===================================================== */

  async upsert(
    dto: CreatePhoneSpecDto,
  ) {
    const model =
      await this.prisma.phoneModel.findUnique({
        where: {
          id: dto.phoneModelId,
        },
      });

    if (!model) {
      throw new NotFoundException(
        "Phone model not found",
      );
    }

    return this.prisma.phoneSpecs.upsert({
      where: {
        modelId: dto.phoneModelId,
      },
      create: {
        modelId: dto.phoneModelId,

        specs: this.buildJson(dto),
      },
      update: {
        specs: this.buildJson(dto),
      },
    });
  }

  /* =====================================================
     DELETE SPECIFICATIONS
  ===================================================== */

  async remove(
    modelId: number,
  ) {
    await this.findOne(modelId);

    await this.prisma.phoneSpecs.delete({
      where: {
        modelId,
      },
    });

    return {
      message:
        "Phone specifications deleted successfully",
    };
  }
}