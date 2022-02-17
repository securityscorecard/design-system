import React from 'react';
import PropTypes from 'prop-types';

import { TabProps } from './Tabs.types';
import { TabSizes, TabVariants } from './Tabs.enums';
import { ColorTypes, DeprecatedColorTypes } from '../../theme/colors.enums';
import { requireRouterLink } from '../../utils/require-router-link';
import { SpaceSizes } from '../../theme/space.enums';
import { PaddingTypes } from '../layout/Padbox/Padbox.enums';
import BaseTabLabel from '../_internal/BaseTabs/BaseTabLabel';

const Tab: React.FC<TabProps> = ({
  children,
  isSelected,
  onClick,
  color = ColorTypes.primary500,
  size = TabSizes.sm,
  variant = TabVariants.underline,
  value,
}) => {
  const isLink = value?.toString()?.startsWith('/');
  const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onClick(value);
    }
  };
  const handler = isLink
    ? { to: value }
    : { onClick: () => onClick(value), onKeyDown: (e) => handleKeyDown(e) };
  let RouterLink = null;

  if (isLink) {
    RouterLink = requireRouterLink();
  }

  const paddingSize =
    variant !== TabVariants.segmented
      ? SpaceSizes.none
      : size === TabSizes.lg
      ? SpaceSizes.md
      : SpaceSizes.sm;

  return (
    <BaseTabLabel
      $color={color}
      $isSelected={isSelected}
      $variant={variant}
      aria-selected={isSelected}
      as={isLink ? RouterLink : 'a'}
      paddingSize={paddingSize}
      paddingType={PaddingTypes.squish}
      role="tab"
      size={size}
      tabIndex={0}
      {...handler}
    >
      {children}
    </BaseTabLabel>
  );
};

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.values(TabSizes)),
  variant: PropTypes.oneOf(Object.values(TabVariants)),
  isSelected: PropTypes.bool,
  color: PropTypes.oneOf([
    ...Object.values(ColorTypes),
    ...DeprecatedColorTypes,
  ]),
  onClick: PropTypes.func,
};

export default Tab;
