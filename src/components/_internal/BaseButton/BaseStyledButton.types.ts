import { BaseButtonProps } from './BaseButton.types';

export interface BaseStyledButtonProps extends BaseButtonProps {
  isDisabled: never;
  disabled?: boolean;
  $hasOnlyIcon?: boolean;
}
