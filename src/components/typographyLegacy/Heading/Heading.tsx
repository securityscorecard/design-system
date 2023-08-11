import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { path } from 'ramda';
import cls from 'classnames';

import {
  createSpacings,
  getColor,
  getFontFamily,
  getFontSize,
  getFontWeight,
  getLineHeight,
} from '../../../utils';
import { HeadingSizes, HeadingVariants } from './Heading.enums';
import { HeadingProps } from './Heading.types';
import { CLX_TYPOGRAPHY } from '../../../theme/constants';

const primaryVariant = css`
  color: ${getColor('text.primary')};
`;
const secondaryVariant = css`
  color: ${getColor('text.secondary')};
`;

const variants = {
  primary: primaryVariant,
  secondary: secondaryVariant,
};

const HeadingBase = css<HeadingProps>`
  font-family: ${getFontFamily('base')};
  font-weight: ${getFontWeight('medium')};
  margin-top: ${({ size, theme }) =>
    path(['typography', 'margin', 'heading', size, 'top'], theme)};
  margin-bottom: ${({ size, theme }) =>
    path(['typography', 'margin', 'heading', size, 'bottom'], theme)};
  ${createSpacings};
  ${({ variant }) => variants[variant]};
`;

const HeadingH0 = styled.h1`
  ${HeadingBase};
  font-size: ${getFontSize('h0')};
  line-height: normal;
`;
const HeadingH1 = styled.h1`
  ${HeadingBase};
  font-size: ${getFontSize('h1')};
  line-height: ${getLineHeight('xxl')};
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
  h0: HeadingH0,
  h1: HeadingH1,
  h2: HeadingH2,
  h3: HeadingH3,
  h4: HeadingH4,
  h5: HeadingH5,
};

const Heading: React.FC<
  HeadingProps & React.ComponentProps<typeof HeadingH1>
> = ({
  children,
  size = HeadingSizes.h1,
  variant = HeadingVariants.primary,
  className,
  ...props
}) => {
  const additionalProps = {
    size,
    variant,
    className: cls(CLX_TYPOGRAPHY, className),
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

export const H0: React.FC<
  Omit<React.ComponentProps<typeof Heading>, 'size'>
> = ({ children, ...props }) => (
  <Heading size={HeadingSizes.h0} {...props}>
    {children}
  </Heading>
);

H0.propTypes = {
  variant: PropTypes.oneOf(Object.values(HeadingVariants)),
};

export const H1: React.FC<
  Omit<React.ComponentProps<typeof Heading>, 'size'>
> = ({ children, ...props }) => (
  <Heading size={HeadingSizes.h1} {...props}>
    {children}
  </Heading>
);

H1.propTypes = {
  variant: PropTypes.oneOf(Object.values(HeadingVariants)),
};

export const H2: React.FC<
  Omit<React.ComponentProps<typeof Heading>, 'size'>
> = ({ children, ...props }) => (
  <Heading size={HeadingSizes.h2} {...props}>
    {children}
  </Heading>
);

H2.propTypes = {
  variant: PropTypes.oneOf(Object.values(HeadingVariants)),
};

export const H3: React.FC<
  Omit<React.ComponentProps<typeof Heading>, 'size'>
> = ({ children, ...props }) => (
  <Heading size={HeadingSizes.h3} {...props}>
    {children}
  </Heading>
);

H3.propTypes = {
  variant: PropTypes.oneOf(Object.values(HeadingVariants)),
};

export const H4: React.FC<
  Omit<React.ComponentProps<typeof Heading>, 'size'>
> = ({ children, ...props }) => (
  <Heading size={HeadingSizes.h4} {...props}>
    {children}
  </Heading>
);

H4.propTypes = {
  variant: PropTypes.oneOf(Object.values(HeadingVariants)),
};

export const H5: React.FC<
  Omit<React.ComponentProps<typeof Heading>, 'size'>
> = ({ children, ...props }) => (
  <Heading size={HeadingSizes.h5} {...props}>
    {children}
  </Heading>
);

H5.propTypes = {
  variant: PropTypes.oneOf(Object.values(HeadingVariants)),
};
