module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'plugin:prettier/recommended',
    'eslint:recommended',
    'eslint-config-airbnb-base',
    'prettier',
  ],
  plugins: ['prettier'],
  rules: {
    'no-console': 1,
    "no-unused-vars": 1,
    "quotes": [2, "single"]
  }
}