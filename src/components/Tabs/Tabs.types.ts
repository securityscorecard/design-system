import type { ReactNode, ReactText } from 'react';
import type { SpacingProps } from '../../types/spacing.types';
import type { BaseLabelProps } from '../_internal/BaseTabs/BaseTabLabel.types';
import type { PadboxProps } from '../layout/Padbox/Padbox';
import type { TabVariants } from './Tabs.enums';

export interface LabelProps extends BaseLabelProps, PadboxProps {}

export interface TabProps {
  children: ReactNode;
  color?: LabelProps['$color'];
  isSelected?: LabelProps['$isSelected'];
  isExpanded?: boolean;
  onClick?: (selectedValue: ReactText) => void;
  value: ReactText;
  variant?: LabelProps['$variant'];
}

export interface TabsProps extends SpacingProps {
  variant?: keyof typeof TabVariants;
  selectedValue: ReactText;
  selectedPatternMatcher?: (
    value: ReactText,
    selectedValue: ReactText,
  ) => boolean;
  onSelectTab?: (selectedValue: ReactText) => void;
  children: ReactNode[];
  isExpanded?: boolean;
}
