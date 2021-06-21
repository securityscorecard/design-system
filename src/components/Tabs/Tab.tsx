import React from 'react';
import PropTypes from 'prop-types';

import Label from './TabLabel';
import { TabProps } from './Tabs.types';
import { TabSizes, TabVariants } from './Tabs.enums';
import { ColorTypes } from '../../theme/colors.enums';
import { requireRouterLink } from '../../utils/require-router-link';
import { SpaceSizes } from '../../theme/space.enums';
import { PaddingTypes } from '../../types/spacing.types';

const Tab: React.FC<TabProps> = ({
  children,
  isSelected,
  onClick,
  color = ColorTypes.blueberryClassic,
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
    <Label
      $color={color}
      $isSelected={isSelected}
      $variant={variant}
      as={isLink ? RouterLink : 'a'}
      paddingSize={paddingSize}
      paddingType={PaddingTypes.squish}
      size={size}
      tabIndex={0}
      {...handler}
    >
      {children}
    </Label>
  );
};

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.values(TabSizes)),
  variant: PropTypes.oneOf(Object.values(TabVariants)),
  isSelected: PropTypes.bool,
  color: PropTypes.oneOf(Object.values(ColorTypes)),
  onClick: PropTypes.func,
};

export default Tab;
