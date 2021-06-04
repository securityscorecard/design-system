import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { path } from 'ramda';

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

const primaryVariant = css`
  color: ${getColor('graphite4B')};
`;
const secondaryVariant = css`
  color: ${getColor('graphite2B')};
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
  line-height: ${getLineHeight('xxxl')};
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
  line-height: ${getLineHeight('lg')};
`;

const headingSizes = {
  h0: HeadingH0,
  h1: HeadingH1,
  h2: HeadingH2,
  h3: HeadingH3,
  h4: HeadingH4,
};

const Heading: React.FC<
  HeadingProps & React.ComponentProps<typeof HeadingH1>
> = ({
  children,
  size = HeadingSizes.h1,
  variant = HeadingVariants.primary,
  ...props
}) => {
  const additionalProps = { size, variant, ...props };

  return React.createElement(headingSizes[size], additionalProps, children);
};

Heading.propTypes = {
  size: PropTypes.oneOf(Object.values(HeadingSizes)),
  variant: PropTypes.oneOf(Object.values(HeadingVariants)),
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
