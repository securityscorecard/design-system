import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';

import SearchBar from './SearchBar';
import { createMockOnSearch } from './mocks';

const onClickSuggestion = jest.fn();

const mockOnSearch = createMockOnSearch(onClickSuggestion);

const setup = () => {
  const utils = render(
    <SearchBar
      defaultValue="Searching for Default"
      placeholder="Search for X"
      hasSuggestions
      onSearch={mockOnSearch}
    />,
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

  // TODO: fix when suggestions implenemtation is ready
  /*

  it('displays suggestions on change', async () => {
    const { searchInput } = setup();
    act(() => {
      fireEvent.change(searchInput, { target: { value: 'query' } });
    });
    
    const suggestion1 = await screen.findByText('query suggestion 1');
    const suggestion2 = await screen.findByText('query suggestion 2');
    const suggestion3 = await screen.findByText('query suggestion 3');
    
    expect(suggestion1).toBeInTheDocument();
    expect(suggestion2).toBeInTheDocument();
    expect(suggestion3).toBeInTheDocument();
  });
  */
});
