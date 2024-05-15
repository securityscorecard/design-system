import React, { ComponentProps, forwardRef, memo } from 'react';
import styled from 'styled-components';

import { getColor, getRadii } from '../../../utils';
import { Icon, IconProps } from '../../Icon';
import { Padbox } from '../../layout';

interface IconButtonProps extends Omit<ComponentProps<'button'>, 'disabled'> {
  label: string;
  iconProps: IconProps;
  isDisabled?: boolean;
}

const IconButtonRoot = styled(Padbox)`
  width: 1rem;
  height: 1rem;
  box-sizing: content-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  color: ${getColor('neutral.500')};
  border-radius: ${getRadii('round')};
  transition: var(--sscds-action-transition);

  &:disabled {
    cursor: auto;
    opacity: 0.6;
  }
  &:not(:disabled):hover {
    background: ${getColor('primary.50')};
    color: ${getColor('text.primary')};
  }
  &:not(:disabled):active,
  &:not(:disabled)[data-state='open'] {
    background: ${getColor('primary.200')};
    color: ${getColor('text.primary')};
  }
`;

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ label, iconProps, isDisabled, ...props }, ref) => {
    return (
      <IconButtonRoot
        ref={ref}
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
