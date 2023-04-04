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

Tabs.propTypes /* remove-proptypes */ = {
  //
  // =============== WARNING ================
  // | These PropTypes are auto-generated   |
  // | from the TypeScript type definitions  |
  // ========================================
  //
  isExpanded: PropTypes.bool,
  margin: PropTypes.oneOfType([
    PropTypes.oneOf(['none']),
    PropTypes.number,
    PropTypes.shape({
      bottom: PropTypes.number,
      horizontal: PropTypes.number,
      left: PropTypes.number,
      right: PropTypes.number,
      top: PropTypes.number,
      vertical: PropTypes.number,
    }),
  ]),
  onSelectTab: PropTypes.func,
  padding: PropTypes.oneOfType([
    PropTypes.oneOf(['none']),
    PropTypes.number,
    PropTypes.shape({
      bottom: PropTypes.number,
      horizontal: PropTypes.number,
      left: PropTypes.number,
      right: PropTypes.number,
      top: PropTypes.number,
      vertical: PropTypes.number,
    }),
  ]),
  selectedPatternMatcher: PropTypes.func,
  selectedValue: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]).isRequired,
  variant: PropTypes.oneOf(['segmented', 'text', 'underline']),
} as any;

export default Tabs;
