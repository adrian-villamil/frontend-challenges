import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import importPlugin from "eslint-plugin-import";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    plugins: {
      import: importPlugin,
    },

    rules: {
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],

          pathGroups: [
            {
              pattern: "@/**",
              group: "internal",
            },
          ],

          pathGroupsExcludedImportTypes: ["builtin"],

          "newlines-between": "always",

          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],

      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports",
        },
      ],

      "no-multiple-empty-lines": [
        "warn",
        {
          max: 1,
          maxEOF: 0,
          maxBOF: 0,
        },
      ],
    },
  },

  // Override default ignores of eslint-config-next.
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
