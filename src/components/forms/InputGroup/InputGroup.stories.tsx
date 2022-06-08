import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import InputGroup from './InputGroup';
import { Input, Password, Select } from '..';
import { Icon } from '../../Icon';
import { Button } from '../../Button';

export default {
  title: 'components/forms/InputGroup',
  component: InputGroup,
} as Meta;

const options = [
  { value: 'HR', label: 'Croatia', isDisabled: true },
  { value: 'CU', label: 'Cuba' },
  { value: 'CW', label: 'Cura\u00e7ao' },
  { value: 'CY', label: 'Cyprus' },
  { value: 'CZ', label: 'Czech Republic' },
  { value: 'DK', label: 'Denmark' },
];

export const DefaultInputGroup: Story = () => (
  <InputGroup hasDivider={false}>
    <Input key="input" placeholder="Search..." type="text" />
    <Icon key="icon" name="search" />
  </InputGroup>
);

export const DividerInputGroup: Story = () => (
  <InputGroup hasDivider>
    <Input key="input" placeholder="Search..." type="text" />
    <Icon key="icon" name="search" />
  </InputGroup>
);

export const NestedInputGroup: Story = () => (
  <InputGroup stretch="end" hasDivider>
    <Select options={options} placeholder="Select a country" />
    <InputGroup>
      <Input key="input" placeholder="Search..." type="text" />
      <Icon key="icon" name="search" />
    </InputGroup>
  </InputGroup>
);

export const InputGroupWithButton: Story = () => (
  <InputGroup stretch="end">
    <Input key="input" placeholder="Type here..." type="text" />
    <Button>Search</Button>
  </InputGroup>
);

export const InputGroupWithPassword: Story = () => (
  <InputGroup stretch="end" hasDivider>
    <Icon key="icon" name="eye" />
    <Password />
  </InputGroup>
);
