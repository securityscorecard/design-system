import {
  Children,
  type PropsWithChildren,
  type ReactElement,
  cloneElement,
  forwardRef,
  isValidElement,
} from 'react';
import { noop } from 'ramda-adjunct';
import cls from 'classnames';

import type {
  SegmentedToggleItemProps,
  SegmentedToggleProps,
} from './SegmentedToggle.types';
import { BaseTabsWrapper } from '../../_internal/BaseTabs/BaseTabsWrapper';
import { SpaceSizes } from '../../../theme/space.enums';
import { Inline } from '../../layout';
import { BaseTabsEnums } from '../../_internal/BaseTabs';
import { CLX_COMPONENT } from '../../../theme/constants';

const SegmentedToggle = forwardRef<
  HTMLDivElement,
  PropsWithChildren<SegmentedToggleProps>
>(
  (
    {
      group,
      isDisabled = false,
      children,
      onChange = noop,
      className,
      ...props
    },
    ref,
  ) => (
    <BaseTabsWrapper
      ref={ref}
      $variant={BaseTabsEnums.BaseTabVariants.segmented}
      className={cls(CLX_COMPONENT, className)}
      paddingSize={SpaceSizes.xs}
    >
      <Inline gap={SpaceSizes.sm} role="radiogroup">
        {Children.map(children, (segmentedToggleItem) => {
          if (!isValidElement(segmentedToggleItem)) {
            return null;
          }

          return cloneElement(
            segmentedToggleItem as ReactElement<SegmentedToggleItemProps>,
            {
              key: segmentedToggleItem.props.value,
              name: group,
              disabled: isDisabled,
              onChange,
              ...props,
            },
          );
        })}
      </Inline>
    </BaseTabsWrapper>
  ),
);

export default SegmentedToggle;
