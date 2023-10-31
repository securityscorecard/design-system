import type { ComponentPropsWithRef, ComponentPropsWithoutRef } from 'react';
import type { HeadingProps } from './Heading.types';

import styled, { css } from 'styled-components';
import { path } from 'ramda';
import cls from 'classnames';
import { createElement } from 'react';

import {
  createSpacings,
  getColor,
  getFontFamily,
  getFontSize,
  getFontWeight,
  getLineHeight,
} from '../../../utils';
import { HeadingSizes, HeadingVariants } from './Heading.enums';
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
}: HeadingProps & ComponentPropsWithRef<typeof HeadingH1>) => {
  const additionalProps = {
    size,
    variant,
    className: cls(CLX_TYPOGRAPHY, className),
    ...props,
  };

  return createElement(headingSizes[size], additionalProps, children);
};

export default Heading;

export const H1 = ({
  children,
  ...props
}: Omit<ComponentPropsWithoutRef<typeof Heading>, 'size'>) => (
  <Heading size={HeadingSizes.h1} {...props}>
    {children}
  </Heading>
);

export const H2 = ({
  children,
  ...props
}: Omit<ComponentPropsWithoutRef<typeof Heading>, 'size'>) => (
  <Heading size={HeadingSizes.h2} {...props}>
    {children}
  </Heading>
);

export const H3 = ({
  children,
  ...props
}: Omit<ComponentPropsWithoutRef<typeof Heading>, 'size'>) => (
  <Heading size={HeadingSizes.h3} {...props}>
    {children}
  </Heading>
);

export const H4 = ({
  children,
  ...props
}: Omit<ComponentPropsWithoutRef<typeof Heading>, 'size'>) => (
  <Heading size={HeadingSizes.h4} {...props}>
    {children}
  </Heading>
);

export const H5 = ({
  children,
  ...props
}: Omit<ComponentPropsWithoutRef<typeof Heading>, 'size'>) => (
  <Heading size={HeadingSizes.h5} {...props}>
    {children}
  </Heading>
);
