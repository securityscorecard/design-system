import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';

import { DSProvider, createIconLibrary } from '../../../theme';
import SearchBar from './SearchBar';
import { mockOnSearch } from './mocks';

const onClickSuggestion = jest.fn();

export const mockSuggestions = [
  {
    name: 'suggestion1',
    value: 'suggestion 1',
    onClick: onClickSuggestion,
    filter: { field: 'Field 1', condition: 'is' },
  },
  {
    name: 'suggestion2',
    value: 'suggestion 2',
    onClick: onClickSuggestion,
    filter: { field: 'Field 2', condition: 'contains' },
  },
];

const setup = () => {
  createIconLibrary();
  const utils = render(
    <DSProvider>
      <SearchBar
        defaultValue="Searching for Default"
        placeholder="Search for X"
        suggestions={mockSuggestions}
        hasSuggestions
        onSearch={mockOnSearch}
      />
    </DSProvider>,
  );
  const searchInput = utils.getByPlaceholderText(
    'Search for X',
  ) as HTMLInputElement;
  return {
    searchInput,
    ...utils,
  };
};

describe('SearchBar', () => {
  it('displays default value', () => {
    const { searchInput } = setup();
    expect(searchInput.value).toBe('Searching for Default');
  });

  it('updates on change', async () => {
    const { searchInput } = setup();
    act(() => {
      fireEvent.change(searchInput, { target: { value: 'query' } });
    });

    expect(searchInput.value).toBe('query');
  });

  it('clears on X', async () => {
    const { searchInput } = setup();
    act(() => {
      fireEvent.change(searchInput, { target: { value: 'query' } });
    });

    const closeButton = await screen.findByLabelText('Clear Search');
    act(() => {
      fireEvent.click(closeButton);
    });

    expect(searchInput.value).toBe('');
  });

  it('displays suggestions on change', async () => {
    const { searchInput } = setup();
    act(() => {
      fireEvent.change(searchInput, { target: { value: 'query' } });
    });

    const suggestion1 = await screen.findByText('suggestion 1');
    const suggestion2 = await screen.findByText('suggestion 2');

    expect(suggestion1).toBeInTheDocument();
    expect(suggestion2).toBeInTheDocument();
  });
});
