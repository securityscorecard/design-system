import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { isNull } from 'ramda-adjunct';
import { GroupedOptionsType, OptionsType } from 'react-select';

import { CreatableSelectProps, Option } from './Select.types';
import CreatableSelect from './CreatableSelect';
import { Stack } from '../../layout';

export default {
  title: 'components/forms/Select/CreatableSelect',
  component: CreatableSelect,
  parameters: {
    docs: {
      description: {
        component: `
\`\`\`js
import { CreatableSelect } from '@securityscorecard/design-system';
\`\`\`

Capabilities of the **CreatableSelect** component are the same as [Select](design-system/alpha/components-forms-select-select--playground) component
with a couple of properties specific for the options creation.
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
    onCreateOption: {
      table: { type: { summary: '(inputValue: string) => void' } },
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

const options = [
  { value: 'HR', label: 'Croatia', isDisabled: true },
  { value: 'CU', label: 'Cuba' },
  { value: 'CW', label: 'Cura\u00e7ao' },
  { value: 'CY', label: 'Cyprus' },
  { value: 'CZ', label: 'Czech Republic' },
  { value: 'DK', label: 'Denmark' },
];

const CreatableSelectTemplate: StoryFn<CreatableSelectProps<true>> = ({
  options: originalOptions,
  ...args
}) => {
  const [createdOptions, setCreatedOptions] = useState(originalOptions);
  const [currentValue, setCurrentValue] = useState<OptionsType<Option> | null>(
    null,
  );
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateOption = (inputString: string) => {
    setIsCreating(true);
    const newOption: Option = {
      label: inputString,
      value: inputString.toLowerCase().replace(/\W/g, ''),
    };

    setTimeout(() => {
      setCreatedOptions(
        (prevState) =>
          [...(prevState ?? []), newOption] as
            | GroupedOptionsType<Option>
            | OptionsType<Option>,
      );
      setCurrentValue((prevValue) =>
        isNull(prevValue) ? [newOption] : [...prevValue, newOption],
      );
      setIsCreating(false);
    }, 500);
  };

  return (
    <CreatableSelect
      {...args}
      createNewLabel="Create new option"
      isLoading={isCreating}
      options={createdOptions}
      value={currentValue}
      onChange={(value) => setCurrentValue(value)}
      onCreateOption={handleCreateOption}
    />
  );
};

export const Playground = CreatableSelectTemplate.bind({});

Playground.args = {
  options,
  defaultIsMenuOpen: true,
  isClearable: true,
  isMulti: true,
  isMenuPositionRelative: true,
  defaultInputValue: 'd',
};

export const SingleSelect = CreatableSelectTemplate.bind({});

SingleSelect.args = {
  ...Playground.args,
  isMulti: false,
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

export const AsyncSelect: StoryFn<CreatableSelectProps<false>> = () => {
  return (
    <Stack gap="md">
      <CreatableSelect
        loadOptions={promiseOptions}
        placeholder="Single select (async)"
        cacheOptions
        defaultOptions
        isAsync
      />
      <CreatableSelect
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

export const DarkMode = CreatableSelectTemplate.bind({});
DarkMode.args = {
  ...Playground.args,
};
DarkMode.parameters = {
  themes: {
    themeOverride: 'Dark',
  },
};
