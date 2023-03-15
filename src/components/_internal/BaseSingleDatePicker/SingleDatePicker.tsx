import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { noop } from 'ramda-adjunct';
import DatePicker from 'react-datepicker';

import { datePickerStyles, singleDatePickerStyles } from './styles';
import { SingleDatePickerProps } from './SingleDatePicker.types';
import { DatePickerCustomHeader } from './CustomHeader';
import { CLX_COMPONENT } from '../../../theme/constants';

export const StyledDatePicker = styled.div`
  ${datePickerStyles}
  ${singleDatePickerStyles}
`;

const SingleDatePicker: React.FC<SingleDatePickerProps> = ({
  value = null,
  onChange = noop,
  minDate,
  maxDate,
  placeholder = 'Enter date…',
  defaultIsOpen,
  defaultIsYearPickerOpen,
  startDate,
  endDate,
}) => {
  const [showYearPicker, setShowYearPicker] = useState(defaultIsYearPickerOpen);
  const pickerRef = useRef({ calendar: { instanceRef: { changeYear: noop } } });
  const toggleYearPicker = () => setShowYearPicker(!showYearPicker);
  return (
    <StyledDatePicker className={CLX_COMPONENT}>
      <DatePicker
        ref={pickerRef}
        calendarClassName="DateRangePicker-calendar"
        className="DateRangePicker-input"
        dateFormat="d MMM, yyyy"
        endDate={endDate}
        maxDate={maxDate}
        minDate={minDate}
        open={defaultIsOpen}
        placeholderText={placeholder}
        popperModifiers={[
          {
            name: 'offset',
            options: {
              offset: [0, 10],
            },
          },
        ]}
        renderCustomHeader={(props) => {
          return (
            <DatePickerCustomHeader
              {...props}
              showYearPicker={showYearPicker}
              toggleYearPicker={toggleYearPicker}
            />
          );
        }}
        selected={value}
        shouldCloseOnSelect={!showYearPicker}
        showYearPicker={showYearPicker}
        startDate={startDate}
        yearItemNumber={24}
        onChange={(newValue) => {
          if (showYearPicker) {
            setShowYearPicker(false);
            const year = newValue.getFullYear();
            pickerRef?.current?.calendar?.instanceRef?.changeYear(year);
          } else {
            onChange(newValue);
          }
        }}
      />
    </StyledDatePicker>
  );
};

export default SingleDatePicker;

SingleDatePicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  placeholder: PropTypes.string,
  defaultIsOpen: PropTypes.bool,
  defaultIsYearPickerOpen: PropTypes.bool,
};
