import styled from 'styled-components';
import { useMemo } from 'react';

import { PaddingTypes } from '../../layout/Padbox/Padbox.enums';
import { SSCIconNames } from '../../../theme/icons/icons.enums';
import { getColor, getFontSize, getFontWeight, getRadii } from '../../../utils';
import { ColorTypes } from '../../../theme/colors.enums';
import { Icon } from '../../Icon';
import { Inline, Padbox } from '../../layout';
import { SpaceSizes } from '../../../theme';

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

const ChangeMonthIconContainer = styled.div<{ direction: string }>`
  transform: ${(props) =>
      props.direction === 'right' ? 'rotate(270deg)' : 'rotate(90deg)'}
    translate(0, -4px);
  font-size: ${getFontSize('lg')};
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MonthSelector = styled.button`
  border-radius: ${getRadii('default')};
  border: 0;
  background: transparent;

  &:hover {
    background-color: ${getColor(ColorTypes.primary50)};
  }

  &:hover svg {
    color: ${getColor(ColorTypes.primary600)};
  }
`;

function ChangeMonthIcon(props) {
  return (
    <ChangeMonthIconContainer {...props}>
      <Icon color={ColorTypes.neutral600} name={SSCIconNames.angleDown} />
    </ChangeMonthIconContainer>
  );
}

const MonthIndicator = styled.button`
  border-radius: ${getRadii('default')};
  border: 0;
  background: transparent;
  font-size: ${getFontSize('lg')};
  font-weight: ${getFontWeight('semibold')};

  &:hover {
    color: ${getColor(ColorTypes.primary600)};
    background-color: ${getColor(ColorTypes.primary50)};
  }
`;

export const DatePickerCustomHeader = ({
  decreaseMonth,
  decreaseYear,
  toggleYearPicker,
  date,
  increaseMonth,
  increaseYear,
  showYearPicker,
}: {
  decreaseMonth: () => void;
  increaseMonth: () => void;
  increaseYear: () => void;
  decreaseYear: () => void;
  toggleYearPicker: () => void;
  date: Date;
  showYearPicker: boolean;
}) => {
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
    <Inline stretch={2}>
      <MonthSelector
        aria-label="Previous month button"
        type="button"
        onClick={onClickLeft}
      >
        <ChangeMonthIcon direction="left" />
      </MonthSelector>
      <MonthIndicator onClick={() => toggleYearPicker()}>
        <Padbox paddingSize={SpaceSizes.md} paddingType={PaddingTypes.squish}>
          {`${getMonth(date)} ${getYear(date)}`}
        </Padbox>
      </MonthIndicator>
      <MonthSelector
        aria-label="Next month button"
        type="button"
        onClick={onClickRight}
      >
        <ChangeMonthIcon direction="right" />
      </MonthSelector>
    </Inline>
  );
};
