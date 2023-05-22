module.exports = {
  parser: '@typescript-eslint/parser',
  // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020,
    // Allows for the parsing of modern ECMAScript features
    sourceType: 'module',
    // Allows for the use of imports
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
      typescript: {
        alwaysTryTypes: true,
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
    'prettier',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:ramda/recommended',
  ],
  plugins: ['filenames', 'fp', 'react-hooks', 'ramda'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/consistent-type-imports': 'error',
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
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'type',
          ['builtin', 'external'],
          'internal',
          ['parent', 'sibling', 'index'],
          'object',
        ],
        'newlines-between': 'always',
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/boolean-prop-naming': [
      'error',
      {
        rule: '^(defaultIs|defaultHas|defaultShould|defaultAre|is|has|should|are)[A-Z]([A-Za-z0-9]?)+',
      },
    ],
    'react/prop-types': 'off',
    'react/default-props-match-prop-types': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        ignoreCase: true,
        callbacksLast: true,
        shorthandLast: true,
        reservedFirst: true,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/require-default-props': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['arrow-function', 'function-declaration'],
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'fp/no-arguments': 'error',
    'fp/no-delete': 'error',
    'fp/no-get-set': 'error',
    'fp/no-events': 'error',
    'fp/no-mutating-assign': 'error',
    'fp/no-this': 'error',
    'fp/no-class': 'error',
    'fp/no-valueof-field': 'error',
    'filenames/match-exported': 'error',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: [],
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'no-nested-ternary': 'off',
    'no-unused-expressions': [
      'error',
      {
        allowTernary: true,
      },
    ],
    'no-restricted-imports': [
      'warn',
      {
        patterns: [
          {
            group: ['*/FlexContainer'],
            message:
              'FlexContainer is deprecated. Please use Layout primitives instead.',
          },
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.test.tsx', '**/*.test.ts'],
      env: {
        jest: true,
      },
      extends: ['plugin:testing-library/react', 'plugin:jest-dom/recommended'],
      rules: {
        'react/jsx-filename-extension': [
          1,
          {
            extensions: ['.ts', '.tsx'],
          },
        ],
        'react/jsx-sort-props': 'off',
      },
    },
    {
      files: ['**/*.stories.tsx'],
      extends: ['plugin:storybook/recommended'],
      rules: {
        'filenames/match-exported': 'off',
        'react/no-unstable-nested-components': [
          2,
          {
            allowAsProps: true,
          },
        ],
      },
    },
    {
      files: ['**/*.md', '**/*.mdx'],
      extends: ['plugin:mdx/recommended'],
      rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.mdx'] }],
      },
    },
  ],
};
