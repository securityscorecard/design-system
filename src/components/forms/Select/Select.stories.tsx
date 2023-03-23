import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import Select from './Select';
import { Option, SelectProps } from './Select.types';
import { Inline, Stack } from '../../layout';
import { Heading, Text } from '../../typographyLegacy';
import { Pill } from '../../Pill';

const options = [
  { value: 'HR', label: 'Croatia', isDisabled: true },
  { value: 'CU', label: 'Cuba' },
  { value: 'CW', label: 'Cura\u00e7ao' },
  { value: 'CY', label: 'Cyprus' },
  { value: 'CZ', label: 'Czech Republic' },
  { value: 'DK', label: 'Denmark' },
];

const groupedOptions = [
  { label: 'United States', value: 'US' },
  {
    label: 'Europe',
    options: [
      { value: 'HR', label: 'Croatia', isDisabled: true },
      { value: 'CZ', label: 'Czech Republic' },
      { value: 'DK', label: 'Denmark' },
    ],
  },
  {
    label: 'Islands',
    options: [
      { value: 'CU', label: 'Cuba' },
      { value: 'CW', label: 'Cura\u00e7ao' },
      { value: 'CY', label: 'Cyprus' },
    ],
  },
  { label: 'Canada', value: 'CA' },
];

const disabledOptions = [
  { value: 'HR', label: 'Croatia', isDisabled: true },
  { value: 'CY', label: 'Cyprus', isDisabled: true },
  { value: 'CU', label: 'Cuba' },
  { value: 'CZ', label: 'Czech Republic' },
];

const longOptions = [
  { value: '01', label: '123456789012345678901234567890' },
  { value: '02', label: '12345678901234567890' },
  { value: '03', label: '1234567890' },
  ...options,
];

export default {
  title: 'components/forms/Select/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component: `
\`\`\`js
import { Select } from '@securityscorecard/design-system';
import Pill from '../../Pill/Pill';
\`\`\`
      `,
      },
    },
  },
  argTypes: {
    options: {
      table: {
        type: {
          detail: `
[
  {
    label: string,
    value: string,
    isDisabled?: boolean,
  }

  OR

  {
    label: string,
    options: {
      label: string,
      value: string,
      isDisabled?: boolean,
    }
  }
]
          `,
        },
      },
    },
    defaultValue: {
      table: {
        type: {
          detail: `
{
  label: string,
  value: string,
  isDisabled?: boolean,
}

OR

[
  {
    label: string,
    value: string,
    isDisabled?: boolean,
  }
]
          `,
        },
      },
    },
    isLoading: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isMulti: {
      table: { defaultValue: { summary: 'false' } },
    },
    defaultIsMenuOpen: {
      table: { defaultValue: { summary: 'false' } },
    },
  },
} as Meta;

const SelectTemplate: Story<SelectProps> = (args) => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
};

export const Playground: Story<SelectProps> = SelectTemplate.bind({});
Playground.args = {
  options,
  placeholder: 'Select country...',
};

export const Default = SelectTemplate.bind({});
Default.args = {
  options,
};

export const WithDefaultValue = SelectTemplate.bind({});
WithDefaultValue.args = {
  ...Default.args,
  defaultValue: options[1],
};

export const WithPlaceholder = SelectTemplate.bind({});
WithPlaceholder.args = {
  ...Default.args,
  placeholder: 'Select country...',
};

export const Focus = SelectTemplate.bind({});
Focus.args = {
  ...Default.args,
  className: 'focus',
};

export const Invalid = SelectTemplate.bind({});
Invalid.args = {
  ...Default.args,
  isInvalid: true,
};

export const Disabled = SelectTemplate.bind({});
Disabled.args = {
  ...Default.args,
  isDisabled: true,
};

export const Loading = SelectTemplate.bind({});
Loading.args = {
  ...Default.args,
  isLoading: true,
};

export const Clearable = SelectTemplate.bind({});
Clearable.args = {
  ...WithDefaultValue.args,
  isClearable: true,
};

export const Opened = SelectTemplate.bind({});
Opened.args = {
  ...Default.args,
  defaultIsMenuOpen: true,
};

export const OptionsGroup = SelectTemplate.bind({});
OptionsGroup.args = {
  options: groupedOptions,
  defaultIsMenuOpen: true,
  isClearable: true,
};

export const DisabledOptions = SelectTemplate.bind({});
DisabledOptions.args = {
  options: disabledOptions,
  defaultIsMenuOpen: true,
};

export const MultiSelect: Story<SelectProps<true>> = (args) => (
  <Stack gap="md">
    <Select {...args} isClearable />
    <Select {...args} defaultInputValue="Cu" />
    <Select
      {...args}
      defaultInputValue="Cu"
      defaultValue={[options[1]]}
      isClearable
    />
    <Select
      {...args}
      defaultValue={[options[1], options[2]]}
      defaultIsMenuOpen
    />
  </Stack>
);
MultiSelect.args = {
  ...OptionsGroup.args,
  isMenuPositionRelative: true,
  isMulti: true,
};

