import React from 'react';

import { SegmentedToggleSizes } from './SegmentedToggle.enums';

export type Sizes =
  typeof SegmentedToggleSizes[keyof typeof SegmentedToggleSizes];

export interface SegmentedToggleItemProps
  extends Omit<React.HTMLAttributes<HTMLInputElement>, 'size'> {
  label: string;
  value: React.ReactText;
  itemId: string;
  group?: string;
  size?: Sizes;
}

export interface SegmentedToggleProps {
  /**
   * The group is used to identify the SegmentedToggle within the form
   */
  group: string;
  /**
   * Indicates if the SegmentedToggle is disabled or not.
   */
  isDisabled?: boolean;
  /**
   * Size of the SegmentedToggle
   */
  size?: Sizes;

  /**
   * Callback when the SegmentedToggle has changed
   */
  onChange?: React.ChangeEventHandler;
}
