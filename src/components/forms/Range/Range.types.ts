import type { ComponentPropsWithRef } from 'react';

export interface RangeProps extends ComponentPropsWithRef<'input'> {
  /**
   * Element id to retreive value by external components
   */
  rangeId?: string;
  /**
   * Flag to display side labels of min and max values
   */
  hasLabels?: boolean;
  /**
   * Flag to determine if the input slider is to be filled to the right
   * as opposed to the default left fill of input of type range
   */
  isProgressRight?: boolean;
  isInvalid?: boolean;
  isDisabled?: boolean;
  /**
   * Minimium value of the input
   */
  min?: number;
  /**
   * Maximium value of the input
   */
  max?: number;
  /**
   * Default value of the input. If unspecified, it's the mean of min and max.
   */
  defaultValue?: number;
  /**
   * The step size of the input
   */
  step?: number;
  className?: string;
}
export interface RangeInputProps extends ComponentPropsWithRef<'input'> {
  isInvalid?: boolean;
  isDisabled?: boolean;
  isProgressRight?: boolean;
  $percent?: number;
}
