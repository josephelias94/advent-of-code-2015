/* eslint-disable @typescript-eslint/naming-convention */
/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    'jest/globals': true,
    es2022: true,
    node: true,
  },
  extends: [
    // avoid reordering those plugins
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/recommended',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/all',
    'plugin:jest/all',
    'prettier',
  ],
  ignorePatterns: ['coverage/**', 'html/**'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import', 'jest'],
  root: true,
  rules: {
    'import/no-unresolved': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin', // Node.js modules
          'external', // External modules
          'internal', // Absolute imports
          ['sibling', 'parent'], // Relative imports
          'index', // Imports of the current directory
          'object',
          'type',
          'unknown',
        ],
        'newlines-between': 'always',
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
      },
    ],
    'sort-imports': [
      'error',
      {
        allowSeparatedGroups: true,
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    'require-await': 'off',
    '@typescript-eslint/require-await': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
};
