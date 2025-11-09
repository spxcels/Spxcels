// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
import { seedPhones } from "./seeds/phones";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting Prisma database seeding...");

  try {
    // 🔹 Seed all phone data (brands, models, specs, media, affiliate links)
    await seedPhones(prisma);

    console.log("✅ Seeding completed successfully!");
  } catch (error: any) {
    console.error("❌ Seeding failed:", error.message || error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((err) => {
  console.error("💥 Unexpected error:", err);
  process.exit(1);
});