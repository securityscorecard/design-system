import '@testing-library/jest-dom';
import 'jest-styled-components';
import { createIconLibrary, resetIconLibrary } from './src';

beforeAll(() => {
  createIconLibrary();
});

afterAll(() => {
  resetIconLibrary();
});
