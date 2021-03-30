import { fireEvent, screen } from '@testing-library/react';
import React from 'react';

import { renderWithProviders } from '../../../utils/tests/renderWithProviders';
import Dropdown from './Dropdown';

const actions = [
  {
    label: 'Dropdown Item',
    name: 'dropdownItem',
    onClick: jest.fn(),
  },
];

describe('Datatable/Dropdown', () => {
  it('should toggle pane on click', () => {
    renderWithProviders(
      <Dropdown actions={actions}>
        <button type="button">Toggle Dropdown</button>
      </Dropdown>,
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
      <Dropdown actions={actions} defaultIsOpen>
        <button type="button">Toggle Dropdown</button>
      </Dropdown>,
    );

    fireEvent.click(document.body);

    expect(
      screen.queryByRole('button', { name: /Dropdown Item/i }),
    ).not.toBeInTheDocument();
  });
  it('should create "button" tag when "onClick" prop is provided', () => {
    renderWithProviders(
      <Dropdown actions={actions}>
        <button type="button">Toggle Dropdown</button>
      </Dropdown>,
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
      <Dropdown actions={[{ ...actions[0], href }]}>
        <button type="button">Toggle Dropdown</button>
      </Dropdown>,
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
      <Dropdown actions={[{ ...actions[0], to }]}>
        <button type="button">Toggle Dropdown</button>
      </Dropdown>,
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
        <Dropdown actions={actions}>
          {(isPaneDisplayed) => (
            <button type="button">{isPaneDisplayed ? 'Hide' : 'Show'}</button>
          )}
        </Dropdown>,
      );

      const dropdownButton = screen.getByRole('button');
      expect(dropdownButton).toHaveTextContent('Show');

      fireEvent.click(dropdownButton);
      expect(dropdownButton).toHaveTextContent('Hide');
    });
  });
});
