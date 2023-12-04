import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import { createIconLibrary, resetIconLibrary } from './src';

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
