import { Injectable } from "@nestjs/common";

import { PrismaService } from "../../../../prisma/prisma.service";
import { AutomationGateway } from "../gateway/automation.gateway";

@Injectable()
export class CreateModelService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly gateway: AutomationGateway,
  ) {}

  /*
  ============================================================
  MANUAL MODE
  Used by admin UI where only model name is provided
  ============================================================
  */

  async run(fullModelName: string) {
    const brandName = this.detectBrand(fullModelName);
    const slug = this.makeSlug(fullModelName);
    const brandSlug = this.makeSlug(brandName);

    const brand = await this.prisma.phoneBrand.upsert({
      where: {
        slug: brandSlug,
      },
      update: {
        name: brandName,
      },
      create: {
        name: brandName,
        slug: brandSlug,
      },
    });

    return this.createModelPipeline(
      brand.id,
      brand.name,
      fullModelName,
      slug,
    );
  }

  /*
  ============================================================
  AUTOMATION MODE
  ============================================================
  */

  async runWithBrand(
    brandId: number,
    modelName: string,
  ) {
    const brand = await this.prisma.phoneBrand.findUnique({
      where: {
        id: brandId,
      },
    });

    if (!brand) {
      throw new Error(
        `Brand ID ${brandId} not found`,
      );
    }

    const slug = this.makeSlug(modelName);

    return this.createModelPipeline(
      brand.id,
      brand.name,
      modelName,
      slug,
    );
  }

  /*
  ============================================================
  CORE PIPELINE
  ============================================================
  */

  private async createModelPipeline(
    brandId: number,
    brandName: string,
    modelName: string,
    slug: string,
  ) {
    const model = await this.prisma.phoneModel.upsert({
      where: {
        slug,
      },
      update: {
        name: modelName,
      },
      create: {
        name: modelName,
        slug,
        colors: [],
        variants: [],
        brandId,
      },
    });

    await this.prisma.phoneModel.update({
      where: {
        id: model.id,
      },
      data: {
        automationStatus: "PROCESSING",
        discoveredAt: new Date(),
      },
    });

    this.gateway.sendLog(model.id, {
      type: "success",
      message: `Model created: ${model.name}`,
    });

    /*
    ============================================================
    FUTURE AUTOMATION
    ============================================================

    Specs
    Media
    Card Image
    Affiliates

    Will be executed by dedicated automation services.
    */

    await this.prisma.phoneModel.update({
      where: {
        id: model.id,
      },
      data: {
        automationStatus: "COMPLETE",
      },
    });

    this.gateway.sendLog(model.id, {
      type: "success",
      message: "Model created successfully",
    });

    return model;
  }

  /*
  ============================================================
  BRAND DETECTION
  ============================================================
  */

  private detectBrand(
    fullModelName: string,
  ): string {
    const name = fullModelName.toLowerCase();

    if (name.includes("iphone")) {
      return "apple";
    }

    if (
      name.includes("samsung") ||
      name.includes("galaxy")
    ) {
      return "samsung";
    }

    if (name.includes("pixel")) {
      return "google";
    }

    return fullModelName.split(" ")[0];
  }

  /*
  ============================================================
  SLUG GENERATOR
  ============================================================
  */

  private makeSlug(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }
}