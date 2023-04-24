import type { SegmentedToggleItemProps } from './SegmentedToggle.types';

import { forwardRef } from 'react';
import styled from 'styled-components';

import { ColorTypes } from '../../../theme/colors.enums';
import BaseTabLabel, {
  segmentedTabSelected,
} from '../../_internal/BaseTabs/BaseTabLabel';
import { SpaceSizes } from '../../../theme/space.enums';
import { PaddingTypes } from '../../layout/Padbox/Padbox.enums';
import { getFormStyle } from '../../../utils/helpers';
import { BaseTabsEnums } from '../../_internal/BaseTabs';
import { useSegmentedToggleContext } from './SegmentedToggle';

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
>(({ label, value, itemId, ...props }, ref) => {
  const paddingSize = SpaceSizes.sm;
  const { group, onChange, disabled } = useSegmentedToggleContext();

  return (
    <SegmentedToggleItemWrapper>
      <Radio
        ref={ref}
        disabled={disabled}
        id={itemId}
        name={group}
        type="radio"
        value={value}
        onChange={onChange}
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
