import { ReactNode } from 'react';
import { DefaultTheme } from 'styled-components';

import { Subset } from '../../types/utils.types';

export interface DSContextValue {
  portalsContainerId: string;
  hasIncludedGlobalStyles: boolean;
  debugMode: boolean;
  datatable?: {
    onFullscreenModeChange?: (enabled: boolean) => void;
    settingsOffset?: string;
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
  children: ReactNode;
}
