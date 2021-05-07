import { DefaultTheme } from 'styled-components';

export interface DSContextValue {
  portalsContainerId: string;
  hasIncludedGlobalStyles: boolean;
}
export interface DSProviderProps {
  /**
   * Override and extends default theme.
   *
   * See: [Default theme](/?path=/docs/theme-theme-object--page)
   */
  theme?: Partial<DefaultTheme> & Record<string, unknown>;
  /**
   * Design system config object
   */
  config?: Partial<DSContextValue>;
}
