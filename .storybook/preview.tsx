import React from 'react';

import { DSProvider, createIconLibrary } from '../src/theme';
import colors from '../src/theme/colors';

export const parameters = {
  backgrounds: {
    default: 'white',
    values: [
      { name: 'white', value: colors.graphite5H },
      { name: 'grey', value: colors.graphiteH },
      { name: 'black', value: colors.graphite5B },
    ]
  },
  options: {
    storySort: {
      order: [
        'Getting Started',
        'Changelog',
        'Theme',
          [
            'createIconLibrary()',
            'DSProvider',
            'Colors',
            'Typography'
          ],
        'Helpers',
        'Components'
      ]
    },
  },
  controls: { expanded: true, hideNoControlsWarning: true },
  docs: { source: { type: 'dynamic' } },
  actions: { argTypesRegex: '^on.*' },
};

createIconLibrary();

const wrapper = (storyFn) => (
  <>
    <DSProvider>{storyFn()}</DSProvider>
  </>
);

export const decorators = [wrapper]
