import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'
import stylistic from '@stylistic/eslint-plugin'
import vitest from '@vitest/eslint-plugin'
import tseslint from 'typescript-eslint'

const tsConfigs = tseslint.configs.recommendedTypeChecked.map(config => ({
  ...config,
  files: ['**/*.{ts,mts,cts}'],
  languageOptions: {
    ...config.languageOptions,
    parserOptions: {
      ...config.languageOptions?.parserOptions,
      project: ['./tsconfig.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
}))

export default defineConfig([
  {
    ignores: ['dist', 'node_modules'],
  },
  stylistic.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs}'],
    ...js.configs.recommended,
    languageOptions: { globals: globals.node },
  },
  ...tsConfigs,
  {
    files: ['**/__tests__/**/*.{js,ts}', '**/*.{test,spec}.{js,ts}'],
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
    },
  },
])
