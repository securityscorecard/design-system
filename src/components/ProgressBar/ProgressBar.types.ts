import type { PropsWithChildren } from 'react';

import type { BaseToastBannerVariants } from '../_internal/BaseToastBanner/BaseToastBanner.enums';

export type ProgressBarVariants =
  typeof BaseToastBannerVariants[keyof typeof BaseToastBannerVariants];

export type ProgressBarProps = PropsWithChildren<{
  progress: number;
  size: 'thin' | 'normal';
  variant?: ProgressBarVariants;
}>;
