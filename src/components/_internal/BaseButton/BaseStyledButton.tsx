import styled, { css } from 'styled-components';
import { includes, pipe } from 'ramda';

import {
  createMarginSpacing,
  getSpace,
  getToken,
  pxToRem,
} from '../../../utils';
import { BaseStyledButtonProps } from './BaseButton.types';
import { BaseButtonVariants } from './BaseButton.enums';
import { Padbox } from '../../layout';

/*
 * BUTTON VARIANTS
 */

const ButtonSolid = css<BaseStyledButtonProps>`
  text-decoration: none;
  background-color: var(--sscds-color-background-action-base-default);
  color: var(--sscds-color-text-inverse);

  &:hover,
  &.hover {
    color: var(--sscds-color-text-inverse);
    background-color: var(--sscds-color-background-action-base-hover);
  }

  ${({ $color }) =>
    $color === 'danger' &&
    css`
      background-color: var(--sscds-color-background-action-danger-default);

      &:hover,
      &.hover {
        background-color: var(--sscds-color-background-action-danger-hover);
      }
    `};

  &:disabled,
  &.disabled {
    background-color: var(--sscds-color-background-action-base-disabled);
    color: var(--sscds-color-text-disabled);
  }
`;

const ButtonOutline = css<BaseStyledButtonProps>`
  background-color: var(--sscds-color-background-action-subtle-default);
  border: 1px solid var(--sscds-color-border-action-subtle);
  color: var(--sscds-color-text-default);

  &:hover,
  &.hover {
    background-color: var(--sscds-color-background-action-subtle-hover);
    color: var(--sscds-color-text-default);
    border-color: var(--sscds-color-border-action-subtle);
  }

  &:disabled,
  &.disabled {
    color: var(--sscds-color-text-disabled);
    border-color: var(--sscds-color-text-action-disabled);
    background-color: var(--sscds-color-background-action-subtle-default);
  }
`;

const ButtonText = css<BaseStyledButtonProps>`
  background-color: var(--sscds-color-background-action-ghost-default);
  border-color: transparent;
  padding-left: 0;
  padding-right: 0;
  color: var(--sscds-color-text-action);

  &:hover,
  &.hover {
    color: var(--sscds-color-text-action);
    background: var(--sscds-color-background-action-ghost-hover);
  }

  ${({ $color }) =>
    $color === 'secondary'
      ? css`
          color: var(--sscds-color-text-default);

          &:hover,
          &.hover {
            color: var(--sscds-color-text-default);
          }
        `
      : $color === 'danger' &&
        css`
          color: var(--sscds-color-text-danger);

          &:hover,
          &.hover {
            color: var(--sscds-color-text-danger);
            background-color: var(
              --sscds-color-background-action-danger-ghost-hover
            );
          }
        `};

  &:disabled,
  &.disabled {
    color: var(--sscds-color-text-disabled);
    background-color: var(--sscds-color-background-action-ghost-default);
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
  border-radius: var(--sscds-radii-button);
  font-family: var(--sscds-font-family-body);
  font-weight: var(--sscds-font-weight-elementlabel-default);
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  transition: var(--sscds-action-transition),
    transform 50ms var(--sscds-transition-fn);

  ${({ $margin }) => createMarginSpacing($margin)};
  ${({ $isExpanded }) => $isExpanded && 'width: 100%;'};
  ${({ disabled }) => disabled && 'cursor: not-allowed;'};
  ${({ $isLoading }) => $isLoading && 'cursor: progress;'};

  height: ${pipe(getToken('size-action-size'), pxToRem)};
  line-height: 1;
  font-size: var(--sscds-font-size-elementlabel-sm);
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
  &:disabled,
  &.disabled {
    opacity: 0.75;
  }
`;

export default BaseStyledButton;
