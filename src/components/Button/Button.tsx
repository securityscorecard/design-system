import React from 'react';
import PropTypes from 'prop-types';
import {
  isNotNull,
  isNotUndefined,
  isNull,
  isUndefined,
  noop,
} from 'ramda-adjunct';

import { IconTypes, SSCIconNames } from '../../theme/icons/icons.enums';
import { SpaceSizes } from '../../theme';
import { requireRouterLink } from '../../utils/require-router-link';
import { SpacingSizeValuePropType } from '../../types/spacing.types';
import { Spinner } from '../Spinner';
import { SSCIcons, Types } from '../Icon/Icon.types';
import { Inline } from '../layout';
import StyledButton from './StyledButton';
import StyledIcon, { iconSizes } from './StyledIcon';
import { ButtonColors, ButtonSizes, ButtonVariants } from './Button.enums';
import { ButtonProps } from './Button.types';

const Button: React.FC<
  ButtonProps & React.ComponentProps<typeof StyledButton>
> = ({
  children,
  variant = ButtonVariants.solid,
  color = ButtonColors.primary,
  size = ButtonSizes.md,
  iconName,
  iconType = IconTypes.ssc,
  as = null,
  href = null,
  to = null,
  margin = 'none',
  onClick = noop,
  isDisabled = false,
  isLoading = false,
  isExpanded = false,
  loadingText = 'Loading',
  ...props
}) => {
  let RouterLink = null;
  if (isNull(as) && isNotNull(to)) {
    RouterLink = requireRouterLink();
  }

  const domTag = isNotNull(href)
    ? 'a' // render 'a' tag if 'href' is present
    : isNotNull(to)
    ? RouterLink // render 'Link' if 'to' is present
    : undefined; // use default

  if (isNull(RouterLink) && isNull(domTag)) {
    return null;
  }

  const content = isLoading ? (
    <>
      <Spinner
        borderWidth={2}
        dark={variant !== ButtonVariants.solid}
        height={iconSizes[size]}
        verticalMargin={0}
        width={iconSizes[size]}
      />
      <span>{loadingText}</span>
    </>
  ) : isNotUndefined(iconName) ? (
    <>
      <StyledIcon name={iconName} size={size} type={iconType} />
      {isNotUndefined(children) && <span>{children}</span>}
    </>
  ) : (
    children
  );

  return (
    <StyledButton
      $hasOnlyIcon={isNotUndefined(iconName) && isUndefined(children)}
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
      <Inline align="center" gap={SpaceSizes.sm}>
        {content}
      </Inline>
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
  iconName: PropTypes.oneOfType([
    PropTypes.oneOf<SSCIcons>(Object.values(SSCIconNames)),
    PropTypes.string,
  ]),
  iconType: PropTypes.oneOfType([
    PropTypes.oneOf<Types>(Object.values(IconTypes)),
    PropTypes.string,
  ]),
  loadingText: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
