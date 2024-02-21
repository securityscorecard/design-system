import type { SpacingProps } from '../../types/spacing.types';
import type { BaseLabelProps } from '../_internal/BaseTabs/BaseTabLabel.types';
import type { PadboxProps } from '../layout/Padbox/Padbox';
import type { MouseEventHandler, ReactNode } from 'react';

export interface LabelProps extends BaseLabelProps, PadboxProps {}

export interface TabProps {
  children: ReactNode;
  color?: LabelProps['$color'];
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
  children: ReactNode[];
  isExpanded?: TabProps['__isExpanded'];
}
