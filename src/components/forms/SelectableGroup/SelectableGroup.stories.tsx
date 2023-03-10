import type { Meta, Story } from '@storybook/react/types-6-0';
import type { SelectableGroupProps } from './SelectableGroup.types';

import { useState } from 'react';
import { action } from '@storybook/addon-actions';

import SelectableGroup from './SelectableGroup';
import { Stack } from '../../layout';
import { Button } from '../../Button';

export default {
  title: 'components/forms/SelectableGroup',
  component: SelectableGroup,
  argTypes: {
    options: {
      table: {
        type: {
          detail: `{
  value: string;
  label: string;
  isDisabled?: boolean;
}`,
        },
      },
    },
    isMulti: {
      description: 'Flag indicating whether multiple options can be selected',
      type: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    value: {
      description: 'Current value, used for controlled input',
      type: 'string',
      table: {
        type: { summary: 'string | string[]' },
      },
    },
    defaultValue: {
      description: 'Default selected value, used for uncontrolled input',
      type: 'string',
      table: {
        type: { summary: 'string | string[]' },
      },
    },
  },
} as Meta;

const fields = [
  { label: 'Games', value: 'games' },
  { label: 'Music', value: 'music', isDisabled: true },
  { label: 'Biking', value: 'biking', isDisabled: false },
  { label: 'Hiking', value: 'hiking' },
  { label: 'Programming', value: 'programming', isDisabled: true },
  { label: 'Driving', value: 'driving' },
  { label: 'Kung Fu', value: 'kungfu' },
];

const SelectableGroupTemplate: Story<SelectableGroupProps> = (args) => (
  <SelectableGroup {...args} />
);

export const Playground = SelectableGroupTemplate.bind({});

Playground.args = {
  options: fields,
  onChange: action('onChange'),
  name: 'playground',
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const SingleSelect = SelectableGroupTemplate.bind({});
SingleSelect.args = Playground.args;

export const MultiSelect = SelectableGroupTemplate.bind({});
MultiSelect.args = { ...Playground.args, isMulti: true };

export const SingleSelectWithDefaultValue = SelectableGroupTemplate.bind({});
SingleSelectWithDefaultValue.args = {
  ...Playground.args,
  defaultValue: 'kungfu',
};

export const MultiSelectWithDefaultValue = SelectableGroupTemplate.bind({});
MultiSelectWithDefaultValue.args = {
  ...Playground.args,
  isMulti: true,
  defaultValue: ['games', 'kungfu'],
};

export const ControlledInput = () => {
  const [value, setValue] = useState(['kungfu']);
  const handleOnChange = (changedValue) => {
    setValue(changedValue);
    action('onChange')(changedValue);
  };

  return (
    <Stack gap="sm" justify="flex-start">
      <SelectableGroup
        name="controlled"
        options={fields}
        value={value}
        isMulti
        onChange={handleOnChange}
      />
      <Button
        type="button"
        onClick={() => {
          setValue([]);
        }}
      >
        Reset value
      </Button>
    </Stack>
  );
};
ControlledInput.parameters = {
  screenshot: { skip: true },
};
