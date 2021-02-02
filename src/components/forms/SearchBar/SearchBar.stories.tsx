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
  isDisabled: { control: 'boolean' },
  isInvalid: { control: 'boolean' },
};

export const DefaultSearchBar: Story = () => (
  <SearchBar aria-label="SearchBar" {...commonArgs} />
);

export const QuickFilterSearchBar: Story = () => (
  <SearchBar
    aria-label="SearchBar"
    renderSearchSuggestion={renderSuggestionFilter}
    {...commonArgs}
  />
);

export const SearchBarActive: Story = () => (
  <SearchBar
    aria-label="SearchBar"
    defaultValue="search text"
    renderSearchSuggestion={renderSuggestionFilter}
    {...commonArgs}
  />
);
