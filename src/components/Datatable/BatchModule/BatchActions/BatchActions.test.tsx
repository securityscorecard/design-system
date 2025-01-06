import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';

import { setup } from '../../../../utils/tests/setup';
import { DatatableStore, datatableInitialState } from '../../Datatable.store';
import BatchActions from './BatchActions';

const actionFnMock = vi.fn();
const subactionFnMock = vi.fn();
const actions = [
  {
    label: 'Action',
    name: 'action',
    onClick: actionFnMock,
  },
  {
    label: 'Dropdown',
    name: 'dropdown',
    subActions: [
      {
        label: 'Dropdown Item',
        name: 'dropdownItem',
        onClick: subactionFnMock,
      },
    ],
  },
];
const selectedIds = ['a', 'b', 'c'];

describe('Datatable/BatchActions', () => {
  beforeEach(() => {
    DatatableStore.replace(datatableInitialState);
  });
  afterEach(() => {
    vi.resetAllMocks();
  });

  describe('given exclusive selection is disabled', () => {
    beforeEach(() => {
      act(() => {
        DatatableStore.update((s) => {
          s.selectedIds = selectedIds;
          s.hasExclusiveSelection = false;
        });
      });
    });
    it('should call onClick handler on top-level action with correct parameters', () => {
      setup(<BatchActions actions={actions} />);

      fireEvent.click(screen.getByRole('button', { name: /Action/i }));
      expect(actionFnMock).toBeCalledWith(
        selectedIds,
        false,
        expect.any(Function),
      );
    });

    it('should call onClick handler in dropdown action with correct parameters', () => {
      setup(<BatchActions actions={actions} />);

      fireEvent.click(screen.getByRole('button', { name: /Dropdown/i }));
      fireEvent.click(screen.getByRole('button', { name: /Dropdown Item/i }));

      expect(subactionFnMock).toBeCalledWith(
        selectedIds,
        false,
        expect.any(Function),
      );
    });
  });
  describe('given exclusive selection is enabled', () => {
    beforeEach(() => {
      act(() => {
        DatatableStore.update((s) => {
          s.selectedIds = selectedIds;
          s.hasExclusiveSelection = true;
        });
      });
    });
    it('should call onClick handler on top-level action with correct parameters', () => {
      setup(<BatchActions actions={actions} />);
      act(() => {
        DatatableStore.update((s) => {
          s.selectedIds = selectedIds;
        });
      });

      fireEvent.click(screen.getByRole('button', { name: /Action/i }));
      expect(actionFnMock).toBeCalledWith(
        selectedIds,
        true,
        expect.any(Function),
      );
    });

    it('should call onClick handler in dropdown action with correct parameters', async () => {
      setup(<BatchActions actions={actions} />);
      act(() => {
        DatatableStore.update((s) => {
          s.selectedIds = selectedIds;
        });
      });

      fireEvent.click(screen.getByRole('button', { name: /Dropdown/i }));
      fireEvent.click(screen.getByRole('button', { name: /Dropdown Item/i }));

      await waitFor(() => {
        expect(screen.queryByTestId('dropdown-pane')).not.toBeInTheDocument();
      });

      expect(subactionFnMock).toBeCalledWith(
        selectedIds,
        true,
        expect.any(Function),
      );
    });
  });
  describe('given subactions are defined', () => {
    it('should create dropdown button', async () => {
      setup(<BatchActions actions={actions} />);

      fireEvent.click(screen.getByRole('button', { name: /Dropdown/i }));

      await waitFor(() => {
        expect(screen.getByTestId('dropdown-pane')).toBeInTheDocument();
      });
      const dropdownItem = screen.getByRole('button', {
        name: /Dropdown Item/i,
      });
      expect(dropdownItem).toBeInTheDocument();
    });
  });
});
