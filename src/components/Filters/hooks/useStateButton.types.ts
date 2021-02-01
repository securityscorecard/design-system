import { Color } from '../../../theme/colors.types';

export interface IconProps {
  iconName: string;
  iconColor: Color;
}

export interface StateButtonIconHook extends IconProps {
  handleMouseOut: () => void;
  handleMouseOver: () => void;
}
