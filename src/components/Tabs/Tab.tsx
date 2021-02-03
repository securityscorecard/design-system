import React from 'react';
import PropTypes from 'prop-types';

import Label from './TabLabel';
import { TabProps, TabSizes } from './Tabs.types';
import { ColorTypes } from '../../theme/colors.enums';
import { requireRouterLink } from '../../utils/require-router-link';

const Tab: React.FC<TabProps> = ({
  children,
  isSelected,
  onClick,
  color = ColorTypes.blueberryClassic,
  size = TabSizes.h3,
  value,
}) => {
  const isLink = value?.toString()?.startsWith('/');
  const handler = isLink ? { to: value } : { onClick: () => onClick(value) };
  let RouterLink = null;

  if (isLink) {
    RouterLink = requireRouterLink();
  }

  return (
    <Label
      $color={color}
      $isSelected={isSelected}
      as={isLink ? RouterLink : 'a'}
      size={size}
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
  isSelected: PropTypes.bool,
  color: PropTypes.oneOf(Object.values(ColorTypes)),
  onClick: PropTypes.func,
};

export default Tab;
