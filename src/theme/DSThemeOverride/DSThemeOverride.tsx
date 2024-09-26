import { isFunction } from 'ramda-adjunct';
import { ReactNode } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { Subset } from '../../types/utils.types';
import { createTheme } from '../theme';
import { Theme } from '../theme.types';

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
