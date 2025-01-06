import { screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';

import Search from './Search';
import { setup } from '../../../../utils/tests/setup';

const onSearch = vi.fn();
const onClear = vi.fn();

describe('Search', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should have defaultValue when provided', async () => {
    setup(
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
    const { user } = setup(<Search onClear={onClear} onSearch={onSearch} />);
    const searchInput = screen.getByRole('searchbox');

    await user.type(searchInput, 'query');
    expect(searchInput).toHaveValue('query');

    const clearButton = await screen.findByLabelText('Clear search value');
    await user.click(clearButton);

    await waitFor(() => expect(searchInput).toHaveValue(''));
    expect(onClear).toHaveBeenCalled();
  });

  it('should trigger search when value is changed', async () => {
    const { user } = setup(<Search onClear={onClear} onSearch={onSearch} />);
    const searchInput = screen.getByRole('searchbox');

    await user.type(searchInput, 'query');
    expect(searchInput).toHaveValue('query');

    await waitFor(() => expect(onSearch).toHaveBeenCalled());
  });
  it('should trigger search if value is empty', async () => {
    const { user } = setup(
      <Search defaultValue="ab" onClear={onClear} onSearch={onSearch} />,
    );
    const searchInput = screen.getByRole('searchbox');

    expect(searchInput).toHaveValue('ab');
    await user.click(searchInput);
    await user.keyboard('{Backspace}{Backspace}');
    await waitFor(() => expect(onSearch).toHaveBeenCalledWith(''));
  });
  it('should not trigger search when value is invalid', async () => {
    const { user } = setup(
      <Search onClear={onClear} onSearch={onSearch} pattern="[0-9]+" />,
    );
    const searchInput = screen.getByRole('searchbox');

    await user.click(searchInput);
    await user.keyboard('query{Enter}');
    await waitFor(() => expect(onSearch).not.toHaveBeenCalled());
  });

  it('should validate according to pattern', async () => {
    const { user } = setup(
      <Search onClear={onClear} onSearch={onSearch} pattern="[0-9]+" />,
    );
    const searchInput = screen.getByRole('searchbox');

    expect(searchInput).toBeValid();
    await user.type(searchInput, 'query');
    expect(searchInput).toBeInvalid();
  });
  it('should reset validation when value is empty string', async () => {
    const { user } = setup(
      <Search onClear={onClear} onSearch={onSearch} pattern="[0-9]+" />,
    );
    const searchInput = screen.getByRole('searchbox');

    await user.type(searchInput, 'ab');
    expect(searchInput).toBeInvalid();
    await user.keyboard('{Backspace}{Backspace}');
    expect(searchInput).toBeValid();
  });

  describe('"isValidatedOnSubmit" is true', () => {
    it('should not trigger search automatically', async () => {
      const { user } = setup(
        <Search isValidatedOnSubmit onClear={onClear} onSearch={onSearch} />,
      );
      const searchInput = screen.getByRole('searchbox');

      await user.type(searchInput, 'query');
      expect(onSearch).not.toBeCalled();

      await user.keyboard('{Enter}');
      await waitFor(() => expect(onSearch).toBeCalledWith('query'));
    });

    it('should trigger search if value is empty', async () => {
      const { user } = setup(
        <Search
          isValidatedOnSubmit
          defaultValue="ab"
          onClear={onClear}
          onSearch={onSearch}
        />,
      );
      const searchInput = screen.getByRole('searchbox');

      expect(searchInput).toHaveValue('ab');
      await user.click(searchInput);
      await user.keyboard('{Backspace}{Backspace}{Enter}');
      await waitFor(() => expect(onSearch).toBeCalledWith(''));
    });

    it('should not trigger search when value is invalid', async () => {
      const { user } = setup(
        <Search
          isValidatedOnSubmit
          onClear={onClear}
          onSearch={onSearch}
          pattern="[0-9]+"
        />,
      );
      const searchInput = screen.getByRole('searchbox');
      await user.click(searchInput);
      await user.keyboard('query{Enter}');
      expect(onSearch).not.toBeCalled();
    });
  });
});
