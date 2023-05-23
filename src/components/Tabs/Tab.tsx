import type { KeyboardEvent } from 'react';
import type { TabProps } from './Tabs.types';

import { TabVariants } from './Tabs.enums';
import { requireRouterLink } from '../../utils/require-router-link';
import { SpaceSizes } from '../../theme/space.enums';
import { PaddingTypes } from '../layout/Padbox/Padbox.enums';
import BaseTabLabel from '../_internal/BaseTabs/BaseTabLabel';
import { useTabsContext } from './Tabs';

const Tab = ({ children, color, value }: TabProps) => {
  const isLink = value?.toString()?.startsWith('/');
  const {
    isExpanded = false,
    selectTab,
    variant = TabVariants.underline,
    selectedValue,
    selectedPatternMatcher,
  } = useTabsContext();
  const isSelected = selectedPatternMatcher(value, selectedValue);
  const handleKeyDown = (e: KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      selectTab(value);
    }
  };
  const handler = isLink
    ? { to: value }
    : { onClick: () => selectTab(value), onKeyDown: (e) => handleKeyDown(e) };
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

export default Tab;
