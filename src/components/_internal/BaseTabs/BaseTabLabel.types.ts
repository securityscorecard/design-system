import { Color } from '../../../theme/colors.types';
import { PadboxProps } from '../../layout/Padbox/Padbox';
import { BaseTabSizes, BaseTabVariants } from './BaseTabs.enums';

export type Variants = typeof BaseTabVariants[keyof typeof BaseTabVariants];
export type Sizes = typeof BaseTabSizes[keyof typeof BaseTabSizes];

export interface BaseLabelProps extends PadboxProps {
  $isSelected?: boolean;
  $color: Color;
  $variant?: Variants;
}
