import React from 'react';
import PropTypes from 'prop-types';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import { ThemeProvider } from 'styled-components';
import { mergeDeepRight } from 'ramda';

import { createTheme } from '../theme';
import { GlobalStyles } from '../GlobalStyles';
import { DSContextValue, DSProviderProps } from './DSProvider.types';

export const defaultDSContext: DSContextValue = {
  portalsContainerId: 'portals',
  hasIncludedGlobalStyles: true,
  debugMode: false,
  experimental: {
    accessibleLink: false,
  },
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

DSProvider.propTypes = {
  theme: PropTypes.shape({}),
  config: PropTypes.shape({
    portalsContainer: PropTypes.string,
    hasIncludedGlobalStyles: PropTypes.bool,
  }),
};

export default DSProvider;
