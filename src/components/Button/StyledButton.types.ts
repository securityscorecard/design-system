import { ButtonProps } from './Button.types';

export interface BaseStyledButtonProps extends ButtonProps {
  isDisabled: never;
  disabled?: boolean;
}
