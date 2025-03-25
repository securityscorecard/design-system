import { screen, waitFor } from '@testing-library/react';
import { useState } from 'react';
import { type PaginationState } from '@tanstack/react-table';

import { setup } from '../../../utils/tests/setup';
import Datatable from '../Datatable';
import { columns, data } from './mocks';
import { fetchData, useQuery } from '../mocks/externalData';

const SSPDatatable = ({ rowAction, rowSelectionMode }) => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const dataQuery = useQuery({
    queryKey: ['data', pagination],
    queryFn: () => fetchData(pagination),
    keepPreviousData: true,
  });

  return (
    <Datatable
      id="test"
      getRowId={(row) => row.id}
      columns={[
        { accessorKey: 'organization.name', header: 'Name' },
        { accessorKey: 'organization.domain', header: 'domain' },
      ]}
      data={dataQuery?.data?.entries ?? []}
      pageCount={dataQuery?.data?.pageCount ?? -1}
      renderRowSelectionActions={({ selectedRows }) => (
        <button
          type="button"
          onClick={() => {
            rowAction(selectedRows);
          }}
        >
          Row action
        </button>
      )}
      rowCount={dataQuery?.data?.rowCount}
      rowSelectionMode={rowSelectionMode}
      state={{ pagination }}
      manualPagination
      onPaginationChange={setPagination}
    />
  );
};

