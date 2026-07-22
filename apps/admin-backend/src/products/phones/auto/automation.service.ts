import { Injectable } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";

import { PrismaService } from "../../../prisma/prisma.service";

@Injectable()
export class AutomationService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  /*
  ============================================================
  BRAND AUTOMATION
  ============================================================
  */

  async runBrandAutomation(
    brandSlug: string,
  ) {
    console.log(
      `🚀 Automation started: ${brandSlug}`,
    );

    const brand =
      await this.prisma.phoneBrand.findUnique({
        where: {
          slug: brandSlug,
        },
      });

    if (!brand) {
      console.warn(
        `❌ Brand not found: ${brandSlug}`,
      );

      return;
    }

    console.log(
      `✅ Brand loaded: ${brand.name}`,
    );

    /*
    ============================================================
    TODO

    1. Discover models
    2. Create models
    3. Collect specs
    4. Collect media
    ============================================================
    */

    console.log(
      "⚠️ Automation pipeline not implemented yet",
    );

    console.log(
      `✅ Automation finished: ${brandSlug}`,
    );
  }

  /*
  ============================================================
  NIGHTLY AUTOMATION
  ============================================================
  */

  @Cron("0 3 * * *")
  async nightlyAutomation() {
    console.log(
      "🌙 Night automation started",
    );

    const brands =
      await this.prisma.phoneBrand.findMany();

    for (const brand of brands) {
      try {
        await this.runBrandAutomation(
          brand.slug,
        );
      } catch (error) {
        console.error(
          `❌ Automation failed: ${brand.slug}`,
          error,
        );
      }
    }

    console.log(
      "🌙 Night automation finished",
    );
  }
}