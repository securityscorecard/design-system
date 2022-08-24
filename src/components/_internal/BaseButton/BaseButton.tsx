import React from 'react';
import PropTypes from 'prop-types';
import {
  isNotNull,
  isNotUndefined,
  isNull,
  isUndefined,
  noop,
} from 'ramda-adjunct';
import styled, { useTheme } from 'styled-components';

import { IconTypes, SSCIconNames } from '../../../theme/icons/icons.enums';
import { SpaceSizes } from '../../../theme';
import { requireRouterLink } from '../../../utils/require-router-link';
import { getToken } from '../../../utils';
import { SpacingSizeValuePropType } from '../../../types/spacing.types';
import { PaddingTypes } from '../../layout/Padbox/Padbox.enums';
import { Spinner } from '../../Spinner';
import { Icon } from '../../Icon';
import { SSCIcons, Types } from '../../Icon/Icon.types';
import { Inline } from '../../layout';
import BaseStyledButton from './BaseStyledButton';
import {
  BaseButtonColors,
  BaseButtonSizes,
  BaseButtonVariants,
} from './BaseButton.enums';
import { BaseButtonProps } from './BaseButton.types';

const BaseStyledIcon = styled(Icon)`
  font-size: ${getToken('font-action-size')};
`;

const BaseButton: React.FC<
  BaseButtonProps & React.ComponentProps<typeof BaseStyledButton>
> = ({
  children,
  variant = BaseButtonVariants.solid,
  color = BaseButtonColors.primary,
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
  const theme = useTheme();
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
      : 'button'); // use default

  if (isNull(RouterLink) && isNull(domTag)) {
    return null;
  }

  const content = isLoading ? (
    <>
      <Spinner
        borderWidth={2}
        dark={variant !== BaseButtonVariants.solid}
        height={theme.tokens['font-action-size']}
        verticalMargin={0}
        width={theme.tokens['font-action-size']}
      />
      <span>{loadingText}</span>
    </>
  ) : isNotUndefined(iconName) ? (
    <>
      <BaseStyledIcon name={iconName} type={iconType} />
      {isNotUndefined(children) && <span>{children}</span>}
    </>
  ) : (
    children
  );

  return (
    <BaseStyledButton
      $color={color}
      $hasOnlyIcon={isNotUndefined(iconName) && isUndefined(children)}
      $isExpanded={isExpanded}
      $isLoading={isLoading}
      $margin={margin}
      $variant={variant}
      as={domTag}
      disabled={isDisabled || isLoading}
      href={href}
      paddingSize={SpaceSizes.md}
      paddingType={PaddingTypes.squish}
      to={to}
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
