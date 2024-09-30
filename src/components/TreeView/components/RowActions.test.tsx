import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { noop } from 'ramda-adjunct';

import { renderWithProviders } from '../../../utils/tests/renderWithProviders';
import RowActions from './RowActions';
import { RowAction } from '../TreeView.types';

describe('RowActions Component', () => {
  const mockRow = { id: '1', name: 'Test Row' };

  const createMockAction = (overrides = {}): RowAction<typeof mockRow> => ({
    label: 'Action Label',
    iconName: 'times',
    onClick: jest.fn(),
    ...overrides,
  });

  test('should render up to 2 action inline', () => {
    const rowActions = [
      createMockAction({ label: 'action 1' }),
      createMockAction({ label: 'action 2' }),
    ];

    renderWithProviders(<RowActions rowActions={rowActions} row={mockRow} />);

    expect(screen.getAllByRole('button')).toHaveLength(2);
  });

  test('should skip rendering of action if is null', () => {
    const rowActions = [createMockAction({ label: 'action 1' }), null];

    renderWithProviders(<RowActions rowActions={rowActions} row={mockRow} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('should render dropdown menu for more than two actions', async () => {
    const rowActions = [
      createMockAction({ label: 'action 1' }),
      createMockAction({ label: 'action 2' }),
      createMockAction({ label: 'action 3' }),
    ];

    renderWithProviders(<RowActions rowActions={rowActions} row={mockRow} />);

    const dropdownTrigger = screen.getByRole('button', {
      name: /Row Actions/i,
    });
    expect(dropdownTrigger).toBeInTheDocument();

    userEvent.type(dropdownTrigger, '{arrowdown}');

    await waitFor(() => {
      expect(screen.getAllByRole('menuitem')).toHaveLength(3);
    });
  });

  test('should render separator in dropdown menu', async () => {
    const rowActions = [
      createMockAction({ label: 'action 1' }),
      createMockAction({ label: 'action 2' }),
      null,
      createMockAction({ label: 'action 3' }),
    ];

    renderWithProviders(<RowActions rowActions={rowActions} row={mockRow} />);

    const dropdownTrigger = screen.getByRole('button', {
      name: /Row Actions/i,
    });
    expect(dropdownTrigger).toBeInTheDocument();

    userEvent.type(dropdownTrigger, '{arrowdown}');

    await waitFor(() => {
      expect(screen.getAllByRole('menuitem')).toHaveLength(3);
    });
  });

  test('should trigger `onClick`', () => {
    const onClickMock = jest.fn();
    onClickMock.mockImplementation(() => noop);
    const rowActions = [
      createMockAction({ label: 'action 1', onClick: onClickMock }),
    ];

    renderWithProviders(<RowActions rowActions={rowActions} row={mockRow} />);

    userEvent.click(screen.getByRole('button'));

    expect(onClickMock).toBeCalledWith({ row: mockRow });
  });
});
