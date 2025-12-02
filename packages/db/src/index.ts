import { PrismaClient } from "../generated/client";

declare global {
  // Avoid multiple Prisma instances in dev (Next.js + Monorepo safe)
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ??
  new PrismaClient({
    // Force Prisma to use the web app DATABASE_URL at runtime
    datasourceUrl: process.env.DATABASE_URL,
    log: ["query", "error", "warn"],
  });

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export default prisma;
