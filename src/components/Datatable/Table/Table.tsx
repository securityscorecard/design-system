import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
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
import { useDeepCompareEffect } from 'use-deep-compare';

import { getColor, pxToRem } from '../../../utils/helpers';
import { IconButton } from '../../IconButton';
import { FlexContainer } from '../../FlexContainer';
import { ActionKindsPropType } from '../types/Action.types';
import { RendererText } from './TableCell/renderers';
import { Dropdown } from '../Dropdown';
import { TableCell } from './TableCell';
import { TableHeadCell } from './TableHeadCell';
import { TableRow } from './TableRow';
import { TableProps } from './Table.types';
import { SelectionCheckbox } from './SelectionCheckbox';
import { NoData, NoMatchingData } from './NoData';
import { Pagination } from '../Pagination';

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

const NoDataContainer = styled(FlexContainer).attrs(() => ({
  flexDirection: 'column',
}))`
  background: ${getColor('graphite5H')};
  padding: ${pxToRem(64)};
`;

const SELECTION_COLUMN_ID = 'selection';
const ACTIONS_COLUMN_ID = 'actions';

const isAnyStickyColumn = includes(__, [
  SELECTION_COLUMN_ID,
  ACTIONS_COLUMN_ID,
]);

const renderNoDataContent = (NoDataComponent) => {
  if (isNotUndefined(NoDataComponent)) return <NoDataComponent />;

  return <NoData />;
};
const renderNoMatchingDataContent = (NoMatchingDataComponent) => {
  if (isNotUndefined(NoMatchingDataComponent))
    return <NoMatchingDataComponent />;

  return <NoMatchingData />;
};

const Table = <D extends Record<string, unknown>>({
  columns,
  data,
  fetchData,
  isLoading,
  primaryKey,
  rowActions,
  pageCount: controlledPageCount,
  config,
  hasAppliedFilters,
  defaultHiddenColumns,
  defaultColumnOrder,
  hasExclusionLogic,
  totalLength,
  shouldResetSelectedRows,
  setShouldResetSelectedRows,
}: TableProps<D>): React.ReactElement => {
  const {
    onSelect,
    defaultPageSize,
    defaultSortBy,
    hasSelection,
    hasServerSidePagination,
    hasServerSideSorting,
    NoDataComponent,
    NoMatchingDataComponent,
  } = config;
  const hasRowActions = isNonEmptyArray(rowActions);
  const [isSticky, setIsSticky] = useState(true);
  const defaultColumn = useMemo(
    () => ({
      minWidth: 40,
      width: 150,
      maxWidth: 400,
      Cell: RendererText,
      nullCondition: always(false),
      hasExclusionLogic,
      totalLength,
    }),
    [hasExclusionLogic, totalLength],
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    totalColumnsWidth,
    toggleAllRowsSelected,
    // Get the state from the instance
    state: { pageIndex, pageSize, sortBy, selectedRowIds },
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
      manualPagination: hasServerSidePagination, // We will handle pagination by ourselves
      manualSortBy: hasServerSideSorting, // sorting is handled backend
      autoResetSortBy: hasServerSideSorting,
      pageCount: controlledPageCount, // Since we handling pagination we need to pass page count
      autoResetSelectedRows: false, // Do not reset selection when moving to different page
      ...(isNotUndefined(primaryKey) && {
        getRowId: isString(primaryKey) ? prop(primaryKey) : primaryKey, // Set row id for selection
      }),
      stateReducer(newState, action) {
        if (action.type === 'toggleSortBy') {
          fetchData(newState.pageIndex, newState.pageSize, newState.sortBy);
        }
        return newState;
      },
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
                column,
                state: { selectedRowIds: tableSelectedRowIds },
              }: HeaderProps<D>): JSX.Element => {
                if (isEmptyArray(tableData)) {
                  return null;
                }
                const selected = Object.keys(tableSelectedRowIds);
                const isIndeterminate =
                  selected.length > 0 && selected.length < column.totalLength;

                return (
                  <FlexContainer flexGrow={1} justifyContent="center">
                    <SelectionCheckbox
                      hasExclusionLogic={column.hasExclusionLogic}
                      id="header-select-all"
                      isIndeterminate={isIndeterminate}
                      {...getToggleAllRowsSelectedProps()}
                    />
                  </FlexContainer>
                );
              },
              Cell: ({ row, column }: CellProps<D>): JSX.Element => (
                <FlexContainer flexGrow={1} justifyContent="center">
                  <SelectionCheckbox
                    hasExclusionLogic={column.hasExclusionLogic}
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

  useDeepCompareEffect(() => {
    onSelect(Object.keys(selectedRowIds), hasExclusionLogic);
  }, [onSelect, selectedRowIds, hasExclusionLogic]);

  useEffect(() => {
    if (shouldResetSelectedRows) {
      toggleAllRowsSelected(false);
      setShouldResetSelectedRows(false);
    }
  }, [
    shouldResetSelectedRows,
    setShouldResetSelectedRows,
    toggleAllRowsSelected,
  ]);
  useEffect(() => {
    toggleAllRowsSelected(false);
  }, [hasExclusionLogic, toggleAllRowsSelected]);

  const tableRef = useRef(null);
  useEffect(() => {
    if (
      tableRef.current !== null &&
      tableRef.current.offsetWidth >= totalColumnsWidth
    ) {
      setIsSticky(false);
    }
  }, [totalColumnsWidth]);

  useEffect(() => {
    toggleAllRowsSelected(false);
  }, [hasExclusionLogic, toggleAllRowsSelected]);

  const handleGoToPage = useCallback(
    (tablePageIndex) => {
      gotoPage(tablePageIndex);
      fetchData(tablePageIndex, pageSize, sortBy);
    },
    [fetchData, gotoPage, pageSize, sortBy],
  );
  const handleNextPage = useCallback(() => {
    nextPage();
    fetchData(pageIndex + 1, pageSize, sortBy);
  }, [fetchData, pageIndex, pageSize, sortBy, nextPage]);
  const handlePreviousPage = useCallback(() => {
    previousPage();
    fetchData(pageIndex - 1, pageSize, sortBy);
  }, [fetchData, pageIndex, pageSize, sortBy, previousPage]);

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
          {(hasServerSidePagination ? rows : page).map((row, index) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <TableCell
                      cell={cell}
                      hasExclusionLogic={hasExclusionLogic}
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
        </StyledTableBody>
      </StyledTable>
      {totalLength === 0 && !isLoading && (
        <>
          <NoDataContainer>
            {hasAppliedFilters
              ? renderNoMatchingDataContent(NoMatchingDataComponent)
              : renderNoDataContent(NoDataComponent)}
          </NoDataContainer>
        </>
      )}
      {(totalLength > 0 || (totalLength === 0 && isLoading)) && (
        <Pagination
          canNextPage={canNextPage}
          canPreviousPage={canPreviousPage}
          isLoading={isLoading}
          pageCount={pageCount || 0}
          pageIndex={pageIndex}
          onGoToPage={handleGoToPage}
          onNextPage={handleNextPage}
          onPreviousPage={handlePreviousPage}
        />
      )}
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
