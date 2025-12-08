import prisma from "@spxcel/db";

import seedAdmin from "./seeds/admin";
import seedPhones from "./seeds/phones";
import seedAdminConfig from "./seeds/adminConfig";

async function main() {
  console.log("🌱 Running all Prisma seeds...");

  // Run seeds in order
  await seedAdmin();
  await seedPhones();
  await seedAdminConfig();

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
