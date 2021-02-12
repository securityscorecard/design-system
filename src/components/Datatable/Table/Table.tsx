import React, { useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  CellProps,
  HeaderProps,
  useFlexLayout,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable,
} from 'react-table';
import { useSticky } from 'react-table-sticky';
import { __, always, includes, map, prop, without } from 'ramda';
import {
  isEmptyArray,
  isNonEmptyArray,
  isNotUndefined,
  isOdd,
  isString,
} from 'ramda-adjunct';

import { getColor } from '../../../utils/helpers';
import { IconButton } from '../../IconButton';
import { FlexContainer } from '../../FlexContainer';
import { useDatatable } from '../hooks/useDatatable';
import { ActionKindsPropType } from '../types/Action.types';
import { RendererText } from './TableCell/renderers';
import { Dropdown } from '../Dropdown';
import { TableCell } from './TableCell';
import { TableHeadCell } from './TableHeadCell';
import { TableRow } from './TableRow';
import { TableProps } from './Table.types';
import { SelectionCheckbox } from './SelectionCheckbox';

const StyledTable = styled.table<{ isSticky: boolean }>`
  width: 100%;
  border-top: 1px solid ${getColor('graphiteH')};

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

const StyledTableHeader = styled.thead<{
  isSticky: boolean;
  hasRowActions: boolean;
}>`
  display: block;
  background-color: ${getColor('graphite3H')};

  /* TODO: add shadow when table isSticky and doesn't have actions column */
  ${({ isSticky, hasRowActions }) =>
    isSticky && hasRowActions
      ? css`
          & th:nth-last-child(2) {
            border-right: 0;
          }
          & th[data-sticky-first-right-td] {
            box-shadow: -10px 0 10px 0 rgba(0, 0, 0, 0.05);
            border-left: 1px solid ${getColor('graphiteH')};
          }
        `
      : isSticky && !hasRowActions
      ? css`
          & th[data-sticky-first-right-td] {
            box-shadow: -10px 0 10px 0 rgba(0, 0, 0, 0.05);
            border-left: 1px solid ${getColor('graphiteH')};
          }
        `
      : null}
`;

const StyledTableBody = styled.tbody<{ isSticky: boolean }>`
  display: block;

  ${({ isSticky }) =>
    isSticky &&
    css`
      position: relative;
      z-index: 0;
    `};
