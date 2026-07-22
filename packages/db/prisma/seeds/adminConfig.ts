import { PrismaClient } from "@prisma/client";

export default async function seedAdminConfig(
  prisma: PrismaClient
) {
  console.log("⚙️ Seeding AdminConfig...");

  const configs = [
    {
      key: "SITE_NAME",
      value: "Spxcel Admin",
    },
    {
      key: "THEME",
      value: "dark",
    },
    {
      key: "AUTO_SCRAPE_ENABLED",
      value: "true",
    },
    {
      key: "AUTO_MEDIA_ENABLED",
      value: "true",
    },
    {
      key: "AUTO_AFFILIATE_ENABLED",
      value: "true",
    },
  ];

  for (const config of configs) {
    await prisma.adminConfig.upsert({
      where: {
        key: config.key,
      },

      update: {
        value: config.value,
      },

      create: config,
    });
  }

  console.log("✔ AdminConfig seeded");
}