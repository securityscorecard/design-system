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
  size: sizeFromProps,
  variant = TabVariants.underline,
  isExpanded = false,
}) => {
  const size =
    variant === TabVariants.segmented
      ? TabSizes.md
      : sizeFromProps || TabSizes.sm;

  return (
    <BaseTabsWrapper
      $isExpanded={isExpanded}
      $variant={variant}
      paddingSize={
        variant === TabVariants.segmented ? SpaceSizes.xs : SpaceSizes.none
      }
    >
      <Inline
        gap={variant === TabVariants.segmented ? SpaceSizes.sm : SpaceSizes.lg}
        role="tablist"
        stretch={isExpanded ? 'all' : 0}
      >
        {React.Children.map(children, (tab) => {
          if (!React.isValidElement(tab)) {
            return null;
          }

          return React.cloneElement(tab, {
            size,
            variant,
            isExpanded,
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
  isExpanded: PropTypes.bool,
  onSelectTab: PropTypes.func,
};

export default Tabs;
