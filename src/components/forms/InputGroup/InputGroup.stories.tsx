import { Meta, StoryFn } from '@storybook/react';

import InputGroup from './InputGroup';
import { Input, Password, Select } from '..';
import { Icon } from '../../Icon';
import Button from '../../ButtonV2/Button';
import { SearchBar } from '../SearchBar';

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

export const DefaultInputGroup: StoryFn = () => (
  <InputGroup hasDivider={false}>
    <Input key="input" placeholder="Search..." type="text" />
    <Icon key="icon" name="search" />
  </InputGroup>
);

export const DividerInputGroup: StoryFn = () => (
  <InputGroup hasDivider>
    <Input key="input" placeholder="Search..." type="text" />
    <Icon key="icon" name="search" />
  </InputGroup>
);

export const SelectInputGroup: StoryFn = () => (
  <InputGroup stretch="end">
    <Icon key="icon" name="search" />
    <Select options={options} placeholder="Select a country" isMulti />
  </InputGroup>
);

export const NestedInputGroup: StoryFn = () => (
  <InputGroup stretch="end" hasDivider>
    <Select options={options} placeholder="Select a country" />
    <InputGroup>
      <Input key="input" placeholder="Search..." type="text" />
      <Icon key="icon" name="search" />
    </InputGroup>
  </InputGroup>
);

export const InputGroupWithButton: StoryFn = () => (
  <InputGroup stretch="end">
    <Input key="input" placeholder="Type here..." type="text" />
    <Button>Search</Button>
  </InputGroup>
);

export const InputGroupWithPassword: StoryFn = () => (
  <InputGroup stretch="end" hasDivider>
    <Icon key="icon" name="eye" />
    <Password />
  </InputGroup>
);

export const InputGroupWithSearchBar: StoryFn = () => (
  <InputGroup stretch="end" hasDivider>
    <Select options={options} placeholder="Select a country" isMulti />
    <SearchBar />
  </InputGroup>
);
