import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import SearchBar from './SearchBar';
import { SearchBarProps } from './SearchBar.types';
import { renderSuggestionFilter } from './SearchSuggestionFormats';
import { createMockOnSearch } from './mocks';

export default {
  title: 'components/forms/SearchBar',
  component: SearchBar,
} as Meta;

const commonArgs = {
  placeholder: 'Search for domains or IPs',
  onSearch: createMockOnSearch(action(`click-suggestion`)),
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
  <SearchBar aria-label="SearchBar" hasSuggestions {...commonArgs} />
);

export const WithoutSuggestions: Story = () => (
  <SearchBar aria-label="SearchBar" {...commonArgs} hasSuggestions={false} />
);

export const QuickFilters: Story = () => (
  <SearchBar
    aria-label="SearchBar"
    renderSearchSuggestion={renderSuggestionFilter}
    hasSuggestions
    {...commonArgs}
  />
);

export const SearchBarActive: Story = () => (
  <SearchBar
    aria-label="SearchBar"
    defaultValue="search text"
    renderSearchSuggestion={renderSuggestionFilter}
    hasSuggestions
    {...commonArgs}
  />
);