export const NoOptionFound = SelectTemplate.bind({});
NoOptionFound.args = {
  ...Opened.args,
  defaultInputValue: 'foo',
  isClearable: true,
};

export const CustomNoOptionFound = SelectTemplate.bind({});
CustomNoOptionFound.args = {
  ...NoOptionFound.args,
  noOptionsMessage: () => 'You know nothing, Jon Snow',
};

export const CustomMenuActions = SelectTemplate.bind({});
CustomMenuActions.args = {
  ...Opened.args,
  options: groupedOptions,
  menuActions: [
    {
      label: 'Action A',
      name: 'Action A',
      onClick: action('click-action-a'),
    },
    {
      label: 'Action B',
      name: 'Action B',
      onClick: action('click-action-b'),
    },
  ],
};

export const PillTruncation: Story<SelectProps<true>> = (args) => (
  <Stack gap="md">
    <Heading size="h3">Default truncation N=16</Heading>
    <Select {...args} />
    <Heading size="h3">Custom truncation N=25</Heading>
    <Select {...args} maxPillLabelLength={25} />
    <Heading size="h3">Custom truncation N=5</Heading>
    <Select {...args} maxPillLabelLength={5} />
  </Stack>
);
PillTruncation.args = {
  ...MultiSelect.args,
  options: longOptions,
  defaultValue: [longOptions[2], longOptions[1], longOptions[0]],
};

export const PillWrapping: Story<SelectProps<true>> = (args) => (
  <div style={{ width: '200px' }}>
    <Select {...args} />
  </div>
);
PillWrapping.args = {
  ...MultiSelect.args,
  options: longOptions,
  defaultValue: [longOptions[2], longOptions[1]],
};

export const MaxVisibleItem: Story<SelectProps<true>> = (args) => (
  <div>
    <Select {...args} />
  </div>
);
MaxVisibleItem.args = {
  ...MultiSelect.args,
  options: longOptions,
  defaultValue: [
    longOptions[0],
    longOptions[1],
    longOptions[2],
    longOptions[5],
  ],
  isClearable: false,
  isMulti: true,
  maxVisibleItem: 3,
};

export const CustomOptionLabel: Story<SelectProps<true>> = (args) => (
  <Select
    formatOptionLabel={(data) => (
      <Inline align="center" gap="xs">
        <span>({data.value})</span>
        <span>{data.label}</span>
      </Inline>
    )}
    {...args}
  />
);
CustomOptionLabel.args = {
  ...MultiSelect.args,
  defaultValue: [options[1], options[2]],
};

export const CustomMultiValueLabel: Story<SelectProps<true>> = (args) => (
  <Select
    formatOptionLabel={(data, meta) => {
      const renderMultiValueLabel = meta.context === 'value';

      return renderMultiValueLabel ? (
        <Inline align="center" gap="xs">
          <span>({data.value})</span>
          <span>{data.label}</span>
        </Inline>
      ) : (
        <span>{data.label}</span>
      );
    }}
    {...args}
  />
);
CustomMultiValueLabel.args = {
  ...Default.args,
  isMenuPositionRelative: true,
  isMulti: true,
  defaultIsMenuOpen: true,
};

const MyMenuList = ({ children }) => {
  return (
    <div>
      <Text>Custom MenuList</Text>
      {children}
    </div>
  );
};

export const WithCustomComponents = SelectTemplate.bind({});
WithCustomComponents.args = {
  options,
  components: {
    MenuList: MyMenuList,
  },
};

export const CustomGroupLabel: Story<SelectProps<true>> = (args) => (
  <Select
    formatGroupLabel={(group) => (
      <Inline gap="md" justify="space-between">
        <Text isBold>{group.label}</Text>
        <Pill label={group.options.length.toString()} />
      </Inline>
    )}
    {...args}
  />
);
CustomGroupLabel.args = {
  ...MultiSelect.args,
};

const filterOptions = (inputValue: string) => {
  return options.filter((i) =>
    i.label.toLowerCase().includes(inputValue.toLowerCase()),
  );
};

const promiseOptions = (inputValue: string): Promise<Option[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(filterOptions(inputValue));
    }, 1000);
  });

export const AsyncSelect: Story<SelectProps<false>> = () => {
  return (
    <Stack gap="md">
      <Select
        loadOptions={promiseOptions}
        placeholder="Single select (async)"
        cacheOptions
        defaultOptions
        isAsync
      />
      <Select
        loadOptions={promiseOptions}
        placeholder="Multi select (async)"
        cacheOptions
        defaultOptions
        isAsync
        isMulti
      />
    </Stack>
  );
};

AsyncSelect.parameters = {
  screenshot: { skip: true },
};
