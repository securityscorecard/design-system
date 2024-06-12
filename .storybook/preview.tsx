import React from 'react';
import { withScreenshot } from 'storycap';
import { withDesign } from 'storybook-addon-designs';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  PRIMARY_STORY,
} from '@storybook/addon-docs';

import { DSProvider, createIconLibrary } from '../src/theme';
import { colors } from '../src/theme/colors';
import { StoriesWithDesign } from './blocks/StoriesWithDesign';
import { Badges } from './storybook.enums';

import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '../src/tokens/index.css';

export const parameters = {
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
        ['createIconLibrary()', 'DSProvider', 'DSThemeOverride', 'Colors', 'Space', 'Typography'],
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
    type: 'figma',
  },
  badgesConfig: {
    [Badges.stable]: {
      contrast: '#333',
      color: '#4ABA00',
      title: 'Stable',
    },
    [Badges.experimental]: {
      contrast: '#333',
      color: '#E5BD00',
      title: 'Experimental',
    },
    [Badges.deprecated]: {
      contrast: '#333',
      color: '#F1431C',
      title: 'Deprecated',
    },
  },
};

createIconLibrary();

const wrapper = (storyFn) => (
  <>
    <DSProvider config={{debugMode: true}}>{storyFn()}</DSProvider>
  </>
);

export const decorators = [withDesign, withScreenshot, wrapper];

window.Math.random = () => 0.5;

function clearDatatableLS() {
  Object.keys(localStorage)
  .filter(x =>
    x.startsWith('sscds_dt_'))
  .forEach(x =>
    localStorage.removeItem(x))
}
clearDatatableLS()