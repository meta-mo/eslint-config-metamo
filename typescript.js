module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    // バージョンエラーを抑制
    warnOnUnsupportedTypeScriptVersion: false,
    sourceType: 'module',
    jsx: true,
    project: 'tsconfig.json',
  },
}
