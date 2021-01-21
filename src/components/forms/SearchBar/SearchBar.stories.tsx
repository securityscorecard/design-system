import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import SearchBar from './SearchBar';
import { SearchBarProps } from './SearchBar.types';

export default {
  title: 'components/forms/SearchBar',
  component: SearchBar,
} as Meta;

export const playground: Story<SearchBarProps> = (args) => (
  <SearchBar {...args} aria-label="SearchBar" />
);
playground.parameters = {
  chromatic: { disable: true },
};
playground.argTypes = {
  isDisabled: { control: 'boolean' },
  isInvalid: { control: 'boolean' },
  isSearchInProgress: { control: 'boolean' },
};

export const DefaultSearchBar: Story = () => (
  <SearchBar aria-label="SearchBar" />
);

export const SearchBarActive: Story = () => (
  <SearchBar aria-label="SearchBar" defaultValue="search text" />
);

export const SearchBarInProgress: Story = () => (
  <SearchBar
    aria-label="SearchBar"
    defaultValue="search text"
    isSearchInProgress
  />
);
