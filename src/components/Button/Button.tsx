import React from 'react';
import PropTypes from 'prop-types';
import { isNotNull, isNotUndefined, noop } from 'ramda-adjunct';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { SpacingSizeValuePropType } from '../../types/spacing.types';
import { pxToRem } from '../../utils/helpers';
import { Spinner } from '../Spinner';
import { IconTypes, SSCIconNames } from '../Icon/Icon.enums';
import StyledButton from './StyledButton';
import StyledIcon from './StyledIcon';
import { ButtonColors, ButtonSizes, ButtonVariants } from './Button.enums';
import { ButtonProps } from './Button.types';

const LoadingText = styled.span<Pick<ButtonProps, 'size' | 'variant'>>`
  padding-right: ${({ variant, size }) =>
    variant !== ButtonVariants.solid
      ? 0
      : size === ButtonSizes.sm
      ? pxToRem(5)
      : pxToRem(10)};
`;

const spinnerSizes = {
  [ButtonSizes.lg]: 20,
  [ButtonSizes.md]: 16,
  [ButtonSizes.sm]: 10,
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = ButtonVariants.solid,
  color = ButtonColors.primary,
  size = ButtonSizes.md,
  iconName,
  iconType = IconTypes.ssc,
  href = null,
  to = null,
  margin = 'none',
  onClick = noop,
  isDisabled = false,
  isLoading = false,
  isExpanded = false,
  ...props
}) => {
  const domTag = isNotNull(href)
    ? 'a' // render 'a' tag if 'href' is present
    : isNotNull(to)
    ? Link // render 'Link' if 'to' is present
    : undefined; // use default

  const content = isLoading ? (
    <>
      <LoadingText size={size} variant={variant}>
        Processing...
      </LoadingText>
      {variant === ButtonVariants.solid && (
        <Spinner
          borderWidth={2}
          height={spinnerSizes[size]}
          verticalMargin={0}
          width={spinnerSizes[size]}
        />
      )}
    </>
  ) : isNotUndefined(iconName) ? (
    <>
      <StyledIcon name={iconName} size={size} type={iconType} />
      {children}
    </>
  ) : (
    children
  );

  return (
    <StyledButton
      as={domTag}
      color={color}
      disabled={isDisabled || isLoading}
      href={href}
      isExpanded={isExpanded}
      isLoading={isLoading}
      margin={margin}
      size={size}
      to={to}
      variant={variant}
      onClick={onClick}
      {...props}
    >
      {content}
    </StyledButton>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(Object.values(ButtonVariants)),
  size: PropTypes.oneOf(Object.values(ButtonSizes)),
  color: PropTypes.oneOf(Object.values(ButtonColors)),
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isExpanded: PropTypes.bool,
  margin: SpacingSizeValuePropType,
  href: PropTypes.string,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      pathname: PropTypes.string,
      search: PropTypes.string,
      hash: PropTypes.string,
    }),
  ]),
  className: PropTypes.string,
  iconName: PropTypes.oneOf(Object.values(SSCIconNames)),
  iconType: PropTypes.oneOf(Object.values(IconTypes)),
  onClick: PropTypes.func,
};

export default Button;
