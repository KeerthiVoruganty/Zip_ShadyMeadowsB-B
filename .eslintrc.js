module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'playwright', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:playwright/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  env: {
    node: true,
    es2022: true,
  },
  rules: {
    // TypeScript specific rules
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-var-requires': 'off',

    // General ESLint rules
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-unused-vars': 'off', // Turned off in favor of @typescript-eslint/no-unused-vars
    'prefer-const': 'error',
    'no-var': 'error',

    // Playwright specific rules
    'playwright/missing-playwright-await': 'error',
    'playwright/no-conditional-in-test': 'warn',
    'playwright/no-element-handle': 'warn',
    'playwright/no-eval': 'error',
    'playwright/no-page-pause': 'warn',
    'playwright/no-useless-await': 'error',
    'playwright/prefer-web-first-assertions': 'error',

    // Prettier integration
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      files: ['**/*.feature'],
      rules: {
        // Disable all rules for Gherkin feature files
        '*': 'off',
      },
    },
    {
      files: ['playwright.config.ts', 'run-tests.ts'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'build/',
    'playwright-report/',
    'test-results/',
    '**/*.js', // Ignore compiled JS files if any
  ],
};
