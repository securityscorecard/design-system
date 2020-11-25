import { HeadingSizes, HeadingVariants } from './Heading.enums';
import { SpacingProps } from '../../../types/spacing.types';

export type Sizes = typeof HeadingSizes[keyof typeof HeadingSizes];
export type Variants = typeof HeadingVariants[keyof typeof HeadingVariants];

export interface HeadingProps extends SpacingProps {
  size?: Sizes;
  variant?: Variants;
}
