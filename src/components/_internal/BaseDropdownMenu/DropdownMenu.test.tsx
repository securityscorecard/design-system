import { fireEvent, screen } from '@testing-library/react';
import React from 'react';

import { renderWithProviders } from '../../../utils/tests/renderWithProviders';
import DropdownMenu from './DropdownMenu';

const actions = [
  {
    label: 'Dropdown Item',
    name: 'dropdownItem',
    onClick: jest.fn(),
  },
];

describe('_internal/BaseDropdownMenu', () => {
  it('should toggle pane on click', () => {
    renderWithProviders(
      <DropdownMenu actions={actions}>
        <button type="button">Toggle Dropdown</button>
      </DropdownMenu>,
    );

    const dropdownButton = screen.getByRole('button', {
      name: /Toggle Dropdown/i,
    });
    fireEvent.click(dropdownButton);

    const dropdownItem = screen.getByRole('button', { name: /Dropdown Item/i });
    expect(dropdownItem).toBeInTheDocument();

    fireEvent.click(dropdownButton);
    expect(dropdownItem).not.toBeInTheDocument();
  });
  it('should close pane on click outside of Dropdown', () => {
    renderWithProviders(
      <DropdownMenu actions={actions} defaultIsOpen>
        <button type="button">Toggle Dropdown</button>
      </DropdownMenu>,
    );

    fireEvent.click(document.body);

    expect(
      screen.queryByRole('button', { name: /Dropdown Item/i }),
    ).not.toBeInTheDocument();
  });
  it('should create "button" tag when "onClick" prop is provided', () => {
    renderWithProviders(
      <DropdownMenu actions={actions}>
        <button type="button">Toggle Dropdown</button>
      </DropdownMenu>,
    );

    const dropdownButton = screen.getByRole('button', {
      name: /Toggle Dropdown/i,
    });
    fireEvent.click(dropdownButton);

    const dropdownItem = screen.getByRole('button', { name: /Dropdown Item/i });
    expect(dropdownItem.nodeName).toBe('BUTTON');
  });
  it('should create "a" tag when "href" prop is provided', () => {
    const href = 'http://example.com';
    renderWithProviders(
      <DropdownMenu actions={[{ ...actions[0], href }]}>
        <button type="button">Toggle Dropdown</button>
      </DropdownMenu>,
    );

    const dropdownButton = screen.getByRole('button', {
      name: /Toggle Dropdown/i,
    });
    fireEvent.click(dropdownButton);

    const dropdownItem = screen.getByRole('link', { name: /Dropdown Item/i });
    expect(dropdownItem.nodeName).toBe('A');
    expect(dropdownItem).toHaveAttribute('href', href);
  });
  it('should create "RouterLink" component when "to" prop is provided', () => {
    const to = {
      pathname: '/example',
      search: '?sort=name',
      hash: '#the-hash',
    };
    renderWithProviders(
      <DropdownMenu actions={[{ ...actions[0], to }]}>
        <button type="button">Toggle Dropdown</button>
      </DropdownMenu>,
    );

    const dropdownButton = screen.getByRole('button', {
      name: /Toggle Dropdown/i,
    });
    fireEvent.click(dropdownButton);

    const dropdownItem = screen.getByRole('link', { name: /Dropdown Item/i });
    expect(dropdownItem.nodeName).toBe('A');
    expect(dropdownItem).toHaveAttribute(
      'href',
      `${to.pathname}${to.search}${to.hash}`,
    );
  });

  describe('given children is function', () => {
    it('should pass isPaneDisplayed as a argument', () => {
      renderWithProviders(
        <DropdownMenu actions={actions}>
          {(isPaneDisplayed) => (
            <button type="button">{isPaneDisplayed ? 'Hide' : 'Show'}</button>
          )}
        </DropdownMenu>,
      );

      const dropdownButton = screen.getByRole('button');
      expect(dropdownButton).toHaveTextContent('Show');

      fireEvent.click(dropdownButton);
      expect(dropdownButton).toHaveTextContent('Hide');
    });
  });
});
