// Канон линта JS/TS Хекслета это дефолты oxlint. Эталон лежит в корне
// hexlet-exercise-kit, регламент в его docs/js-code-style.md, а в репозитории
// компонентов файл копируется как есть. oxlint находит его сам, без --config.
//
// Объект без `defineConfig`: его импорт резолвится от этого файла и потребовал
// бы пакет oxlint в node_modules, а бинарь в ките ставит mise. Опечатку в
// плагине, правиле или значении oxlint ловит сам при загрузке (код выхода 1).
export default {
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
};
