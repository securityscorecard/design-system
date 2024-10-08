import type { ChangeEventHandler, ComponentPropsWithoutRef } from 'react';

export interface SegmentedToggleItemProps
  extends Omit<ComponentPropsWithoutRef<'input'>, 'size'> {
  label: string;
  value: string | number;
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
  onChange?: ChangeEventHandler;
  className?: string;
}
