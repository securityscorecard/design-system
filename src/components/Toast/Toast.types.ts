import type { BaseToastBannerProps } from '../_internal/BaseToastBanner/BaseToastBanner.types';

export interface ToastProps extends BaseToastBannerProps {
  width?: number;
  isStandalone?: boolean;
}
