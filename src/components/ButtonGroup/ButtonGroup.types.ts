import { ButtonProps } from '../Button/Button.types';

export type ButtonGroupProps = Pick<ButtonProps, 'variant' | 'color'>;

export type ButtonGroupWrapperProps = {
  $variant: ButtonGroupProps['variant'];
  $color: ButtonGroupProps['color'];
};
