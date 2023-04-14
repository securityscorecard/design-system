import type { ChangeEvent, PropsWithChildren } from 'react';
import type { SegmentedToggleProps } from './SegmentedToggle.types';

import { forwardRef } from 'react';
import { noop } from 'ramda-adjunct';
import cls from 'classnames';

import { BaseTabsWrapper } from '../../_internal/BaseTabs/BaseTabsWrapper';
import { SpaceSizes } from '../../../theme/space.enums';
import { Inline } from '../../layout';
import { BaseTabsEnums } from '../../_internal/BaseTabs';
import { CLX_COMPONENT } from '../../../theme/constants';
import { createCtx } from '../../../managers/common/createCtx';

export const { useContext: useSegmentedToggleContext, Provider } = createCtx<{
  disabled: boolean;
  group?: string;
  onChange: (event: ChangeEvent<Element>) => void;
}>(
  'SegmentedToggleContext',
  '"useSegmentedToggleContext" must be inside a "SegmentedToggleContext" with a value',
);

const SegmentedToggle = forwardRef<
  HTMLDivElement,
  PropsWithChildren<SegmentedToggleProps>
>(
  (
    { group, isDisabled = false, children, onChange = noop, className },
    ref,
  ) => (
    <Provider value={{ onChange, disabled: isDisabled, group }}>
      <BaseTabsWrapper
        ref={ref}
        $variant={BaseTabsEnums.BaseTabVariants.segmented}
        className={cls(CLX_COMPONENT, className)}
        paddingSize={SpaceSizes.xs}
      >
        <Inline gap={SpaceSizes.sm} role="radiogroup">
          {children}
        </Inline>
      </BaseTabsWrapper>
    </Provider>
  ),
);

export default SegmentedToggle;
