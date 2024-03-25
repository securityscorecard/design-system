import React from 'react';
import PropTypes from 'prop-types';
import { equals } from 'ramda';

import { Inline } from '../layout';
import { TabsProps } from './Tabs.types';
import { TabVariants } from './Tabs.enums';
import { SpaceSizes } from '../../theme/space.enums';
import { BaseTabsWrapper } from '../_internal/BaseTabs/BaseTabsWrapper';
import { CLX_COMPONENT } from '../../theme/constants';

const Tabs = ({
  selectedValue,
  selectedPatternMatcher = equals,
  children,
  onSelectTab,
  variant = TabVariants.underline,
  isExpanded = false,
}: TabsProps) => (
  <BaseTabsWrapper
    $isExpanded={isExpanded}
    $variant={variant}
    className={CLX_COMPONENT}
    paddingSize={
      variant === TabVariants.segmented ? SpaceSizes.xs : SpaceSizes.none
    }
  >
    <Inline
      gap={
        variant === TabVariants.segmented
          ? SpaceSizes.sm
          : variant === TabVariants.underline
          ? SpaceSizes.none
          : SpaceSizes.lg
      }
      role="tablist"
      stretch={isExpanded ? 'all' : 0}
    >
      {React.Children.map(children, (tab) => {
        if (!React.isValidElement(tab)) {
          return null;
        }

        return React.cloneElement(tab, {
          __key: tab.props.value,
          __variant: variant,
          __isExpanded: isExpanded,
          __isSelected: selectedPatternMatcher(tab.props.value, selectedValue),
          __onSelectTab: onSelectTab,
        });
      })}
    </Inline>
  </BaseTabsWrapper>
);

Tabs.propTypes = {
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  variant: PropTypes.oneOf(Object.values(TabVariants)),
  selectedPatternMatcher: PropTypes.func,
  isExpanded: PropTypes.bool,
  onSelectTab: PropTypes.func,
};

export default Tabs;
