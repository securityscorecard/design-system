import { TextSizes, TextVariants } from './Text.enums';

export type Sizes = typeof TextSizes[keyof typeof TextSizes];
export type Variants = typeof TextVariants[keyof typeof TextVariants];

export interface TextProps {
  size?: Sizes;
  variant?: Variants;
  isBold?: boolean;
  className?: string;
}

export type CodeProps = Omit<TextProps, 'variant'>;
export type StrongProps = Omit<TextProps, 'isBold' | 'size'>;
