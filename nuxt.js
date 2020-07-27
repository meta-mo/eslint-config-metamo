module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    './meta.js'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  plugins: ['prettier'],
  // add your custom rules here
  rules: {}
}
