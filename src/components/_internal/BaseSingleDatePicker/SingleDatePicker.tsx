import type { FC } from 'react';
import type { SingleDatePickerProps } from './SingleDatePicker.types';

import { forwardRef, useRef, useState } from 'react';
import styled from 'styled-components';
import { noop } from 'ramda-adjunct';
import DatePicker from 'react-datepicker';

import { datePickerStyles, singleDatePickerStyles } from './styles';
import { DatePickerCustomHeader } from './CustomHeader';
import { CLX_COMPONENT } from '../../../theme/constants';
import { mergeRefs } from '../../../utils/mergeRefs';

export const StyledDatePicker = styled.div`
  ${datePickerStyles}
  ${singleDatePickerStyles}
`;

const SingleDatePicker: FC<SingleDatePickerProps> = forwardRef(
  (
    {
      value = null,
      onChange = noop,
      minDate,
      maxDate,
      placeholder = 'Enter date…',
      defaultIsOpen,
      defaultIsYearPickerOpen,
      startDate,
      endDate,
    },
    ref,
  ) => {
    const [showYearPicker, setShowYearPicker] = useState(
      defaultIsYearPickerOpen,
    );
    const pickerRef = useRef({
      calendar: { instanceRef: { changeYear: noop } },
    });
    const mergedRef = mergeRefs(pickerRef, ref);
    const toggleYearPicker = () => setShowYearPicker(!showYearPicker);
    return (
      <StyledDatePicker className={CLX_COMPONENT}>
        <DatePicker
          ref={mergedRef}
          calendarClassName="ds-data-range-picker__calendar"
          className="ds-data-range-picker__input"
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
  },
);

export default SingleDatePicker;
