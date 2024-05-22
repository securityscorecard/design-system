import React, { MouseEventHandler } from 'react';

import { SpacingProps } from '../../types/spacing.types';
import { BaseLabelProps } from '../_internal/BaseTabs/BaseTabLabel.types';
import { PadboxProps } from '../layout/Padbox/Padbox';

export interface LabelProps extends BaseLabelProps, PadboxProps {}

export interface TabProps {
  children: React.ReactNode;
  value: React.ReactText;
  onClick?: MouseEventHandler;
  /** Internal properties */
  __isSelected?: LabelProps['$isSelected'];
  __isExpanded?: boolean;
  __onSelectTab?: (selectedValue: React.ReactText) => void;
  __variant?: LabelProps['$variant'];
}

export interface TabsProps extends SpacingProps {
  variant?: TabProps['__variant'];
  selectedValue: React.ReactText;
  selectedPatternMatcher?: (
    value: React.ReactText,
    selectedValue: React.ReactText,
  ) => boolean;
  onSelectTab?: TabProps['__onSelectTab'];
  children: React.ReactNode[];
  isExpanded?: TabProps['__isExpanded'];
}
