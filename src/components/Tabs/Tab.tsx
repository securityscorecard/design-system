import { KeyboardEvent, MouseEvent } from 'react';

import { TabProps } from './Tabs.types';
import { TabVariants } from './Tabs.enums';
import { requireRouterLink } from '../../utils/require-router-link';
import { SpaceSizes } from '../../theme/space.enums';
import { PaddingTypes } from '../layout/Padbox/Padbox.enums';
import BaseTabLabel from '../_internal/BaseTabs/BaseTabLabel';

const Tab = ({
  children,
  onClick,
  value,
  __variant,
  __isExpanded,
  __isSelected,
  __onSelectTab,
}: TabProps) => {
  const isLink = value?.toString()?.startsWith('/');
  const handleKeyDown = (e: KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      __onSelectTab(value);
    }
  };
  const handler = isLink
    ? { to: value, onClick }
    : {
        onClick: (e: MouseEvent<HTMLAnchorElement>) => {
          __onSelectTab(value);
          onClick?.(e);
        },
        onKeyDown: (e: KeyboardEvent<HTMLAnchorElement>) => {
          handleKeyDown(e);
        },
      };
  let RouterLink = null;

  if (isLink) {
    RouterLink = requireRouterLink();
  }

  const paddingSize =
    __variant === TabVariants.segmented
      ? SpaceSizes.sm
      : __variant === TabVariants.underline
      ? SpaceSizes.md
      : SpaceSizes.none;

  return (
    <BaseTabLabel
      $isExpanded={__isExpanded}
      $isSelected={__isSelected}
      $variant={__variant}
      aria-selected={__isSelected}
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
