import styled, { css } from 'styled-components';
import { includes, pipe } from 'ramda';

import {
  capitalize,
  createMarginSpacing,
  createPadding,
  getButtonColor,
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
  font-size: ${getFontSize('lg')};
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

const focusState = css`
  outline: 2px solid ${getButtonColor('focusOutlineColor')};
  outline-offset: 2px;
`;

const ButtonSolid = css<BaseStyledButtonProps>`
  background-color: ${({ color }) =>
    getToken(`buttonSolid${capitalize(color)}BgColor`)};
  border: 1px solid
    ${({ color }) => getToken(`buttonSolid${capitalize(color)}BgColor`)};
  text-decoration: none;

  &,
  &:not([href]):not([tabindex]) {
    color: ${({ color }) =>
      getToken(`buttonSolid${capitalize(color)}TextColor`)};
  }

  ${({ disabled, color }) =>
    disabled
      ? css`
           {
            background-color: ${getToken(
              `buttonSolid${capitalize(color)}BgDisabledColor`,
            )};
            border-color: ${getToken(
              `buttonSolid${capitalize(color)}BgDisabledColor`,
            )};
          }
        `
      : css`
          &:hover:not(:disabled),
          &:not([href]):not([tabindex]):not(:disabled):hover,
          &.hover {
            background-color: ${getToken(
              `buttonSolid${capitalize(color)}BgHoverColor`,
            )};
            border-color: ${getToken(
              `buttonSolid${capitalize(color)}BgHoverColor`,
            )};
            color: ${getToken(`buttonSolid${capitalize(color)}TextColor`)};
            text-decoration: none;
          }
          &:focus:not(:disabled),
          &.focus {
            background-color: ${getToken(
              `buttonSolid${capitalize(color)}BgHoverColor`,
            )};
            border-color: ${getToken(
              `buttonSolid${capitalize(color)}BgHoverColor`,
            )};
            color: ${getToken(`buttonSolid${capitalize(color)}TextColor`)};
            text-decoration: none;
            ${focusState};
          }

          &:not(:disabled):active,
          &:not([href]):not([tabindex]):not(:disabled):active,
          &.active {
            background-color: ${getToken(
              `buttonSolid${capitalize(color)}BgActiveColor`,
            )};
            border-color: ${getToken(
              `buttonSolid${capitalize(color)}BgActiveColor`,
            )};
            color: ${getToken(`buttonSolid${capitalize(color)}TextColor`)};
            text-decoration: none;
          }
        `}
`;

const ButtonOutline = css<BaseStyledButtonProps>`
  background-color: ${getToken(`buttonOutlineBgColor`)};
  border: 1px solid ${getButtonColor('borderColor')};
  text-decoration: none;

  &,
  &:not([href]):not([tabindex]):not(:disabled) {
    color: ${getToken(`buttonOutlineTextColor`)};
  }

  ${({ disabled }) =>
    disabled
      ? css`
          & {
            color: ${getToken(`buttonOutlineTextDisabledColor`)};
            background-color: ${getToken(`buttonOutlineBgDisabledColor`)};
            border-color: ${getToken(`buttonOutlineBorderDisabledColor`)};
          }
        `
      : css`
          &:hover:not(:disabled),
          &:not([href]):not([tabindex]):not(:disabled):hover,
          &.hover {
            background-color: ${getToken(`buttonOutlineBgHoverColor`)};
            color: ${getToken(`buttonOutlineTextColor`)};
            text-decoration: none;
          }
          &:focus:not(:disabled),
          &.focus {
            background-color: ${getToken('buttonOutlineBgHoverColor')};
            color: ${getToken('buttonOutlineTextColor')};
            text-decoration: none;
            ${focusState};
          }
          &:not(:disabled):active,
          &:not([href]):not([tabindex]):not(:disabled):active,
          &.active {
            background-color: ${getToken('buttonOutlineBgActiveColor')};
            border-color: ${getToken('buttonOutlineBorderActiveColor')};
            color: ${getToken('buttonOutlineTextActiveColor')};
            text-decoration: none;
          }
        `}
`;

const ButtonText = css<BaseStyledButtonProps>`
  background-color: transparent;
  padding-left: 0;
  padding-right: 0;
  text-decoration: none;

  &,
  &:not([href]):not([tabindex]):not(:disabled) {
    color: ${({ color }) =>
      getToken(`buttonText${capitalize(color)}TextColor`)};
  }

  ${({ disabled, color }) =>
    disabled
      ? css`
          & {
            color: ${getToken(
              `buttonText${capitalize(color)}TextDisabledColor`,
            )};
          }
        `
      : css`
          &:hover:not(:disabled),
          &:not([href]):not([tabindex]):not(:disabled):hover,
          &.hover {
            color: ${getToken(`buttonText${capitalize(color)}TextHoverColor`)};
            text-decoration: none;
          }
          &:focus:not(:disabled),
          &.focus {
            background-color: ${getToken(
              `buttonText${capitalize(color)}BgFocusColor`,
            )};
            border-color: ${getToken(
              `buttonText${capitalize(color)}BgFocusColor`,
            )};
            color: ${getToken(`buttonText${capitalize(color)}TextColor`)};
            text-decoration: none;
            ${focusState};
          }

          &:not(:disabled):active,
          &:not([href]):not([tabindex]):not(:disabled):active,
          &&&.active {
            color: ${getToken(`buttonText${capitalize(color)}TextActiveColor`)};
            text-decoration: none;xx
          }
        `}
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
