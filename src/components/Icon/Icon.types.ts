import { IconTypes, SSCIconNames } from './Icon.enums';
import { Colors } from '../../theme/colors.types';

export type SSCIcons = typeof SSCIconNames[keyof typeof SSCIconNames];
export type Types = typeof IconTypes[keyof typeof IconTypes];

export interface BaseIconProps {
  name: SSCIcons;
  type?: Types;
}

export interface IconProps extends BaseIconProps {
  color?: keyof Colors;
  className?: string;
  hasFixedWidth?: boolean;
}
