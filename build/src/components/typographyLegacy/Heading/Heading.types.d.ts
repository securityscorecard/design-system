import { HeadingSizes, HeadingVariants } from './Heading.enums';
import { SpacingProps } from '../../../types/spacing.types';
export declare type Sizes = typeof HeadingSizes[keyof typeof HeadingSizes];
export declare type Variants = typeof HeadingVariants[keyof typeof HeadingVariants];
export interface HeadingProps extends SpacingProps {
    size?: Sizes;
    variant?: Variants;
    className?: string;
}
