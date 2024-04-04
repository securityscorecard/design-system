import React from 'react';

import { InlineProps } from '../../layout/Inline/Inline';
import { PadboxProps } from '../../layout/Padbox/Padbox';
import { BaseToastBannerVariants } from './BaseToastBanner.enums';

export type Variants =
  (typeof BaseToastBannerVariants)[keyof typeof BaseToastBannerVariants];

export interface BaseToastBannerWrapperProps {
  children: React.ReactNode;
  variant: Variants;
  paddingSize: PadboxProps['paddingSize'];
  paddingType: PadboxProps['paddingType'];
  stretch: InlineProps['stretch'];
  iconSize: number;
  iconPxSizesVariants: { [key: number]: number };
  iconAlign?: string;
}

export interface BaseToastBannerProps {
  onClose: React.MouseEventHandler;
  variant?: Variants;
}
