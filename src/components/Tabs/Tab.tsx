import type { FC, KeyboardEvent } from 'react';
import type { TabProps } from './Tabs.types';

import PropTypes from 'prop-types';

import { TabVariants } from './Tabs.enums';
import { ColorTypes } from '../../theme/colors.enums';
import { requireRouterLink } from '../../utils/require-router-link';
import { SpaceSizes } from '../../theme/space.enums';
import { PaddingTypes } from '../layout/Padbox/Padbox.enums';
import BaseTabLabel from '../_internal/BaseTabs/BaseTabLabel';

const Tab: FC<TabProps> = ({
  children,
  isSelected,
  isExpanded = false,
  onClick,
  color,
  variant = TabVariants.underline,
  value,
}) => {
  const isLink = value?.toString()?.startsWith('/');
  const handleKeyDown = (e: KeyboardEvent<HTMLAnchorElement>) => {
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
    variant === TabVariants.segmented
      ? SpaceSizes.sm
      : variant === TabVariants.underline
      ? SpaceSizes.md
      : SpaceSizes.none;

  return (
    <BaseTabLabel
      $color={color}
      $isExpanded={isExpanded}
      $isSelected={isSelected}
      $variant={variant}
      aria-selected={isSelected}
      as={isLink ? RouterLink : 'a'}
      paddingSize={paddingSize}
      paddingType={PaddingTypes.squish}
      role="tab"
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
  variant: PropTypes.oneOf(Object.values(TabVariants)),
  isSelected: PropTypes.bool,
  isExpanded: PropTypes.bool,
  color: PropTypes.oneOf([...Object.values(ColorTypes)]),
  onClick: PropTypes.func,
};

export default Tab;
