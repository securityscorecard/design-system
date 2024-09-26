import type { MouseEventHandler, ReactNode } from 'react';

import { SpacingProps } from '../../types/spacing.types';
import { BaseLabelProps } from '../_internal/BaseTabs/BaseTabLabel.types';
import { PadboxProps } from '../layout/Padbox/Padbox';

export interface LabelProps extends BaseLabelProps, PadboxProps {}

export interface TabProps {
  children: ReactNode;
  value: string | number;
  onClick?: MouseEventHandler;
  /** Internal properties */
  __isSelected?: LabelProps['$isSelected'];
  __isExpanded?: boolean;
  __onSelectTab?: (selectedValue: string | number) => void;
  __variant?: LabelProps['$variant'];
}

export interface TabsProps extends SpacingProps {
  variant?: TabProps['__variant'];
  selectedValue: string | number;
  selectedPatternMatcher?: (
    value: string | number,
    selectedValue: string | number,
  ) => boolean;
  onSelectTab?: TabProps['__onSelectTab'];
  children: React.ReactNode[];
  isExpanded?: TabProps['__isExpanded'];
}
