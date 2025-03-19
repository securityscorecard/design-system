/// <reference types="vite/types/importMeta.d.ts" />
import React, { useEffect } from 'react';
import type { Preview } from '@storybook/react';
import { withScreenshot } from 'storycap';
import { initialize, mswLoader } from 'msw-storybook-addon';
import i18n from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import ICU from 'i18next-icu';
import icuEn from 'i18next-icu/locale-data/en';
import icuJa from 'i18next-icu/locale-data/ja';
import icuEs from 'i18next-icu/locale-data/es';
import icuPt from 'i18next-icu/locale-data/pt';
import icuCs from 'i18next-icu/locale-data/cs';

import { DSProvider, createIconLibrary } from '../src/theme';
import { withThemeByClassName } from './decorators/withThemeByClassName';
import { withMockedDate } from './decorators/withMockedDate';
import en from '../src/locales/en-US';
import cs from '../src/locales/cs-CZ';
import es from '../src/locales/es-ES';
import pt from '../src/locales/pt-BR';
import ja from '../src/locales/ja-JP';

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
initialize({
  onUnhandledRequest: 'bypass',
  serviceWorker: { url: import.meta.env.BASE_URL + 'mockServiceWorker.js' }
});
window.Math.random = () => 0.5;

i18n
  .use(ICU)
  .use(initReactI18next)
  .init({
    debug: true,
    i18nFormat: {
      localeData: [icuEn, icuJa, icuEs, icuPt, icuCs],
      formats: {},
    },
    resources: {
      'en-US': { sscds: en },
      'ja-JP': { sscds: ja },
      'cs-CZ': { sscds: cs },
      'es-ES': { sscds: es },
      'pt-BR': { sscds: pt },
    },
    defaultNS: 'sscds',
    keySeparator: false,
    nsSeparator: '|',
    lng: 'en-US',
    fallbackLng: 'en-US',
    interpolation: {
      escapeValue: false,
    },
    saveMissing: true, // necessary for `missingKeyHandler` to work
    missingKeyHandler: (lng, __, key) => {
      // eslint-disable-next-line no-console
      console.warn(`Missing intl key for lng:${lng}: '${key}' `);
    },
  });

const withI18next = (Story, context) => {
  const { locale } = context.globals;

  // When the locale global changes
  // Set the new locale in i18n
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <I18nextProvider i18n={i18n}>
      <Story />
    </I18nextProvider>
  );
};

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: undefined,
      values: [
        { name: 'white', value: 'white' },
        { name: 'grey', value: '#E8E8E8' },
        { name: 'black', value: 'black' },
      ],
    },
    options: {
      storySort: {
        method: 'alphabetical-by-kind',
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
      controls: {
        sort: 'requiredFirst',
      },
    },
    screenshot: {
      fullPage: true,
    },
    design: {
      type: 'figma',
    },
  },
  decorators: [
    withScreenshot,
    withI18next,
    withThemeByClassName({
      themes: {
        Light: 'light',
        Dark: 'dark',
      },
      defaultTheme: 'Light',
    }),
    withMockedDate(),
    (storyFn) => (
      <DSProvider config={{ debugMode: true, experimental: {legacyHexgrade:false} }}>{storyFn()}</DSProvider>
    ),
  ],
  tags: ['autodocs'],
  globalTypes: {
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en-US', title: 'English' },
          { value: 'ja-JP', title: 'Japanese' },
          { value: 'cs-CZ', title: 'Czech' },
          { value: 'es-ES', title: 'Spanish' },
          { value: 'pt-BR', title: 'Portuguse (Brazil)' },
        ],
        showName: true,
      },
    },
  },
  loaders: [mswLoader],
};

export default preview;
