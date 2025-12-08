import { defineConfig } from "prisma/config";
import * as path from "path";
import * as dotenv from "dotenv";

// Load .env from this folder
dotenv.config({ path: path.resolve(__dirname, ".env") });

export default defineConfig({
  schema: "./prisma/schema.prisma",

  datasource: {
    url: process.env.DATABASE_URL!,
  },

  // Prisma v7 seeding configuration
  migrations: {
    seed: "tsx ./prisma/seed.ts", // or "ts-node ./prisma/seed.ts"
  },
});
