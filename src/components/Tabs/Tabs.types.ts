import React from 'react';

import { SpacingProps } from '../../types/spacing.types';
import { BaseLabelProps } from '../_internal/BaseTabs/BaseTabLabel.types';
import { PadboxProps } from '../layout/Padbox/Padbox';

export interface LabelProps extends BaseLabelProps, PadboxProps {}

export interface TabProps {
  children: React.ReactNode;
  color?: LabelProps['$color'];
  isSelected?: LabelProps['$isSelected'];
  isExpanded?: boolean;
  onClick?: (selectedValue: React.ReactText) => void;
  value: React.ReactText;
  variant?: LabelProps['$variant'];
}

export interface TabsProps extends SpacingProps {
  variant?: LabelProps['$variant'];
  selectedValue: React.ReactText;
  selectedPatternMatcher?: (
    value: React.ReactText,
    selectedValue: React.ReactText,
  ) => boolean;
  onSelectTab?: (selectedValue: React.ReactText) => void;
  children: React.ReactNode[];
  isExpanded?: boolean;
}
