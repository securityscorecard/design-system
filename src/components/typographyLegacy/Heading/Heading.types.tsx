import type { HeadingSizes, HeadingVariants } from './Heading.enums';
import type { SpacingProps } from '../../../types/spacing.types';

export type HeadingSizesTypes =
  (typeof HeadingSizes)[keyof typeof HeadingSizes];
export type HeadingVariantsTypes =
  (typeof HeadingVariants)[keyof typeof HeadingVariants];

export interface HeadingProps extends SpacingProps {
  size?: HeadingSizesTypes;
  variant?: HeadingVariantsTypes;
  className?: string;
}
