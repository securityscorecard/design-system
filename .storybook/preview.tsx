import React from 'react';
import { withScreenshot } from 'storycap'
import { withDesign } from 'storybook-addon-designs'
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks';


import { DSProvider, createIconLibrary } from '../src/theme';
import colors from '../src/theme/colors';
import {StoriesWithDesign} from './blocks/StoriesWithDesign'

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
            'Space',
            'Typography'
          ],
        'Helpers',
        'components',
          [
            'layout',
            'typography',
            'forms'
          ]
      ]
    },
  },
  controls: { expanded: true, hideNoControlsWarning: true },
  docs: {
    source: { type: 'dynamic' },
    page: () => (
      <>
        <Title />
        <Subtitle />
        <Description />
        <Primary />
        <ArgsTable story={PRIMARY_STORY} />
        <StoriesWithDesign />
      </>
    ),
  },
  actions: { argTypesRegex: '^on.*' },
  // storycap settings
  screenshot: {
    fullPage: true,
  },
  design: {
    type: 'figma'
  }
};

createIconLibrary();

const wrapper = (storyFn) => (
  <>
    <DSProvider>{storyFn()}</DSProvider>
  </>
);

export const decorators = [ withDesign, withScreenshot, wrapper ];
