module.exports = {
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
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
    'plugin:promise/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'eslint-config-airbnb-base',
    'prettier',
  ],
  plugins: ['prettier'],
  rules: {
    'no-console': 1,
    'no-unused-vars': 1,
    quotes: [2, 'single'],
  },
}
