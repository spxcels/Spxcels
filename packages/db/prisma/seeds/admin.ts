import prisma from "@spxcel/db";
import bcrypt from "bcryptjs";

export default async function seedAdmin() {
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
