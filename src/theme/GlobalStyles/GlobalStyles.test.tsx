import { render, screen } from '@testing-library/react';

import DSProvider from '../DSProvider/DSProvider';
import GlobalStyles, { generateColorsCSSVars } from './GlobalStyles';

const theme = {
  colors: {
    primary: {
      100: 'grey',
      200: 'black',
      300: 'red',
    },
    secondary: {
      lighter: 'lightblue',
      darker: 'blue',
      sidebar: {
        background: 'orange',
      },
    },
  },
};

const expectedResult = `--sscds-primary-100:grey;
--sscds-primary-200:black;
--sscds-primary-300:red;
--sscds-secondary-lighter:lightblue;
--sscds-secondary-darker:blue;
--sscds-secondary-sidebar-background:orange`;

describe('GlobalStyles', () => {
  describe('generateColorsCSSVars', () => {
    it('return a string containing the css variables', () => {
      expect(generateColorsCSSVars({ theme })).toStrictEqual(expectedResult);
    });
  });

  it('should render without crashing', () => {
    render(
      <DSProvider>
        <GlobalStyles />
      </DSProvider>,
    );
  });

  it.skip('should apply focus indicator styles with high contrast', () => {
    // Skipped due to JSDOM/styled-components limitations: CSS variables set by GlobalStyles
    // are not always reflected in getComputedStyle(document.documentElement) in test environments.
    // This works in a real browser, but not reliably in JSDOM.
    // See: https://github.com/styled-components/jest-styled-components/issues/354
    render(
      <DSProvider>
        <GlobalStyles />
        <button type="button">Test Button</button>
      </DSProvider>,
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    // Check that the CSS variable is set on :root
    const rootStyles = getComputedStyle(document.documentElement);
    expect(
      rootStyles.getPropertyValue('--sscds-focus-indicator-width').trim(),
    ).toBe('2px');
    expect(
      rootStyles.getPropertyValue('--sscds-focus-outline-offset').trim(),
    ).toBe('-1px');
    expect(
      rootStyles.getPropertyValue('--sscds-focus-indicator-color').trim(),
    ).toBe('var(--sscds-color-border-action-focused-high-contrast)');
  });
});
