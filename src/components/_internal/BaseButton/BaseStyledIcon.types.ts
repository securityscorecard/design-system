import { BaseIconProps } from '../../Icon/Icon.types';
import { Sizes } from './BaseButton.types';

export interface BaseStyledIconProps extends Required<BaseIconProps> {
  size: Sizes;
}
