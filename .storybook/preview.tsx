import React from 'react';
import { withScreenshot } from 'storycap';

import { DSProvider, createIconLibrary } from '../src/theme';
import { colors } from '../src/theme/colors';
import { Badges } from './storybook.enums';

export const parameters = {
  backgrounds: {
    default: 'white',
    values: [
      { name: 'white', value: colors.neutral[0] },
      { name: 'grey', value: colors.neutral[400] },
      { name: 'black', value: colors.neutral[1000] },
    ],
  },
  options: {
    storySort: {
      order: [
        'Getting Started',
        'Overview',
        'Changelog',
        'Theme',
        ['createIconLibrary()', 'DSProvider', 'Colors', 'Space', 'Typography'],
        'Helpers',
        'layout',
        'components',
        ['typography', 'forms', 'modals'],
        'managers',
        'Hooks',
        'Code examples',
      ],
    },
  },
  controls: {
    expanded: true,
    hideNoControlsWarning: true,
    sort: 'requiredFirst',
  },
  docs: {
    source: { type: 'dynamic' },
  },
  // storycap settings
  screenshot: {
    fullPage: true,
  },
};

createIconLibrary();

const wrapper = (storyFn) => (
  <>
    <DSProvider>{storyFn()}</DSProvider>
  </>
);

export const decorators = [withScreenshot, wrapper];
