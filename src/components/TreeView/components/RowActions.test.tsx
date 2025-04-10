import { screen, waitFor } from '@testing-library/react';
import { noop } from 'ramda-adjunct';
import { vi } from 'vitest';

import { setup } from '../../../utils/tests/setup';
import RowActions from './RowActions';
import { RowAction } from '../TreeView.types';

describe('RowActions Component', () => {
  const mockRow = { id: '1', name: 'Test Row' };

  const createMockAction = (overrides = {}): RowAction<typeof mockRow> => ({
    label: 'Action Label',
    iconName: 'times',
    onClick: vi.fn(),
    ...overrides,
  });

  test('should render only one action inline', () => {
    const rowActions = [createMockAction({ label: 'action 1' })];

    setup(<RowActions rowActions={rowActions} row={mockRow} />);
    expect(
      screen.getByRole('button', {
        name: /action 1/i,
      }),
    ).toBeInTheDocument();
  });

  test('should skip rendering of action if is null', () => {
    const rowActions = [createMockAction({ label: 'action 1' }), null];

    setup(<RowActions rowActions={rowActions} row={mockRow} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('should render dropdown menu for more than one action', async () => {
    const rowActions = [
      createMockAction({ label: 'action 1' }),
      createMockAction({ label: 'action 2' }),
    ];

    const { user } = setup(
      <RowActions rowActions={rowActions} row={mockRow} />,
    );

    const dropdownTrigger = screen.getByRole('button', {
      name: /Row Actions/i,
    });
    expect(dropdownTrigger).toBeInTheDocument();

    await user.type(dropdownTrigger, '{arrowdown}');

    await waitFor(() => {
      expect(screen.getAllByRole('menuitem')).toHaveLength(2);
    });
  });

  test('should render separator in dropdown menu', async () => {
    const rowActions = [
      createMockAction({ label: 'action 1' }),
      createMockAction({ label: 'action 2' }),
      null,
      createMockAction({ label: 'action 3' }),
    ];

    const { user } = setup(
      <RowActions rowActions={rowActions} row={mockRow} />,
    );

    const dropdownTrigger = screen.getByRole('button', {
      name: /Row Actions/i,
    });
    expect(dropdownTrigger).toBeInTheDocument();

    await user.type(dropdownTrigger, '{arrowdown}');

    await waitFor(() => {
      expect(screen.getAllByRole('menuitem')).toHaveLength(3);
    });
  });

  test('should trigger `onClick`', async () => {
    const onClickMock = vi.fn();
    onClickMock.mockImplementation(() => noop);
    const rowActions = [
      createMockAction({ label: 'action 1', onClick: onClickMock }),
    ];

    const { user } = setup(
      <RowActions rowActions={rowActions} row={mockRow} />,
    );

    await user.click(screen.getByRole('button'));

    expect(onClickMock).toBeCalledWith({ row: mockRow });
  });
});
