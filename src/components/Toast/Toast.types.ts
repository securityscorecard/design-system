import { ReactNode } from 'react';

import { BaseToastBannerProps } from '../_internal/BaseToastBanner/BaseToastBanner.types';

export interface ToastProps extends BaseToastBannerProps {
  /** Toast container width */
  width?: number;
  /**
   * Decides if the toast should be rendered inside its own ToastArea container.
   * If set to `true` ToastArea will be created ad-hoc and will contain only one Toast.
   * This property is set to `false` automatically if the Toast is called throught
   * the NotificationsProvider
   */
  isStandalone?: boolean;
  /** Toast content */
  children: ReactNode;
}
