import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

export default async function seedAdmin(prisma: PrismaClient) {
  console.log("🌱 Seeding Admin user...");

  const hashed = await bcrypt.hash("admin123", 10);

  await prisma.admin.upsert({
    where: { email: "admin@spexcel.com" },
    update: {},
    create: {
      email: "admin@spexcel.com",
      password: hashed,
      name: "Super Admin",
    },
  });

  console.log("✔ Admin seeded successfully");
}
