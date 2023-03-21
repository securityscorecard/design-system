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
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';

import { DSProvider, createIconLibrary } from '../src/theme';
import { colors } from '../src/theme/colors';
import { Badges } from './storybook.enums';

import '@fontsource/space-mono';
import '@fontsource/inter';

SyntaxHighlighter.registerLanguage('bash', bash);

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
        ['createIconLibrary()', 'DSProvider', 'DSThemeOverride', 'Colors', 'Space', 'Typography'],
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
    <DSProvider>{storyFn()}</DSProvider>
  </>
);

export const decorators = [withDesign, withScreenshot, wrapper];
