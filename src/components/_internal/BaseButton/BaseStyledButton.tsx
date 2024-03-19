import type { BaseStyledButtonProps } from './BaseButton.types';

import styled, { css } from 'styled-components';
import { includes, pipe } from 'ramda';

import {
  createMarginSpacing,
  getFontFamily,
  getFontWeight,
  getRadii,
  getSpace,
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

  &:disabled,
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

const ButtonGhost = css<BaseStyledButtonProps>`
  ${ButtonText}
  padding-left: ${getSpace('sm')};
  padding-right: ${getSpace('sm')};
`;

const buttonVariants = {
  [BaseButtonVariants.solid]: ButtonSolid,
  [BaseButtonVariants.outline]: ButtonOutline,
  [BaseButtonVariants.text]: ButtonText,
  [BaseButtonVariants.ghost]: ButtonGhost,
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
  transition: var(--sscds-action-transition),
    transform 50ms var(--sscds-transition-fn), outline 0ms;
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
