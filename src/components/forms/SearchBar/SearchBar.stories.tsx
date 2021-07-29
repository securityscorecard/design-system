import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { noop } from 'ramda-adjunct';

import SearchBar from './SearchBar';
import { renderSuggestionFilter } from './SearchSuggestionFormats';
import { mockOnSearch, mockSuggestions } from './mocks';

export default {
  title: 'components/forms/SearchBar',
  component: SearchBar,
} as Meta;

const randomResults = ['Banana', 'Apple', 'Orange', 'Pear', 'Melon'];

const commonArgs = {
  placeholder: 'Search for domains or IPs',
  onSearch: mockOnSearch,
  onClear: noop,
};

export const Default: Story = () => (
  <SearchBar aria-label="SearchBar" hasSuggestions={false} {...commonArgs} />
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
