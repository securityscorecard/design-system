import React from 'react';
import styled, { FlattenSimpleInterpolation, css } from 'styled-components';

import { getRadii } from '../../utils';
import Icon from '../Icon/Icon';
import { Padbox } from '../layout';
import { IconWrapperProps } from './IconWrapper.types';

const boxSizes: Record<IconWrapperProps['size'], string> = {
  xs: '1.5rem',
  sm: '2rem',
  md: '2.5rem',
  lg: '3rem',
  xl: '3.5rem',
};

const variances: Record<
  IconWrapperProps['variant'],
  FlattenSimpleInterpolation
> = {
  default: css`
    box-shadow: inset 0 0 0 1px rgba(0 0 0/15%);
  `,
  strong: css`
    background-color: var(--sscds-info-50);
  `,
  subtle: css`
    background-color: rgba(0 0 0/2.5%);
  `,
};

const IconWrapperRoot = styled(Padbox)<{
  $variant: IconWrapperProps['variant'];
  $size: IconWrapperProps['size'];
}>`
  display: inline-grid;
  place-items: center;
  border-radius: ${getRadii('double')};
  width: ${({ $size }) => boxSizes[$size]};
  height: ${({ $size }) => boxSizes[$size]};
  ${({ $variant }) => variances[$variant]}
`;

export default function IconWrapper({
  size = 'md',
  variant = 'default',
  ...rest
}: IconWrapperProps) {
  return (
    <IconWrapperRoot
      $size={size}
      $variant={variant}
      paddingSize={size === 'xs' ? 'xs' : 'sm'}
    >
      {/* @ts-expect-error TS is not able to infer correct types here but types are correct */}
      <Icon
        {...rest}
        color="neutral.1000"
        size={size === 'xs' ? 'sm' : size}
        hasFixedSize
      />
    </IconWrapperRoot>
  );
}
