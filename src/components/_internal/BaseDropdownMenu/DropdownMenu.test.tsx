import { screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';

import { setup } from '../../../utils/tests/setup';
import DropdownMenu from './DropdownMenu';

const actions = [
  {
    label: 'Dropdown Item',
    name: 'dropdownItem',
    onClick: vi.fn(),
  },
];

describe('_internal/BaseDropdownMenu', () => {
  it('should toggle pane on click', async () => {
    const { user } = setup(
      <DropdownMenu actions={actions}>
        <button type="button">Toggle Dropdown</button>
      </DropdownMenu>,
    );

    const dropdownButton = screen.getByRole('button', {
      name: /Toggle Dropdown/i,
    });
    await user.click(dropdownButton);

    await waitFor(() => {
      expect(screen.getByTestId('dropdown-pane')).toBeInTheDocument();
    });

    const dropdownItem = screen.getByRole('button', { name: /Dropdown Item/i });
    expect(dropdownItem).toBeInTheDocument();

    await user.click(dropdownButton);

    await waitFor(() => {
      expect(screen.queryByTestId('dropdown-pane')).not.toBeInTheDocument();
    });

    expect(dropdownItem).not.toBeInTheDocument();
  });
  it('should close pane on click outside of Dropdown', async () => {
    const { user } = setup(
      <DropdownMenu actions={actions} defaultIsOpen>
        <button type="button">Toggle Dropdown</button>
      </DropdownMenu>,
    );

    await user.click(document.body);

    await waitFor(() => {
      expect(screen.queryByTestId('dropdown-pane')).not.toBeInTheDocument();
    });

    expect(
      screen.queryByRole('button', { name: /Dropdown Item/i }),
    ).not.toBeInTheDocument();
  });
  it('should create "button" tag when "onClick" prop is provided', async () => {
    const { user } = setup(
      <DropdownMenu actions={actions}>
        <button type="button">Toggle Dropdown</button>
      </DropdownMenu>,
    );

    const dropdownButton = screen.getByRole('button', {
      name: /Toggle Dropdown/i,
    });
    await user.click(dropdownButton);
    await waitFor(() => {
      expect(screen.getByTestId('dropdown-pane')).toBeInTheDocument();
    });

    const dropdownItem = screen.getByRole('button', { name: /Dropdown Item/i });
    expect(dropdownItem.nodeName).toBe('BUTTON');
  });
  it('should create "a" tag when "href" prop is provided', async () => {
    const href = 'http://example.com';
    const { user } = setup(
      <DropdownMenu actions={[{ ...actions[0], href }]}>
        <button type="button">Toggle Dropdown</button>
      </DropdownMenu>,
    );

    const dropdownButton = screen.getByRole('button', {
      name: /Toggle Dropdown/i,
    });
    await user.click(dropdownButton);

    await waitFor(() => {
      expect(screen.getByTestId('dropdown-pane')).toBeInTheDocument();
    });

    const dropdownItem = screen.getByRole('link', { name: /Dropdown Item/i });
    expect(dropdownItem.nodeName).toBe('A');
    expect(dropdownItem).toHaveAttribute('href', href);
  });
  it('should create "RouterLink" component when "to" prop is provided', async () => {
    const to = {
      pathname: '/example',
      search: '?sort=name',
      hash: '#the-hash',
    };
    const { user } = setup(
      <DropdownMenu actions={[{ ...actions[0], to }]}>
        <button type="button">Toggle Dropdown</button>
      </DropdownMenu>,
    );

    const dropdownButton = screen.getByRole('button', {
      name: /Toggle Dropdown/i,
    });
    await user.click(dropdownButton);

    await waitFor(() => {
      expect(screen.getByTestId('dropdown-pane')).toBeInTheDocument();
    });

    const dropdownItem = screen.getByRole('link', { name: /Dropdown Item/i });
    expect(dropdownItem.nodeName).toBe('A');
    expect(dropdownItem).toHaveAttribute(
      'href',
      `${to.pathname}${to.search}${to.hash}`,
    );
  });

  describe('given children is function', () => {
    it('should pass isPaneDisplayed as a argument', async () => {
      const { user } = setup(
        <DropdownMenu actions={actions}>
          {(isPaneDisplayed) => (
            <button type="button">{isPaneDisplayed ? 'Hide' : 'Show'}</button>
          )}
        </DropdownMenu>,
      );

      const dropdownButton = screen.getByRole('button');
      expect(dropdownButton).toHaveTextContent('Show');

      await user.click(dropdownButton);
      await waitFor(() => {
        expect(screen.getByTestId('dropdown-pane')).toBeInTheDocument();
      });

      expect(dropdownButton).toHaveTextContent('Hide');
    });
  });
});
