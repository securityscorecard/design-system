import { BadgeSizes, BadgeVariants } from './Badge.enums';

export type BadgeSize = typeof BadgeSizes[keyof typeof BadgeSizes];
export type BadgeVariant = typeof BadgeVariants[keyof typeof BadgeVariants];

export interface BadgeProps {
  count: number;
  size?: BadgeElementProps['$size'];
  variant?: BadgeElementProps['$variant'];
}

export interface BadgeElementProps {
  $size: BadgeSize;
  $variant: BadgeVariant;
}
