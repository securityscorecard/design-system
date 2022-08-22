import React from 'react';

import { SwitchSizes } from './Switch.enums';

export type Sizes = typeof SwitchSizes[keyof typeof SwitchSizes];

export interface SwitchLabelProps {
  isDisabled?: boolean;
  $size?: Sizes;
  maxWidth?: number;
}

export interface SwitchProps
  extends Omit<React.ComponentPropsWithRef<'input'>, 'size'> {
  /**
   * ID to connect input and its label
   */
  switchId: string;
  /**
   * Indicates if switch is disabled or not
   */
  isDisabled?: SwitchLabelProps['isDisabled'];
  /**
   * Text in switch
   */
  label?: React.ReactNode;
  /**
   * Size of the Switch
   */
  size?: SwitchLabelProps['$size'];
  /**
   * Max width in px
   */
  maxWidth?: SwitchLabelProps['maxWidth'];
}
