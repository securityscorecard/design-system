import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import Radio from './Radio';
import { RadioProps } from './Radio.types';

export default {
  title: 'components/forms/Radio',
  component: Radio,
  argTypes: {
    name: { control: { disable: true } },
    radioId: { control: { disable: true } },
    defaultChecked: { control: 'boolean' },
  },
} as Meta;

export const playground: Story<RadioProps> = (args) => <Radio {...args} />;
playground.parameters = {
  chromatic: { disable: true },
};
playground.args = {
  name: 'playground',
  radioId: 'playground',
  label: 'Radio label',
  defaultChecked: false,
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
