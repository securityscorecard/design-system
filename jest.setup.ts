import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ICU from 'i18next-icu';
import icuEn from 'i18next-icu/locale-data/en';
import icuJa from 'i18next-icu/locale-data/ja';
import icuEs from 'i18next-icu/locale-data/es';
import icuPt from 'i18next-icu/locale-data/pt';
import icuCs from 'i18next-icu/locale-data/cs';

import { createIconLibrary, resetIconLibrary } from './src';
import en from './src/locales/en-US';

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
    },
    defaultNS: 'sscds',
    keySeparator: false,
    nsSeparator: '|',
    lng: 'en-US',
    fallbackLng: 'en-US',
    interpolation: {
      escapeValue: false,
    },
  });

Object.defineProperty(document, 'fonts', {
  value: {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  },
});

beforeAll(() => {
  createIconLibrary();
  global.ResizeObserver = jest.fn().mockReturnValue({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  });
});

afterAll(() => {
  resetIconLibrary();
});
