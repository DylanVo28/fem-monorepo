module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
  ],
  rules: {
    '@typescript-eslint/no-confusing-void-expression': 'error',
    '@typescript-eslint/restrict-template-expressions': 'error',
  },
  ignorePatterns: ['dist', 'node_modules', '*.js'],
};

