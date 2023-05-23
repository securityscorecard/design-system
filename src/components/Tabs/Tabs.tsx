import type { TabsProps } from './Tabs.types';

import { equals } from 'ramda';
import { forwardRef } from 'react';

import { Inline } from '../layout';
import { TabVariants } from './Tabs.enums';
import { SpaceSizes } from '../../theme/space.enums';
import { BaseTabsWrapper } from '../_internal/BaseTabs/BaseTabsWrapper';
import { CLX_COMPONENT } from '../../theme/constants';
import { createCtx } from '../../managers/common/createCtx';

export const { useContext: useTabsContext, Provider } = createCtx<{
  selectedPatternMatcher: (a: string | number, b: string | number) => boolean;
  selectedValue: string | number;
  selectTab: (selectedValue: string | number) => void;
  isExpanded: boolean;
  variant: keyof typeof TabVariants;
}>(
  'TabsContext',
  '"useTabsContext" must be inside a "TabsContext" with a value',
);

const Tabs = forwardRef(
  (
    {
      selectedValue,
      selectedPatternMatcher = equals,
      children,
      onSelectTab,
      variant = TabVariants.underline,
      isExpanded = false,
    }: TabsProps,
    ref,
  ) => (
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
        ref={ref}
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
  ),
);

export default Tabs;
