import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import { createIconLibrary, resetIconLibrary } from './src';

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
