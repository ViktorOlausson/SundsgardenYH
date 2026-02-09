import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import eslintPrettier from "eslint-plugin-prettier/recommended";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node },
  },
  eslintPrettier,
  tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "no-undef": "warn",
      "arrow-body-style": ["error", "always"],
      "prettier/prettier": ["error", { semi: true }],
      "prefer-template": "error",
      //New stuff:
      // "space-before-function-paren": ["error", "never"],
      // "space-infix-ops": "error",
      // "arrow-spacing": ["error", { before: true, after: true }],
      // "key-spacing": ["error", { beforeColon: false, afterColon: true }],
      "space-infix-ops": "error",
      "arrow-spacing": "error",
      "keyword-spacing": "error",
      "comma-spacing": "error",

      "capitalized-comments": [
        "off",
        "when",
        {
          ignorePattern: "pragma|ignored",
          ignoreInlineComments: true,
        },
      ],
    },
  },
]);
