import React from 'react';
import PropTypes from 'prop-types';
import {
  isNotNull,
  isNotUndefined,
  isNull,
  isUndefined,
  noop,
} from 'ramda-adjunct';
import { useTheme } from 'styled-components';
import cls from 'classnames';

import { IconTypes, SSCIconNames } from '../../../theme/icons/icons.enums';
import { SpaceSizes } from '../../../theme';
import { requireRouterLink } from '../../../utils/require-router-link';
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
import { CLX_COMPONENT } from '../../../theme/constants';
import { useLogger } from '../../../hooks/useLogger';

const BaseButton = ({
  children,
  variant = BaseButtonVariants.solid,
  color = BaseButtonColors.primary,
  iconStart,
  iconEnd,
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
  className,
  ...props
}: BaseButtonProps & React.ComponentProps<typeof BaseStyledButton>) => {
  let RouterLink = null;
  const theme = useTheme();
  const { warn } = useLogger('Button');
  if (isNull(as) && isNotNull(to)) {
    RouterLink = requireRouterLink();
  }

  if (isDisabled && href) {
    warn(
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

  const hasStartIcon = isNotUndefined(iconName) || isNotUndefined(iconStart);
  const hasIcon = hasStartIcon || isNotUndefined(iconEnd);
  const hasOnlyIcon = hasStartIcon && isUndefined(children);
  const content = isLoading ? (
    <>
      <Spinner
        borderWidth={2}
        height={theme.tokens['font-action-size']}
        verticalMargin={0}
        width={theme.tokens['font-action-size']}
        dark
      />
      {!hasOnlyIcon && <span>{loadingText}</span>}
    </>
  ) : hasIcon ? (
    <>
      {hasStartIcon && (
        <Icon
          name={iconStart?.name ?? iconName}
          type={iconStart?.type ?? iconType}
        />
      )}
      {isNotUndefined(children) && <span>{children}</span>}
      {isNotUndefined(iconEnd) && !hasOnlyIcon && (
        <Icon name={iconEnd?.name} type={iconEnd?.type ?? 'ssc'} />
      )}
    </>
  ) : (
    children
  );

  return (
    <BaseStyledButton
      $color={color}
      $hasOnlyIcon={hasOnlyIcon}
      $isExpanded={isExpanded}
      $isLoading={isLoading}
      $margin={margin}
      $variant={variant}
      as={domTag}
      className={cls(CLX_COMPONENT, className)}
      disabled={isDisabled || isLoading}
      href={href}
      paddingSize={SpaceSizes.md}
      paddingType={PaddingTypes.squish}
      to={to}
      onClick={onClick}
      {...props}
      aria-label={isLoading && hasOnlyIcon ? 'Loading' : props?.['aria-label']}
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
