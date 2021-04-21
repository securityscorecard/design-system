import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import {
  CellProps,
  Column,
  IdType,
  SortingRule,
  useFlexLayout,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable,
} from 'react-table';
import { keys, prop, F as stubFalse } from 'ramda';
import cls from 'classnames';
import { isNonEmptyArray, isNotUndefined, isString } from 'ramda-adjunct';

import { DatatableStore } from '../Datatable.store';
import { actions, tableActionsReducer } from './Table.reducer';
import { actionsColumn } from './columns/actionsColumn';
import { selectionColumn } from './columns/selectionColumn';
import { Head } from './Head';
import { Body } from './Body';
import { Footer } from './Footer';
import { StyledTable, TableContainer } from './Table.styles';
import CellRenderer from './Body/renderers/CellRenderer';
import { FlexContainer } from '../../FlexContainer';
import { getColor, pxToRem } from '../../../utils/helpers';
import { TableProps } from './Table.types';

const NoDataContainer = styled(FlexContainer).attrs(() => ({
  flexDirection: 'column',
}))`
  background: ${getColor('graphite5H')};
  padding: ${pxToRem(64)};
`;

const collectFetchParams = <D,>(
  pageIndex: number,
  pageSize: number,
  sortBy: SortingRule<D>[],
): void => {
  DatatableStore.update((s) => {
    s.pageIndex = pageIndex;
    s.pageSize = pageSize;
    s.sortBy = sortBy;
  });
};
const collectSelectedIds = <D,>(
  selectedRows: Record<IdType<D>, boolean>,
): void => {
  DatatableStore.update((s) => {
    s.selectedIds = keys(selectedRows);
  });
};

const Table = <D extends Record<string, unknown>>({
  columns,
  data,
  dataPrimaryKey,
  dataSize,
  isDataLoading,
  rowActions,
  NoMatchingDataComponent,
  NoDataComponent,
  hasSelection,
  defaultSelectedRows,
  hasPagination,
  hasServerSidePagination,
  defaultPageSize,
  hasSorting,
  hasServerSideSorting,
  defaultSortBy,
}: TableProps<D>): React.ReactElement => {
  const hasExclusiveSelection = DatatableStore.useState(
    (s) => s.hasExclusiveSelection,
  );
  const hasAppliedFilters = DatatableStore.useState((s) => s.hasAppliedFilters);

  const defaultColumn = useMemo<Partial<Column<D>>>(
    () => ({
      minWidth: 40,
      width: 150,
      maxWidth: 400,
      nullCondition: stubFalse,
      Cell: (props: CellProps<D>): React.ReactElement => (
        <CellRenderer<D> {...props} />
      ),
      cellType: 'text',
    }),
    [],
  );

  // TABLE INITIALIZATION
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    gotoPage,
    pageCount,
    dispatch,
    state: { pageIndex, selectedRowIds },
  } = useTable<D>(
    {
      columns,
      data,
      defaultColumn,
      initialState: {
        // PAGINATION
        pageSize: defaultPageSize,
        // SORTING
        sortBy: defaultSortBy,
        // SELECTION
        selectedRowIds: defaultSelectedRows,
      },
      // PAGINATION
      manualPagination: hasServerSidePagination,
      pageCount: Math.ceil(dataSize / defaultPageSize),
      autoResetPage: false,
      // SORTING
      disableSortBy: !hasSorting,
      manualSortBy: hasServerSideSorting,
      autoResetSortBy: false,
      // SELECTION
      autoResetSelectedRows: false,
      ...(isNotUndefined(dataPrimaryKey) && {
        getRowId: isString(dataPrimaryKey)
          ? prop(dataPrimaryKey)
          : dataPrimaryKey, // Set row id for selection
      }),
      // ACTIONS
      stateReducer: tableActionsReducer<D>({
        collectFetchParams,
      }),
      // CUSTOM PROPS
      rowActions,
      dataSize,
    },
    useSortBy,
    usePagination,
    useRowSelect,
    useFlexLayout,
    (hooks) => {
      hooks.visibleColumns.push((visibleColumns) => [
        ...(hasSelection ? [selectionColumn] : []),
        ...visibleColumns,
        ...(isNonEmptyArray(rowActions) ? [actionsColumn] : []),
      ]);
    },
  );

  useEffect(() => {
    const unsubscribe = DatatableStore.createReaction(
      (s) => s.shouldResetSelectedRows,
      (shouldResetSelectedRows, newState) => {
        if (shouldResetSelectedRows) {
          dispatch({ type: actions.deselectAllRows });
          newState.shouldResetSelectedRows = false;
        }
      },
    );
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  useEffect(() => {
    collectSelectedIds<D>(selectedRowIds);
  }, [selectedRowIds]);

  return (
    <>
      <TableContainer>
        <StyledTable
          className={cls({ 'has-exclusive-selection': hasExclusiveSelection })}
          {...getTableProps()}
        >
          <Head headerGroups={headerGroups} />
          <Body<D>
            prepareRow={prepareRow}
            rows={rows}
            {...getTableBodyProps()}
          />
        </StyledTable>
      </TableContainer>
      {dataSize === 0 && !isDataLoading && (
        <>
          <NoDataContainer>
            {hasAppliedFilters ? (
              <NoMatchingDataComponent />
            ) : (
              <NoDataComponent />
            )}
          </NoDataContainer>
        </>
      )}
      <Footer
        hasPagination={hasPagination && dataSize > 0}
        isDataLoading={isDataLoading}
        pageCount={pageCount}
        pageIndex={pageIndex}
        onGotoPage={gotoPage}
      />
    </>
  );
};

export default Table;
