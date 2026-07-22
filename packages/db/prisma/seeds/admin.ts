import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

export default async function seedAdmin(
  prisma: PrismaClient
) {
  console.log("🌱 Seeding Admin user...");

  const email =
    process.env.ADMIN_EMAIL ?? "admin@spexcel.com";

  const password =
    process.env.ADMIN_PASSWORD ?? "admin123";

  const name =
    process.env.ADMIN_NAME ?? "Super Admin";

  const hashedPassword = await bcrypt.hash(
    password,
    10
  );

  await prisma.admin.upsert({
    where: {
      email,
    },

    update: {
      password: hashedPassword,
      name,
    },

    create: {
      email,
      password: hashedPassword,
      name,
    },
  });

  console.log("✔ Admin seeded successfully");
}