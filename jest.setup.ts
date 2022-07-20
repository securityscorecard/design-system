import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import { createIconLibrary, resetIconLibrary } from './src';

beforeAll(() => {
  createIconLibrary();
});

afterAll(() => {
  resetIconLibrary();
});
