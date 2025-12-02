// @ts-check
import eslint from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
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

  // Base ESLint + TS rules
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,

  // Prettier integration
  eslintPluginPrettierRecommended,

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
      // 🔥 Disable noisy rules
      //-----------------------------------
      "no-inline-comments": "off",
      "no-trailing-spaces": "off",
      "no-multiple-empty-lines": "off",
      "spaced-comment": "off",
      "capitalized-comments": "off",

      //-----------------------------------
      // 🔥 TypeScript noise removed
      //-----------------------------------
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-floating-promises": "warn",
      "@typescript-eslint/no-unsafe-argument": "warn",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],

      //-----------------------------------
      // 🔥 Prettier formatting (clean & stable)
      //-----------------------------------
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
          singleQuote: false,
          useTabs: false,
          trailingComma: "all",
          semi: true,
          printWidth: 100,
        },
      ],
    },
  },
);
