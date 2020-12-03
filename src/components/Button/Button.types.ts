import React from 'react';
import { To } from 'history'; // just importing types

import { SpacingSizeValue } from '../../types/spacing.types';
import { Types as IconTypes, SSCIcons } from '../Icon/Icon.types';
import { ButtonColors, ButtonSizes, ButtonVariants } from './Button.enums';

export type Variants = typeof ButtonVariants[keyof typeof ButtonVariants];
export type Sizes = typeof ButtonSizes[keyof typeof ButtonSizes];
export type Colors = typeof ButtonColors[keyof typeof ButtonColors];

export interface ButtonProps {
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
  iconType?: IconTypes | string;
}
