import {
  type ComponentProps,
  type ComponentPropsWithoutRef,
  createElement,
} from 'react';
import styled, { css } from 'styled-components';
import cls from 'classnames';

import { createSpacings } from '../../utils';
import { HeadingSizes, HeadingVariants } from './Heading.enums';
import { HeadingProps } from './Heading.types';
import { CLX_TYPOGRAPHY } from '../../theme/constants';

const primaryVariant = css`
  color: var(--sscds-color-text-default);
`;
const secondaryVariant = css`
  color: var(--sscds-color-icon-subtle);
`;

const variants = {
  default: primaryVariant,
  subtle: secondaryVariant,

  /** @deprecated */
  primary: primaryVariant,
  secondary: secondaryVariant,
};

const HeadingBase = css<HeadingProps>`
  font-family: var(--sscds-font-family-body);
  font-weight: var(--sscds-font-weight-heading);
  ${createSpacings};
  ${({ variant }) => variants[variant]};
`;

const HeadingH1 = styled.h1`
  ${HeadingBase};
  font-size: var(--sscds-font-size-heading-1);
  line-height: var(--sscds-font-lineheight-heading-1);
`;
const HeadingH2 = styled.h2`
  ${HeadingBase};
  font-size: var(--sscds-font-size-heading-2);
  line-height: var(--sscds-font-lineheight-heading-2);
`;
const HeadingH3 = styled.h3`
  ${HeadingBase};
  font-size: var(--sscds-font-size-heading-3);
  line-height: var(--sscds-font-lineheight-heading-3);
`;
const HeadingH4 = styled.h4`
  ${HeadingBase};
  font-size: var(--sscds-font-size-heading-4);
  line-height: var(--sscds-font-lineheight-heading-4);
`;
const HeadingH5 = styled.h5`
  ${HeadingBase};
  font-size: var(--sscds-font-size-heading-5);
  line-height: var(--sscds-font-lineheight-heading-5);
`;

const headingSizes = {
  h1: HeadingH1,
  h2: HeadingH2,
  h3: HeadingH3,
  h4: HeadingH4,
  h5: HeadingH5,
};

const Heading = ({
  children,
  size = HeadingSizes.h1,
  variant = HeadingVariants.primary,
  className,
  ...props
}: HeadingProps & ComponentPropsWithoutRef<'h1'>) => {
  const additionalProps = {
    size,
    variant,
    className: cls(CLX_TYPOGRAPHY, className),
    children,
    ...props,
  };

  return createElement(headingSizes[size], additionalProps, children);
};

export default Heading;

type SizelessHeading = Omit<ComponentProps<typeof Heading>, 'size'>;

export const H1 = ({ children, ...props }: SizelessHeading) => (
  <Heading size={HeadingSizes.h1} {...props}>
    {children}
  </Heading>
);

export const H2 = ({ children, ...props }: SizelessHeading) => (
  <Heading size={HeadingSizes.h2} {...props}>
    {children}
  </Heading>
);

export const H3 = ({ children, ...props }: SizelessHeading) => (
  <Heading size={HeadingSizes.h3} {...props}>
    {children}
  </Heading>
);

export const H4 = ({ children, ...props }: SizelessHeading) => (
  <Heading size={HeadingSizes.h4} {...props}>
    {children}
  </Heading>
);

export const H5 = ({ children, ...props }: SizelessHeading) => (
  <Heading size={HeadingSizes.h5} {...props}>
    {children}
  </Heading>
);
