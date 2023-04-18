import type {
  ComponentPropsWithRef,
  ElementType,
  EventHandler,
  HTMLAttributes,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
} from 'react';

export interface StyledPillWrapperProps {
  $isClickable: boolean;
  $color: string;
}

export interface PillWrapperProps extends ComponentPropsWithRef<'span'> {
  /**
   * Flag that enabled hover functionality on the pill. This should be used only when
   * passing custom element (e.g. `a` tag) throught the `as` property without passing
   * `onClick` property.
   */
  isClickable: StyledPillWrapperProps['$isClickable'];
  /**
   * Callback called when the pill is clicked. Hover functionality is enabled when this
   * property is passed in, this can be overriden by `isClickable` property when using
   * custom element such as `a` tag without `onClick` property.
   */
  onClick?: EventHandler<MouseEvent | KeyboardEvent>;
  as?: ElementType;
  color?: StyledPillWrapperProps['$color'];
}

export interface PillLabelProps {
  $maxLength?: number;
}

export interface PillRemoveButtonProps
  extends HTMLAttributes<HTMLButtonElement> {
  pillLabel: string;
}

export interface PillProps extends Partial<PillWrapperProps> {
  /**
   * Pill text
   */
  label: string;
  /**
   * Callback called when remove button is clicked. Remove button is rendered
   * only when this property is defined.
   */
  onRemove?: EventHandler<MouseEvent | KeyboardEvent>;
  /**
   * Maximal number of characters to display without truncation. If label is longer
   * that the limit it will be truncated with the ellipsis. Pass `0` to disable truncation.
   */
  maxLabelLength?: PillLabelProps['$maxLength'];
  /**
   * Element rendered before the label.
   */
  adornment?: ReactNode;
  className?: string;
}
