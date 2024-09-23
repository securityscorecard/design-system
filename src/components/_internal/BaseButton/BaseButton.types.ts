import React from 'react';
import type { To } from 'history';
import { DefaultTheme } from 'styled-components';

import { SpacingSizeValue } from '../../../types/spacing.types';
import type { IconNames, RegularIconTypes } from '../../Icon/Icon.types';
import { BaseButtonColors, BaseButtonVariants } from './BaseButton.enums';
import { PadboxProps } from '../../layout/Padbox/Padbox';

type Variants = (typeof BaseButtonVariants)[keyof typeof BaseButtonVariants];
type Colors = (typeof BaseButtonColors)[keyof typeof BaseButtonColors];

interface BaseIcon {
  name: IconNames;
  type?: RegularIconTypes;
}

export interface BaseButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, 'as'> {
  variant?: Variants;
  color?: Colors;
  onClick?: React.MouseEventHandler;
  isDisabled?: boolean;
  isLoading?: boolean;
  isExpanded?: boolean;
  margin?: SpacingSizeValue;
  href?: string;
  to?: To;
  className?: string;
  iconStart?: BaseIcon;
  iconEnd?: BaseIcon;
  /** @deprecated Use iconStart property instead */
  iconName?: IconNames;
  /** @deprecated Use iconStart property instead */
  iconType?: RegularIconTypes;
  loadingText?: string;
  tabIndex?: number;
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
