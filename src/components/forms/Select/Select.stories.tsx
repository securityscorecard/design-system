import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Select from './Select';
import { SelectProps } from './Select.types';

const options = [
  { value: 'HR', label: 'Croatia' },
  { value: 'CU', label: 'Cuba' },
  { value: 'CW', label: 'Cura\u00e7ao' },
  { value: 'CY', label: 'Cyprus' },
  { value: 'CZ', label: 'Czech Republic' },
  { value: 'DK', label: 'Denmark' },
];

export default {
  title: 'components/forms/Select',
  component: Select,
} as Meta;

export const playground: Story<SelectProps> = (args) => {
  return <Select {...args} aria-label="Select" />;
};
playground.parameters = {
  chromatic: { disable: true },
};
playground.args = {
  options,
  placeholder: 'Select country...',
};
playground.argTypes = {
  options: {
    control: 'object',
    table: {
      type: {
        detail: `
[
  {
    label: string,
    value: string,
  }
]
        `,
      },
    },
  },
  isInvalid: { control: 'boolean' },
  isDisabled: { control: 'boolean' },
  isClearable: { control: 'boolean' },
  isMulti: {
    control: 'boolean',
    description: '⚠️ Styles for multiselect are currently not supported',
  },
  defaultMenuIsOpen: { control: 'boolean' },
  defaultValue: {
    control: 'object',
    table: {
      type: {
        detail: `
{
  label: string,
  value: string ,
}

OR

[
  {
    label: string,
    value: string,
  }
]
        `,
      },
    },
  },
};

export const Default: Story = () => (
  <Select aria-label="Select" options={options} />
);

export const WithDefaultValue: Story = () => (
  <Select aria-label="Select" defaultValue={options[0]} options={options} />
);

export const WithPlaceholder: Story = () => (
  <Select
    aria-label="Select"
    options={options}
    placeholder="Select country..."
  />
);

export const Focus: Story = () => (
  <Select aria-label="Select" className="focus" options={options} />
);
export const Invalid: Story = () => (
  <Select aria-label="Select" options={options} isInvalid />
);

export const Disabled: Story = () => (
  <Select aria-label="Select" options={options} isDisabled />
);

export const Clearable: Story = () => (
  <Select
    aria-label="Select"
    defaultValue={options[0]}
    options={options}
    isClearable
  />
);

export const Opened: Story = () => (
  <Select aria-label="Select" options={options} defaultIsMenuOpen />
);

export const MultiSelect: Story = () => (
  <>
    <p>
      <span aria-label="warning" role="img">
        ⚠️
      </span>{' '}
      Styles are <strong>not</strong> currently implemented in Design System
    </p>
    <Select
      aria-label="Select"
      defaultValue={[options[0], options[1]]}
      options={options}
      isMulti
    />
  </>
);
