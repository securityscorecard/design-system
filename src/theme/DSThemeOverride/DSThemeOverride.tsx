import type { ReactNode } from 'react';
import type { DefaultTheme } from 'styled-components';
import type { Subset } from '../../types/utils.types';
import type { Theme } from '../theme.types';

import { isFunction } from 'ramda-adjunct';
import { ThemeProvider } from 'styled-components';

import { createTheme } from '../theme';

interface DSThemeProviderProps {
  overrides: Subset<Theme> | ((defaultTheme: Theme) => Subset<Theme>);
  children: ReactNode;
}

const DSThemeOverride = ({ overrides, children }: DSThemeProviderProps) => {
  const overrideTheme = (theme: DefaultTheme): DefaultTheme => {
    const overrindenTheme = isFunction(overrides)
      ? overrides(theme)
      : overrides;
    return createTheme(overrindenTheme);
  };
  return <ThemeProvider theme={overrideTheme}>{children}</ThemeProvider>;
};

export default DSThemeOverride;
