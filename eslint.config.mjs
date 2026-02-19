import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "eslint:recommended",
    "next",
    "prettier",
    "plugin:tailwindcss/recommended"
  ),
  ...compat.plugins("tailwindcss"),
  ...compat.rules({
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/classnames-order": "error",
    "no-console": ["error", { allow: ["info", "warn", "error", "log"] }],
  }),
  ...compat.overrides([
    {
      files: ["*.ts", "*.tsx", "*.js"],
      parse: "@typescript-eslint/parser",
    },
  ]),
];

export default eslintConfig;
