import styled from 'styled-components';
import { useMemo } from 'react';

import { Inline, Padbox } from '../../layout';
import IconButton from '../../ButtonV2/IconButton';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const getYear = (date: Date) => date.getFullYear();
const getMonth = (date: Date) => months[date.getMonth()];

const MonthIndicator = styled.button`
  border-radius: var(--sscds-radii-default);
  border: 0;
  background: transparent;
  font-size: var(--sscds-font-size-elementlabel-md);
  font-weight: var(--sscds-font-weight-elementlabel-strong);
  line-height: var(--sscds-font-size-50);
  transition: var(--sscds-action-transition),
    transform 50ms var(--sscds-transition-fn);

  &:hover {
    background-color: var(--sscds-color-background-action-ghost-hover);
  }
  &:active {
    transform: scale(0.98);
  }
`;

type DatePickerCustomHeaderProps = {
  decreaseMonth: () => void;
  increaseMonth: () => void;
  increaseYear: () => void;
  decreaseYear: () => void;
  toggleYearPicker: () => void;
  date: Date;
  // eslint-disable-next-line react/boolean-prop-naming
  showYearPicker: boolean;
};
export const DatePickerCustomHeader = ({
  decreaseMonth,
  decreaseYear,
  toggleYearPicker,
  date,
  increaseMonth,
  increaseYear,
  showYearPicker,
}: DatePickerCustomHeaderProps) => {
  const [onClickLeft, onClickRight] = useMemo(() => {
    return showYearPicker
      ? [decreaseYear, increaseYear]
      : [decreaseMonth, increaseMonth];
  }, [
    showYearPicker,
    decreaseMonth,
    increaseMonth,
    decreaseYear,
    increaseYear,
  ]);

  return (
    <Inline
      align="center"
      gap="xs"
      stretch={2}
      style={{ marginBlockEnd: 'var(--sscds-space-4x)' }}
    >
      <IconButton
        iconName="angle-left"
        label="Go to previous month"
        size="sm"
        variant="ghost"
        onClick={onClickLeft}
      />
      <MonthIndicator onClick={() => toggleYearPicker()}>
        <Padbox paddingSize="sm" paddingType="squish">{`${getMonth(
          date,
        )} ${getYear(date)}`}</Padbox>
      </MonthIndicator>
      <IconButton
        iconName="angle-right"
        label="Go to next month"
        size="sm"
        variant="ghost"
        onClick={onClickRight}
      />
    </Inline>
  );
};
