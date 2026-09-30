// Канон линта JS/TS Хекслета это дефолты oxlint. Эталон лежит в корне
// hexlet-exercise-kit, регламент в его docs/js-code-style.md, а в репозитории
// компонентов файл копируется как есть. oxlint находит его сам, без --config.
//
// Импорт `oxlint` резолвится от этого файла, поэтому пакет oxlint стоит в
// devDependencies репозитория.
import { defineConfig } from "oxlint";

export default defineConfig({
  // По умолчанию oxlint поднимает только typescript, unicorn и oxc.
  plugins: [
    "typescript",
    "unicorn",
    "oxc",
    "import",
    "promise",
    "node",
    "jsdoc",
    "jest",
    "vitest",
    "react",
    "react-perf",
    "jsx-a11y",
    "vue",
  ],
  categories: {
    correctness: "error",
  },
  rules: {
    // Текст ошибки придумывает студент, правило прибивало бы тест к эталону.
    "vitest/require-to-throw-message": "off",
    "vitest/no-standalone-expect": "off",
    "jest/no-standalone-expect": "off",
    "jest/valid-expect": ["error", { maxArgs: 2 }],
    "vitest/valid-expect": ["error", { maxArgs: 2 }],
  },
  env: {
    builtin: true,
    browser: true,
    node: true,
  },
  ignorePatterns: [
    "**/node_modules/**",
    "**/npm-cache/**",
    "**/vendor/**",
    "**/dist/**",
    "**/build/**",
    "**/coverage/**",
    "**/.venv/**",
    "**/__snapshots__/**",
  ],
});
