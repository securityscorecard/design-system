import type { FC, ReactElement } from 'react';
import type { TabProps, TabsProps } from './Tabs.types';

import PropTypes from 'prop-types';
import { equals } from 'ramda';
import { Children, cloneElement, isValidElement } from 'react';

import { Inline } from '../layout';
import { TabVariants } from './Tabs.enums';
import { SpaceSizes } from '../../theme/space.enums';
import { BaseTabsWrapper } from '../_internal/BaseTabs/BaseTabsWrapper';
import { CLX_COMPONENT } from '../../theme/constants';

const Tabs: FC<TabsProps> = ({
  selectedValue,
  selectedPatternMatcher = equals,
  children,
  onSelectTab,
  variant = TabVariants.underline,
  isExpanded = false,
}) => (
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
      {Children.map(children, (tab) => {
        if (!isValidElement(tab)) {
          return null;
        }

        return cloneElement(tab as ReactElement<TabProps>, {
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
