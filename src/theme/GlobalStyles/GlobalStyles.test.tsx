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

  it('should apply focus indicator styles with high contrast', () => {
    render(
      <DSProvider>
        <GlobalStyles />
        <button type="button">Test Button</button>
      </DSProvider>,
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    // Get computed styles from the root element where CSS variables are defined
    const rootStyles = getComputedStyle(document.documentElement);

    // Check that the focus indicator uses the high contrast color
    expect(rootStyles.getPropertyValue('--sscds-focus-indicator-color')).toBe(
      'var(--sscds-color-border-action-focused-high-contrast)',
    );
    expect(rootStyles.getPropertyValue('--sscds-focus-indicator-width')).toBe(
      '2px',
    );
    expect(rootStyles.getPropertyValue('--sscds-focus-outline-offset')).toBe(
      '-1px',
    );
  });
});