`;

const SELECTION_COLUMN_ID = 'selection';
const ACTIONS_COLUMN_ID = 'actions';

const isAnyStickyColumn = includes(__, [
  SELECTION_COLUMN_ID,
  ACTIONS_COLUMN_ID,
]);

const Table = <D extends Record<string, unknown>>({
  columns,
  data,
  fetchData,
  isLoading,
  primaryKey,
  rowActions,
  pageCount: controlledPageCount,
  config,
}: TableProps<D>): React.ReactElement => {
  const { onSelect, defaultPageSize, defaultSortBy, hasSelection } = config;
  const hasRowActions = isNonEmptyArray(rowActions);
  const {
    setSelectedIds,
    defaultHiddenColumns,
    defaultColumnOrder,
  } = useDatatable();
  const [isSticky, setIsSticky] = useState(true);
  const defaultColumn = useMemo(
    () => ({
      minWidth: 40,
      width: 150,
      maxWidth: 400,
      Cell: RendererText,
      nullCondition: always(false),
    }),
    [],
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    totalColumnsWidth,
    // Get the state from the instance
    state: { pageIndex, pageSize, selectedRowIds, sortBy },
  } = useTable<D>(
    {
      columns,
      data,
      defaultColumn, // default column settings
      initialState: {
        pageIndex: 0, // We want to start at page 1
        pageSize: defaultPageSize,
        sortBy: defaultSortBy,
        columnOrder: defaultColumnOrder,
        ...(isNonEmptyArray(defaultHiddenColumns) && {
          hiddenColumns: defaultHiddenColumns,
        }),
      },
      manualPagination: true, // We will handle pagination by ourselves
      manualSortBy: true, // sorting is handled backend
      pageCount: controlledPageCount, // Since we handling pagination we need to pass page count
      autoResetSelectedRows: false, // Do not reset selection when moving to different page
      ...(isNotUndefined(primaryKey) && {
        getRowId: isString(primaryKey) ? prop(primaryKey) : primaryKey, // Set row id for selection
      }),
    },
    useSortBy,
    usePagination,
    useRowSelect,
    useFlexLayout,
    useSticky,
    (hooks) => {
      hooks.visibleColumns.push((visibleColumns) =>
        without(
          [false],
          [
            // Add selection column to the beginning of the table
            hasSelection && {
              id: SELECTION_COLUMN_ID,
              sticky: 'left',
              width: 48,
              disableSortBy: true,
              Header: ({
                getToggleAllRowsSelectedProps,
                data: tableData,
              }: HeaderProps<D>): JSX.Element => {
                if (isEmptyArray(tableData)) {
                  return null;
                }
                return (
                  <FlexContainer flexGrow={1} justifyContent="center">
                    <SelectionCheckbox
                      id="header-select-all"
                      {...getToggleAllRowsSelectedProps()}
                    />
                  </FlexContainer>
                );
              },
              Cell: ({ row }: CellProps<D>): JSX.Element => (
                <FlexContainer flexGrow={1} justifyContent="center">
                  <SelectionCheckbox
                    id={`select-${row.id}`}
                    {...row.getToggleRowSelectedProps()}
                  />
                </FlexContainer>
              ),
            },
            ...visibleColumns,
            // Add actions column to the end of the table
            hasRowActions && {
              id: ACTIONS_COLUMN_ID,
              sticky: 'right',
              width: 48,
              disableSortBy: true,
              Cell: ({ row }: CellProps<D>): JSX.Element => {
                const actions = map((action) => ({
                  ...action,
                  onClick: () => action.onClick(row.id),
                }))(rowActions);

                return (
                  <Dropdown actions={actions}>
                    <IconButton iconName="wrench" label="Actions" />
                  </Dropdown>
                );
              },
            },
          ],
        ),
      );
    },
  );

  const tableRef = useRef(null);
  useEffect(() => {
    if (
      tableRef.current !== null &&
      tableRef.current.offsetWidth >= totalColumnsWidth
    ) {
      setIsSticky(false);
    }
  }, [totalColumnsWidth]);

  // Listen for changes in selection and propage to parent component
  useEffect(() => {
    const selectedIds = Object.keys(selectedRowIds);
    onSelect(selectedIds);
    setSelectedIds(selectedIds);
  }, [onSelect, setSelectedIds, selectedRowIds]);

  // Listen for changes in pagination and use the state to fetch our new data
  useEffect(() => {
    fetchData({
      pageIndex,
      pageSize,
      sortBy,
      filters: [], // TODO: get filters state from context
      query: '', // TODO: get search query from context
    });
  }, [fetchData, pageIndex, pageSize, sortBy]);

  // Render the UI for your table
  return (
    <>
      <StyledTable
        ref={tableRef}
        isSticky={isSticky}
        {...getTableProps({ style: { minWidth: '100%' } })}
      >
        <StyledTableHeader hasRowActions={hasRowActions} isSticky={isSticky}>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableHeadCell<D>
                  column={column}
                  {...column.getHeaderProps({
                    ...column.getSortByToggleProps(),
                    ...(isAnyStickyColumn(column.id) && {
                      style: { flex: '0 0 auto' },
                    }),
                  })}
                />
              ))}
            </TableRow>
          ))}
        </StyledTableHeader>
        <StyledTableBody isSticky={isSticky} {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <TableCell
                      cell={cell}
                      isOdd={isOdd(index)}
                      {...cell.getCellProps({
                        ...(isAnyStickyColumn(cell.column.id) && {
                          style: { flex: '0 0 auto' },
                        }),
                      })}
                    />
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
                Showing {rows.length} of ~{controlledPageCount * pageSize}{' '}
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
        </span>
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
