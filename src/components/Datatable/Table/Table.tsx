import React, { useCallback, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import {
  CellProps,
  Column,
  IdType,
  SortingRule,
  useColumnOrder,
  useFlexLayout,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable,
} from 'react-table';
import {
  allPass,
  any,
  equals,
  isEmpty,
  keys,
  pick,
  pipe,
  prop,
  propEq,
  F as stubFalse,
  when,
} from 'ramda';
import cls from 'classnames';
import { isNonEmptyArray, isNotUndefined, isString } from 'ramda-adjunct';

import {
  BaseTableAndLoadingOverlayContainer,
  BaseTableContainer,
  Body,
  CellRenderer,
  Footer,
  Head,
  LoadingNoData,
  StyledBaseTable,
  actionsColumn,
} from '../../_internal/BaseTable';
import { DatatableStore } from '../Datatable.store';
import { actions, tableActionsReducer } from './Table.reducer';
import { selectionColumn } from './columns/selectionColumn';
import { LoadingOverlay } from './components';
import { FlexContainer } from '../../FlexContainer';
import { getColor, pxToRem } from '../../../utils';
import { TableProps } from './Table.types';

const NoDataContainer = styled(FlexContainer).attrs(() => ({
  flexDirection: 'column',
}))`
  background: ${getColor('neutral.0')};
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
    s.isCanceled = false;
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
  isMultiSelect,
  defaultSelectedRows,
  hasPagination,
  hasServerSidePagination,
  isCancelDisabled,
  onCancelLoading,
  defaultPageSize,
  hasSorting,
  hasServerSideSorting,
  defaultSortBy,
  defaultPageIndex,
  defaultColumnOrder,
}: // defaultHiddenColumns,
TableProps<D>): React.ReactElement => {
  const tableDataSize = useMemo(
    () => (hasServerSidePagination ? dataSize : data.length),
    [hasServerSidePagination, dataSize, data],
  );
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
    page,
    rows,
    prepareRow,
    gotoPage,
    pageCount,
    dispatch,
    setColumnOrder,
    state: { pageIndex, selectedRowIds, pageSize, sortBy },
  } = useTable<D>(
    {
      columns,
      data,
      defaultColumn,
      initialState: {
        // PAGINATION
        pageSize: defaultPageSize,
        pageIndex: defaultPageIndex,
        // SORTING
        sortBy: defaultSortBy,
        // SELECTION
        selectedRowIds: defaultSelectedRows,
        // ORDERING
        columnOrder: defaultColumnOrder,
        // VISIBILITY
        // hiddenColumns: defaultHiddenColumns,
      },
      // PAGINATION
      manualPagination: hasServerSidePagination,
      pageCount: Math.ceil(tableDataSize / defaultPageSize),
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
      dataSize: tableDataSize,
      isMultiSelect,
    },
    useColumnOrder,
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

  const gotoFirstPage = useCallback(() => gotoPage(0), [gotoPage]);

  const gotoPageAndLoadData = (newPageIndex) => {
    gotoPage(newPageIndex);
    collectFetchParams(newPageIndex, pageSize, sortBy);
  };

  useEffect(() => {
    if (isEmpty(defaultSelectedRows)) {
      dispatch({ type: actions.deselectAllRows });
    }
  }, [defaultSelectedRows, dispatch]);

  useEffect(() => {
    const unsubscribe = DatatableStore.subscribe(
      prop('isCanceled'),
      (isCanceled) => {
        if (isCanceled) {
          dispatch({ type: actions.cancelLoading });
        }
      },
    );
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  useEffect(() => {
    if (!isDataLoading) dispatch({ type: actions.preserveState });
  }, [dispatch, isDataLoading]);

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
    const unsubscribe = DatatableStore.subscribe(
      (s) => s.columnOrder,
      (columnOrder) => {
        setColumnOrder(columnOrder);
      },
    );
    return () => {
      unsubscribe();
    };
  }, [setColumnOrder]);

  useEffect(() => {
    const unsubscribe = DatatableStore.subscribe(
      prop('pageIndex'),
      when(equals(0), gotoFirstPage),
    );

    return () => {
      unsubscribe();
    };
  }, [gotoFirstPage, pageIndex]);

  useEffect(() => {
    const unsubscribe = DatatableStore.subscribe(
      pick(['filters', 'isCanceled']),
      when(
        allPass([
          propEq('isCanceled', false),
          pipe(
            prop('filters'),
            any(
              allPass([propEq('isLoading', true), propEq('isCanceled', false)]),
            ),
          ),
        ]),
        gotoFirstPage,
      ),
    );

    return () => {
      unsubscribe();
    };
  }, [gotoFirstPage]);

  useEffect(() => {
    collectSelectedIds<D>(selectedRowIds);
  }, [selectedRowIds]);

  useEffect(() => {
    DatatableStore.update((s) => {
      s.pageIndex = defaultPageIndex;
      s.sortBy = defaultSortBy;
      s.pageSize = defaultPageSize;
    });
  }, [defaultPageIndex, defaultSortBy, defaultPageSize]);

  return (
    <>
      <BaseTableAndLoadingOverlayContainer>
        <BaseTableContainer>
          <StyledBaseTable
            className={cls({
              'has-exclusive-selection': hasExclusiveSelection,
            })}
            {...getTableProps()}
          >
            <Head headerGroups={headerGroups} />
            <Body<D>
              prepareRow={prepareRow}
              rows={hasServerSidePagination ? rows : page}
              {...getTableBodyProps()}
            />
          </StyledBaseTable>
        </BaseTableContainer>
        {tableDataSize > 0 && isDataLoading && (
          <LoadingOverlay
            isCancelable={!isCancelDisabled}
            onCancel={onCancelLoading}
          />
        )}
      </BaseTableAndLoadingOverlayContainer>
      {tableDataSize === 0 ? (
        <NoDataContainer>
          {isDataLoading ? (
            <LoadingNoData />
          ) : (
            <>
              {hasAppliedFilters ? (
                <NoMatchingDataComponent />
              ) : (
                <NoDataComponent />
              )}
            </>
          )}
        </NoDataContainer>
      ) : pageCount !== 1 ? (
        <Footer
          hasPagination={hasPagination && tableDataSize > 0}
          isDataLoading={isDataLoading}
          pageCount={pageCount}
          pageIndex={pageIndex}
          onGotoPage={gotoPageAndLoadData}
        />
      ) : null}
    </>
  );
};

export default Table;
