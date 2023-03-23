import type { HeadingProps } from '../Heading/Heading.types';
import type { CodeProps, StrongProps, TextProps } from './Text.types';

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import cls from 'classnames';

import {
  getColor,
  getFontFamily,
  getFontSize,
  getFontWeight,
  getLineHeight,
} from '../../../utils';
import { TextSizes, TextVariants } from './Text.enums';
import { CLX_TYPOGRAPHY } from '../../../theme/constants';

const HeadingBase = css<HeadingProps>`
  font-family: ${getFontFamily('base')};
  font-weight: ${getFontWeight('medium')};
`;
const largeSize = css`
  font-size: ${getFontSize('lg')};
  line-height: ${getLineHeight('lg')};
`;
const mediumSize = css`
  font-size: ${getFontSize('md')};
  line-height: ${getLineHeight('md')};
`;
const smallSize = css`
  font-size: ${getFontSize('sm')};
  line-height: ${getLineHeight('md')};
`;
const h1 = css`
  ${HeadingBase};
  font-size: ${getFontSize('h1')};
  line-height: ${getLineHeight('xxl')};
`;
const h2 = css`
  ${HeadingBase};
  font-size: ${getFontSize('h2')};
  line-height: ${getLineHeight('xxl')};
`;
const h3 = css`
  ${HeadingBase};
  font-size: ${getFontSize('h3')};
  line-height: ${getLineHeight('xl')};
`;
const h4 = css`
  ${HeadingBase};
  font-size: ${getFontSize('h4')};
  line-height: ${getLineHeight('h4')};
`;
const h5 = css`
  ${HeadingBase};
  font-size: ${getFontSize('h5')};
  line-height: ${getLineHeight('h4')};
`;
const inheritSize = css`
  font-size: inherit;
  line-height: inherit;
`;

const primaryVariant = css`
  color: ${getColor('neutral.900')};
`;
const secondaryVariant = css`
  color: ${getColor('neutral.700')};
`;
const contextVariant = css`
  color: ${getColor('neutral.600')};
`;
const monospaceVariant = css`
  font-family: ${getFontFamily('mono')};
`;
const dangerVariant = css`
  color: ${getColor('error.500')};
`;
const inheritVariant = `
  color: inherit;
`;

const sizes = {
  [TextSizes.lg]: largeSize,
  [TextSizes.md]: mediumSize,
  [TextSizes.sm]: smallSize,
  [TextSizes.h1]: h1,
  [TextSizes.h2]: h2,
  [TextSizes.h3]: h3,
  [TextSizes.h4]: h4,
  [TextSizes.h5]: h5,
  [TextSizes.inherit]: inheritSize,
};

const variants = {
  [TextVariants.primary]: primaryVariant,
  [TextVariants.secondary]: secondaryVariant,
  [TextVariants.context]: contextVariant,
  [TextVariants.monospace]: monospaceVariant,
  [TextVariants.danger]: dangerVariant,
  [TextVariants.inherit]: inheritVariant,
};

const Text = styled.span.attrs((props) => ({
  ...props,
  className: cls(CLX_TYPOGRAPHY, props?.className),
}))<TextProps>`
  font-family: inherit;
  font-weight: ${({ isBold, theme }) =>
    isBold ? getFontWeight('bold', { theme }) : 'inherit'};
  ${({ size }) => sizes[size]};
  ${({ variant }) => variants[variant]};
`;

Text.propTypes = {
  size: PropTypes.oneOf(Object.values(TextSizes)),
  variant: PropTypes.oneOf(Object.values(TextVariants)),
  isBold: PropTypes.bool,
  className: PropTypes.string,
};

Text.defaultProps = {
  size: TextSizes.md,
  variant: TextVariants.primary,
  isBold: false,
};

export default Text;

export const Strong = styled(Text).attrs<StrongProps>(() => ({
  as: 'strong',
  isBold: true,
  size: TextSizes.inherit,
}))``;

Strong.propTypes = {
  variant: PropTypes.oneOf(Object.values(TextVariants)),
};

export const Code = styled(Text).attrs<CodeProps>(() => ({
  variant: TextVariants.monospace,
  as: 'code',
}))``;

Code.propTypes = {
  size: PropTypes.oneOf(Object.values(TextSizes)),
  isBold: PropTypes.bool,
};
