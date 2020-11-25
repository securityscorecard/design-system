module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/extensions': ['.js', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'airbnb',
    'plugin:import/typescript',
    'prettier/@typescript-eslint',
    'prettier/react',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:ramda/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
  ],
  plugins: ['filenames', 'fp', 'react-hooks', 'ramda'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          ['parent', 'sibling', 'index'],
          'object',
        ],
        'newlines-between': 'always',
      },
    ],
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/boolean-prop-naming': [
      'error',
      {
        rule:
          '^(defaultIs|defaultHas|defaultShould|is|has|should)[A-Z]([A-Za-z0-9]?)+',
      },
    ],
    'react/prop-types': ['error', { ignore: ['children', 'as'] }],
    'react/jsx-sort-props': [
      'error',
      {
        ignoreCase: true,
        callbacksLast: true,
        shorthandLast: true,
        reservedFirst: true,
      },
    ],
    'react/sort-prop-types': [
      'error',
      {
        requiredFirst: true,
        callbacksLast: true,
        noSortAlphabetically: true,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/require-default-props': 'off',
    'fp/no-arguments': 'error',
    'fp/no-delete': 'error',
    'fp/no-get-set': 'error',
    'fp/no-events': 'error',
    'fp/no-mutating-assign': 'error',
    'fp/no-this': 'error',
    'fp/no-class': 'error',
    'fp/no-valueof-field': 'error',
    'filenames/match-exported': 'error',
    'jsx-a11y/label-has-for': 'warn',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: [],
      },
    ],
    'no-nested-ternary': 'off',
  },
  overrides: [
    {
      files: ['**/*.test.tsx', '**/*.test.ts'],
      env: {
        jest: true,
      },
      rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
      },
    },
  ],
};
