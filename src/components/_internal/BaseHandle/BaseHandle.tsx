import React, {
  ComponentProps,
  ComponentPropsWithoutRef,
  forwardRef,
} from 'react';
import styled, { css } from 'styled-components';

import { Color } from '../../../theme';
import { Icon, IconNames, RegularIconTypes } from '../../Icon';

const BaseHandleRoot = styled.button<{ $isDestructive?: boolean }>`
  border: none;
  font-family: var(--sscds-font-family-body);
  font-weight: var(--sscds-font-weight-body-default);
  text-align: center;
  display: grid;
  place-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: var(--sscds-radii-default);
  color: var(--sscds-color-icon-default);
  cursor: pointer;

  &:hover,
  &[data-state='open'] {
    background: var(--sscds-color-background-action-subtle-hover);
  }

  ${({ $isDestructive }) =>
    $isDestructive &&
    css`
      color: var(--sscds-color-icon-danger);

      &:hover,
      &[data-state='open'] {
        background: var(--tomato-3);
      }
    `}

  &:disabled {
    opacity: 0.5;

    &:hover,
    &[data-state='open'] {
      background: transparent;
    }
  }

  svg {
    transition: transform 250ms ease;
  }
`;
BaseHandleRoot.displayName = 'BaseHandleRoot';

type BaseHandleProps = {
  label?: string;
  iconProps: {
    name: IconNames;
    type?: RegularIconTypes;
    color?: Color;
    rotation?: ComponentProps<typeof Icon>['rotation'];
  };
  isDestructive?: boolean;
  isDisabled?: boolean;
};

function BaseHandle(
  {
    label,
    iconProps,
    isDestructive,
    isDisabled,
    ...props
  }: BaseHandleProps & ComponentPropsWithoutRef<'button'>,
  ref,
) {
  return (
    <BaseHandleRoot
      ref={ref}
      $isDestructive={isDestructive}
      aria-label={label}
      disabled={isDisabled}
      type="button"
      {...props}
    >
      <Icon
        name={iconProps.name}
        size="sm"
        type={iconProps.type ?? 'ssc'}
        hasFixedSize
        {...iconProps}
      />
    </BaseHandleRoot>
  );
}

BaseHandle.displayName = 'BaseHandle';

export default forwardRef(BaseHandle);
