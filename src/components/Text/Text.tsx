import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import cls from 'classnames';

import { HeadingProps } from '../Heading/Heading.types';
import { TextSizes, TextVariants } from './Text.enums';
import { CodeProps, StrongProps, TextProps } from './Text.types';
import { CLX_TYPOGRAPHY } from '../../theme/constants';

const HeadingBase = css<HeadingProps>`
  font-family: var(--sscds-font-family-body);
`;
const largeSize = css`
  font-size: var(--sscds-font-size-body-lg);
  line-height: var(--sscds-font-lineheight-body-lg);
`;
const mediumSize = css`
  font-size: var(--sscds-font-size-body-md);
  line-height: var(--sscds-font-lineheight-body-md);
`;
const smallSize = css`
  font-size: var(--sscds-font-size-body-sm);
  line-height: var(--sscds-font-lineheight-body-sm);
`;
const h1 = css`
  ${HeadingBase};
  font-size: var(--sscds-font-size-heading-1);
  line-height: var(--sscds-font-lineheight-heading-1);
`;
const h2 = css`
  ${HeadingBase};
  font-size: var(--sscds-font-size-heading-2);
  line-height: var(--sscds-font-lineheight-heading-2);
`;
const h3 = css`
  ${HeadingBase};
  font-size: var(--sscds-font-size-heading-3);
  line-height: var(--sscds-font-lineheight-heading-3);
`;
const h4 = css`
  ${HeadingBase};
  font-size: var(--sscds-font-size-heading-4);
  line-height: var(--sscds-font-lineheight-heading-4);
`;
const h5 = css`
  ${HeadingBase};
  font-size: var(--sscds-font-size-heading-5);
  line-height: var(--sscds-font-lineheight-heading-5);
`;
const inheritSize = css`
  font-size: inherit;
  line-height: inherit;
`;

const primaryVariant = css`
  color: var(--sscds-color-text-default);
`;
const secondaryVariant = css`
  color: var(--sscds-color-text-subtle);
`;
const contextVariant = css`
  color: var(--sscds-color-neutral-9);
`;
const inverseVariant = css`
  color: var(--sscds-color-text-inverse);
`;
const whiteVariant = css`
  color: var(--sscds-color-text-white);
`;
const monospaceVariant = css`
  font-family: var(--sscds-font-family-mono);
  color: var(--sscds-color-text-default);
`;
const dangerVariant = css`
  color: var(--sscds-color-text-danger);
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
  [TextVariants.default]: primaryVariant,
  [TextVariants.subtle]: secondaryVariant,
  [TextVariants.inverse]: inverseVariant,
  [TextVariants.white]: whiteVariant,
  [TextVariants.monospace]: monospaceVariant,
  [TextVariants.danger]: dangerVariant,
  [TextVariants.inherit]: inheritVariant,

  /** @deprecated */
  [TextVariants.primary]: primaryVariant,
  [TextVariants.secondary]: secondaryVariant,
  [TextVariants.context]: contextVariant,
};

const Text = styled.span.attrs<{ variant: keyof typeof TextVariants }>(
  (props) => ({
    ...props,
    className: cls(CLX_TYPOGRAPHY, props?.className),
  }),
)<TextProps>`
  font-family: inherit;
  font-weight: ${({ isBold }) =>
    isBold ? 'var(--sscds-font-weight-body-strong)' : 'inherit'};
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
}))``;

Strong.propTypes = {
  variant: PropTypes.oneOf(Object.values(TextVariants)),
};
Strong.defaultProps = {
  size: TextSizes.inherit,
};

export const Code = styled(Text).attrs<CodeProps>(() => ({
  variant: TextVariants.monospace,
  as: 'code',
}))``;

Code.propTypes = {
  size: PropTypes.oneOf(Object.values(TextSizes)),
  isBold: PropTypes.bool,
};
