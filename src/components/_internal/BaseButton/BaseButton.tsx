import React from 'react';
import PropTypes from 'prop-types';
import {
  isNotNull,
  isNotUndefined,
  isNull,
  isUndefined,
  noop,
} from 'ramda-adjunct';

import { IconTypes, SSCIconNames } from '../../../theme/icons/icons.enums';
import { SpaceSizes } from '../../../theme';
import { requireRouterLink } from '../../../utils/require-router-link';
import { SpacingSizeValuePropType } from '../../../types/spacing.types';
import { Spinner } from '../../Spinner';
import { SSCIcons, Types } from '../../Icon/Icon.types';
import { Inline } from '../../layout';
import BaseStyledButton from './BaseStyledButton';
import StyledIcon, { iconSizes } from './BaseStyledIcon';
import {
  BaseButtonColors,
  BaseButtonSizes,
  BaseButtonVariants,
} from './BaseButton.enums';
import { BaseButtonProps } from './BaseButton.types';

const BaseButton: React.FC<
  BaseButtonProps & React.ComponentProps<typeof BaseStyledButton>
> = ({
  children,
  variant = BaseButtonVariants.solid,
  color = BaseButtonColors.primary,
  size = BaseButtonSizes.md,
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

  if (process.env.NODE_ENV !== 'production' && isDisabled && href) {
    console.warn(
      '"isDisabled" prop in <Button> component will be ignored if the "href" prop is defined',
    );
  }

  const domTag =
    as ??
    (isNotNull(href)
      ? 'a' // render 'a' tag if 'href' is present
      : isNotNull(to)
      ? RouterLink // render 'Link' if 'to' is present
      : undefined); // use default

  if (isNull(RouterLink) && isNull(domTag)) {
    return null;
  }

  const content = isLoading ? (
    <>
      <Spinner
        borderWidth={2}
        dark={variant !== BaseButtonVariants.solid}
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
    <BaseStyledButton
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
    </BaseStyledButton>
  );
};

BaseButton.propTypes = {
  variant: PropTypes.oneOf(Object.values(BaseButtonVariants)),
  size: PropTypes.oneOf(Object.values(BaseButtonSizes)),
  color: PropTypes.oneOf(Object.values(BaseButtonColors)),
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

export default BaseButton;
