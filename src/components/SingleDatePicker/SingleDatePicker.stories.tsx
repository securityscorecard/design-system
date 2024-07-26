import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';

import SingleDatePicker from './SingleDatePicker';
import { SingleDatePickerProps } from '../_internal/BaseSingleDatePicker/SingleDatePicker.types';

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

export const Playground: StoryFn<SingleDatePickerProps> = (args) => (
  <SingleDatePicker {...args} />
);
Playground.parameters = {
  chromatic: { disable: true },
  screenshot: { skip: true },
};

export const Default: StoryFn = () => {
  const [dateValue, handleChangeDate] = useState<Date | null>(null);
  return <SingleDatePicker value={dateValue} onChange={handleChangeDate} />;
};

export const WithValueSelected: StoryFn = () => {
  const [dateValue, handleChangeDate] = useState<Date | null>(
    new Date('2021/03/05'),
  );
  return <SingleDatePicker value={dateValue} onChange={handleChangeDate} />;
};

export const WithCustomPlaceholder: StoryFn = () => {
  const [dateValue, handleChangeDate] = useState<Date | null>(null);

  return (
    <SingleDatePicker
      placeholder="Custom placeholder"
      value={dateValue}
      onChange={handleChangeDate}
    />
  );
};

export const OpenDatepicker: StoryFn = () => {
  const [dateValue, handleChangeDate] = useState<Date | null>(null);

  return (
    <SingleDatePicker
      placeholder="Custom placeholder"
      value={dateValue}
      defaultIsOpen
      onChange={handleChangeDate}
    />
  );
};

export const YearPickerDatePicker: StoryFn = () => {
  const [dateValue, handleChangeDate] = useState<Date | null>(null);

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
