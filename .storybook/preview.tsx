import React from 'react';
import type { Preview } from '@storybook/react';
import { withScreenshot } from 'storycap';

import { DSProvider, createIconLibrary } from '../src/theme';
import { colors } from '../src/theme/colors';

import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/space-mono/400.css';
import '../src/tokens/tokens.css';

function clearDatatableLS() {
  Object.keys(localStorage)
    .filter((x) => x.startsWith('sscds_dt_'))
    .forEach((x) => localStorage.removeItem(x));
}
clearDatatableLS();
createIconLibrary();
window.Math.random = () => 0.5;

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white', value: colors.neutral[0] },
        { name: 'grey', value: colors.neutral[200] },
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
          [
            'createIconLibrary()',
            'DSProvider',
            'DSThemeOverride',
            'Colors',
            'Space',
            'Typography',
          ],
          'Iconography',
          'Helpers',
          'layout',
          'typography',
          'components',
          ['forms', 'modals'],
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
    design: {
      type: 'figma',
    },
  },
  decorators: [
    // @ts-expect-error as the type of the withScreenshot is too wide
    withScreenshot,
    (storyFn) => (
      <DSProvider config={{ debugMode: true }}>{storyFn()}</DSProvider>
    ),
  ],
  tags:['autodocs']
};

export default preview