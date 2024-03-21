import { ReactNode } from 'react';

import { BaseToastBannerProps } from '../_internal/BaseToastBanner/BaseToastBanner.types';

export interface ToastProps extends BaseToastBannerProps {
  width?: number;
  isStandalone?: boolean;
  children: ReactNode;
}
