import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import DateRangePicker from './DateRangePicker';
import {
  BaseDateRange,
  BaseDateRangePickerProps,
} from '../_internal/BaseDateRangePicker/BaseDateRangePicker.types';

export default {
  title: 'components/DateRangePicker',
  component: DateRangePicker,
  argTypes: {
    minDate: { control: 'date' },
    maxDate: { control: 'date' },
  },
  decorators: [
    (storyFn) => <div style={{ paddingBottom: '300px' }}>{storyFn()}</div>,
  ],
} as Meta;

export const playground: Story<BaseDateRangePickerProps> = (args) => (
  <DateRangePicker {...args} />
);
playground.parameters = {
  chromatic: { disable: true },
};

playground.args = {
  maxDate: new Date('2021/03/28'),
  minDate: new Date('2021/03/01'),
};

export const Default: Story = () => {
  const [dateRange, handleChangeDateRange] = useState<BaseDateRange>({
    startDate: null,
    endDate: null,
  });

  return (
    <DateRangePicker
      maxDate={new Date('2021/03/28')}
      minDate={new Date('2021/03/01')}
      value={{
        startDate: dateRange?.startDate,
        endDate: dateRange?.endDate,
      }}
      onChange={handleChangeDateRange}
    />
  );
};

export const WithDefaultValue: Story = () => {
  const [dateRange, handleChangeDateRange] = useState<BaseDateRange>({
    startDate: new Date('2021/03/05'),
    endDate: new Date('2021/03/10'),
  });

  return (
    <DateRangePicker
      maxDate={new Date('2021/03/28')}
      minDate={new Date('2021/03/01')}
      value={{
        startDate: dateRange?.startDate,
        endDate: dateRange?.endDate,
      }}
      onChange={handleChangeDateRange}
    />
  );
};

export const WithCustomPlaceholder: Story = () => {
  const [dateRange, handleChangeDateRange] = useState<BaseDateRange>({
    startDate: undefined,
    endDate: undefined,
  });

  return (
    <DateRangePicker
      maxDate={new Date('2021/03/20')}
      minDate={new Date('2021/03/10')}
      placeholder={{
        startDate: 'Custom placeholder start date',
        endDate: 'Custom placeholder end date',
      }}
      value={dateRange}
      onChange={handleChangeDateRange}
    />
  );
};
