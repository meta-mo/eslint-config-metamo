module.exports = {
  env: {
    browser: true,
    node: true
  },
  plugins: ['prettier'],
  rules: {
    'no-console': 1,
    yoda: 2,
    'no-unused-vars': 1,
    quotes: [2, 'single'],
    'no-var': 2,
    'prefer-const': 2,
    'prettier/prettier': [
      'warn',
      {
        useTabs: false,
        tabWidth: 2,
        semi: false,
        singleQuote: true,
        trailingComma: 'none'
      }
    ]
  }
}
