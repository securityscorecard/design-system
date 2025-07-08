import '@testing-library/jest-dom/vitest';
import 'jest-styled-components';
import { afterAll, beforeAll, expect, vi } from 'vitest';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ICU from 'i18next-icu';
import icuEn from 'i18next-icu/locale-data/en';
import icuJa from 'i18next-icu/locale-data/ja';
import icuEs from 'i18next-icu/locale-data/es';
import icuPt from 'i18next-icu/locale-data/pt';
import icuCs from 'i18next-icu/locale-data/cs';
import { toHaveNoViolations } from 'jest-axe';

import { createIconLibrary, resetIconLibrary } from './src';
import en from './src/locales/en-US';

// Extend expect with jest-axe matchers
expect.extend(toHaveNoViolations);

// Type declaration for jest-axe matchers
declare module 'vitest' {
  interface Assertion {
    toHaveNoViolations(): void;
  }
}

i18n
  .use(ICU)
  .use(initReactI18next)
  .init({
    debug: false,
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
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  },
});

const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));
vi.stubGlobal('ResizeObserver', ResizeObserverMock);
beforeAll(() => {
  createIconLibrary();
});

afterAll(() => {
  resetIconLibrary();
});
