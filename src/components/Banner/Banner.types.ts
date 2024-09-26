import { type MouseEvent, type MouseEventHandler, ReactNode } from 'react';

import { BaseToastBannerProps } from '../_internal/BaseToastBanner/BaseToastBanner.types';
import { ActionKinds } from '../../types/action.types';
import { BannerVariants } from './Banner.enums';

export type ActionsArray = readonly [
  ActionKinds<[MouseEvent]>?,
  ActionKinds<[MouseEvent]>?,
];

type Variants = (typeof BannerVariants)[keyof typeof BannerVariants];

export type BannerProps = {
  /** Toggles display of the close button */
  isDismissable?: boolean;
  /** Callback triggered on close button click */
  onClose?: MouseEventHandler;
  /** Banner container width in which action buttons will switch the layout from inline to block */
  changeLayoutBreakpoint?: number;
  className?: string;
  /** Banner content */
  children: ReactNode;
  /** List of actions used to generat banner buttons */
  actions?: ActionsArray;
  /** Color variant of the banner */
  variant?: Variants;
} & Omit<BaseToastBannerProps, 'onClose' | 'variant'>;

export type BannerContentProps = {
  children: ReactNode;
  actions?: ActionsArray;
  isInline?: boolean;
};
