import type { FC } from 'react';
import type { DSContextValue, DSProviderProps } from './DSProvider.types';

import PropTypes from 'prop-types';
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

const DSProvider: FC<DSProviderProps> = ({
  children,
  theme = {},
  config = {},
}) => {
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

DSProvider.propTypes /* remove-proptypes */ = {
  //
  // =============== WARNING ================
  // | These PropTypes are auto-generated   |
  // | from the TypeScript type definitions  |
  // ========================================
  //
  /**
   * Design system config object
   */
  config: PropTypes.shape({
    debugMode: PropTypes.bool,
    hasIncludedGlobalStyles: PropTypes.bool,
    portalsContainerId: PropTypes.string,
  }),
  /**
   * Override and extends default theme.
   *
   * See: [Default theme](/?path=/docs/theme-theme-object--page)
   */
  theme: PropTypes.any,
} as any;

export default DSProvider;
