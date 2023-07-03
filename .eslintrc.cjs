/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    es2022: true,
    node: true,
  },
  extends: [
    // avoid reordering those plugins
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:import/typescript',
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
  plugins: ['@typescript-eslint', 'import'],
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
