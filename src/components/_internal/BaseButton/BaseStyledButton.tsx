import type { BaseStyledButtonProps } from './BaseButton.types';

import styled, { css } from 'styled-components';
import { includes, pipe } from 'ramda';

import {
  createMarginSpacing,
  getFontFamily,
  getFontWeight,
  getRadii,
  getToken,
  pxToRem,
} from '../../../utils';
import { BaseButtonVariants } from './BaseButton.enums';
import { Padbox } from '../../layout';

/*
 * BUTTON VARIANTS
 */

const ButtonSolid = css<BaseStyledButtonProps>`
  text-decoration: none;
  background-color: ${(p) => getToken(`color-action-${p.$color}`, p)};
  color: ${getToken(`color-action-text-solid`)};

  &:hover,
  &.hover {
    color: ${getToken(`color-action-text-solid`)};
    background-color: ${(p) => getToken(`color-action-${p.$color}-hover`, p)};
  }

  &:disabled,
  &.disabled {
    background-color: ${getToken(`color-action-background-disabled`)};
    color: ${getToken(`color-action-text-disabled`)};
  }
`;

const ButtonOutline = css<BaseStyledButtonProps>`
  background-color: transparent;
  border: 2px solid ${(p) => getToken(`color-action-${p.$color}`, p)};
  color: ${(p) => getToken(`color-action-${p.$color}`, p)};

  &:hover,
  &.hover {
    background-color: ${(p) =>
      getToken(`color-action-background-${p.$color}-active`, p)};
    color: ${(p) => getToken(`color-action-${p.$color}-hover`, p)};
    border-color: ${(p) => getToken(`color-action-${p.$color}-hover`, p)};
  }
  <<<<<<< HEAD ======= &:focus-visible,
  &.focus {
    color: ${(p) => getToken(`color-action-${p.$color}-hover`, p)};
    border-color: ${(p) => getToken(`color-action-${p.$color}-hover`, p)};
    outline: 4px solid ${(p) => getToken(`color-action-${p.$color}-focus`, p)};
  }
  >>>>>>>a0add7f8 (style(css): fix stylelint issues) &:disabled,
  &.disabled {
    color: ${getToken(`color-action-text-disabled`)};
    border-color: ${getToken(`color-action-text-disabled`)};
  }
`;

const ButtonText = css<BaseStyledButtonProps>`
  background-color: transparent;
  border-color: transparent;
  padding-left: 0;
  padding-right: 0;
  font-weight: ${getFontWeight('semibold')};
  color: ${(p) => getToken(`color-action-${p.$color}`, p)};

  &:hover,
  &.hover {
    color: ${(p) => getToken(`color-action-${p.$color}-hover`, p)};
    background: ${(p) =>
      getToken(`color-action-background-${p.$color}-focus`, p)};
  }

  &:disabled,
  &.disabled {
    color: ${getToken(`color-action-text-disabled`)};
  }
`;

const buttonVariants = {
  [BaseButtonVariants.solid]: ButtonSolid,
  [BaseButtonVariants.outline]: ButtonOutline,
  [BaseButtonVariants.text]: ButtonText,
};

const BaseStyledButton = styled(Padbox).withConfig({
  shouldForwardProp: (property) =>
    !includes(property, ['theme', 'paddingType', 'paddingSize']),
})<BaseStyledButtonProps>`
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
  transition: all 300ms cubic-bezier(0.55, 0.085, 0.68, 0.53),
    transform 50ms cubic-bezier(0.55, 0.085, 0.68, 0.53), outline 0ms;

  ${({ $margin }) => createMarginSpacing($margin)};
  ${({ $isExpanded }) => $isExpanded && 'width: 100%;'};
  ${({ disabled }) => disabled && 'cursor: not-allowed;'};
  ${({ $isLoading }) => $isLoading && 'cursor: progress;'};
  height: ${pipe(getToken('size-action-size'), pxToRem)};
  line-height: 1;
  font-size: ${getToken('font-action-size')};

  ${({ $hasOnlyIcon }) =>
    $hasOnlyIcon &&
    css`
      width: ${pipe(getToken('size-action-size'), pxToRem)};
    `};

  ${({ $variant }) => buttonVariants[$variant]};

  &,
  &:hover,
  &:focus-visible,
  &:active {
    text-decoration: none;
  }

  &:active,
  &&&.active {
    transform: scale(0.98);
  }

  @media (prefers-reduced-motion) {
    &:active,
    &&&.active {
      transform: scale(1);
    }
  }
`;

export default BaseStyledButton;
