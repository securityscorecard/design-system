import type { DSContextValue, DSProviderProps } from './DSProvider.types';

import { ThemeProvider } from 'styled-components';
import { mergeDeepRight } from 'ramda';
import { createContext } from 'react';

import { createTheme } from '../theme';
import { GlobalStyles } from '../GlobalStyles';

export const defaultDSContext = {
  portalsContainerId: 'portals',
  hasIncludedGlobalStyles: true,
  debugMode: false,
};
export const DSContext = createContext<DSContextValue>(defaultDSContext);

const DSProvider = ({ children, theme = {}, config = {} }: DSProviderProps) => {
  const dsTheme = createTheme(theme);
  const { hasIncludedGlobalStyles, ...dsConfig } = mergeDeepRight(
    defaultDSContext,
    config,
  );

  return (
    <ThemeProvider theme={dsTheme}>
      {hasIncludedGlobalStyles && <GlobalStyles />}
      <DSContext.Provider value={dsConfig}>{children}</DSContext.Provider>
    </ThemeProvider>
  );
};

export default DSProvider;
