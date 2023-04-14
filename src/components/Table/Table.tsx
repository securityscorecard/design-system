import type { ReactElement } from 'react';
import type { CellProps, Column } from 'react-table';
import type { TableProps } from './Table.types';

import { useCallback, useEffect, useMemo, useRef } from 'react';
import styled from 'styled-components';
import { useFlexLayout, usePagination, useSortBy, useTable } from 'react-table';
import { prop, F as stubFalse } from 'ramda';
import { isNonEmptyArray, isNotUndefined, isString, noop } from 'ramda-adjunct';

import {
  BaseTableAndLoadingOverlayContainer,
  BaseTableContainer,
  Body,
  CellRenderer,
  Footer,
  Head,
  LoadingNoData,
  NoData,
  StyledBaseTable,
  getActionsColumn,
} from '../_internal/BaseTable';
import { getColor, getRadii } from '../../utils';
import { SpaceSizes } from '../../theme';
import { Padbox } from '../layout';
import { CLX_COMPONENT } from '../../theme/constants';

const useIsMountRender = (): boolean => {
  const isMountRef = useRef(true);
  useEffect(() => {
    isMountRef.current = false;
  }, []);
  return isMountRef.current;
};

const NoDataContainer = styled(Padbox)`
  background: ${getColor('neutral.0')};
`;

const TableWrapper = styled.div`
  border: 1px solid ${getColor('neutral.400')};
  border-top-width: 0;
  background: ${getColor('neutral.0')};
  border-radius: ${getRadii('default')};
`;

const renderDefaultCell = <D extends Record<string, unknown>>(
  props: CellProps<D>,
): ReactElement => <CellRenderer<D> {...props} />;

function Table<D extends Record<string, unknown>>({
  columns,
  data,
  dataSize,
  NoDataComponent = NoData,
  hasPagination = true,
  defaultPageSize = 20,
  hasSorting = true,
  defaultSortBy = [],
  defaultPageIndex = 0,
  isDataLoading = false,
  onPageChange = noop,
  onSortChange = noop,
  rowActions = [],
  dataPrimaryKey,
}: TableProps<D>): ReactElement {
  const defaultColumn = useMemo<Partial<Column<D>>>(
    () => ({
      minWidth: 40,
      width: 150,
      maxWidth: 400,
      nullCondition: stubFalse,
      Cell: (props: CellProps<D>): ReactElement => renderDefaultCell<D>(props),
      cellType: 'text',
    }),
    [],
  );

  // TABLE INITIALIZATION
  const {
    getTableProps,
    getTableBodyProps,
    gotoPage,
    headerGroups,
    page,
    prepareRow,
    pageCount,
    state: { pageIndex, sortBy },
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
      },
      // PAGINATION
      pageCount: Math.ceil(dataSize / defaultPageSize),
      autoResetPage: false,
      // SORTING
      disableSortBy: !hasSorting,
      autoResetSortBy: false,
      manualPagination: false,
      ...(isNotUndefined(dataPrimaryKey) && {
        getRowId: isString(dataPrimaryKey)
          ? prop(dataPrimaryKey)
          : dataPrimaryKey, // Set row id for selection
      }),
      // CUSTOM PROPS
      rowActions,
    },
    useSortBy,
    usePagination,
    useFlexLayout,
    (hooks) => {
      hooks.visibleColumns.push((visibleColumns) => [
        ...visibleColumns,
        ...(isNonEmptyArray(rowActions) ? [getActionsColumn<D>()] : []),
      ]);
    },
  );

  const isMountRender = useIsMountRender();
  useEffect(() => {
    if (!isMountRender) {
      onSortChange(sortBy);
    }
  }, [sortBy, isMountRender, onSortChange]);

  const changePage = useCallback(
    (pageNumber) => {
      onPageChange(pageNumber + 1);
      gotoPage(pageNumber);
    },
    [onPageChange, gotoPage],
  );

  return (
    <TableWrapper className={CLX_COMPONENT}>
      <BaseTableAndLoadingOverlayContainer>
        <BaseTableContainer tabIndex={0}>
          <StyledBaseTable {...getTableProps()}>
            <Head headerGroups={headerGroups} />
            <Body<D>
              prepareRow={prepareRow}
              rows={page}
              {...getTableBodyProps()}
            />
          </StyledBaseTable>
        </BaseTableContainer>
      </BaseTableAndLoadingOverlayContainer>
      {dataSize === 0 ? (
        <NoDataContainer paddingSize={SpaceSizes.xl}>
          {isDataLoading ? <LoadingNoData /> : <NoDataComponent />}
        </NoDataContainer>
      ) : pageCount !== 1 ? (
        <Footer
          hasPagination={hasPagination && dataSize > 0}
          isDataLoading={isDataLoading}
          pageCount={pageCount}
          pageIndex={pageIndex}
          onGotoPage={changePage}
        />
      ) : null}
    </TableWrapper>
  );
}

Table.displayName = 'Table';
export default Table;
