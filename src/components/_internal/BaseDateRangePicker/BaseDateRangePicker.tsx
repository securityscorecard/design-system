import type { FC } from 'react';
import type { BaseDateRangePickerProps } from './BaseDateRangePicker.types';

import styled from 'styled-components';
import { any, prop } from 'ramda';
import { isNotNull } from 'ramda-adjunct';

import { dateRangePickerStyles } from './styles';
import { BaseSingleDatePicker } from '../BaseSingleDatePicker';
import { Inline } from '../../layout/Inline';
import { SpaceSizes } from '../../../theme/space.enums';
import { StretchEnum } from '../../layout/Inline/Inline.enums';
import { CLX_COMPONENT } from '../../../theme/constants';

const StyledDatePicker = styled.div`
  ${dateRangePickerStyles}
  width: 100%;
`;

const isRangeDefined = any(isNotNull);

const BaseDateRangePicker: FC<BaseDateRangePickerProps> = ({
  value = { startDate: null, endDate: null },
  onChange,
  minDate,
  maxDate,
  placeholder,
}) => {
  const { startDate, endDate } = value;
  const startDatePlaceholder = prop('startDate', placeholder);
  const endDatePlaceholder = prop('endDate', placeholder);

  const handleStartDateChange = (newStartDate) => {
    onChange(
      isRangeDefined([newStartDate, endDate])
        ? { startDate: newStartDate, endDate }
        : undefined,
    );
  };

  const handleEndDateChange = (newEndDate) => {
    onChange(
      isRangeDefined([startDate, newEndDate])
        ? { startDate, endDate: newEndDate }
        : undefined,
    );
  };

  return (
    <StyledDatePicker className={CLX_COMPONENT}>
      <Inline gap={SpaceSizes.sm} stretch={StretchEnum.all}>
        <BaseSingleDatePicker
          endDate={endDate}
          maxDate={maxDate}
          minDate={minDate}
          placeholder={startDatePlaceholder || 'Start date'}
          startDate={startDate}
          value={startDate}
          onChange={handleStartDateChange}
        />
        <BaseSingleDatePicker
          endDate={endDate}
          maxDate={maxDate}
          minDate={startDate || minDate}
          placeholder={endDatePlaceholder || 'End date'}
          startDate={startDate}
          value={endDate}
          onChange={handleEndDateChange}
        />
      </Inline>
    </StyledDatePicker>
  );
};

export default BaseDateRangePicker;
