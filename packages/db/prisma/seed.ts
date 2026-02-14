import { prisma } from "@spxcel/db";

import seedAdmin from "./seeds/admin";
import seedAdminConfig from "./seeds/adminConfig";
import seedPhones from "./seeds/phones";

async function main() {
  console.log("🌱 Running all Prisma seeds...");

  // Run seeds in dependency-safe order
  await seedAdmin(prisma);
  await seedAdminConfig(prisma);
  await seedPhones(prisma);

  console.log("✨ All seeds executed successfully!");
}

main()
  .catch((error) => {
    console.error("❌ Seed error:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
