import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node },
  },
  tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "no-undef": "warn",
      "arrow-body-style": ["error", "always"],
      "prefer-template": "error",
      "@typescript-eslint/no-explicit-any": "off",
      //New stuff:
      "space-before-function-paren": ["off", "never"],
      "space-infix-ops": "error",
      "arrow-spacing": ["error", { before: true, after: true }],
      "key-spacing": ["error", { beforeColon: false, afterColon: true }],
      "keyword-spacing": "error",
      "comma-spacing": "error",
      indent: ["error", 2],
      quotes: ["error", "double"],
      curly: "error",

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
