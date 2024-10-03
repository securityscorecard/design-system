import type { MouseEventHandler, ReactNode } from 'react';

import { PadboxProps } from '../../layout/Padbox/Padbox';
import { BaseToastBannerVariants } from './BaseToastBanner.enums';

export type Variants =
  (typeof BaseToastBannerVariants)[keyof typeof BaseToastBannerVariants];

export interface BaseToastBannerWrapperProps {
  children: ReactNode;
  variant: Variants;
  paddingType?: PadboxProps['paddingType'];
  hasBackground?: boolean;
}

export interface BaseToastBannerProps {
  onClose: MouseEventHandler;
  variant?: Variants;
}
