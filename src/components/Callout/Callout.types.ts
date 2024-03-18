import type { ReactElement, ReactNode } from 'react';
import type { IconProps, SSCIcons } from '../Icon/Icon.types';
import type { CalloutColors } from './Callout.enums';

export type CalloutColor = (typeof CalloutColors)[keyof typeof CalloutColors];

export type CalloutProps = {
  children: ReactNode;
  icon?: SSCIcons | ReactElement<IconProps>;
  color?: CalloutColor;
};

export interface CalloutContainerProps {
  $color: CalloutProps['color'];
}
