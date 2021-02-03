import { ColorTypes } from '../../theme/colors.enums';
import { SpacingProps } from '../../types/spacing.types';
import { TabSizes, TabVariants } from './Tabs.enums';

export interface LabelProps {
  $isSelected: boolean;
  $color: string;
}

export type Sizes = typeof TabSizes[keyof typeof TabSizes];
export type Variants = typeof TabVariants[keyof typeof TabVariants];

export interface TabProps {
  children: React.ReactNode;
  color?: typeof ColorTypes[keyof typeof ColorTypes];
  isSelected?: boolean;
  onClick?: (selectedValue: string | number) => void;
  value: number | string;
  size?: Sizes;
  variant?: Variants;
}

export interface TabsProps extends SpacingProps {
  size?: Sizes;
  variant?: Variants;
  selectedValue: string | number;
  onSelectTab?: (selectedValue: string | number) => void;
  children: React.ReactNode[];
}
