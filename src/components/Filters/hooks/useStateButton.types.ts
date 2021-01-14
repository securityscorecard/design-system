import { Color } from '../../../theme/colors.types';

export interface StateButtonIconHook {
  iconName: string;
  iconColor: Color;
  handleMouseOut: () => void;
  handleMouseOver: () => void;
}
