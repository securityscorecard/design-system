import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { noop } from 'ramda-adjunct';
import { action } from '@storybook/addon-actions';

import SearchBar from './SearchBar';
import { renderSuggestionFilter } from './SearchSuggestionFormats';
import { mockOnSearch, mockSuggestions } from './mocks';
import { SearchBarProps } from './SearchBar.types';
import { Inline, Stack } from '../../layout';
import { Button } from '../../Button';

export default {
  title: 'components/forms/SearchBar',
  component: SearchBar,
  argTypes: {
    placeholder: { control: { type: 'text' } },
  },
} as Meta;

const randomResults = ['Banana', 'Apple', 'Orange', 'Pear', 'Melon'];

const commonArgs = {
  placeholder: 'Search for domains or IPs',
  onSearch: mockOnSearch,
  onClear: noop,
};

export const Default: Story = (args) => (
  <SearchBar
    aria-label="SearchBar"
    hasSuggestions={false}
    {...commonArgs}
    {...args}
  />
);

export const WithValidation: Story = () => (
  <SearchBar
    aria-label="SearchBar"
    errorMessage="Only a number with 1 to 5 digits is allowed"
    hasSuggestions={false}
    pattern="[0-9]{1,5}"
    {...commonArgs}
  />
);

export const WithValidationOnSubmit: Story = () => (
  <SearchBar
    aria-label="SearchBar"
    errorMessage="Only a number with 1 to 5 digits is allowed"
    hasSuggestions={false}
    pattern="[0-9]{1,5}"
    isValidatedOnSubmit
    {...commonArgs}
  />
);

export const WithSuggestions: Story = () => {
  const [suggestions, setSuggestions] = useState([]);

  const onSearch = () => {
    mockOnSearch('query');
    setSuggestions(
      mockSuggestions(
        randomResults[Math.floor(Math.random() * randomResults.length)],
      ),
    );
  };

  return (
    <SearchBar
      {...commonArgs}
      suggestions={suggestions}
      hasSuggestions
      onClear={() => setSuggestions([])}
      onSearch={onSearch}
    />
  );
};

export const QuickFilters: Story = () => {
  const [suggestions, setSuggestions] = useState([]);

  const onSearch = () => {
    mockOnSearch('query');
    setSuggestions(
      mockSuggestions(
        randomResults[Math.floor(Math.random() * randomResults.length)],
      ),
    );
  };

  return (
    <SearchBar
      {...commonArgs}
      renderSearchSuggestion={renderSuggestionFilter}
      suggestions={suggestions}
      hasSuggestions
      onClear={() => setSuggestions([])}
      onSearch={onSearch}
    />
  );
};

export const ControlledInput: Story<SearchBarProps> = (args) => {
  const [query, setQuery] = useState('');

  return (
    <Stack gap="sm">
      <SearchBar
        {...args}
        value={query}
        onSearch={(value) => {
          setQuery(value);
          action('search')(value);
        }}
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
