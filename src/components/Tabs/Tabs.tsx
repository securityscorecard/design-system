import type { FC, ReactText } from 'react';
import type { TabsProps } from './Tabs.types';

import PropTypes from 'prop-types';
import { equals } from 'ramda';

import { Inline } from '../layout';
import { TabVariants } from './Tabs.enums';
import { SpaceSizes } from '../../theme/space.enums';
import { BaseTabsWrapper } from '../_internal/BaseTabs/BaseTabsWrapper';
import { CLX_COMPONENT } from '../../theme/constants';
import { createCtx } from '../../managers/common/createCtx';

export const { useContext: useTabsContext, Provider } = createCtx<{
  selectedPatternMatcher: (a: ReactText, b: ReactText) => boolean;
  selectedValue: ReactText;
  selectTab: (selectedValue: ReactText) => void;
  isExpanded: boolean;
  variant: keyof typeof TabVariants;
}>(
  'TabsContext',
  '"useTabsContext" must be inside a "TabsContext" with a value',
);

const Tabs: FC<TabsProps> = ({
  selectedValue,
  selectedPatternMatcher = equals,
  children,
  onSelectTab,
  variant = TabVariants.underline,
  isExpanded = false,
}) => (
  <Provider
    value={{
      selectedPatternMatcher,
      selectedValue,
      selectTab: onSelectTab,
      isExpanded,
      variant,
    }}
  >
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
        {children}
      </Inline>
    </BaseTabsWrapper>
  </Provider>
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
