import React from 'react';
import PropTypes from 'prop-types';
import { equals } from 'ramda';

import { Inline } from '../layout';
import { TabsProps } from './Tabs.types';
import { TabSizes, TabVariants } from './Tabs.enums';
import { SpaceSizes } from '../../theme/space.enums';
import { BaseTabsWrapper } from '../_internal/BaseTabs/BaseTabsWrapper';

const Tabs: React.FC<TabsProps> = ({
  selectedValue,
  selectedPatternMatcher = equals,
  children,
  onSelectTab,
  size = TabSizes.sm,
  variant = TabVariants.underline,
}) => {
  return (
    <BaseTabsWrapper
      $variant={variant}
      paddingSize={
        variant === TabVariants.segmented ? SpaceSizes.xs : SpaceSizes.none
      }
    >
      <Inline
        gap={variant === TabVariants.segmented ? SpaceSizes.sm : SpaceSizes.lg}
        role="tablist"
      >
        {React.Children.map(children, (tab) => {
          if (!React.isValidElement(tab)) {
            return null;
          }

          return React.cloneElement(tab, {
            size,
            variant,
            key: tab.props.value,
            isSelected: selectedPatternMatcher(tab.props.value, selectedValue),
            onClick: onSelectTab,
          });
        })}
      </Inline>
    </BaseTabsWrapper>
  );
};

Tabs.propTypes = {
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  size: PropTypes.oneOf(Object.values(TabSizes)),
  variant: PropTypes.oneOf(Object.values(TabVariants)),
  selectedPatternMatcher: PropTypes.func,
  onSelectTab: PropTypes.func,
};

export default Tabs;
