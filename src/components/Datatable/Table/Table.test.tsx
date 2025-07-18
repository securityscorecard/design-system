import { act, screen, waitFor } from '@testing-library/react';
import { Column } from 'react-table';
import { vi } from 'vitest';

import { setup } from '../../../utils/tests/setup';
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
    vi.resetAllMocks();
  });

  it('should select all rows on Toggle All click', async () => {
    const { user } = setup(
      <Table<Data>
        data={data}
        columns={columns}
        dataSize={3}
        defaultSelectedRows={{}}
        {...defaultTableConfig}
      />,
    );

    await user.click(
      screen.getAllByRole('checkbox', {
        name: /Toggle select/i,
      })[0],
    );

    expect(
      screen.queryByRole('checkbox', { checked: false }),
    ).not.toBeInTheDocument();
  });
  it('should deselect all rows on Toggle All click when rows are selected', async () => {
    const { user } = setup(
      <Table<Data>
        data={data}
        columns={columns}
        dataSize={3}
        defaultSelectedRows={{ 0: true, 1: true, 2: true }}
        {...defaultTableConfig}
      />,
    );

    await user.click(
      screen.getAllByRole('checkbox', {
        name: /Toggle select/i,
      })[0],
    );

    expect(
      screen.queryByRole('checkbox', { checked: true }),
    ).not.toBeInTheDocument();
  });
  it('should show intermediate checkbox in header when not all rows are selected', async () => {
    const { user } = setup(
      <Table<Data>
        data={data}
        columns={columns}
        dataSize={3}
        defaultSelectedRows={{}}
        {...defaultTableConfig}
      />,
    );

    await user.click(
      screen.getAllByRole('checkbox', {
        name: /Toggle select/i,
      })[2],
    );

    expect(screen.getAllByRole('checkbox')[0]).toBePartiallyChecked();
  });
  describe('given isMultiSelect prop is disabled', () => {
    it('should select only one row at time', async () => {
      const { user } = setup(
        <Table<Data>
          data={data}
          columns={columns}
          dataSize={3}
          defaultSelectedRows={{}}
          {...defaultTableConfig}
          isMultiSelect={false}
        />,
      );

      await user.click(
        screen.getAllByRole('checkbox', {
          name: /Toggle select/i,
        })[0],
      );
      await user.click(
        screen.getAllByRole('checkbox', {
          name: /Toggle select/i,
        })[1],
      );

      expect(screen.queryAllByRole('checkbox', { checked: true }).length).toBe(
        1,
      );
    });
  });
  it('should call onClick handler in row action dropdown with correct parameters', async () => {
    const rowActionMock = vi.fn();
    const rowIndex = 0;
    const { user } = setup(
      <Table<Data>
        data={data}
        columns={columns}
        dataSize={3}
        defaultSelectedRows={{}}
        {...defaultTableConfig}
        rowActions={[
          { label: 'Action', name: 'action', onClick: rowActionMock },
        ]}
      />,
    );
    await user.click(
      screen.getAllByRole('button', { name: /Row Actions/i })[rowIndex],
    );

    const rowActions = await screen.findAllByRole('button', { name: 'Action' });
    await user.click(rowActions[rowIndex]);

    expect(rowActionMock).toBeCalledWith(
      `${rowIndex}`,
      expect.objectContaining(data[rowIndex]),
    );
  });

  describe('DatatableStore actions', () => {
    it('should react on "hasExclusiveSelection" change', () => {
      setup(
        <Table<Data>
          data={data}
          columns={columns}
          dataSize={3}
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
      setup(
        <Table<Data>
          data={[]}
          columns={columns}
          dataSize={0}
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
    it('should store selected row id when row is selected', async () => {
      const { user } = setup(
        <Table<Data>
          data={data}
          columns={columns}
          dataSize={3}
          defaultSelectedRows={{}}
          {...defaultTableConfig}
        />,
      );

      await user.click(
        screen.getAllByRole('checkbox', {
          name: /Toggle select/i,
        })[1],
      );

      expect(DatatableStore.getRawState().selectedIds).toHaveLength(1);
    });
    it('should store selected row ids when all rows are selected', async () => {
      const { user } = setup(
        <Table<Data>
          data={data}
          columns={columns}
          dataSize={3}
          defaultSelectedRows={{}}
          {...defaultTableConfig}
        />,
      );

      await user.click(
        screen.getAllByRole('checkbox', {
          name: /Toggle select/i,
        })[0],
      );

      expect(DatatableStore.getRawState().selectedIds).toHaveLength(3);
    });
    it('should remove selected row id when row is deselected', async () => {
      const { user } = setup(
        <Table<Data>
          data={data}
          columns={columns}
          dataSize={3}
          defaultSelectedRows={{ 0: true }}
          {...defaultTableConfig}
        />,
      );

      await user.click(
        screen.getAllByRole('checkbox', {
          name: /Toggle select/i,
        })[1],
      );

      expect(DatatableStore.getRawState().selectedIds).toHaveLength(0);
    });
    it('should clear selected row ids when all rows are deselected', async () => {
      const { user } = setup(
        <Table<Data>
          data={data}
          columns={columns}
          dataSize={3}
          defaultSelectedRows={{ 0: true, 1: true, 2: true }}
          {...defaultTableConfig}
        />,
      );

      await user.click(
        screen.getAllByRole('checkbox', {
          name: /Toggle select/i,
        })[0],
      );
      expect(DatatableStore.getRawState().selectedIds).toHaveLength(0);
    });
    describe('given isMultiSelect prop is disabled', () => {
      it('should store only one selected row ids when row is selected', async () => {
        const { user } = setup(
          <Table<Data>
            data={data}
            columns={columns}
            dataSize={3}
            defaultSelectedRows={{}}
            {...defaultTableConfig}
            isMultiSelect={false}
          />,
        );

        await user.click(
          screen.getAllByRole('checkbox', {
            name: /Toggle select/i,
          })[0],
        );
        await user.click(
          screen.getAllByRole('checkbox', {
            name: /Toggle select/i,
          })[1],
        );

        expect(DatatableStore.getRawState().selectedIds).toHaveLength(1);
      });
    });
    it('should react on "shouldResetSelectedRows" change', () => {
      setup(
        <Table<Data>
          data={data}
          columns={columns}
          dataSize={3}
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
    it('should store pagination state when navigating to new page', async () => {
      const { user } = setup(
        <Table<Data>
          data={data}
          columns={columns}
          dataSize={3}
          defaultSelectedRows={{}}
          {...defaultTableConfig}
          defaultPageSize={1}
        />,
      );

      await user.click(
        screen.getByRole('button', {
          name: /^Go to page 3\./,
        }),
      );

      expect(DatatableStore.getRawState().pageIndex).toBe(2);
      expect(DatatableStore.getRawState().pageSize).toBe(1);
    });
    it('should store sorting when change it in the header', async () => {
      const { user } = setup(
        <Table<Data>
          data={data}
          columns={columns}
          dataSize={3}
          defaultSelectedRows={{}}
          {...defaultTableConfig}
        />,
      );

      await user.click(
        screen.getByRole('columnheader', {
          name: /Col2/i,
        }),
      );

      await waitFor(() =>
        expect(DatatableStore.getRawState().sortBy).toMatchObject([
          { desc: false, id: 'col2' },
        ]),
      );
    });
  });
  describe('given isDataLoading', () => {
    it('should display empty loading page when no data is present', () => {
      setup(
        <Table<Data>
          data={[]}
          columns={columns}
          dataSize={0}
          defaultSelectedRows={{}}
          {...defaultTableConfig}
          isDataLoading
        />,
      );

      expect(
        screen.getByRole('heading', {
          name: /Loading/i,
        }),
      ).toBeInTheDocument();
    });
    it('should display loading overlay with Cancel button when data is present and canceling is enabled', () => {
      setup(
        <Table<Data>
          data={data}
          columns={columns}
          dataSize={data.length}
          defaultSelectedRows={{}}
          {...defaultTableConfig}
          isDataLoading
          isCancelDisabled={false}
          onCancelLoading={vi.fn}
        />,
      );

      expect(
        screen.getByRole('button', {
          name: /Cancel/i,
        }),
      ).toBeInTheDocument();
    });
    it('should display loading overlay without Cancel button when data is present and canceling is disabled', () => {
      setup(
        <Table<Data>
          data={data}
          columns={columns}
          dataSize={data.length}
          defaultSelectedRows={{}}
          {...defaultTableConfig}
          isDataLoading
          isCancelDisabled
          onCancelLoading={vi.fn}
        />,
      );

      expect(
        screen.queryByRole('button', {
          name: /Cancel/i,
        }),
      ).not.toBeInTheDocument();
    });
  });
});
