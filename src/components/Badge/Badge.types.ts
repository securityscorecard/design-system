import type { Types as IconTypes, SSCIcons } from '../Icon/Icon.types';
import type { BadgeVariants } from './Badge.enums';

export type BadgeVariant = (typeof BadgeVariants)[keyof typeof BadgeVariants];

export interface BadgeProps {
  count?: number;
  text?: string;
  variant?: BadgeElementProps['$variant'];
  className?: string;
  iconName?: SSCIcons | string;
  iconType?: IconTypes | string;
}

export interface BadgeElementProps {
  $variant: BadgeVariant;
}
