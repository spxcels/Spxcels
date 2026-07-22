import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  // Load .env from this app folder
  envDir: "./",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@spxcel/ui": path.resolve(__dirname, "../../packages/ui/src"),
    },
  },

  server: {
    fs: {
      // allow access to monorepo packages
      allow: [".."],
    },
  },

  optimizeDeps: {
    // forces Vite to rebuild optimized deps if cache is stale
    force: true,
  },
});