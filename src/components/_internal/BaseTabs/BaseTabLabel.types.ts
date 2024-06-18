import { DefaultTheme } from 'styled-components';

import { PadboxProps } from '../../layout/Padbox/Padbox';
import { BaseTabVariants } from './BaseTabs.enums';

export type Variants = (typeof BaseTabVariants)[keyof typeof BaseTabVariants];

export interface BaseLabelProps extends PadboxProps {
  $isSelected?: boolean;
  $variant?: Variants;
  $isExpanded?: boolean;
  theme: DefaultTheme;
  className?: string;
}
