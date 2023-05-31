import React, { PropsWithChildren } from 'react';

import { SSCIcons } from '../Icon/Icon.types';
import { CalloutColors } from './Callout.enums';

export type CalloutColor = typeof CalloutColors[keyof typeof CalloutColors];

export type CalloutProps = PropsWithChildren<{
  icon: React.ReactNode | SSCIcons;
  color: CalloutContainerProps['$color'];
}>;

export interface CalloutContainerProps {
  $color: CalloutColor;
}
