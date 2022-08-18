import styled, { css } from 'styled-components';
import { includes, pipe } from 'ramda';

import {
  createMarginSpacing,
  createPadding,
  getButtonHeight,
  getButtonToken,
  getFontFamily,
  getFontSize,
  getFontWeight,
  getRadii,
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
  background-color: ${getButtonToken('BgColor')};
  border: 1px solid ${getButtonToken('BgColor')};
  text-decoration: none;
  font-weight: ${getFontWeight('regular')};
  color: ${getButtonToken(`TextColor`)};

  &:disabled,
  &.disabled {
    background-color: ${getButtonToken(`BgDisabledColor`)};
    border-color: ${getButtonToken(`BgDisabledColor`)};
    color: ${getButtonToken(`TextDisabledColor`)};
  }

  &:hover:not(:disabled),
  &.hover {
    background-color: ${getButtonToken(`BgHoverColor`)};
    border-color: ${getButtonToken(`BgHoverColor`)};
    color: ${getButtonToken(`TextColor`)};
    text-decoration: none;
  }
  &:focus-visible:not(:disabled),
  &.focus {
    background-color: ${getButtonToken(`BgHoverColor`)};
    border-color: ${getButtonToken(`BgHoverColor`)};
    color: ${getButtonToken(`TextColor`)};
    text-decoration: none;
    outline: 4px solid ${getButtonToken(`OutlineFocusColor`)};
  }

  &:not(:disabled):active,
  &.active {
    background-color: ${getButtonToken(`BgActiveColor`)};
    border-color: ${getButtonToken(`BgActiveColor`)};
    color: ${getButtonToken(`TextColor`)};
    text-decoration: none;
  }
`;

const ButtonOutline = css<BaseStyledButtonProps>`
  background-color: ${getButtonToken('BgColor')};
  border: 2px solid ${getButtonToken('BorderColor')};
  text-decoration: none;
  font-weight: ${getFontWeight('regular')};
  color: ${getButtonToken('TextColor')};

  &:disabled,
  &.disabled {
    color: ${getButtonToken('TextDisabledColor')};
    border-color: ${getButtonToken('BorderDisabledColor')};
  }
  &:hover:not(:disabled),
  &.hover {
    color: ${getButtonToken('TextHoverColor')};
    border-color: ${getButtonToken('BorderHoverColor')};
    text-decoration: none;
  }
  &:focus-visible:not(:disabled),
  &.focus {
    color: ${getButtonToken('TextFocusColor')};
    border-color: ${getButtonToken('BorderFocusColor')};
    outline: 4px solid ${getButtonToken('OutlineFocusColor')};
    text-decoration: none;
  }
  &:not(:disabled):active,
  &.active {
    background-color: ${getButtonToken('BgActiveColor')};
    border-color: ${getButtonToken('BorderActiveColor')};
    color: ${getButtonToken('TextActiveColor')};
    text-decoration: none;
  }
`;

const ButtonText = css<BaseStyledButtonProps>`
  background-color: transparent;
  border-color: transparent;
  padding-left: 0;
  padding-right: 0;
  text-decoration: none;
  color: ${getButtonToken(`TextColor`)};

  &:disabled,
  &.disabled {
    color: ${getButtonToken(`TextDisabledColor`)};
  }

  &:hover:not(:disabled),
  &.hover {
    color: ${getButtonToken(`TextHoverColor`)};
    text-decoration: none;
  }
  &:focus-visible:not(:disabled),
  &.focus {
    background-color: ${getButtonToken(`BgFocusColor`)};
    color: ${getButtonToken(`TextFocusColor`)};
    text-decoration: none;
  }

  &:not(:disabled):active,
  &&&.active {
    color: ${getButtonToken(`TextActiveColor`)};
    text-decoration: none;
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
  font-weight: ${getFontWeight('semibold')};
  cursor: pointer;
  text-align: center;
  white-space: nowrap;

  ${({ margin }) => createMarginSpacing(margin)};

  &:focus {
    outline: 0;
  }

  ${({ isExpanded }) => isExpanded && 'width: 100%;'};
  ${({ disabled }) => disabled && 'cursor: not-allowed;'};
  ${({ isLoading }) => isLoading && 'cursor: progress;'};

  height: ${({ size, theme }) =>
    pipe(getButtonHeight(size), pxToRem)({ theme })};
  line-height: ${({ size, theme }) =>
    pipe(getButtonHeight(size), pxToRem)({ theme })};
  ${({ size }) => buttonSizes[size]};
  ${({ variant }) => buttonVariants[variant]};
`;

export default BaseStyledButton;
