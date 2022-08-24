import React from 'react';
import type { To } from 'history';

import { SpacingSizeValue } from '../../../types/spacing.types';
import { Types as IconTypes, SSCIcons } from '../../Icon/Icon.types';
import {
  BaseButtonColors,
  BaseButtonSizes,
  BaseButtonVariants,
} from './BaseButton.enums';
import { PadboxProps } from '../../layout/Padbox/Padbox';

export type Variants =
  typeof BaseButtonVariants[keyof typeof BaseButtonVariants];
export type Sizes = typeof BaseButtonSizes[keyof typeof BaseButtonSizes];
export type Colors = typeof BaseButtonColors[keyof typeof BaseButtonColors];

export interface BaseButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, 'size' | 'as'> {
  variant?: Variants;
  size?: Sizes;
  color?: Colors;
  onClick?: React.MouseEventHandler;
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
}

export interface BaseStyledButtonProps extends PadboxProps {
  disabled?: boolean;
  $hasOnlyIcon?: boolean;
  $color: BaseButtonProps['color'];
  $isExpanded: BaseButtonProps['isExpanded'];
  $isLoading: BaseButtonProps['isLoading'];
  $margin: BaseButtonProps['margin'];
  $variant: BaseButtonProps['variant'];
}
