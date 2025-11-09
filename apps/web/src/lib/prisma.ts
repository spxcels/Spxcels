// prisma/client.ts
import { PrismaClient } from "@prisma/client";

// 🔹 Ensure we only create one PrismaClient instance in development
declare global {
  var prisma: PrismaClient | undefined;
}

// 🔹 Create or reuse the Prisma client
export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ["query", "info", "warn", "error"], // Optional: logs for debugging
  });

// 🔹 Reuse Prisma client during development (prevents hot-reload issues)
if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

// ✅ Default export (fixes "Export default doesn't exist" error)
export default prisma;
