/* eslint-disable testing-library/await-async-query */
import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { DSProvider, createIconLibrary } from '../../../theme';
import SearchBar from './SearchBar';
import { renderSuggestionFilter } from './SearchSuggestionFormats';

const onClickSuggestion = jest.fn();
const onSearch = jest.fn();

export const mockSuggestions = [
  {
    name: 'suggestion 1',
    value: 'Suggestion One',
    onClick: onClickSuggestion,
    filter: { field: 'Field 1', condition: 'is' },
  },
  {
    name: 'suggestion 2',
    value: 'Suggestion Two',
    onClick: onClickSuggestion,
    filter: { field: 'Field 2', condition: 'contains' },
  },
];

const setup = () => {
  createIconLibrary();

  render(
    <DSProvider>
      <SearchBar
        defaultValue="Searching for Default"
        placeholder="Search for X"
        renderSearchSuggestion={renderSuggestionFilter}
        suggestions={mockSuggestions}
        hasSuggestions
        onSearch={onSearch}
      />
    </DSProvider>,
  );

  const searchInput = screen.getByPlaceholderText(
    'Search for X',
  ) as HTMLInputElement;
  return {
    searchInput,
    // waitForOptions,
  };
};

describe('SearchBar', () => {
  it('displays default value', () => {
    const { searchInput } = setup();
    expect(searchInput.value).toBe('Searching for Default');
  });

  it('updates on change', async () => {
    const { searchInput } = setup();
    fireEvent.change(searchInput, { target: { value: 'query' } });
    expect(searchInput.value).toBe('query');
  });

  it('clears on X', async () => {
    const { searchInput } = setup();

    fireEvent.change(searchInput, { target: { value: 'query' } });

    const closeButton = await screen.findByLabelText('Clear Search');
    fireEvent.click(closeButton);

    await waitFor(() => expect(searchInput.value).toBe(''));
  });

  it('displays suggestions on change', async () => {
    const { searchInput } = setup();
    jest.useFakeTimers();

    fireEvent.change(searchInput, { target: { value: 'query' } });

    await waitFor(() => screen.findByText('Suggestion One'));
    await waitFor(() =>
      expect(screen.findByText('Suggestion One')).toBeTruthy(),
    );

    await waitFor(() => screen.findByText('Suggestion Two'));
    await waitFor(() =>
      expect(screen.findByText('Suggestion Two')).toBeTruthy(),
    );
  });
});
