import styled, { css } from 'styled-components';
import { always, flip, includes, pipe, prop, when } from 'ramda';
import { isTrue } from 'ramda-adjunct';

import {
  createMarginSpacing,
  getButtonColor,
  getFontFamily,
  getFontSize,
  getFontWeight,
  getLineHeight,
  pxToRem,
} from '../../utils/helpers';
import { BaseStyledButtonProps } from './StyledButton.types';
import { ButtonSizes, ButtonVariants } from './Button.enums';

const ButtonBase = css<BaseStyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-family: ${getFontFamily('base')};
  font-weight: ${getFontWeight('medium')};
  margin: 0;
  cursor: pointer;
  text-align: center;
  ${({ margin }) => createMarginSpacing(margin)};

  &:focus {
    outline: 0;
  }

  ${({ isExpanded }) =>
    isExpanded &&
    css`
      width: 100%;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
    `};

  ${({ isLoading }) =>
    isLoading &&
    css`
      cursor: progress;
    `};
`;

/*
 * BUTTON SIZES
 */

const setMinWidth = (width) =>
  pipe(
    prop('variant'),
    flip(includes)([ButtonVariants.solid, ButtonVariants.outline]),
    flip(when)(always(pxToRem(width)), isTrue),
  );

const ButtonLarge = css`
  min-width: ${setMinWidth(95)};
  height: ${pxToRem(50)};
  padding: ${pxToRem(15, 22)};
  line-height: ${getLineHeight('lg')};
  font-size: ${getFontSize('lg')};
`;

const ButtonMedium = css<BaseStyledButtonProps>`
  min-width: ${setMinWidth(80)};
  height: ${pxToRem(40)};
  padding: ${pxToRem(12, 18)};
  line-height: ${getLineHeight('md')};
  font-size: ${getFontSize('md')};

  ${({ isLoading }) =>
    isLoading &&
    css`
      padding-top: ${pxToRem(12)};
      padding-bottom: ${pxToRem(12)};
    `};
`;

const ButtonSmall = css<BaseStyledButtonProps>`
  min-width: ${setMinWidth(60)};
  height: ${pxToRem(30)};
  padding: ${pxToRem(7, 12)};
  line-height: ${getLineHeight('md')};
  font-size: ${getFontSize('md')};

  ${({ isLoading }) =>
    isLoading &&
    css`
      padding-top: ${pxToRem(7)};
      padding-bottom: ${pxToRem(7)};
    `};
`;

const buttonSizes = {
  [ButtonSizes.lg]: ButtonLarge,
  [ButtonSizes.md]: ButtonMedium,
  [ButtonSizes.sm]: ButtonSmall,
};

/*
 * BUTTON VARIANTS
 */
const DisabledStyle = css`
  opacity: 0.35;
`;

const ButtonSolid = css<BaseStyledButtonProps>`
  background-color: ${getButtonColor('bgColor')};
  border: 1px solid ${getButtonColor('bgColor')};
  border-radius: 3px;
  text-decoration: none;

  &,
  &:not([href]):not([tabindex]) {
    color: ${getButtonColor('color')};
  }

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

  ${({ isLoading, disabled }) => disabled && !isLoading && DisabledStyle};
`;

const ButtonOutline = css<BaseStyledButtonProps>`
  background-color: ${getButtonColor('bgColor')};
  border: 1px solid ${getButtonColor('borderColor')};
  border-radius: 3px;
  text-decoration: none;

  &,
  &:not([href]):not([tabindex]) {
    color: ${getButtonColor('color')};
  }

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

  ${({ isLoading, disabled }) => disabled && !isLoading && DisabledStyle};
`;

const ButtonText = css<BaseStyledButtonProps>`
  background-color: transparent;
  padding-left: 0;
  padding-right: 0;
  text-decoration: none;

  &,
  &:not([href]):not([tabindex]) {
    color: ${getButtonColor('color')};
  }

  &:focus:not(:disabled),
  &:hover:not(:disabled),
  &:not([href]):not([tabindex]):not(:disabled):hover,
  &.hover,
  &.focus {
    color: ${getButtonColor('hoverColor')};
    text-decoration: none;
  }

  &:not(:disabled):active,
  &:not([href]):not([tabindex]):not(:disabled):active,
  &.active {
    color: ${getButtonColor('activeColor')};
    text-decoration: none;
  }

  ${({ isLoading, disabled }) => disabled && !isLoading && DisabledStyle};
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
    ]),
})`
  ${ButtonBase}
  ${({ size }) => buttonSizes[size]};
  ${({ variant }) => buttonVariants[variant]};
`;

export default StyledButton;
