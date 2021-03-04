import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import SearchBar from './SearchBar';
import { SearchBarProps } from './SearchBar.types';
import { renderSuggestionFilter } from './SearchSuggestionFormats';
import { mockOnSearch, mockSuggestions } from './mocks';

export default {
  title: 'components/forms/SearchBar',
  component: SearchBar,
} as Meta;

const commonArgs = {
  placeholder: 'Search for domains or IPs',
  onSearch: mockOnSearch,
  suggestions: mockSuggestions('suggestion'),
};

export const playground: Story<SearchBarProps> = (args) => (
  <SearchBar aria-label="SearchBar" {...args} {...commonArgs} />
);
playground.parameters = {
  chromatic: { disable: true },
};
playground.argTypes = {
  hasSuggestions: { control: 'boolean' },
  isDisabled: { control: 'boolean' },
  isInvalid: { control: 'boolean' },
};

export const Default: Story = () => (
  <SearchBar aria-label="SearchBar" hasSuggestions={false} {...commonArgs} />
);

export const WithSuggestions: Story = () => (
  <SearchBar aria-label="SearchBar" hasSuggestions {...commonArgs} />
);

export const QuickFilters: Story = () => (
  <SearchBar
    aria-label="SearchBar"
    renderSearchSuggestion={renderSuggestionFilter}
    hasSuggestions
    {...commonArgs}
  />
);
