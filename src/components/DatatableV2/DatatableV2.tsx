/* eslint-disable react/destructuring-assignment, no-param-reassign */
import type { IPAsset } from './data/ipAssets';
import type {
  ColumnDef,
  ColumnOrderState,
  ColumnPinningState,
  GroupingState,
  SortingState,
  VisibilityState,
} from '@tanstack/react-table';

import { Fragment, useState } from 'react';
import {
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getGroupedRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { T as stubTrue } from 'ramda';

import { defaultColumns as columnsDef } from './columns';
import { ColumnVisibility } from './ColumnVisibility';
import { Inline } from '../layout';
import { useSkipper } from './useSkipper';
import { EditableCell } from './EditableCell';
import { TableStyles, stickyStyle } from './styles';
import _ipAssets from './data/ipAssets.json';

const ipAssets = _ipAssets as unknown as IPAsset[];

const defaultColumn: Partial<ColumnDef<IPAsset>> = {
  cell: EditableCell,
};

const DatatableV2 = (props) => {
  const [data, setData] = useState(() => [...ipAssets]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>([]);
  const [columnPinning, setColumnPinning] = useState<ColumnPinningState>({
    left: ['expand', 'select'],
  });
  const [grouping, setGrouping] = useState<GroupingState>([]);
  const [autoResetPageIndex, skipAutoResetPageIndex] = useSkipper();

  const table = useReactTable({
    data,
    columns: columnsDef,
    defaultColumn,
    state: {
      sorting,
      columnVisibility,
      columnOrder,
      columnPinning,
      grouping,
    },
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnOrderChange: setColumnOrder,
    onColumnPinningChange: setColumnPinning,
    onGroupingChange: setGrouping,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getGroupedRowModel: getGroupedRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getRowCanExpand: stubTrue,
    autoResetPageIndex,
    columnResizeMode: 'onChange',
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
    meta: {
      updateData: (rowIndex, columnId, value) => {
        // Skip page index reset until after next rerender
        skipAutoResetPageIndex();
        setData((old) =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex],
                [columnId]: value,
              };
            }
            return row;
          }),
        );
      },
    },
    ...props,
  });

  if (props.tableInstanceRef) {
    props.tableInstanceRef.current = table;
  }

  return (
    <>
      <ColumnVisibility table={table} />
      <TableStyles>
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    {...{
                      key: header.id,
                      colSpan: header.colSpan,
                      style: {
                        width: `${header.getSize()}px`,
                        minWidth: `${header.getSize()}px`,
                        ...stickyStyle(table, header.column),
                      },
                    }}
                  >
                    <Inline
                      gap="xs"
                      justify="center"
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      {!header.isPlaceholder && header.column.getCanPin() && (
                        <>
                          {header.column.getIsPinned() !== 'left' ? (
                            <button
                              type="button"
                              onClick={() => {
                                header.column.pin('left');
                              }}
                            >
                              {'<-'}
                            </button>
                          ) : null}
                          {header.column.getIsPinned() ? (
                            <button
                              type="button"
                              onClick={() => {
                                header.column.pin(false);
                              }}
                            >
                              X
                            </button>
                          ) : null}
                          {header.column.getIsPinned() !== 'right' ? (
                            <button
                              type="button"
                              onClick={() => {
                                header.column.pin('right');
                              }}
                            >
                              {'->'}
                            </button>
                          ) : null}
                        </>
                      )}
                      {header.column.getCanGroup() ? (
                        // If the header can be grouped, let's add a toggle
                        <button
                          {...{
                            type: 'button',
                            onClick: header.column.getToggleGroupingHandler(),
                            style: {
                              cursor: 'pointer',
                            },
                          }}
                        >
                          {header.column.getIsGrouped()
                            ? `🛑(${header.column.getGroupedIndex()}) `
                            : `👊 `}
                        </button>
                      ) : null}
                    </Inline>
                    {header.isPlaceholder ? null : (
                      <div
                        role="button"
                        style={
                          header.column.getCanSort()
                            ? { cursor: 'pointer', userSelect: 'none' }
                            : {}
                        }
                        tabIndex={0}
                        onClick={header.column.getToggleSortingHandler()}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter')
                            header.column.getToggleSortingHandler()(e);
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {{
                          asc: ' 🔼',
                          desc: ' 🔽',
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                    {header.column.getCanResize() && (
                      <div
                        {...{
                          onMouseDown: header.getResizeHandler(),
                          onTouchStart: header.getResizeHandler(),
                          className: `resizer ${
                            header.column.getIsResizing() ? 'isResizing' : ''
                          }`,
                        }}
                      />
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row, i) => {
              const rowIndex = i % 2 === 0 ? 'odd' : 'even';
              const leftLeafCells = row.getLeftVisibleCells();
              const rightLeafCells = row.getRightVisibleCells();

              return (
                <Fragment key={row.id}>
                  <tr data-index={rowIndex}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td
                          {...{
                            'data-test': true,
                            key: cell.id,
                            style: {
                              backgroundColor: cell.getIsGrouped()
                                ? '#0aff0082'
                                : cell.getIsAggregated()
                                ? '#ffa50078'
                                : cell.getIsPlaceholder()
                                ? '#ff000042'
                                : undefined,
                              ...stickyStyle(table, cell.column, rowIndex),
                            },
                          }}
                        >
                          {cell.getIsGrouped() ? (
                            // If it's a grouped cell, add an expander and row count
                            <button
                              {...{
                                type: 'button',
                                onClick: row.getToggleExpandedHandler(),
                                style: {
                                  cursor: row.getCanExpand()
                                    ? 'pointer'
                                    : 'normal',
                                },
                              }}
                            >
                              {row.getIsExpanded() ? '👇' : '👉'}{' '}
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext(),
                              )}{' '}
                              ({row.subRows.length})
                            </button>
                          ) : cell.getIsAggregated() ? (
                            // If the cell is aggregated, use the Aggregated
                            // renderer for cell
                            flexRender(
                              cell.column.columnDef.aggregatedCell ??
                                cell.column.columnDef.cell,
                              cell.getContext(),
                            )
                          ) : cell.getIsPlaceholder() ? null : ( // For cells with repeated values, render null
                            // Otherwise, just render the regular cell
                            flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext(),
                            )
                          )}
                        </td>
                      );
                    })}
                  </tr>
                  {row.getIsExpanded() && !row.getIsGrouped() && (
                    <tr data-index={i % 2 === 0 ? 'odd' : 'even'}>
                      {leftLeafCells.map((cell) => (
                        <td
                          {...{
                            key: cell.id,
                            style: {
                              ...stickyStyle(table, cell.column, rowIndex),
                            },
                          }}
                        />
                      ))}
                      <td
                        colSpan={
                          row.getVisibleCells().length -
                          leftLeafCells.length -
                          rightLeafCells.length
                        }
                      >
                        <pre style={{ fontSize: '10px' }}>
                          <code>{JSON.stringify(row.original, null, 2)}</code>
                        </pre>
                      </td>
                      {rightLeafCells.map((cell) => (
                        <td
                          {...{
                            key: cell.id,
                            style: {
                              ...stickyStyle(table, cell.column, rowIndex),
                            },
                          }}
                        />
                      ))}
                    </tr>
                  )}
                </Fragment>
              );
            })}
          </tbody>
          <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    {...{
                      style: {
                        width: header.getSize(),
                        ...stickyStyle(table, header.column),
                      },
                    }}
                  >
                    <span style={{ fontStyle: 'italic', color: 'gray' }}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.footer,
                            header.getContext(),
                          )}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
      </TableStyles>
      <Inline align="center" gap="sm" justify="space-between">
        <Inline gap="sm">
          <button
            className="border rounded p-1"
            disabled={!table.getCanPreviousPage()}
            type="button"
            onClick={() => table.setPageIndex(0)}
          >
            {'<<'}
          </button>
          <button
            className="border rounded p-1"
            disabled={!table.getCanPreviousPage()}
            type="button"
            onClick={() => table.previousPage()}
          >
            {'<'}
          </button>
          <button
            className="border rounded p-1"
            disabled={!table.getCanNextPage()}
            type="button"
            onClick={() => table.nextPage()}
          >
            {'>'}
          </button>
          <button
            className="border rounded p-1"
            disabled={!table.getCanNextPage()}
            type="button"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          >
            {'>>'}
          </button>
        </Inline>
        <Inline align="center" gap="sm">
          <span className="flex items-center gap-1">
            <div>
              Page&nbsp;
              <strong>
                {table.getState().pagination.pageIndex + 1} of{' '}
                {table.getPageCount()}
              </strong>
            </div>
          </span>
          <span className="flex items-center gap-1">
            | Go to page:{' '}
            <input
              className="border p-1 rounded w-16"
              defaultValue={table.getState().pagination.pageIndex + 1}
              type="number"
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
            />
          </span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </Inline>
      </Inline>
    </>
  );
};

export default DatatableV2;
