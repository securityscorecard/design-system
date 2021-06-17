import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import Checkbox from './Checkbox';
import { CheckboxProps } from './Checkbox.types';

export default {
  title: 'components/forms/Checkbox',
  component: Checkbox,
  argTypes: {
    name: { control: { disable: true } },
    checkboxId: { control: { disable: true } },
    defaultChecked: { table: { type: { summary: 'boolean' } } },
  },
} as Meta;

export const playground: Story<CheckboxProps> = (args) => (
  <Checkbox {...args} />
);
playground.parameters = {
  chromatic: { disable: true },
};
playground.args = {
  name: 'playground',
  checkboxId: 'playground',
  label: 'Checkbox label',
  defaultChecked: false,
};

export const DefaultCheckbox: Story = () => (
  <Checkbox
    checkboxId="defaultCheckbox"
    label="Use the same details for billing & shipping on my invoice"
    name="defaultCheckbox"
    onChange={action('Checkbox clicked')}
  />
);

export const CheckedCheckbox: Story = () => (
  <Checkbox
    checkboxId="checkedCheckbox"
    label="Use the same details for billing & shipping on my invoice"
    name="checkedCheckbox"
    defaultChecked
  />
);

export const IndeterminateCheckbox: Story = () => (
  <Checkbox
    checkboxId="indeterminateCheckbox"
    label="Use the same details for billing & shipping on my invoice"
    name="indeterminateCheckbox"
    isIndeterminate
  />
);

export const InvalidCheckbox: Story = () => (
  <Checkbox
    checkboxId="invalidCheckbox"
    label="Use the same details for billing & shipping on my invoice"
    name="invalidCheckbox"
    isInvalid
  />
);

export const DisabledCheckbox: Story = () => (
  <Checkbox
    checkboxId="disabledCheckbox"
    label="Use the same details for billing & shipping on my invoice"
    name="disabledCheckbox"
    isDisabled
  />
);
