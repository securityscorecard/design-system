import { forwardRef } from 'react';
import styled from 'styled-components';

import { SegmentedToggleItemProps } from './SegmentedToggle.types';
import { ColorTypes } from '../../../theme/colors.enums';
import BaseTabLabel, {
  segmentedTabSelected,
} from '../../_internal/BaseTabs/BaseTabLabel';
import { SpaceSizes } from '../../../theme/space.enums';
import { PaddingTypes } from '../../layout/Padbox/Padbox.enums';
import { getFormStyle } from '../../../utils/helpers';
import { BaseTabsEnums } from '../../_internal/BaseTabs';

const Radio = styled.input`
  display: none;

  :checked + ${BaseTabLabel} {
    ${segmentedTabSelected}
  }

  :checked:disabled + ${BaseTabLabel} {
    background: ${getFormStyle('disabledBgColor')};
    border-color: ${getFormStyle('disabledBorderColor')};
  }

  :disabled + ${BaseTabLabel} {
    color: ${getFormStyle('disabledColor')};
    &:hover {
      color: ${getFormStyle('disabledColor')};
    }
  }
`;

const SegmentedToggleItemWrapper = styled.span`
  display: flex;
`;

const SegmentedToggleItem = forwardRef<
  HTMLInputElement,
  SegmentedToggleItemProps
>(({ label, value, group, itemId, ...props }, ref) => {
  const paddingSize = SpaceSizes.sm;

  return (
    <SegmentedToggleItemWrapper>
      <Radio
        ref={ref}
        id={itemId}
        name={group}
        type="radio"
        value={value}
        {...props}
      />
      <BaseTabLabel
        $color={ColorTypes.primary500}
        $variant={BaseTabsEnums.BaseTabVariants.segmented}
        as="label"
        htmlFor={itemId}
        paddingSize={paddingSize}
        paddingType={PaddingTypes.squish}
        style={{ marginBottom: 0 }}
      >
        {label}
      </BaseTabLabel>
    </SegmentedToggleItemWrapper>
  );
});

export default SegmentedToggleItem;
