module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    './meta.js'
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    // バージョンエラーを抑制
    warnOnUnsupportedTypeScriptVersion: false,
    sourceType: 'module',
    jsx: true,
    project: 'tsconfig.json'
  },
  rules: {
    'import/extensions': ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
      }
    }
  }
}
