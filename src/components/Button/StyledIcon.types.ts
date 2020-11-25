import { BaseIconProps } from '../Icon/Icon.types';
import { Sizes } from './Button.types';

export interface StyledIconProps extends Required<BaseIconProps> {
  size: Sizes;
}
