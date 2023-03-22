import type { DefaultTheme } from 'styled-components';
import type { Color } from '../../../theme/colors.types';
import type { PadboxProps } from '../../layout/Padbox/Padbox';
import type { BaseTabVariants } from './BaseTabs.enums';

export type Variants = typeof BaseTabVariants[keyof typeof BaseTabVariants];

export interface BaseLabelProps extends PadboxProps {
  $isSelected?: boolean;
  $color: Color;
  $variant?: Variants;
  $isExpanded?: boolean;
  theme: DefaultTheme;
  className?: string;
}
