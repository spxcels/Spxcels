import { PrismaClient } from "@prisma/client";

export default async function seedAdminConfig(prisma: PrismaClient) {
  console.log("⚙️ Seeding AdminConfig...");

  const configs = [
    {
      key: "DATABASE_URL",
      value: process.env.DATABASE_URL || "",
    },
    {
      key: "SITE_NAME",
      value: "Spex Dashboard",
    },
    {
      key: "THEME",
      value: "dark",
    },
  ];

  for (const config of configs) {
    await prisma.adminConfig.upsert({
      where: { key: config.key },
      update: { value: config.value },
      create: config,
    });
  }

  console.log("✔️ AdminConfig seeded");
}
