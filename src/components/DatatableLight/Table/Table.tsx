import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import {
  CellProps,
  Column,
  useColumnOrder,
  useFlexLayout,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable,
} from 'react-table';
import { F as stubFalse } from 'ramda';

import { LoadingNoData } from '../../Datatable/Table/Loading';
import { Head } from '../../Datatable/Table/Head';
import { Body } from '../../Datatable/Table/Body';
import { Footer } from '../../Datatable/Table/Footer';
import {
  StyledTable,
  TableAndLoadingOverlayContainer,
  TableContainer,
} from './Table.styles';
import CellRenderer from '../../Datatable/Table/Body/renderers/CellRenderer';
import { FlexContainer } from '../../FlexContainer';
import { getColor, pxToRem } from '../../../utils';
import { TableProps } from './Table.types';

const NoDataContainer = styled(FlexContainer).attrs(() => ({
  flexDirection: 'column',
}))`
  background: ${getColor('graphite5H')};
  padding: ${pxToRem(64)};
`;

const Table = <D extends Record<string, unknown>>({
  columns,
  data,
  dataSize,
  rowActions,
  NoDataComponent,
  hasPagination,
  defaultPageSize,
  hasSorting,
  defaultSortBy,
  defaultPageIndex,
  defaultColumnOrder,
  isDataLoading,
}: // defaultHiddenColumns,
TableProps<D>): React.ReactElement => {
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
    gotoPage,
    headerGroups,
    page,
    prepareRow,
    pageCount,
    state: { pageIndex },
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
        // ORDERING
        columnOrder: defaultColumnOrder,
        // VISIBILITY
        // hiddenColumns: defaultHiddenColumns,
      },
      // PAGINATION
      pageCount: Math.ceil(dataSize / defaultPageSize),
      autoResetPage: false,
      // SORTING
      disableSortBy: !hasSorting,
      autoResetSortBy: false,
      manualPagination: false,
      // SELECTION
      autoResetSelectedRows: false,
      // CUSTOM PROPS
      rowActions,
      dataSize,
    },
    useColumnOrder,
    useSortBy,
    usePagination,
    useRowSelect,
    useFlexLayout,
    (hooks) => {
      hooks.visibleColumns.push((visibleColumns) => [...visibleColumns]);
    },
  );

  const changePage = useCallback((pageNumber) => gotoPage(pageNumber), [
    gotoPage,
  ]);
  return (
    <>
      <TableAndLoadingOverlayContainer>
        <TableContainer>
          <StyledTable {...getTableProps()}>
            <Head headerGroups={headerGroups} />
            <Body<D>
              prepareRow={prepareRow}
              rows={page}
              {...getTableBodyProps()}
            />
          </StyledTable>
        </TableContainer>
      </TableAndLoadingOverlayContainer>
      {dataSize === 0 ? (
        <NoDataContainer>
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
    </>
  );
};

export default Table;
