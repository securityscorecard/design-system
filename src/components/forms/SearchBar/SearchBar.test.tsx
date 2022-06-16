/* eslint-disable testing-library/await-async-query */
import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { DSProvider, createIconLibrary } from '../../../theme';
import SearchBar from './SearchBar';
import { renderSuggestionFilter } from './SearchSuggestionFormats';

const onClickSuggestion = jest.fn();
const onSearch = jest.fn();
const onClear = jest.fn();

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
        onClear={onClear}
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

  it('clears on X', async () => {
    const { searchInput } = setup();

    fireEvent.change(searchInput, { target: { value: 'query' } });

    const closeButton = await screen.findByLabelText('Clear Search');
    fireEvent.click(closeButton);

    await waitFor(() => expect(searchInput.value).toBe(''));
    expect(onClear).toHaveBeenCalled();
  });

  it('searches on change', async () => {
    const { searchInput } = setup();
    jest.useFakeTimers();

    fireEvent.change(searchInput, { target: { value: 'query' } });
    expect(searchInput.value).toBe('query');

    await waitFor(() => expect(onSearch).toHaveBeenCalled());
  });

  it('displays suggestions', async () => {
    const { searchInput } = setup();
    jest.useFakeTimers();

    fireEvent.change(searchInput, { target: { value: 'query' } });

    expect(
      screen.getByRole('button', { name: /suggestion 1/ }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /suggestion 2/ }),
    ).toBeInTheDocument();
  });

  it('should set query value when is externaly provided', async () => {
    const { rerender } = render(
      <DSProvider>
        <SearchBar value="query" onSearch={onSearch} onClear={onClear} />
      </DSProvider>,
    );

    expect(screen.getByRole('textbox')).toHaveValue('query');

    await waitFor(() => {
      expect(
        screen.queryByTestId('search-suggestion-pane'),
      ).not.toBeInTheDocument();
    });

    rerender(
      <DSProvider>
        <SearchBar value="" onSearch={onSearch} onClear={onClear} />
      </DSProvider>,
    );

    await waitFor(() => {
      expect(
        screen.queryByTestId('search-suggestion-pane'),
      ).not.toBeInTheDocument();
    });

    expect(screen.getByRole('textbox')).toHaveValue('');
  });

  xit('should call onSearch when value is changed', () => {
    const { rerender } = render(
      <DSProvider>
        <SearchBar value="query" onSearch={onSearch} onClear={onClear} />
      </DSProvider>,
    );

    rerender(
      <DSProvider>
        <SearchBar value="" onSearch={onSearch} onClear={onClear} />
      </DSProvider>,
    );

    expect(onSearch).toHaveBeenCalled();
  });
});
