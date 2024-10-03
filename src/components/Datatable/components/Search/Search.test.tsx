/* eslint-disable testing-library/await-async-query */
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { createIconLibrary, resetIconLibrary } from '../../../../theme';
import Search from './Search';
import { renderWithProviders } from '../../../../utils/tests/renderWithProviders';

const onSearch = jest.fn();
const onClear = jest.fn();

describe('Search', () => {
  beforeAll(() => {
    createIconLibrary();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    resetIconLibrary();
  });
  it('should have defaultValue when provided', async () => {
    renderWithProviders(
      <Search
        defaultValue="Searching for Default"
        onClear={onClear}
        onSearch={onSearch}
      />,
    );
    const searchInput = screen.getByRole('searchbox');
    await waitFor(() =>
      expect(searchInput).toHaveValue('Searching for Default'),
    );
  });

  it('should clear value when clear button is clicked', async () => {
    renderWithProviders(<Search onClear={onClear} onSearch={onSearch} />);
    const searchInput = screen.getByRole('searchbox');

    userEvent.type(searchInput, 'query');
    expect(searchInput).toHaveValue('query');

    const clearButton = await screen.findByLabelText('Clear search value');
    userEvent.click(clearButton);

    await waitFor(() => expect(searchInput).toHaveValue(''));
    expect(onClear).toHaveBeenCalled();
  });

  it('should trigger search when value is changed', async () => {
    renderWithProviders(<Search onClear={onClear} onSearch={onSearch} />);
    const searchInput = screen.getByRole('searchbox');
    jest.useFakeTimers();

    userEvent.type(searchInput, 'query');
    expect(searchInput).toHaveValue('query');

    await waitFor(() => expect(onSearch).toHaveBeenCalled());
    jest.useRealTimers();
  });
  it('should trigger search if value is empty', async () => {
    renderWithProviders(
      <Search defaultValue="ab" onClear={onClear} onSearch={onSearch} />,
    );
    const searchInput = screen.getByRole('searchbox');
    jest.useFakeTimers();

    expect(searchInput).toHaveValue('ab');
    userEvent.type(searchInput, '{Backspace}{Backspace}');
    await waitFor(() => expect(onSearch).toBeCalledWith(''));
    jest.useRealTimers();
  });
  it('should not trigger search when value is invalid', async () => {
    renderWithProviders(
      <Search onClear={onClear} onSearch={onSearch} pattern="[0-9]+" />,
    );
    const searchInput = screen.getByRole('searchbox');

    userEvent.type(searchInput, 'query{Enter}');
    await waitFor(() => expect(onSearch).not.toBeCalled());
  });

  it('should validate according to pattern', () => {
    renderWithProviders(
      <Search onClear={onClear} onSearch={onSearch} pattern="[0-9]+" />,
    );
    const searchInput = screen.getByRole('searchbox');

    expect(searchInput).toBeValid();
    userEvent.type(searchInput, 'query');
    expect(searchInput).toBeInvalid();
  });
  it('should reset validation when value is empty string', () => {
    renderWithProviders(
      <Search onClear={onClear} onSearch={onSearch} pattern="[0-9]+" />,
    );
    const searchInput = screen.getByRole('searchbox');

    userEvent.type(searchInput, 'ab');
    expect(searchInput).toBeInvalid();
    userEvent.type(searchInput, '{Backspace}{Backspace}');
    expect(searchInput).toBeValid();
  });

  describe('"isValidatedOnSubmit" is true', () => {
    it('should not trigger search automatically', async () => {
      renderWithProviders(
        <Search isValidatedOnSubmit onClear={onClear} onSearch={onSearch} />,
      );
      const searchInput = screen.getByRole('searchbox');

      userEvent.type(searchInput, 'query');
      expect(onSearch).not.toBeCalled();

      userEvent.type(searchInput, '{Enter}');
      await waitFor(() => expect(onSearch).toBeCalledWith('query'));
    });

    it('should trigger search if value is empty', async () => {
      renderWithProviders(
        <Search
          isValidatedOnSubmit
          defaultValue="ab"
          onClear={onClear}
          onSearch={onSearch}
        />,
      );
      const searchInput = screen.getByRole('searchbox');

      expect(searchInput).toHaveValue('ab');
      userEvent.type(searchInput, '{Backspace}{Backspace}{Enter}');
      await waitFor(() => expect(onSearch).toBeCalledWith(''));
    });

    it('should not trigger search when value is invalid', async () => {
      renderWithProviders(
        <Search
          isValidatedOnSubmit
          onClear={onClear}
          onSearch={onSearch}
          pattern="[0-9]+"
        />,
      );
      const searchInput = screen.getByRole('searchbox');

      userEvent.type(searchInput, 'query{Enter}');
      expect(onSearch).not.toBeCalled();
    });
  });
});
