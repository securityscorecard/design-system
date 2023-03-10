import type { Meta, Story } from '@storybook/react/types-6-0';
import type {
  BaseDateRange,
  BaseDateRangePickerProps,
} from '../_internal/BaseDateRangePicker/BaseDateRangePicker.types';

import { useState } from 'react';

import DateRangePicker from './DateRangePicker';

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

export const Playground: Story<BaseDateRangePickerProps> = (args) => (
  <DateRangePicker {...args} />
);
Playground.parameters = {
  chromatic: { disable: true },
};

Playground.args = {
  maxDate: new Date('2021/03/28'),
  minDate: new Date('2021/03/01'),
};
Playground.parameters = {
  screenshot: { skip: true },
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
