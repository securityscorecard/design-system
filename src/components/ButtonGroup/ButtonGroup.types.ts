import { ButtonProps } from '../Button/Button.types';

export type ButtonGroupProps = Pick<ButtonProps, 'variant' | 'size' | 'color'>;

export type ButtonGroupWrapperProps = {
  $variant: ButtonGroupProps['variant'];
  $size: ButtonGroupProps['size'];
  $color: ButtonGroupProps['color'];
};
