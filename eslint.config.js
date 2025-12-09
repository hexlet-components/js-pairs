import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'
import stylistic from '@stylistic/eslint-plugin'
import vitest from '@vitest/eslint-plugin'

export default defineConfig([
  stylistic.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    ignores: ['dist', 'node_modules'],
    languageOptions: { globals: globals.node },
  },
  {
    files: ['__tests__/**'], // or any other pattern
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
    },
  },
])
