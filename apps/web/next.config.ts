import { join } from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  env: {
    ADMIN_USERNAME: process.env.ADMIN_USERNAME,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
    ADMIN_SECRET: process.env.ADMIN_SECRET,
  },

  // Prisma stays external
  serverExternalPackages: ["@prisma/client", "prisma"],

  // Monorepo DB package
  transpilePackages: ["@spxcel/db"],

  // Next.js 16 monorepo tracing
  outputFileTracingRoot: join(__dirname, "../../"),

  turbopack: {
    root: join(__dirname, "../../"),
  },

  webpack(config) {
    return config;
  },

  /* ================= IMAGES ================= */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;