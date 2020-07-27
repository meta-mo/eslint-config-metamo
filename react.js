module.exports = {
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
    './meta.js'
  ],
  env: { browser: true },
  parserOptions: {
    ecmaFeatures: { jsx: true }
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
      }
    }
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    // 最適化すれば変わらないため無効。本質ではない。
    // 'react/prefer-stateless-function': 2,
    'react/jsx-boolean-value': 2,
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.tsx'] }],
    'react/jsx-handler-names': 2,
    'react/prefer-es6-class': [2, 'always'],

    // hooks
    'react-hooks/rules-of-hooks': 'error',
    // 型を使う
    'react/prop-types': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ]
  }
}