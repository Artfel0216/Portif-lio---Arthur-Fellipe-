import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  // Ignore arquivos e pastas geradas
  globalIgnores([
    "node_modules/**",
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),

  // Configuração para arquivos TS / TSX
  {
    files: ["**/*.{ts,tsx}"],
    ...nextVitals,
    ...nextTs,
    rules: {
      // Boas práticas (não agressivas)
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" }
      ],
      "react/jsx-key": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Next.js já gerencia React import
      "react/react-in-jsx-scope": "off",

      // Evita erros falsos em App Router
      "@next/next/no-html-link-for-pages": "off"
    }
  }
]);
