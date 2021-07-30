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
} from '@storybook/addon-docs';


import { DSProvider, createIconLibrary } from '../src/theme';
import colors from '../src/theme/colors';
import {StoriesWithDesign} from './blocks/StoriesWithDesign'
import { Badges } from './storybook.enums';

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
        'layout',
        'components',
          [
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
  // storycap settings
  screenshot: {
    fullPage: true,
  },
  design: {
    type: 'figma'
  },
  badgesConfig: {
    [Badges.stable]: {
      contrast: '#333',
      color: '#4ABA00',
      title: 'Stable'
    },
    [Badges.beta]: {
      contrast: '#333',
      color: '#E5BD00',
      title: 'Beta'
    },
    [Badges.deprecated]: {
      contrast: '#333',
      color: '#F1431C',
      title: 'Deprecated'
    }
  }
};

createIconLibrary();

const wrapper = (storyFn) => (
  <>
    <DSProvider>{storyFn()}</DSProvider>
  </>
);

export const decorators = [ withDesign, withScreenshot, wrapper ];
