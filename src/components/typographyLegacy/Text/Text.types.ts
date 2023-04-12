import { TextSizes, TextVariants } from './Text.enums';

export type TextSizesTypes = typeof TextSizes[keyof typeof TextSizes];
export type TextVariantsTypes = typeof TextVariants[keyof typeof TextVariants];

export interface TextProps {
  size?: TextSizesTypes;
  variant?: TextVariantsTypes;
  isBold?: boolean;
  className?: string;
}

export type CodeProps = Omit<TextProps, 'variant'>;
export type StrongProps = Omit<TextProps, 'isBold' | 'size'>;
