import React from 'react';

import { PadboxProps } from '../../layout/Padbox/Padbox';
import { BaseToastBannerVariants } from './BaseToastBanner.enums';

export type Variants =
  (typeof BaseToastBannerVariants)[keyof typeof BaseToastBannerVariants];

export interface BaseToastBannerWrapperProps {
  children: React.ReactNode;
  variant: Variants;
  paddingType?: PadboxProps['paddingType'];
  hasBackground?: boolean;
}

export interface BaseToastBannerProps {
  onClose: React.MouseEventHandler;
  variant?: Variants;
}
