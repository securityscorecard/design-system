import type { BaseToastBannerProps } from '../_internal/BaseToastBanner/BaseToastBanner.types';
import type { ReactNode } from 'react';

export interface ToastProps extends BaseToastBannerProps {
  width?: number;
  isStandalone?: boolean;
  children: ReactNode;
}
