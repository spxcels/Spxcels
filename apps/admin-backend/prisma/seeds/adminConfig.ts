import prisma from "@spxcel/db";

export default async function seedAdminConfig() {
  console.log("⚙️ Seeding AdminConfig...");

  await prisma.adminConfig.createMany({
    data: [
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
      }
    ],
    skipDuplicates: true,
  });

  console.log("✔️ AdminConfig seeded");
}
