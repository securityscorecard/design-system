import { act, fireEvent, screen } from '@testing-library/react';
import React from 'react';

import { renderWithProviders } from '../../../../utils/tests/renderWithProviders';
import { DatatableStore, datatableInitialState } from '../../Datatable.store';
import BatchActions from './BatchActions';

const actionFnMock = jest.fn();
const subactionFnMock = jest.fn();
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
    jest.resetAllMocks();
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
      renderWithProviders(<BatchActions actions={actions} />);

      fireEvent.click(screen.getByRole('button', { name: /Action/i }));
      expect(actionFnMock).toBeCalledWith(
        selectedIds,
        false,
        expect.any(Function),
      );
    });

    it('should call onClick handler in dropdown action with correct parameters', () => {
      renderWithProviders(<BatchActions actions={actions} />);

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
      renderWithProviders(<BatchActions actions={actions} />);
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

    it('should call onClick handler in dropdown action with correct parameters', () => {
      renderWithProviders(<BatchActions actions={actions} />);
      act(() => {
        DatatableStore.update((s) => {
          s.selectedIds = selectedIds;
        });
      });

      fireEvent.click(screen.getByRole('button', { name: /Dropdown/i }));
      fireEvent.click(screen.getByRole('button', { name: /Dropdown Item/i }));

      expect(subactionFnMock).toBeCalledWith(
        selectedIds,
        true,
        expect.any(Function),
      );
    });
  });
  describe('given subactions are defined', () => {
    it('should create dropdown button', () => {
      renderWithProviders(<BatchActions actions={actions} />);

      fireEvent.click(screen.getByRole('button', { name: /Dropdown/i }));

      const dropdownItem = screen.getByRole('button', {
        name: /Dropdown Item/i,
      });
      expect(dropdownItem).toBeInTheDocument();
    });
  });
});
