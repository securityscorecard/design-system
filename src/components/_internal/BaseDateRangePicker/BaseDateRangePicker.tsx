import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { any, prop } from 'ramda';
import { isNotNull } from 'ramda-adjunct';

import { Padbox } from '../../layout';
import { datePickerStyles, dateRangePickerStyles } from './styles';
import {
  BaseDateRangePickerPropTypes,
  BaseDateRangePickerProps,
  BaseDateRangePlaceholderPropTypes,
} from './BaseDateRangePicker.types';

const StyledDatePicker = styled(Padbox)`
  display: flex;
  ${datePickerStyles}
  ${dateRangePickerStyles}
`;

const isRangeDefined = any(isNotNull);

const BaseDateRangePicker: React.FC<BaseDateRangePickerProps> = ({
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
    <StyledDatePicker>
      <DatePicker
        calendarClassName="DateRangePicker-calendar"
        className="DateRangePicker-input"
        dateFormat="d MMM, yyyy"
        endDate={endDate}
        maxDate={maxDate}
        minDate={minDate}
        placeholderText={startDatePlaceholder || 'Start date'}
        selected={startDate}
        startDate={startDate}
        selectsStart
        onChange={handleStartDateChange}
      />
      <DatePicker
        calendarClassName="DateRangePicker-calendar"
        className="DateRangePicker-input"
        dateFormat="d MMM, yyyy"
        endDate={endDate}
        maxDate={maxDate}
        minDate={startDate || minDate}
        placeholderText={endDatePlaceholder || 'End date'}
        selected={endDate}
        startDate={startDate}
        selectsEnd
        onChange={handleEndDateChange}
      />
    </StyledDatePicker>
  );
};

export default BaseDateRangePicker;

BaseDateRangePicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: BaseDateRangePickerPropTypes,
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  placeholder: BaseDateRangePlaceholderPropTypes,
};
