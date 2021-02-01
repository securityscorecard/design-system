import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  useFlexLayout,
  usePagination,
  useRowSelect,
  useTable,
} from 'react-table';
import { useSticky } from 'react-table-sticky';

import { useDatatable } from '../hooks/useDatatable';
import { TableCell } from './TableCell';
import { TableHeadCell } from './TableHeadCell';
import { TableRow } from './TableRow';
import { Data } from './temp/config';
import { TableProps } from './Table.types';
import { actionsColumn, selectionColumn } from './temp/columns';
import { ActionKindsPropType } from '../types/Action.types';

const StyledTable = styled.table<{ isSticky: boolean }>`
  width: 100%;
  border: 1px solid #ddd;

  /* reset table defaults */
  display: block;
  border-spacing: 0;
  box-sizing: border-box;

  ${({ isSticky }) =>
    isSticky &&
    css`
      overflow: scroll;
    `};
`;

const StyledTableHeader = styled.thead`
  display: block;
`;

const StyledTableBody = styled.thead<{ isTableSticky: boolean }>`
  display: block;

  ${({ isTableSticky }) =>
    isTableSticky &&
    css`
      position: relative;
      z-index: 0;
    `};
`;

const Table: React.FC<TableProps<Data>> = ({
  columns,
  data,
  fetchData,
  isLoading,
  primaryKey,
  rowActions,
  pageCount: controlledPageCount,
}) => {
  const { setSelectedIds } = useDatatable();
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    // Get the state from the instance
    state: { pageIndex, pageSize, selectedRowIds },
  } = useTable<Data>(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }, // We want to start at page 1
      manualPagination: true, // We will handle pagination by ourselves
      pageCount: controlledPageCount, // Since we handling pagination we need to pass page count
      autoResetSelectedRows: false, // Do not reset selection when moving to different page
      getRowId: (row) => row[primaryKey], // Set row id for selection
    },
    usePagination,
    useRowSelect,
    useFlexLayout,
    useSticky,
    (hooks) => {
      hooks.visibleColumns.push((visibleColumns) => [
        // Add selection column to the beginning of the table
        // TODO: Add condition to optionalize selection (opt-out)
        selectionColumn,
        ...visibleColumns,
        // Add actions column to the end of the table
        // TODO: Add condition to optionalize actions (based on passed actions array)
        actionsColumn(primaryKey, rowActions),
      ]);
    },
  );

  // Listen for changes in selection and propage to parent component
  React.useEffect(() => {
    setSelectedIds(Object.keys(selectedRowIds));
  }, [setSelectedIds, selectedRowIds]);

  // Listen for changes in pagination and use the state to fetch our new data
  React.useEffect(() => {
    fetchData({ pageIndex, pageSize });
  }, [fetchData, pageIndex, pageSize]);

  const isTableSticky = true; // TODO: dynamicaly handle if we need stickyness

  // Render the UI for your table
  return (
    <>
      <StyledTable
        isSticky={isTableSticky}
        {...getTableProps({ style: { minWidth: '100%' } })}
      >
        <StyledTableHeader>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableHeadCell {...column.getHeaderProps()}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </TableHeadCell>
              ))}
            </TableRow>
          ))}
        </StyledTableHeader>
        <StyledTableBody isTableSticky={isTableSticky} {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <TableCell {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
          <tr>
            {isLoading ? (
              // TODO: replace this with nicer loading state
              <td colSpan={10000}>Loading...</td>
            ) : (
              <td colSpan={10000}>
                Showing {page.length} of ~{controlledPageCount * pageSize}{' '}
                results
              </td>
            )}
          </tr>
        </StyledTableBody>
      </StyledTable>
      <div className="pagination">
        <button
          disabled={!canPreviousPage}
          type="button"
          onClick={() => gotoPage(0)}
        >
          {'<<'}
        </button>{' '}
        <button
          disabled={!canPreviousPage}
          type="button"
          onClick={() => previousPage()}
        >
          {'<'}
        </button>{' '}
        <button
          disabled={!canNextPage}
          type="button"
          onClick={() => nextPage()}
        >
          {'>'}
        </button>{' '}
        <button
          disabled={!canNextPage}
          type="button"
          onClick={() => gotoPage(pageCount - 1)}
        >
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            defaultValue={pageIndex + 1}
            style={{ width: '100px' }}
            type="number"
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((size) => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

// TODO: revisit required properties
Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.any),
  data: PropTypes.arrayOf(PropTypes.any),
  fetchData: PropTypes.func,
  isLoading: PropTypes.bool,
  primaryKey: PropTypes.string,
  pageCount: PropTypes.number,
  rowActions: PropTypes.arrayOf(ActionKindsPropType), // TODO: align this to TS types
};

export default Table;
