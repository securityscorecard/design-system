import { BadgeVariants } from './Badge.enums';

export type BadgeVariant = (typeof BadgeVariants)[keyof typeof BadgeVariants];

export interface BadgeProps {
  /**
   * Number displayed inside the Badge component. For numbers larger than 99 the `99+` will be shown
   * to prevent displaying long numbers. If `undefined` is provided as value the Badge component won't
   * be rendered.
   */
  count?: number;
  /** Color variant of the Badge component */
  variant?: BadgeVariant;
  className?: string;
}

export interface BadgeElementProps {
  $variant: BadgeProps['variant'];
}
