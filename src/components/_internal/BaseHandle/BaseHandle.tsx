import React, { ComponentProps, ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';

import { Color } from '../../../theme';
import { Icon, IconNames, RegularIconTypes } from '../../Icon';

const BaseHandleRoot = styled.button`
  border: none;
  font-family: var(--sscds-font-family-body);
  font-weight: var(--sscds-font-weight-body-default);
  text-align: center;
  display: flex;
  align-items: center;
  padding: var(--sscds-space-1x) var(--sscds-space-half-x);
  border-radius: var(--sscds-radii-default);
  color: var(--sscds-color-icon-subtle);
  cursor: pointer;

  &:hover {
    background: var(--sscds-color-background-action-subtle-hover);
  }

  svg {
    transition: transform 250ms ease;
  }
`;
BaseHandleRoot.displayName = 'BaseHandleRoot';

export const BaseHandlePlaceholder = styled.div`
  width: 1.5rem;
  height: 2rem;
`;

type BaseHandleProps = {
  label?: string;
  iconProps: {
    name: IconNames;
    type?: RegularIconTypes;
    color?: Color;
    rotation?: ComponentProps<typeof Icon>['rotation'];
  };
};

function BaseHandle({
  label,
  iconProps,
  ...props
}: BaseHandleProps & ComponentPropsWithoutRef<'button'>) {
  return (
    <BaseHandleRoot aria-label={label} type="button" {...props}>
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

export default BaseHandle;