describe('DatatableV2/selection', () => {
  it('should have selection enabled by default', () => {
    setup(<Datatable data={data} columns={columns} id="test" />);

    expect(
      screen.getByRole('checkbox', {
        name: /Toggle select all/i,
      }),
    ).toBeInTheDocument();
  });

  describe('when is selection enabled', () => {
    it('should select row on click', async () => {
      const { user } = setup(
        <Datatable
          data={data}
          columns={columns}
          enableRowSelection
          id="test"
        />,
      );

      await user.click(screen.getAllByLabelText('Toggle select row')[0]);

      expect(screen.getAllByLabelText('Toggle select row')[0]).toBeChecked();
      expect(
        screen.getAllByLabelText('Toggle select row')[1],
      ).not.toBeChecked();
      expect(
        screen.getAllByLabelText('Toggle select row')[2],
      ).not.toBeChecked();
    });

    it('should deselect row on click', async () => {
      const { user } = setup(
        <Datatable
          data={data}
          columns={columns}
          enableRowSelection
          initialState={{ rowSelection: { 0: true } }}
          id="test"
        />,
      );

      await user.click(screen.getAllByLabelText('Toggle select row')[0]);

      expect(
        screen.getAllByLabelText('Toggle select row')[0],
      ).not.toBeChecked();
    });

    describe('batch selection', () => {
      it('should select row in batches when Shift key is pressed', async () => {
        const { user } = setup(
          <Datatable
            data={data}
            columns={columns}
            enableRowSelection
            id="test"
          />,
        );
        const rows = screen.getAllByLabelText('Toggle select row');
        await user.click(rows[0]);
        await user.keyboard('[ShiftLeft>]');
        await user.click(rows[2]);

        expect(rows[1]).toBeChecked();
        expect(screen.getAllByLabelText('Toggle select all')[0]).toBeChecked();
      });
    });

    describe('select all', () => {
      it('should select all rows on click on selection header', async () => {
        const { user } = setup(
          <Datatable
            data={data}
            columns={columns}
            enableRowSelection
            id="test"
          />,
        );

        await user.click(screen.getByLabelText('Toggle select all'));

        expect(screen.getAllByLabelText('Toggle select row')[0]).toBeChecked();
        expect(screen.getAllByLabelText('Toggle select row')[1]).toBeChecked();
        expect(screen.getAllByLabelText('Toggle select row')[2]).toBeChecked();
      });

      it('should deselect all rows on click on selection header', async () => {
        const { user } = setup(
          <Datatable
            data={data}
            columns={columns}
            enableRowSelection
            initialState={{ rowSelection: { 0: true, 1: true, 2: true } }}
            id="test"
          />,
        );

        await user.click(screen.getAllByLabelText('Toggle select all')[0]);

        expect(
          screen.getAllByLabelText('Toggle select row')[0],
        ).not.toBeChecked();
        expect(
          screen.getAllByLabelText('Toggle select row')[1],
        ).not.toBeChecked();
        expect(
          screen.getAllByLabelText('Toggle select row')[2],
        ).not.toBeChecked();
      });

      it('should not select disabled rows on click on selection header', async () => {
        const { user } = setup(
          <Datatable
            data={data}
            columns={columns}
            enableRowSelection={(row) => row.original.color !== 'green'}
            id="test"
          />,
        );
        await user.click(screen.getByLabelText('Toggle select all'));

        expect(
          screen.getAllByLabelText('Toggle select row')[2],
        ).not.toBeChecked();
      });
    });

    describe('selection modes', () => {
      it('should select only rows on current page when "selectionMode=page"', async () => {
        const { user } = setup(
          <Datatable
            data={data}
            columns={columns}
            enableRowSelection
            selectAllMode="page"
            initialState={{ pagination: { pageSize: 2 } }}
            id="test"
          />,
        );

        await user.click(screen.getAllByLabelText('Toggle select all')[0]);
        expect(screen.getAllByLabelText('Toggle select row')[0]).toBeChecked();
        expect(screen.getAllByLabelText('Toggle select row')[1]).toBeChecked();

        await user.click(
          screen.getByRole('button', { name: /Go to the next page of table/i }),
        );

        await waitFor(() => {
          expect(
            screen.getAllByLabelText('Toggle select all')[0],
          ).toBePartiallyChecked();
        });
        expect(
          screen.getAllByLabelText('Toggle select row')[0],
        ).not.toBeChecked();
      });

      it('should select all rows when "selectionMode=all"', async () => {
        const { user } = setup(
          <Datatable
            data={data}
            columns={columns}
            enableRowSelection
            selectAllMode="all"
            initialState={{ pagination: { pageSize: 2 } }}
            id="test"
          />,
        );

        await user.click(screen.getAllByLabelText('Toggle select all')[0]);
        expect(screen.getAllByLabelText('Toggle select row')[0]).toBeChecked();
        expect(screen.getAllByLabelText('Toggle select row')[1]).toBeChecked();

        await user.click(
          screen.getByRole('button', { name: /Go to the next page of table/i }),
        );
        expect(screen.getAllByLabelText('Toggle select all')[0]).toBeChecked();
        expect(screen.getAllByLabelText('Toggle select row')[0]).toBeChecked();
      });

      describe('with server-side pagination', () => {
        describe('when "rowSelectionMode=multi-page"', () => {
          it('should maintain selection toolbar during pagination', async () => {
            const rowAction = vi.fn();
            const { user } = setup(
              <SSPDatatable
                rowSelectionMode="multi-page"
                rowAction={rowAction}
              />,
            );

            await user.click(screen.getAllByLabelText('Toggle select row')[0]);
            expect(
              screen.getAllByLabelText('Toggle select row')[0],
            ).toBeChecked();
            expect(
              screen.getByLabelText('Toggle select all'),
            ).toBePartiallyChecked();

            await user.click(
              screen.getByLabelText('Go to the next page of table'),
            );

            await waitFor(() => {
              expect(
                screen.getAllByLabelText('Toggle select all')[0],
              ).toBePartiallyChecked();
            });
            await waitFor(() => {
              expect(
                screen.getByRole('button', { name: /Clear selection/i }),
              ).toBeInTheDocument();
            });
          });
          it('should return list of selected rows ids', async () => {
            const rowAction = vi.fn();
            const { user } = setup(
              <SSPDatatable
                rowSelectionMode="multi-page"
                rowAction={rowAction}
              />,
            );

            await user.click(screen.getAllByLabelText('Toggle select row')[0]);

            await user.click(
              screen.getByLabelText('Go to the next page of table'),
            );

            await user.click(screen.getAllByLabelText('Toggle select row')[0]);

            await user.click(
              screen.getByRole('button', { name: /Row action/i }),
            );

            await waitFor(() => {
              expect(rowAction).toBeCalledWith([
                '5cf2bc99-2721-407d-8592-ba00fbdf302f',
                '484e5bdb-2bb5-4844-8c6c-4d9e1808ac3a',
              ]);
            });
          });
        });

        describe('when "rowSelectionMode=single-page"', () => {
          it('should reset selection toolbar during pagination', async () => {
            const rowAction = vi.fn();
            const { user } = setup(
              <SSPDatatable
                rowSelectionMode="single-page"
                rowAction={rowAction}
              />,
            );

            await user.click(screen.getAllByLabelText('Toggle select row')[0]);
            expect(
              screen.getAllByLabelText('Toggle select row')[0],
            ).toBeChecked();
            expect(
              screen.getByLabelText('Toggle select all'),
            ).toBePartiallyChecked();

            await user.click(
              screen.getByLabelText('Go to the next page of table'),
            );

            await waitFor(() => {
              expect(
                screen.getAllByLabelText('Toggle select all')[0],
              ).not.toBePartiallyChecked();
            });
            await waitFor(() => {
              expect(
                screen.queryByRole('button', { name: /Clear selection/i }),
              ).not.toBeInTheDocument();
            });
          });
          it('should return list of selected rows data only for current page', async () => {
            const rowAction = vi.fn();
            const { user } = setup(
              <SSPDatatable
                rowSelectionMode="single-page"
                rowAction={rowAction}
              />,
            );

            await user.click(screen.getAllByLabelText('Toggle select row')[0]);

            await user.click(
              screen.getByRole('button', { name: /Row action/i }),
            );

            expect(rowAction).toBeCalledWith([
              expect.objectContaining({
                id: '5cf2bc99-2721-407d-8592-ba00fbdf302f',
                ipAddress: '5.74.134.156',
              }),
            ]);
            rowAction.mockReset();

            await user.click(
              screen.getByLabelText('Go to the next page of table'),
            );

            await user.click(screen.getAllByLabelText('Toggle select row')[0]);

            await user.click(
              screen.getByRole('button', { name: /Row action/i }),
            );
            expect(rowAction).toBeCalledWith([
              expect.objectContaining({
                id: '484e5bdb-2bb5-4844-8c6c-4d9e1808ac3a',
                ipAddress: '86.7.96.148',
              }),
            ]);
          });
        });
      });
    });

    it('should circle through selected rows when multi select is disabled', async () => {
      const { user } = setup(
        <Datatable
          data={data}
          columns={columns}
          enableRowSelection
          enableMultiRowSelection={false}
          id="test"
        />,
      );

      await user.click(screen.getAllByLabelText('Toggle select row')[0]);
      expect(screen.getAllByLabelText('Toggle select row')[0]).toBeChecked();
      await user.click(screen.getAllByLabelText('Toggle select row')[1]);
      expect(
        screen.getAllByLabelText('Toggle select row')[0],
      ).not.toBeChecked();
      expect(screen.getAllByLabelText('Toggle select row')[1]).toBeChecked();
    });
  });
});
