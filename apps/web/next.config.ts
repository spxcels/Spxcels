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

  // 🚀 Fix: required so Turbopack includes your DB package
  transpilePackages: ["@spxcel/db"],

  // 🚀 Next.js 16 requires this OUTSIDE of "experimental"
  outputFileTracingRoot: join(__dirname, "../../"),

  turbopack: {
    // Must match monorepo root
    root: join(__dirname, "../../"),
  },

  webpack(config) {
    return config;
  },

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "upload.wikimedia.org", pathname: "/**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "example.com", pathname: "/**" }
    ]
  }
};

export default nextConfig;
