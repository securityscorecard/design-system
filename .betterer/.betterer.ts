import { eslint } from '@betterer/eslint';

export default {
  'no more deprecated components': () => eslint({'no-restricted-imports': [
    'error',
    {
      patterns: [
        {
          group: ['*/FlexContainer'],
          message:
            'FlexContainer is deprecated. Please use Layout primitives instead.',
        },
      ],
    },
  ]}).include('../src/**/*.{ts,tsx}')
};
