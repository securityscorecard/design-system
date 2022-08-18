import styled, { css } from 'styled-components';
import { includes, pipe } from 'ramda';

import {
  createMarginSpacing,
  createPadding,
  getButtonHeight,
  getFontFamily,
  getFontSize,
  getFontWeight,
  getRadii,
  getToken,
  pxToRem,
} from '../../../utils';
import { BaseStyledButtonProps } from './BaseStyledButton.types';
import { SpaceSizes } from '../../../theme';
import { PaddingTypes } from '../../layout/Padbox/Padbox.enums';
import { BaseButtonSizes, BaseButtonVariants } from './BaseButton.enums';

/*
 * BUTTON SIZES
 */

const ButtonLarge = css`
  font-size: ${getFontSize('md')};
  ${({ theme }) => createPadding({ paddingSize: SpaceSizes.md, theme })};
`;

const ButtonMedium = css<BaseStyledButtonProps>`
  font-size: ${getFontSize('md')};
  ${({ $hasOnlyIcon, theme }) =>
    createPadding({
      paddingSize: $hasOnlyIcon ? SpaceSizes.sm : SpaceSizes.md,
      paddingType: $hasOnlyIcon ? PaddingTypes.square : PaddingTypes.squish,
      theme,
    })};
`;

const ButtonSmall = css<BaseStyledButtonProps>`
  font-size: ${getFontSize('md')};
  ${({ theme }) =>
    createPadding({
      paddingSize: SpaceSizes.sm,
      paddingType: PaddingTypes.squish,
      theme,
    })};
`;

const buttonSizes = {
  [BaseButtonSizes.lg]: ButtonLarge,
  [BaseButtonSizes.md]: ButtonMedium,
  [BaseButtonSizes.sm]: ButtonSmall,
};

/*
 * BUTTON VARIANTS
 */

const ButtonSolid = css<BaseStyledButtonProps>`
  text-decoration: none;
  background-color: ${(p) => getToken(`color-action-${p.color}`, p)};
  color: ${getToken(`color-action-text-solid`)};

  &:disabled,
  &.disabled {
    background-color: ${getToken(`color-action-background-disabled`)};
    color: ${getToken(`color-action-text-disabled`)};
  }

  &:hover,
  &.hover {
    background-color: ${(p) => getToken(`color-action-${p.color}-hover`, p)};
  }
  &:focus-visible,
  &.focus {
    background-color: ${(p) => getToken(`color-action-${p.color}-hover`, p)};
    outline: 4px solid ${(p) => getToken(`color-action-${p.color}-focus`, p)};
  }

  &:active,
  &.active {
    background-color: ${(p) => getToken(`color-action-${p.color}-active`, p)};
  }
`;

const ButtonOutline = css<BaseStyledButtonProps>`
  background-color: transparent;
  border: 2px solid ${(p) => getToken(`color-action-${p.color}`, p)};
  color: ${(p) => getToken(`color-action-${p.color}`, p)};

  &:disabled,
  &.disabled {
    color: ${getToken(`color-action-text-disabled`)};
    border-color: ${getToken(`color-action-text-disabled`)};
  }
  &:hover,
  &.hover {
    color: ${(p) => getToken(`color-action-${p.color}-hover`, p)};
    border-color: ${(p) => getToken(`color-action-${p.color}-hover`, p)};
  }
  &:focus-visible,
  &.focus {
    color: ${(p) => getToken(`color-action-${p.color}-hover`, p)};
    border-color: ${(p) => getToken(`color-action-${p.color}-hover`, p)};
    outline: 4px solid ${(p) => getToken(`color-action-${p.color}-focus`, p)};
  }
  &:active,
  &.active {
    background-color: ${(p) =>
      getToken(`color-action-background-${p.color}-active`, p)};
    border-color: ${(p) => getToken(`color-action-${p.color}-active`, p)};
    color: ${(p) => getToken(`color-action-${p.color}-active`, p)};
  }
`;

const ButtonText = css<BaseStyledButtonProps>`
  background-color: transparent;
  border-color: transparent;
  padding-left: 0;
  padding-right: 0;
  font-weight: ${getFontWeight('semibold')};
  color: ${(p) => getToken(`color-action-${p.color}`, p)};

  &:disabled,
  &.disabled {
    color: ${getToken(`color-action-text-disabled`)};
  }

  &:hover,
  &.hover {
    color: ${(p) => getToken(`color-action-${p.color}-hover`, p)};
  }
  &:focus-visible,
  &.focus {
    background-color: ${(p) =>
      getToken(`color-action-background-${p.color}-focus`, p)};
    color: ${(p) => getToken(`color-action-${p.color}-hover`, p)};
  }

  &:active,
  &&&.active {
    color: ${(p) => getToken(`color-action-${p.color}-active`, p)};
  }
`;

const buttonVariants = {
  [BaseButtonVariants.solid]: ButtonSolid,
  [BaseButtonVariants.outline]: ButtonOutline,
  [BaseButtonVariants.text]: ButtonText,
};

const BaseStyledButton = styled.button.withConfig<BaseStyledButtonProps>({
  shouldForwardProp: (property) =>
    !includes(property, [
      'size',
      'variant',
      'color',
      'icon',
      'margin',
      'isLoading',
      'isDisabled',
      'isExpanded',
      'theme',
    ]),
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: ${getRadii('default')};
  font-family: ${getFontFamily('base')};
  font-weight: ${getFontWeight('regular')};
  cursor: pointer;
  text-align: center;
  white-space: nowrap;

  ${({ margin }) => createMarginSpacing(margin)};
  ${({ isExpanded }) => isExpanded && 'width: 100%;'};
  ${({ disabled }) => disabled && 'cursor: not-allowed;'};
  ${({ isLoading }) => isLoading && 'cursor: progress;'};

  height: ${({ size, theme }) =>
    pipe(getButtonHeight(size), pxToRem)({ theme })};
  line-height: ${({ size, theme }) =>
    pipe(getButtonHeight(size), pxToRem)({ theme })};
  ${({ size }) => buttonSizes[size]};
  ${({ variant }) => buttonVariants[variant]};

  &,
  &:hover,
  &:focus-visible,
  &:active {
    text-decoration: none;
  }
  &:focus {
    outline: 0;
  }
`;

export default BaseStyledButton;
