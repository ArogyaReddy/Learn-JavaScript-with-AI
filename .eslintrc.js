module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'semi': ['warn', 'always'],
    'quotes': ['warn', 'single', { avoidEscape: true }],
    'indent': ['warn', 2],
    'no-var': 'error',
    'prefer-const': 'warn',
    'prefer-template': 'warn'
  },
  ignorePatterns: [
    'node_modules/',
    'awesome-copilot-main/',
    '*.min.js',
    'dist/',
    'build/'
  ]
};
