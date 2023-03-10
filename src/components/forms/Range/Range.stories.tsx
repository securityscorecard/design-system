import type { Meta, Story } from '@storybook/react/types-6-0';
import type { InputHTMLAttributes } from 'react';
import type { RangeProps } from './Range.types';

import Range from './Range';

export default {
  title: 'components/forms/Range',
  component: Range,
} as Meta;

const RangeTemplate: Story<
  RangeProps & InputHTMLAttributes<HTMLInputElement>
> = (args) => <Range {...args} aria-label="Input" />;

export const Playground = RangeTemplate.bind({});
Playground.args = { min: 0, max: 100 };
Playground.parameters = {
  screenshot: { skip: true },
};

export const Default = RangeTemplate.bind({});

export const ProgressRight = RangeTemplate.bind({});
ProgressRight.args = {
  ...Playground.args,
  isProgressRight: true,
};

export const WithoutLabels = RangeTemplate.bind({});
WithoutLabels.args = {
  ...Playground.args,
  hasLabels: false,
};

export const Custom = RangeTemplate.bind({});
Custom.args = {
  ...Playground.args,
  defaultValue: 170,
  max: 300,
  min: 100,
  step: 5,
};

export const Disabled = RangeTemplate.bind({});
Disabled.args = {
  ...Playground.args,
  isDisabled: true,
};
