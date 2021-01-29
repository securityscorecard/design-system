import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import SearchBar from './SearchBar';
import { SearchBarProps } from './SearchBar.types';

export default {
  title: 'components/forms/SearchBar',
  component: SearchBar,
} as Meta;

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const mockOnSearch = async (query) => {
  await delay(1000);
  return [
    {
      name: `${query} 1`,
      value: `${query} 1`,
      filter: { field: 'Domain', condition: 'is' },
      onClick: action(`click-suggestion-1`),
    },
    {
      name: `${query} 2`,
      value: `${query} 2`,
      filter: { field: 'Domain', condition: 'is' },
      onClick: action(`click-suggestion-2`),
    },
    {
      name: `${query} 3`,
      value: `${query} 3`,
      filter: { field: 'Domain', condition: 'contains' },
      onClick: action(`click-suggestion-3`),
    },
  ];
};

const commonArgs = {
  placeholder: 'Search for domains or IPs',
  onSearch: mockOnSearch,
};

export const playground: Story<SearchBarProps> = (args) => (
  <SearchBar aria-label="SearchBar" {...args} {...commonArgs} />
);
playground.parameters = {
  chromatic: { disable: true },
};
playground.argTypes = {
  isDisabled: { control: 'boolean' },
  isInvalid: { control: 'boolean' },
  searchSuggestionFormat: { control: 'select', defaultValue: 'default' },
};

export const DefaultSearchBar: Story = () => (
  <SearchBar aria-label="SearchBar" {...commonArgs} />
);

export const QuickFilterSearchBar: Story = () => (
  <SearchBar
    aria-label="SearchBar"
    searchSuggestionFormat="filter"
    {...commonArgs}
  />
);

export const SearchBarActive: Story = () => (
  <SearchBar
    aria-label="SearchBar"
    defaultValue="search text"
    {...commonArgs}
  />
);
