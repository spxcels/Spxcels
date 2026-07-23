import { prisma } from "../src";

import seedAdmin from "./seeds/admin";
import seedAdminConfig from "./seeds/adminConfig";
import seedPhones from "./seeds/phones";

async function main() {
  console.log("🌱 Starting Prisma seed process...\n");

  try {
    // --------------------------------------------------
    // 1️⃣ Admin user
    // --------------------------------------------------
    console.log("🔐 Seeding admin...");
    await seedAdmin(prisma);

    // --------------------------------------------------
    // 2️⃣ Admin config
    // --------------------------------------------------
    console.log("⚙️ Seeding admin config...");
    await seedAdminConfig(prisma);

    // --------------------------------------------------
    // 3️⃣ Phone brands / phone base data
    // --------------------------------------------------
    console.log("📱 Seeding phone data...");
    await seedPhones(prisma);

    console.log("\n✅ All seeds executed successfully!");
  } catch (error) {
    console.error("\n❌ Seed process failed:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();