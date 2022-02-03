import { Color } from '../../theme/colors.types';
import { IconTypes, SSCIconNames } from '../../theme/icons/icons.enums';
import { SpacingProps } from '../../types/spacing.types';

export type SSCIcons = typeof SSCIconNames[keyof typeof SSCIconNames];
export type Types = typeof IconTypes[keyof typeof IconTypes];

export interface BaseIconProps {
  name: SSCIcons | string;
  type?: Types | string;
}

export interface IconProps extends BaseIconProps, SpacingProps {
  color?: Color;
  className?: string;
  hasFixedWidth?: boolean;
}
