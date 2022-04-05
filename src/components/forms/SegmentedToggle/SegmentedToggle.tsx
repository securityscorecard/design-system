import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { noop } from 'ramda-adjunct';

import { SegmentedToggleProps } from './SegmentedToggle.types';
import { BaseTabsWrapper } from '../../_internal/BaseTabs/BaseTabsWrapper';
import { SpaceSizes } from '../../../theme/space.enums';
import { Inline } from '../../layout';
import { BaseTabsEnums } from '../../_internal/BaseTabs';

const SegmentedToggle = forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<SegmentedToggleProps>
>(({ group, isDisabled = false, children, onChange = noop, ...props }, ref) => (
  <BaseTabsWrapper
    ref={ref}
    $variant={BaseTabsEnums.BaseTabVariants.segmented}
    paddingSize={SpaceSizes.xs}
  >
    <Inline gap={SpaceSizes.sm} role="tablist">
      {React.Children.map(children, (segmentedToggleItem) => {
        if (!React.isValidElement(segmentedToggleItem)) {
          return null;
        }

        return React.cloneElement(segmentedToggleItem, {
          key: segmentedToggleItem.props.value,
          name: group,
          disabled: isDisabled,
          onChange,
          ...props,
        });
      })}
    </Inline>
  </BaseTabsWrapper>
));

SegmentedToggle.propTypes = {
  group: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export default SegmentedToggle;
