module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    './meta.js',
    'eslint:recommended',
    'plugin:vue/recommended',
    '@vue/prettier'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: 'babel-eslint'
  },
  rules: {}
}
