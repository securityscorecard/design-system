import styled, { css } from 'styled-components';
import { includes, pipe } from 'ramda';

import {
  createMarginSpacing,
  createPadding,
  getButtonColor,
  getButtonHeight,
  getFontFamily,
  getFontSize,
  getFontWeight,
  getLineHeight,
  getRadii,
  pxToRem,
} from '../../utils';
import { BaseStyledButtonProps } from './StyledButton.types';
import { ButtonSizes, ButtonVariants } from './Button.enums';
import { SpaceSizes } from '../../theme';
import { PaddingTypes } from '../layout/Padbox/Padbox.enums';

/*
 * BUTTON SIZES
 */

const ButtonLarge = css`
  font-size: ${getFontSize('lg')};
  ${({ theme }) => createPadding({ paddingSize: SpaceSizes.md, theme })};
`;

const ButtonMedium = css<BaseStyledButtonProps>`
  font-size: ${getFontSize('md')};
  ${({ theme }) =>
    createPadding({
      paddingSize: SpaceSizes.md,
      paddingType: PaddingTypes.squish,
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
  [ButtonSizes.lg]: ButtonLarge,
  [ButtonSizes.md]: ButtonMedium,
  [ButtonSizes.sm]: ButtonSmall,
};

/*
 * BUTTON VARIANTS
 */
const ButtonSolid = css<BaseStyledButtonProps>`
  background-color: ${getButtonColor('bgColor')};
  border: 1px solid ${getButtonColor('bgColor')};
  text-decoration: none;

  &,
  &:not([href]):not([tabindex]) {
    color: ${getButtonColor('color')};
  }

  ${({ disabled }) =>
    disabled
      ? css`
           {
            background-color: ${getButtonColor('disabledBgColor')};
            border-color: ${getButtonColor('disabledBgColor')};
          }
        `
      : css`
          &:focus:not(:disabled),
          &:hover:not(:disabled),
          &:not([href]):not([tabindex]):not(:disabled):hover,
          &.hover,
          &.focus {
            background-color: ${getButtonColor('hoverBgColor')};
            border-color: ${getButtonColor('hoverBgColor')};
            color: ${getButtonColor('color')};
            text-decoration: none;
          }

          &:not(:disabled):active,
          &:not([href]):not([tabindex]):not(:disabled):active,
          &.active {
            background-color: ${getButtonColor('activeBgColor')};
            border-color: ${getButtonColor('activeBgColor')};
            color: ${getButtonColor('color')};
            text-decoration: none;
          }
        `}
`;

const ButtonOutline = css<BaseStyledButtonProps>`
  background-color: ${getButtonColor('bgColor')};
  border: 1px solid ${getButtonColor('borderColor')};
  text-decoration: none;

  &,
  &:not([href]):not([tabindex]):not(:disabled) {
    color: ${getButtonColor('color')};
  }

  ${({ disabled }) =>
    disabled
      ? css`
          & {
            color: ${getButtonColor('disabledColor')};
            background-color: ${getButtonColor('disabledBgColor')};
            border-color: ${getButtonColor('disabledBorderColor')};
          }
        `
      : css`
          &:focus:not(:disabled),
          &:hover:not(:disabled),
          &:not([href]):not([tabindex]):not(:disabled):hover,
          &.hover,
          &.focus {
            background-color: ${getButtonColor('hoverBgColor')};
            color: ${getButtonColor('color')};
            text-decoration: none;
          }

          &:not(:disabled):active,
          &:not([href]):not([tabindex]):not(:disabled):active,
          &.active {
            background-color: ${getButtonColor('activeBgColor')};
            color: ${getButtonColor('color')};
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
    color: ${getButtonColor('color')};
  }

  ${({ disabled }) =>
    disabled
      ? css`
          & {
            color: ${getButtonColor('disabledColor')};
          }
        `
      : css`
          &:focus:not(:disabled),
          &:hover:not(:disabled),
          &:not([href]):not([tabindex]):not(:disabled):hover,
          &&&.hover,
          &&&.focus {
            color: ${getButtonColor('hoverColor')};
            text-decoration: none;
          }

          &:not(:disabled):active,
          &:not([href]):not([tabindex]):not(:disabled):active,
          &&&.active {
            color: ${getButtonColor('activeColor')};
            text-decoration: none;
          }
        `}
`;

const buttonVariants = {
  [ButtonVariants.solid]: ButtonSolid,
  [ButtonVariants.outline]: ButtonOutline,
  [ButtonVariants.text]: ButtonText,
};

const StyledButton = styled.button.withConfig<BaseStyledButtonProps>({
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
  line-height: ${getLineHeight('md')};
  ${({ size }) => buttonSizes[size]};
  ${({ variant }) => buttonVariants[variant]};
`;

export default StyledButton;
