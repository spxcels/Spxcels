import "server-only";

import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pkg from "pg";

const { Pool } = pkg;

// Create PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Create Prisma adapter for PostgreSQL (Prisma v7)
const adapter = new PrismaPg(pool);

// Handle hot-reload environments (Next.js / dev)
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Create a shared Prisma instance
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["warn", "error"],
    adapter,
  });

// Avoid multiple instances in development
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
