import { DefaultTheme } from 'styled-components';

import { Subset } from '../../types/utils.types';

export interface DSContextValue {
  portalsContainerId: string;
  hasIncludedGlobalStyles: boolean;
  debugMode: boolean;
  experimental: {
    accessibleLink: boolean;
  };
}
export interface DSProviderProps {
  /**
   * Override and extends default theme.
   *
   * See: [Default theme](/?path=/docs/theme-theme-object--page)
   */
  theme?: Subset<DefaultTheme> & Record<string, unknown>;
  /**
   * Design system config object
   */
  config?: Partial<DSContextValue>;
}
