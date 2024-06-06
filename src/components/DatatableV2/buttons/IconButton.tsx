import React, { ComponentProps, forwardRef, memo } from 'react';
import styled from 'styled-components';

import { getColor, getRadii, getToken } from '../../../utils';
import { Icon, IconProps } from '../../Icon';
import { Padbox } from '../../layout';

interface IconButtonProps extends Omit<ComponentProps<'button'>, 'disabled'> {
  label: string;
  iconProps: IconProps;
  isDisabled?: boolean;
  isDestructive?: boolean;
}

const IconButtonRoot = styled(Padbox)<{ $isDestructive: boolean }>`
  width: 1rem;
  height: 1rem;
  box-sizing: content-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  color: ${({ $isDestructive, theme }) =>
    $isDestructive
      ? getToken('color-action-danger', { theme })
      : getColor('neutral.500', { theme })};
  border-radius: ${getRadii('round')};
  transition: var(--sscds-action-transition);

  &:disabled {
    cursor: auto;
    opacity: 0.6;
  }
  &:not(:disabled):hover {
    background: ${({ $isDestructive, theme }) =>
      $isDestructive
        ? getToken('color-action-danger-focus', { theme })
        : getColor('primary.50', { theme })};
    color: ${({ $isDestructive, theme }) =>
      $isDestructive
        ? getToken('color-action-danger-hover', { theme })
        : getColor('text.primary', { theme })};
  }
  &:not(:disabled):active,
  &:not(:disabled)[data-state='open'] {
    background: ${({ $isDestructive, theme }) =>
      $isDestructive
        ? getToken('color-action-danger-focus', { theme })
        : getColor('primary.200', { theme })};
    color: ${({ $isDestructive, theme }) =>
      $isDestructive
        ? getToken('color-action-danger-active', { theme })
        : getColor('text.primary', { theme })};
  }
`;

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ label, iconProps, isDisabled, isDestructive = false, ...props }, ref) => {
    return (
      <IconButtonRoot
        ref={ref}
        $isDestructive={isDestructive}
        aria-label={label}
        as="button"
        disabled={isDisabled}
        paddingSize="sm"
        paddingType="squish"
        type="button"
        {...props}
      >
        <Icon size="sm" hasFixedSize {...iconProps} />
      </IconButtonRoot>
    );
  },
);

export default memo(IconButton);
