import { PrismaClient } from "@prisma/client";

export default async function seedPhones(
  prisma: PrismaClient
) {
  console.log("📱 Seeding default phone brand...");

  await prisma.phoneBrand.upsert({
    where: {
      slug: "apple",
    },

    update: {
      name: "Apple",
      gsmarenaSlug: "apple",
      specsSource: "gsmarena",
      mediaSource: "apple-newsroom",
    },

    create: {
      name: "Apple",
      slug: "apple",
      gsmarenaSlug: "apple",
      specsSource: "gsmarena",
      mediaSource: "apple-newsroom",
    },
  });

  console.log("✔ Default brand seeded");
}