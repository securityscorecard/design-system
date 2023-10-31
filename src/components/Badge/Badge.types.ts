import type { BadgeVariants } from './Badge.enums';

export type BadgeVariant = (typeof BadgeVariants)[keyof typeof BadgeVariants];

export interface BadgeProps {
  count?: number;
  variant?: BadgeElementProps['$variant'];
  className?: string;
}

export interface BadgeElementProps {
  $variant: BadgeVariant;
}
