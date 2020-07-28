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
    'import/resolver': [
      {
        node: {
          extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
        },

        typescript: {}
      },
      'webpack'
    ]
  },
  plugins: ['react', 'react-hooks', 'import', '@typescript-eslint', 'jsx-a11y'],
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
    ],
    // Next.jsにてLinkコンポネートの指定と衝突するものは除外
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton']
      }
    ],
    // 環境構築レベルでもimportにdevDependenciesは辛いので外す
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: [
          'test/**',
          'tests/**',
          'spec/**',
          '**/__tests__/**',
          '**/__mocks__/**',
          'test.{js,jsx,ts,tsx}',
          'test-*.{js,jsx,ts,tsx}',
          '**/*.test.{js,jsx,ts,tsx}',
          '**/*.config.{js,ts}',
          '**/webpack.config.{js,ts}',
          '**/webpack.config.*.{js,ts}',
          '**/jest.config.js',
          '**/jest.setup.js',
          '**/rollup.config.js',
          '**/rollup.config.*.js'
        ],
        optionalDependencies: false
      }
    ]
  },
  overrides: [
    {
      files: [
        'test/**',
        'tests/**',
        'spec/**',
        '**/__tests__/**',
        '**/__mocks__/**',
        'test.{js,jsx,ts,tsx}',
        'test-*.{js,jsx,ts,tsx}',
        '**/*.test.{js,jsx,ts,tsx}',
        '**/webpack.config.{js,ts}',
        '**/webpack.config.*.{js,ts}',
        '**/jest.config.js',
        '**/jest.setup.js',
        '**/rollup.config.js',
        '**/rollup.config.*.js'
      ],
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    }
  ]
}
