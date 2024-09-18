import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { createIconLibrary, resetIconLibrary } from './src';
import en from './src/locales/en-US';

i18n.use(initReactI18next).init({
  resources: {
    'en-US': { sscds: en },
  },
  defaultNS: 'sscds',
  keySeparator: false,
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
