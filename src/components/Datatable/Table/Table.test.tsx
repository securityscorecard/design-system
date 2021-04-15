import React from 'react';
import { act, screen } from '@testing-library/react';
import { Column } from 'react-table';
import userEvent from '@testing-library/user-event';

import { renderWithProviders } from '../../../utils/tests/renderWithProviders';
import { DatatableStore, datatableInitialState } from '../Datatable.store';
import Table from './Table';
import { defaultTableConfig } from '../defaultConfigs';

type Data = {
  id: number;
  col1: string;
  col2: string;
};
const data: Data[] = [
  {
    id: 1,
    col1: 'col11 value',
    col2: 'col21 value',
  },
  {
    id: 2,
    col1: 'col12 value',
    col2: 'col22 value',
  },
  {
    id: 3,
    col1: 'col13 value',
    col2: 'col23 value',
  },
];
const columns: Column<Data>[] = [
  { accessor: 'id', Header: 'ID' },
  { accessor: 'col1', Header: 'Col1' },
  { accessor: 'col2', Header: 'Col2' },
];

describe('Datatable/Table', () => {
  beforeEach(() => {
    DatatableStore.replace(datatableInitialState);
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should select all rows on Toggle All click', () => {
    renderWithProviders(
      <Table<Data>
        data={data}
        columns={columns}
        dataSize={3}
        isDataLoading={false}
        defaultSelectedRows={{}}
        {...defaultTableConfig}
      />,
    );

    userEvent.click(
      screen.getAllByRole('checkbox', {
        name: /Toggle select/i,
      })[0],
    );

    expect(
      screen.queryByRole('checkbox', { checked: false }),
    ).not.toBeInTheDocument();
  });
  it('should deselect all rows on Toggle All click when rows are selected', () => {
    renderWithProviders(
      <Table<Data>
        data={data}
        columns={columns}
        dataSize={3}
        isDataLoading={false}
        defaultSelectedRows={{ 0: true, 1: true, 2: true }}
        {...defaultTableConfig}
      />,
    );

    userEvent.click(
      screen.getAllByRole('checkbox', {
        name: /Toggle select/i,
      })[0],
    );

    expect(
      screen.queryByRole('checkbox', { checked: true }),
    ).not.toBeInTheDocument();
  });
  it('should show intermediate checkbox in header when not all rows are selected', () => {
    renderWithProviders(
      <Table<Data>
        data={data}
        columns={columns}
        dataSize={3}
        isDataLoading={false}
        defaultSelectedRows={{}}
        {...defaultTableConfig}
      />,
    );

    userEvent.click(
      screen.getAllByRole('checkbox', {
        name: /Toggle select/i,
      })[2],
    );

    expect(screen.getAllByRole('checkbox')[0]).toBePartiallyChecked();
  });
  it('should scroll to top of the table when navigation on new page', () => {
    window.scrollTo = jest.fn();
    renderWithProviders(
      <Table<Data>
        data={data}
        columns={columns}
        dataSize={3}
        isDataLoading={false}
        defaultSelectedRows={{}}
        {...defaultTableConfig}
        defaultPageSize={1}
      />,
    );

    userEvent.click(
      screen.getByRole('button', {
        name: /3/i,
      }),
    );

    expect(window.scrollTo).toBeCalled();
  });
  it('should call onClick handler in row action dropdown with correct parameters', () => {
    const rowActionMock = jest.fn();
    const rowIndex = 0;
    renderWithProviders(
      <Table<Data>
        data={data}
        columns={columns}
        dataSize={3}
        isDataLoading={false}
        defaultSelectedRows={{}}
        {...defaultTableConfig}
        rowActions={[
          { label: 'Action', name: 'action', onClick: rowActionMock },
        ]}
      />,
    );

    userEvent.click(
      screen.getAllByRole('button', { name: /Row Actions/i })[rowIndex],
    );
    userEvent.click(screen.getByRole('button', { name: 'Action' }));

    expect(rowActionMock).toBeCalledWith(
      `${rowIndex}`,
      expect.objectContaining(data[rowIndex]),
    );
  });

  describe('DatatableStore actions', () => {
    it('should react on "hasExclusiveSelection" change', () => {
      renderWithProviders(
        <Table<Data>
          data={data}
          columns={columns}
          dataSize={3}
          isDataLoading={false}
          defaultSelectedRows={{}}
          {...defaultTableConfig}
        />,
      );
      const table = screen.getByRole('table');

      expect(table).not.toHaveClass('has-exclusive-selection');

      act(() =>
        DatatableStore.update((s) => {
          s.hasExclusiveSelection = true;
        }),
      );

      expect(table).toHaveClass('has-exclusive-selection');
    });
    it('should react on "hasAppliedFilters" change', () => {
      renderWithProviders(
        <Table<Data>
          data={[]}
          columns={columns}
          dataSize={0}
          isDataLoading={false}
          defaultSelectedRows={{}}
          {...defaultTableConfig}
        />,
      );

      expect(
        screen.getByRole('heading', { name: /No data available/i }),
      ).toBeInTheDocument();

      act(() =>
        DatatableStore.update((s) => {
          s.hasAppliedFilters = true;
        }),
      );

      expect(
        screen.getByRole('heading', {
          name: /No items match your current filters/i,
        }),
      ).toBeInTheDocument();
    });
    it('should store selected row id when row is selected', () => {
      renderWithProviders(
        <Table<Data>
          data={data}
          columns={columns}
          dataSize={3}
          isDataLoading={false}
          defaultSelectedRows={{}}
          {...defaultTableConfig}
        />,
      );

      userEvent.click(
        screen.getAllByRole('checkbox', {
          name: /Toggle select/i,
        })[1],
      );

      expect(DatatableStore.getRawState().selectedIds).toHaveLength(1);
    });
    it('should store selected row ids when all rows are selected', () => {
      renderWithProviders(
        <Table<Data>
          data={data}
          columns={columns}
          dataSize={3}
          isDataLoading={false}
          defaultSelectedRows={{}}
          {...defaultTableConfig}
        />,
      );

      userEvent.click(
        screen.getAllByRole('checkbox', {
          name: /Toggle select/i,
        })[0],
      );

      expect(DatatableStore.getRawState().selectedIds).toHaveLength(3);
    });
    it('should remove selected row id when row is deselected', () => {
      renderWithProviders(
        <Table<Data>
          data={data}
          columns={columns}
          dataSize={3}
          isDataLoading={false}
          defaultSelectedRows={{ 0: true }}
          {...defaultTableConfig}
        />,
      );

      userEvent.click(
        screen.getAllByRole('checkbox', {
          name: /Toggle select/i,
        })[1],
      );

      expect(DatatableStore.getRawState().selectedIds).toHaveLength(0);
    });
    it('should clear selected row ids when all rows are deselected', () => {
      renderWithProviders(
        <Table<Data>
          data={data}
          columns={columns}
          dataSize={3}
          isDataLoading={false}
          defaultSelectedRows={{ 0: true, 1: true, 2: true }}
          {...defaultTableConfig}
        />,
      );

      userEvent.click(
        screen.getAllByRole('checkbox', {
          name: /Toggle select/i,
        })[0],
      );
      expect(DatatableStore.getRawState().selectedIds).toHaveLength(0);
    });
    it('should react on "shouldResetSelectedRows" change', () => {
      renderWithProviders(
        <Table<Data>
          data={data}
          columns={columns}
          dataSize={3}
          isDataLoading={false}
          defaultSelectedRows={{ 0: true, 1: true, 2: true }}
          {...defaultTableConfig}
        />,
      );

      act(() => {
        DatatableStore.update((s) => {
          s.shouldResetSelectedRows = true;
        });
      });

      expect(
        screen.queryByRole('checkbox', { checked: true }),
      ).not.toBeInTheDocument();
      expect(DatatableStore.getRawState().selectedIds).toHaveLength(0);
    });
    it('should store pagination state when navigating to new page', () => {
      window.scrollTo = jest.fn();
      renderWithProviders(
        <Table<Data>
          data={data}
          columns={columns}
          dataSize={3}
          isDataLoading={false}
          defaultSelectedRows={{}}
          {...defaultTableConfig}
          defaultPageSize={1}
        />,
      );

      userEvent.click(
        screen.getByRole('button', {
          name: /3/i,
        }),
      );

      expect(DatatableStore.getRawState().pageIndex).toBe(2);
      expect(DatatableStore.getRawState().pageSize).toBe(1);
    });
    it('should store sorting when change it in the header', () => {
      renderWithProviders(
        <Table<Data>
          data={data}
          columns={columns}
          dataSize={3}
          isDataLoading={false}
          defaultSelectedRows={{}}
          {...defaultTableConfig}
        />,
      );

      userEvent.click(
        screen.getByRole('columnheader', {
          name: /Sort Col2/i,
        }),
      );

      expect(DatatableStore.getRawState().sortBy).toMatchObject([
        { desc: false, id: 'col2' },
      ]);
    });
  });
});
