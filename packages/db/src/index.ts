import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pkg from "pg";

const { Pool } = pkg;

/* ===============================
   PostgreSQL Pool (Neon)
=============================== */
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

/* ===============================
   Prisma Adapter (Prisma v7)
=============================== */
const adapter = new PrismaPg(pool);

/* ===============================
   Global Prisma (dev-safe)
=============================== */
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

/* ===============================
   Shared Prisma Instance
=============================== */
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["warn", "error"],
    adapter,
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

/* ===============================
   EXPORTS (IMPORTANT)
=============================== */
export { PrismaClient };
export * from "@prisma/client";
