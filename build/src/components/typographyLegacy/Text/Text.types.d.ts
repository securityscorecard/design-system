import { TextSizes, TextVariants } from './Text.enums';
export declare type Sizes = typeof TextSizes[keyof typeof TextSizes];
export declare type Variants = typeof TextVariants[keyof typeof TextVariants];
export interface TextProps {
    size?: Sizes;
    variant?: Variants;
    isBold?: boolean;
    className?: string;
}
export declare type CodeProps = Omit<TextProps, 'variant'>;
export declare type StrongProps = Omit<TextProps, 'isBold' | 'size'>;
