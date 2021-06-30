import React from 'react';

import { Colors } from '../../theme/colors.types';
import { SpacingProps } from '../../types/spacing.types';
import { PadboxProps } from '../layout/Padbox/Padbox';
import { TabSizes, TabVariants } from './Tabs.enums';

export interface LabelProps extends PadboxProps {
  $isSelected: boolean;
  $color: keyof Colors;
  $variant?: Variants;
}

export type Sizes = typeof TabSizes[keyof typeof TabSizes];
export type Variants = typeof TabVariants[keyof typeof TabVariants];

export interface TabProps {
  children: React.ReactNode;
  color?: LabelProps['$color'];
  isSelected?: LabelProps['$isSelected'];
  onClick?: (selectedValue: React.ReactText) => void;
  value: React.ReactText;
  size?: Sizes;
  variant?: LabelProps['$variant'];
}

export interface TabsProps extends SpacingProps {
  size?: TabProps['size'];
  variant?: LabelProps['$variant'];
  selectedValue: React.ReactText;
  selectedPatternMatcher?: (
    value: React.ReactText,
    selectedValue: React.ReactText,
  ) => boolean;
  onSelectTab?: (selectedValue: React.ReactText) => void;
  children: React.ReactNode[];
}
