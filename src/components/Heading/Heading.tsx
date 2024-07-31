import React, { ComponentPropsWithoutRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { path } from 'ramda';
import cls from 'classnames';

import {
  createSpacings,
  getFontFamily,
  getFontSize,
  getFontWeight,
  getLineHeight,
  pxToRem,
} from '../../utils';
import { HeadingSizes, HeadingVariants } from './Heading.enums';
import { HeadingProps } from './Heading.types';
import { BASE_LINE_HEIGHT, CLX_TYPOGRAPHY } from '../../theme/constants';

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

const margin = {
  h1: {
    top: pxToRem(BASE_LINE_HEIGHT * 5), // 100px
    bottom: pxToRem(BASE_LINE_HEIGHT * 2.5), // 50px
  },
  h2: {
    top: pxToRem(BASE_LINE_HEIGHT * 4), // 80px
    bottom: pxToRem(BASE_LINE_HEIGHT * 2), // 40px
  },
  h3: {
    top: pxToRem(BASE_LINE_HEIGHT * 3), // 60px
    bottom: pxToRem(BASE_LINE_HEIGHT * 1.5), // 30px
  },
  h4: {
    top: pxToRem(BASE_LINE_HEIGHT * 2), // 40px
    bottom: pxToRem(BASE_LINE_HEIGHT), // 20px
  },
  h5: {
    top: pxToRem(BASE_LINE_HEIGHT * 2), // 40px
    bottom: pxToRem(BASE_LINE_HEIGHT), // 20px
  },
} as const;

const HeadingBase = css<HeadingProps>`
  font-family: ${getFontFamily('base')};
  font-weight: ${getFontWeight('medium')};
  margin-top: ${({ size }) => path([size, 'top'], margin)};
  margin-bottom: ${({ size }) => path([size, 'bottom'], margin)};
  ${createSpacings};
  ${({ variant }) => variants[variant]};
`;

const HeadingH1 = styled.h1`
  ${HeadingBase};
  font-size: ${getFontSize('h1')};
  line-height: ${getLineHeight('xxl')};
  font-weight: ${getFontWeight('bold')};
`;
const HeadingH2 = styled.h2`
  ${HeadingBase};
  font-size: ${getFontSize('h2')};
  line-height: ${getLineHeight('xxl')};
`;
const HeadingH3 = styled.h3`
  ${HeadingBase};
  font-size: ${getFontSize('h3')};
  line-height: ${getLineHeight('xl')};
`;
const HeadingH4 = styled.h4`
  ${HeadingBase};
  font-size: ${getFontSize('h4')};
  line-height: ${getLineHeight('h4')};
  font-weight: ${getFontWeight('semibold')};
`;
const HeadingH5 = styled.h5`
  ${HeadingBase};
  font-size: ${getFontSize('h5')};
  line-height: ${getLineHeight('h4')};
  font-weight: ${getFontWeight('semibold')};
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

  return React.createElement(headingSizes[size], additionalProps, children);
};

Heading.propTypes = {
  size: PropTypes.oneOf(Object.values(HeadingSizes)),
  variant: PropTypes.oneOf(Object.values(HeadingVariants)),
  className: PropTypes.string,
};

export default Heading;

type SizelessHeading = Omit<React.ComponentProps<typeof Heading>, 'size'>;

export const H1 = ({ children, ...props }: SizelessHeading) => (
  <Heading size={HeadingSizes.h1} {...props}>
    {children}
  </Heading>
);

H1.propTypes = {
  variant: PropTypes.oneOf(Object.values(HeadingVariants)),
};

export const H2 = ({ children, ...props }: SizelessHeading) => (
  <Heading size={HeadingSizes.h2} {...props}>
    {children}
  </Heading>
);

H2.propTypes = {
  variant: PropTypes.oneOf(Object.values(HeadingVariants)),
};

export const H3 = ({ children, ...props }: SizelessHeading) => (
  <Heading size={HeadingSizes.h3} {...props}>
    {children}
  </Heading>
);

H3.propTypes = {
  variant: PropTypes.oneOf(Object.values(HeadingVariants)),
};

export const H4 = ({ children, ...props }: SizelessHeading) => (
  <Heading size={HeadingSizes.h4} {...props}>
    {children}
  </Heading>
);

H4.propTypes = {
  variant: PropTypes.oneOf(Object.values(HeadingVariants)),
};

export const H5 = ({ children, ...props }: SizelessHeading) => (
  <Heading size={HeadingSizes.h5} {...props}>
    {children}
  </Heading>
);

H5.propTypes = {
  variant: PropTypes.oneOf(Object.values(HeadingVariants)),
};
