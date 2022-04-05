import React from 'react';

export interface SegmentedToggleItemProps
  extends Omit<React.HTMLAttributes<HTMLInputElement>, 'size'> {
  label: string;
  value: React.ReactText;
  itemId: string;
  group?: string;
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
   * Callback when the SegmentedToggle has changed
   */
  onChange?: React.ChangeEventHandler;
}
