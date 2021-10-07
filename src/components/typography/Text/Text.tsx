import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import {
  getColor,
  getFontFamily,
  getFontSize,
  getFontWeight,
  getLineHeight,
} from '../../../utils';
import { TextSizes, TextVariants } from './Text.enums';
import { CodeProps, StrongProps, TextProps } from './Text.types';

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
const inheritSize = css`
  font-size: inherit;
  line-height: inherit;
`;

const primaryVariant = css`
  color: ${getColor('graphite4B')};
`;
const secondaryVariant = css`
  color: ${getColor('graphite2B')};
`;
const contextVariant = css`
  color: ${getColor('graphiteB')};
`;
const monospaceVariant = css`
  font-family: ${getFontFamily('mono')};
`;
const dangerVariant = css`
  color: ${getColor('strawberry')};
`;
const inheritVariant = `
  color: inherit;
`;

const sizes = {
  [TextSizes.lg]: largeSize,
  [TextSizes.md]: mediumSize,
  [TextSizes.sm]: smallSize,
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

const Text = styled.span<TextProps>`
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
};

Text.defaultProps = {
  size: TextSizes.lg,
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
