import type {
  ComponentPropsWithRef,
  ElementType,
  MouseEventHandler,
} from 'react';
import type { To } from 'history';
import type { DefaultTheme } from 'styled-components';
import type { SpacingSizeValue } from '../../../types/spacing.types';
import type { Types as IconTypes, SSCIcons } from '../../Icon/Icon.types';
import type {
  BaseButtonColors,
  BaseButtonSizes,
  BaseButtonVariants,
} from './BaseButton.enums';
import type { PadboxProps } from '../../layout/Padbox/Padbox';

export type Variants =
  typeof BaseButtonVariants[keyof typeof BaseButtonVariants];
export type Sizes = typeof BaseButtonSizes[keyof typeof BaseButtonSizes];
export type Colors = typeof BaseButtonColors[keyof typeof BaseButtonColors];

export interface BaseButtonProps
  extends Omit<ComponentPropsWithRef<'button'>, 'size' | 'as'> {
  variant?: Variants;
  size?: Sizes;
  color?: Colors;
  onClick?: MouseEventHandler;
  isDisabled?: boolean;
  isLoading?: boolean;
  isExpanded?: boolean;
  margin?: SpacingSizeValue;
  href?: string;
  to?: To;
  className?: string;
  iconName?: SSCIcons | string;
  loadingText?: string;
  iconType?: IconTypes | string;
  tabIndex?: number;
  as?: ElementType;
}

export interface BaseStyledButtonProps extends PadboxProps {
  disabled?: boolean;
  theme: DefaultTheme;
  className?: string;
  $hasOnlyIcon?: boolean;
  $color: BaseButtonProps['color'];
  $isExpanded: BaseButtonProps['isExpanded'];
  $isLoading: BaseButtonProps['isLoading'];
  $margin: BaseButtonProps['margin'];
  $variant: BaseButtonProps['variant'];
}
