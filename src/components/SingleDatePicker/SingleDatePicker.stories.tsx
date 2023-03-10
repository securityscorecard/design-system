import type { Meta, Story } from '@storybook/react/types-6-0';
import type { SingleDatePickerProps } from '../_internal/BaseSingleDatePicker/SingleDatePicker.types';

import { useState } from 'react';

import SingleDatePicker from './SingleDatePicker';

export default {
  title: 'components/SingleDatePicker',
  component: SingleDatePicker,
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'date' },
    minDate: { control: 'date' },
    maxDate: { control: 'date' },
  },
  decorators: [
    (storyFn) => <div style={{ paddingBottom: '300px' }}>{storyFn()}</div>,
  ],
} as Meta;

export const Playground: Story<SingleDatePickerProps> = (args) => (
  <SingleDatePicker {...args} />
);
Playground.parameters = {
  chromatic: { disable: true },
  screenshot: { skip: true },
};

export const Default: Story = () => {
  const [dateValue, handleChangeDate] = useState<Date>(null);
  return <SingleDatePicker value={dateValue} onChange={handleChangeDate} />;
};

export const WithValueSelected: Story = () => {
  const [dateValue, handleChangeDate] = useState<Date>(new Date('2021/03/05'));
  return <SingleDatePicker value={dateValue} onChange={handleChangeDate} />;
};

export const WithCustomPlaceholder: Story = () => {
  const [dateValue, handleChangeDate] = useState<Date>(null);

  return (
    <SingleDatePicker
      placeholder="Custom placeholder"
      value={dateValue}
      onChange={handleChangeDate}
    />
  );
};

export const OpenDatepicker: Story = () => {
  const [dateValue, handleChangeDate] = useState<Date>(null);

  return (
    <SingleDatePicker
      placeholder="Custom placeholder"
      value={dateValue}
      defaultIsOpen
      onChange={handleChangeDate}
    />
  );
};

export const YearPickerDatePicker: Story = () => {
  const [dateValue, handleChangeDate] = useState<Date>(null);

  return (
    <SingleDatePicker
      placeholder="Custom placeholder"
      value={dateValue}
      defaultIsOpen
      defaultIsYearPickerOpen
      onChange={handleChangeDate}
    />
  );
};
