import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { mergeDeepRight } from 'ramda';

import { theme as defaultTheme } from '../theme';
import { GlobalStyles } from '../GlobalStyles';
import { DSProviderProps } from './DSProvider.types';

const DSProvider: React.FC<DSProviderProps> = ({
  children,
  theme = {},
  hasIncludedGlobalStyles = true,
}) => {
  const dsTheme = mergeDeepRight(defaultTheme, theme);

  return (
    <ThemeProvider theme={dsTheme}>
      {hasIncludedGlobalStyles && <GlobalStyles />}
      {children}
    </ThemeProvider>
  );
};

DSProvider.propTypes = {
  theme: PropTypes.shape({}),
  hasIncludedGlobalStyles: PropTypes.bool,
};

export default DSProvider;
