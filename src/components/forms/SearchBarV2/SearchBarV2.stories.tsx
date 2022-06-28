import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import { Inline, Stack } from '../../layout';
import { Button } from '../../Button';
import { Badges } from '../../../../.storybook/storybook.enums';
import SearchBarV2 from './SearchBarV2';
import { SearchBarV2Props } from './SearchBarV2.types';

export default {
  title: 'components/forms/SearchBarV2',
  component: SearchBarV2,
  parameters: {
    badges: [Badges.experimental],
  },
  argTypes: {
    defaultValue: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
    onChange: {
      control: { disable: true },
    },
  },
} as Meta;

const SearchBarTemplate: Story<SearchBarV2Props> = (args) => (
  <SearchBarV2 {...args} />
);

export const Playground = SearchBarTemplate.bind({});
Playground.args = {
  onChange: action('onChange'),
  onClear: action('onClear'),
  onSearch: action('onSearch'),
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const DefaultState = SearchBarTemplate.bind({});

export const WithDefaultValue = SearchBarTemplate.bind({});
WithDefaultValue.args = {
  defaultValue: 'some default search query',
};

export const Disabled = SearchBarTemplate.bind({});
Disabled.args = {
  isDisabled: true,
};
export const Searching = SearchBarTemplate.bind({});
Searching.args = {
  value: 'search query',
  isSearching: true,
};

export const WithDebouncedSearch = SearchBarTemplate.bind({});
WithDebouncedSearch.args = {
  hasDebouncedSearch: true,
  debounceTime: 300,
};
WithDebouncedSearch.parameters = {
  screenshot: { skip: true },
};

export const ControlledInput: Story<SearchBarV2Props> = (args) => {
  const [query, setQuery] = useState('');

  const handleSearch = (): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

  return (
    <Stack gap="sm">
      <SearchBarV2
        {...args}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        onClear={() => setQuery('')}
        onSearch={handleSearch}
      />
      <Inline gap="md">
        <Button onClick={() => setQuery('controlledValue1')}>Set query</Button>
        <Button onClick={() => setQuery('')}>Reset query</Button>
      </Inline>
    </Stack>
  );
};
ControlledInput.parameters = {
  screenshot: { skip: true },
};
