import type { PropsWithChildren, ReactNode } from 'react';
import type { SSCIcons } from '../Icon/Icon.types';
import type { CalloutColors } from './Callout.enums';

export type CalloutColor = (typeof CalloutColors)[keyof typeof CalloutColors];

export type CalloutProps = PropsWithChildren<{
  icon: ReactNode | SSCIcons;
  color: CalloutContainerProps['$color'];
}>;

export interface CalloutContainerProps {
  $color: CalloutColor;
}
