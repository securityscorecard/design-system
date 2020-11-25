import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import Radio from './Radio';
import { RadioProps } from './Radio.types';

export default {
  title: 'components/forms/Radio',
  component: Radio,
} as Meta;

export const playground: Story<RadioProps> = (args) => <Radio {...args} />;
playground.parameters = {
  chromatic: { disable: true },
};
playground.argTypes = {
  name: { control: { disable: true }, defaultValue: 'playground' },
  radioId: { control: { disable: true }, defaultValue: 'playground' },
  label: { control: 'text', defaultValue: 'Radio label' },
  defaultChecked: { control: 'boolean', defaultValue: false },
  isInvalid: { control: 'boolean', defaultValue: false },
  isDisabled: { control: 'boolean', defaultValue: false },
};

export const DefaultRadio: Story = () => (
  <Radio
    label="Use the same details for billing & shipping on my invoice"
    name="defaultRadio"
    radioId="defaultRadio"
    onChange={action('Radio clicked')}
  />
);

export const CheckedRadio: Story = () => (
  <Radio
    label="Use the same details for billing & shipping on my invoice"
    name="checkedRadio"
    radioId="checkedRadio"
    defaultChecked
  />
);

export const InvalidRadio: Story = () => (
  <Radio
    label="Use the same details for billing & shipping on my invoice"
    name="invalidRadio"
    radioId="invalidRadio"
    isInvalid
  />
);

export const DisabledRadio: Story = () => (
  <Radio
    label="Use the same details for billing & shipping on my invoice"
    name="disabledRadio"
    radioId="disabledRadio"
    isDisabled
  />
);
