import styled, { FlattenSimpleInterpolation, css } from 'styled-components';
import { ComponentPropsWithoutRef } from 'react';

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
    box-shadow: inset 0 0 0 1px var(--sscds-color-neutral-alpha-6);
  `,
  strong: css`
    background-color: var(--sscds-color-info-100);
  `,
  subtle: css`
    background-color: var(--sscds-color-neutral-alpha-3);
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
}: IconWrapperProps &
  Omit<
    ComponentPropsWithoutRef<typeof Icon>,
    'color' | 'size' | 'hasFixedSize' | 'hasFixedWidth' | 'name' | 'type'
  >) {
  return (
    <IconWrapperRoot
      $size={size}
      $variant={variant}
      paddingSize={size === 'xs' ? 'xs' : 'sm'}
    >
      {/* @ts-expect-error TS is not able to infer correct types here but types are correct */}
      <Icon
        {...rest}
        color="var(--sscds-color-icon-default)"
        size={size === 'xs' ? 'sm' : size}
        hasFixedSize
      />
    </IconWrapperRoot>
  );
}
