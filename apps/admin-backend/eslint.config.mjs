// @ts-check
import eslint from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      "eslint.config.mjs",
      "dist/**",
      "node_modules/**",
    ],
  },

  // Base ESLint + TypeScript rules (KEEP — important)
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,

  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: "module",
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  {
    rules: {
      //-----------------------------------
      // 🧘 Reduce visual & mental noise
      //-----------------------------------
      "no-inline-comments": "off",
      "no-trailing-spaces": "off",
      "no-multiple-empty-lines": "off",
      "spaced-comment": "off",
      "capitalized-comments": "off",

      //-----------------------------------
      // 🧠 TypeScript rules (balanced)
      //-----------------------------------
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-ts-comment": "off",

      // Keep these as WARN — they are useful but not blocking
      "@typescript-eslint/no-floating-promises": "warn",
      "@typescript-eslint/no-unsafe-argument": "warn",

      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },

  // 🧩 Controllers & guards are framework glue — relax them safely
  {
    files: ["**/*.controller.ts", "**/*.guard.ts"],
    rules: {
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-misused-promises": "off",
      "@typescript-eslint/require-await": "off",
    },
  },
);
