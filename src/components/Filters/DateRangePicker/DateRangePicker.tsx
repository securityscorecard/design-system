import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker as DateRange } from 'react-dates';

import { DatePickerProps, DateRangePropTypes } from './DateRangePicker.types';
import { datePickerStyles } from './styles';

const Wrapper = styled.div`
  ${datePickerStyles}
`;

const DateRangePicker: React.FC<DatePickerProps> = ({
  value = { startDate: null, endDate: null },
  onChange,
}) => {
  const [focusedInput, setFocusedInput] = useState(null);

  const { startDate, endDate } = value;

  return (
    <Wrapper>
      <DateRange
        endDate={endDate}
        endDateId="endDate"
        focusedInput={focusedInput}
        startDate={startDate}
        startDateId="startDate"
        readOnly
        onDatesChange={onChange}
        onFocusChange={(newFocusInput) => {
          setFocusedInput(newFocusInput);
        }}
      />
    </Wrapper>
  );
};

export default DateRangePicker;

DateRangePicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: DateRangePropTypes,
};
