import { BadgeSizes } from './Badge.enums';

export type BadgeSize = typeof BadgeSizes[keyof typeof BadgeSizes];

export interface BadgeProps {
  count: number;
  size?: BadgeSize;
}

export interface BadgeElementProps {
  size: BadgeSize;
}
