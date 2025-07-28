module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 0,
    'import/prefer-default-export': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'import/no-unresolved': 'off',
    indent: ['error', 2],
  },
};
