import type { MouseEventHandler, ReactNode } from 'react';
import type { InlineProps } from '../../layout/Inline/Inline';
import type { PadboxProps } from '../../layout/Padbox/Padbox';
import type { BaseToastBannerVariants } from './BaseToastBanner.enums';

export type Variants =
  (typeof BaseToastBannerVariants)[keyof typeof BaseToastBannerVariants];

export interface BaseToastBannerWrapperProps {
  children: ReactNode;
  variant: Variants;
  paddingSize: PadboxProps['paddingSize'];
  paddingType: PadboxProps['paddingType'];
  stretch: InlineProps['stretch'];
  iconSize: number;
  iconPxSizesVariants: { [key: number]: number };
  iconAlign?: string;
}

export interface BaseToastBannerProps {
  onClose: MouseEventHandler;
  variant?: Variants;
}
