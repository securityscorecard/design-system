import React from 'react';

import { SwitchSizes } from './Switch.enums';

export type Sizes = typeof SwitchSizes[keyof typeof SwitchSizes];

export interface SwitchProps {
  switchId: string;
  isDisabled?: boolean;
  label?: React.ReactNode;
  size?: Sizes;
  maxWidth?: number;
}
