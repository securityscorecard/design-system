import React from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import { ThemeProvider } from 'styled-components';
import { mergeDeepRight } from 'ramda';

import { createTheme } from '../theme';
import { GlobalStyles } from '../GlobalStyles';
import { DSContextValue, DSProviderProps } from './DSProvider.types';

const defaultDSContext: DSContextValue = {
  portalsContainerId: 'portals',
  hasIncludedGlobalStyles: true,
  debugMode: false,
};
export const DSContext = React.createContext<DSContextValue>(defaultDSContext);

const DSProvider = ({ children, theme = {}, config = {} }: DSProviderProps) => {
  const dsTheme = createTheme(theme);
  const { hasIncludedGlobalStyles, ...dsConfig } = mergeDeepRight(
    defaultDSContext,
    config,
  );

  return (
    <ThemeProvider theme={dsTheme}>
      {hasIncludedGlobalStyles && <GlobalStyles />}
      <DSContext.Provider value={dsConfig}>
        <RadixTooltip.Provider>{children}</RadixTooltip.Provider>
      </DSContext.Provider>
    </ThemeProvider>
  );
};

export default DSProvider;
