import type { ReactElement } from 'react';
import type { CellProps, Column } from 'react-table';
import type { TableProps } from './Table.types';

import { useCallback, useEffect, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
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
  actionsColumn,
} from '../_internal/BaseTable';
import { getColor, getRadii } from '../../utils';
import { SpaceSizes } from '../../theme';
import { Padbox } from '../layout';
import { RowActionKindsPropType } from '../_internal/BaseTable/BaseTable.types';
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
  background: ${getColor('neutral.200')};
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
        ...(isNonEmptyArray(rowActions) ? [actionsColumn] : []),
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

Table.propTypes /* remove-proptypes */ = {
  //
  // =============== WARNING ================
  // | These PropTypes are auto-generated   |
  // | from the TypeScript type definitions  |
  // ========================================
  //
  /**
   * Settings for each table column.
   *
   * Extends: https://react-table.tanstack.com/docs/api/useTable#column-options
   */
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      accessor: PropTypes.func.isRequired,
      columns: PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.shape({}).isRequired,
          PropTypes.shape({
            accessor: PropTypes.func.isRequired,
            columns: PropTypes.arrayOf(
              PropTypes.oneOfType([
                PropTypes.shape({}).isRequired,
                PropTypes.shape({
                  accessor: PropTypes.shape({}).isRequired,
                  Cell: PropTypes.oneOfType([
                    PropTypes.element.isRequired,
                    PropTypes.func.isRequired,
                    PropTypes.number.isRequired,
                    PropTypes.shape({}).isRequired,
                    PropTypes.string.isRequired,
                  ]).isRequired,
                  Footer: PropTypes.oneOfType([
                    PropTypes.element.isRequired,
                    PropTypes.func.isRequired,
                    PropTypes.number.isRequired,
                    PropTypes.shape({}).isRequired,
                    PropTypes.string.isRequired,
                  ]).isRequired,
                  Header: PropTypes.oneOfType([
                    PropTypes.func.isRequired,
                    PropTypes.shape({}).isRequired,
                    PropTypes.string.isRequired,
                  ]).isRequired,
                  id: PropTypes.oneOfType([
                    PropTypes.shape({}).isRequired,
                    PropTypes.string.isRequired,
                  ]).isRequired,
                  maxWidth: PropTypes.number.isRequired,
                  minWidth: PropTypes.number.isRequired,
                  width: PropTypes.oneOfType([
                    PropTypes.number.isRequired,
                    PropTypes.string.isRequired,
                  ]).isRequired,
                }).isRequired,
              ]).isRequired,
            ).isRequired,
            Footer: PropTypes.oneOfType([
              PropTypes.element.isRequired,
              PropTypes.func.isRequired,
              PropTypes.number.isRequired,
              PropTypes.shape({}).isRequired,
              PropTypes.shape({
                '__@iterator@393': PropTypes.func.isRequired,
                '__@unscopables@719': PropTypes.func.isRequired,
                at: PropTypes.func.isRequired,
                concat: PropTypes.func.isRequired,
                copyWithin: PropTypes.func.isRequired,
                entries: PropTypes.func.isRequired,
                every: PropTypes.func.isRequired,
                fill: PropTypes.func.isRequired,
                filter: PropTypes.func.isRequired,
                find: PropTypes.func.isRequired,
                findIndex: PropTypes.func.isRequired,
                flat: PropTypes.func.isRequired,
                flatMap: PropTypes.func.isRequired,
                forEach: PropTypes.func.isRequired,
                includes: PropTypes.func.isRequired,
                indexOf: PropTypes.func.isRequired,
                join: PropTypes.func.isRequired,
                keys: PropTypes.func.isRequired,
                lastIndexOf: PropTypes.func.isRequired,
                length: PropTypes.number.isRequired,
                map: PropTypes.func.isRequired,
                pop: PropTypes.func.isRequired,
                push: PropTypes.func.isRequired,
                reduce: PropTypes.func.isRequired,
                reduceRight: PropTypes.func.isRequired,
                reverse: PropTypes.func.isRequired,
                shift: PropTypes.func.isRequired,
                slice: PropTypes.func.isRequired,
                some: PropTypes.func.isRequired,
                sort: PropTypes.func.isRequired,
                splice: PropTypes.func.isRequired,
                toLocaleString: PropTypes.func.isRequired,
                toString: PropTypes.func.isRequired,
                unshift: PropTypes.func.isRequired,
                values: PropTypes.func.isRequired,
              }).isRequired,
              PropTypes.string.isRequired,
            ]).isRequired,
            Header: PropTypes.oneOfType([
              PropTypes.element.isRequired,
              PropTypes.func.isRequired,
              PropTypes.number.isRequired,
              PropTypes.shape({}).isRequired,
              PropTypes.shape({
                '__@iterator@393': PropTypes.func.isRequired,
                '__@unscopables@719': PropTypes.func.isRequired,
                at: PropTypes.func.isRequired,
                concat: PropTypes.func.isRequired,
                copyWithin: PropTypes.func.isRequired,
                entries: PropTypes.func.isRequired,
                every: PropTypes.func.isRequired,
                fill: PropTypes.func.isRequired,
                filter: PropTypes.func.isRequired,
                find: PropTypes.func.isRequired,
                findIndex: PropTypes.func.isRequired,
                flat: PropTypes.func.isRequired,
                flatMap: PropTypes.func.isRequired,
                forEach: PropTypes.func.isRequired,
                includes: PropTypes.func.isRequired,
                indexOf: PropTypes.func.isRequired,
                join: PropTypes.func.isRequired,
                keys: PropTypes.func.isRequired,
                lastIndexOf: PropTypes.func.isRequired,
                length: PropTypes.number.isRequired,
                map: PropTypes.func.isRequired,
                pop: PropTypes.func.isRequired,
                push: PropTypes.func.isRequired,
                reduce: PropTypes.func.isRequired,
                reduceRight: PropTypes.func.isRequired,
                reverse: PropTypes.func.isRequired,
                shift: PropTypes.func.isRequired,
                slice: PropTypes.func.isRequired,
                some: PropTypes.func.isRequired,
                sort: PropTypes.func.isRequired,
                splice: PropTypes.func.isRequired,
                toLocaleString: PropTypes.func.isRequired,
                toString: PropTypes.func.isRequired,
                unshift: PropTypes.func.isRequired,
                values: PropTypes.func.isRequired,
              }).isRequired,
              PropTypes.string.isRequired,
            ]).isRequired,
            id: PropTypes.oneOfType([
              PropTypes.shape({
                '__@iterator@393': PropTypes.func.isRequired,
                anchor: PropTypes.func.isRequired,
                at: PropTypes.func.isRequired,
                big: PropTypes.func.isRequired,
                blink: PropTypes.func.isRequired,
                bold: PropTypes.func.isRequired,
                charAt: PropTypes.func.isRequired,
                charCodeAt: PropTypes.func.isRequired,
                codePointAt: PropTypes.func.isRequired,
                concat: PropTypes.func.isRequired,
                endsWith: PropTypes.func.isRequired,
                fixed: PropTypes.func.isRequired,
                fontcolor: PropTypes.func.isRequired,
                fontsize: PropTypes.func.isRequired,
                includes: PropTypes.func.isRequired,
                indexOf: PropTypes.func.isRequired,
                italics: PropTypes.func.isRequired,
                lastIndexOf: PropTypes.func.isRequired,
                length: PropTypes.number.isRequired,
                link: PropTypes.func.isRequired,
                localeCompare: PropTypes.func.isRequired,
                match: PropTypes.func.isRequired,
                matchAll: PropTypes.func.isRequired,
                normalize: PropTypes.func.isRequired,
                padEnd: PropTypes.func.isRequired,
                padStart: PropTypes.func.isRequired,
                repeat: PropTypes.func.isRequired,
                replace: PropTypes.func.isRequired,
                replaceAll: PropTypes.func.isRequired,
                search: PropTypes.func.isRequired,
                slice: PropTypes.func.isRequired,
                small: PropTypes.func.isRequired,
                split: PropTypes.func.isRequired,
                startsWith: PropTypes.func.isRequired,
                strike: PropTypes.func.isRequired,
                sub: PropTypes.func.isRequired,
                substr: PropTypes.func.isRequired,
                substring: PropTypes.func.isRequired,
                sup: PropTypes.func.isRequired,
                toLocaleLowerCase: PropTypes.func.isRequired,
                toLocaleUpperCase: PropTypes.func.isRequired,
                toLowerCase: PropTypes.func.isRequired,
                toString: PropTypes.func.isRequired,
                toUpperCase: PropTypes.func.isRequired,
                trim: PropTypes.func.isRequired,
                trimEnd: PropTypes.func.isRequired,
                trimLeft: PropTypes.func.isRequired,
                trimRight: PropTypes.func.isRequired,
                trimStart: PropTypes.func.isRequired,
                valueOf: PropTypes.func.isRequired,
              }).isRequired,
              PropTypes.string.isRequired,
            ]).isRequired,
            maxWidth: PropTypes.number.isRequired,
            minWidth: PropTypes.number.isRequired,
            width: PropTypes.oneOfType([
              PropTypes.number.isRequired,
              PropTypes.string.isRequired,
            ]).isRequired,
          }).isRequired,
        ]).isRequired,
      ).isRequired,
      Footer: PropTypes.oneOfType([
        PropTypes.element.isRequired,
        PropTypes.func.isRequired,
        PropTypes.number.isRequired,
        PropTypes.shape({}).isRequired,
        PropTypes.shape({
          '__@iterator@393': PropTypes.func.isRequired,
          '__@unscopables@719': PropTypes.func.isRequired,
          at: PropTypes.func.isRequired,
          concat: PropTypes.func.isRequired,
          copyWithin: PropTypes.func.isRequired,
          entries: PropTypes.func.isRequired,
          every: PropTypes.func.isRequired,
          fill: PropTypes.func.isRequired,
          filter: PropTypes.func.isRequired,
          find: PropTypes.func.isRequired,
          findIndex: PropTypes.func.isRequired,
          flat: PropTypes.func.isRequired,
          flatMap: PropTypes.func.isRequired,
          forEach: PropTypes.func.isRequired,
          includes: PropTypes.func.isRequired,
          indexOf: PropTypes.func.isRequired,
          join: PropTypes.func.isRequired,
          keys: PropTypes.func.isRequired,
          lastIndexOf: PropTypes.func.isRequired,
          length: PropTypes.number.isRequired,
          map: PropTypes.func.isRequired,
          pop: PropTypes.func.isRequired,
          push: PropTypes.func.isRequired,
          reduce: PropTypes.func.isRequired,
          reduceRight: PropTypes.func.isRequired,
          reverse: PropTypes.func.isRequired,
          shift: PropTypes.func.isRequired,
          slice: PropTypes.func.isRequired,
          some: PropTypes.func.isRequired,
          sort: PropTypes.func.isRequired,
          splice: PropTypes.func.isRequired,
          toLocaleString: PropTypes.func.isRequired,
          toString: PropTypes.func.isRequired,
          unshift: PropTypes.func.isRequired,
          values: PropTypes.func.isRequired,
        }).isRequired,
        PropTypes.string.isRequired,
      ]).isRequired,
      Header: PropTypes.oneOfType([
        PropTypes.func.isRequired,
        PropTypes.shape({}).isRequired,
        PropTypes.string.isRequired,
      ]).isRequired,
      id: PropTypes.oneOfType([
        PropTypes.shape({
          '__@iterator@393': PropTypes.func.isRequired,
          anchor: PropTypes.func.isRequired,
          at: PropTypes.func.isRequired,
          big: PropTypes.func.isRequired,
          blink: PropTypes.func.isRequired,
          bold: PropTypes.func.isRequired,
          charAt: PropTypes.func.isRequired,
          charCodeAt: PropTypes.func.isRequired,
          codePointAt: PropTypes.func.isRequired,
          concat: PropTypes.func.isRequired,
          endsWith: PropTypes.func.isRequired,
          fixed: PropTypes.func.isRequired,
          fontcolor: PropTypes.func.isRequired,
          fontsize: PropTypes.func.isRequired,
          includes: PropTypes.func.isRequired,
          indexOf: PropTypes.func.isRequired,
          italics: PropTypes.func.isRequired,
          lastIndexOf: PropTypes.func.isRequired,
          length: PropTypes.number.isRequired,
          link: PropTypes.func.isRequired,
          localeCompare: PropTypes.func.isRequired,
          match: PropTypes.func.isRequired,
          matchAll: PropTypes.func.isRequired,
          normalize: PropTypes.func.isRequired,
          padEnd: PropTypes.func.isRequired,
          padStart: PropTypes.func.isRequired,
          repeat: PropTypes.func.isRequired,
          replace: PropTypes.func.isRequired,
          replaceAll: PropTypes.func.isRequired,
          search: PropTypes.func.isRequired,
          slice: PropTypes.func.isRequired,
          small: PropTypes.func.isRequired,
          split: PropTypes.func.isRequired,
          startsWith: PropTypes.func.isRequired,
          strike: PropTypes.func.isRequired,
          sub: PropTypes.func.isRequired,
          substr: PropTypes.func.isRequired,
          substring: PropTypes.func.isRequired,
          sup: PropTypes.func.isRequired,
          toLocaleLowerCase: PropTypes.func.isRequired,
          toLocaleUpperCase: PropTypes.func.isRequired,
          toLowerCase: PropTypes.func.isRequired,
          toString: PropTypes.func.isRequired,
          toUpperCase: PropTypes.func.isRequired,
          trim: PropTypes.func.isRequired,
          trimEnd: PropTypes.func.isRequired,
          trimLeft: PropTypes.func.isRequired,
          trimRight: PropTypes.func.isRequired,
          trimStart: PropTypes.func.isRequired,
          valueOf: PropTypes.func.isRequired,
        }).isRequired,
        PropTypes.string.isRequired,
      ]).isRequired,
      maxWidth: PropTypes.number.isRequired,
      minWidth: PropTypes.number.isRequired,
      width: PropTypes.oneOfType([
        PropTypes.number.isRequired,
        PropTypes.string.isRequired,
      ]).isRequired,
    }).isRequired,
  ).isRequired,
  /**
   * Table data you want to display
   */
  data: PropTypes.array.isRequired,
  /**
   * Name of column used as table primary key or function to retrieve the key
   *
   * Return value is used as id for selected rows
   */
  dataPrimaryKey: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /**
   * Total size of data
   */
  dataSize: PropTypes.number.isRequired,
  /**
   * Initial page index (zero-based)
   */
  defaultPageIndex: PropTypes.number,
  /**
   * Number of row displayed per page
   */
  defaultPageSize: PropTypes.number,
  /**
   * Initial sorting state
   */
  defaultSortBy: PropTypes.arrayOf(
    PropTypes.shape({
      desc: PropTypes.bool,
      id: PropTypes.oneOfType([
        PropTypes.shape({
          '__@iterator@393': PropTypes.func,
          anchor: PropTypes.func,
          at: PropTypes.func,
          big: PropTypes.func,
          blink: PropTypes.func,
          bold: PropTypes.func,
          charAt: PropTypes.func,
          charCodeAt: PropTypes.func,
          codePointAt: PropTypes.func,
          concat: PropTypes.func,
          endsWith: PropTypes.func,
          fixed: PropTypes.func,
          fontcolor: PropTypes.func,
          fontsize: PropTypes.func,
          includes: PropTypes.func,
          indexOf: PropTypes.func,
          italics: PropTypes.func,
          lastIndexOf: PropTypes.func,
          length: PropTypes.number,
          link: PropTypes.func,
          localeCompare: PropTypes.func,
          match: PropTypes.func,
          matchAll: PropTypes.func,
          normalize: PropTypes.func,
          padEnd: PropTypes.func,
          padStart: PropTypes.func,
          repeat: PropTypes.func,
          replace: PropTypes.func,
          replaceAll: PropTypes.func,
          search: PropTypes.func,
          slice: PropTypes.func,
          small: PropTypes.func,
          split: PropTypes.func,
          startsWith: PropTypes.func,
          strike: PropTypes.func,
          sub: PropTypes.func,
          substr: PropTypes.func,
          substring: PropTypes.func,
          sup: PropTypes.func,
          toLocaleLowerCase: PropTypes.func,
          toLocaleUpperCase: PropTypes.func,
          toLowerCase: PropTypes.func,
          toString: PropTypes.func,
          toUpperCase: PropTypes.func,
          trim: PropTypes.func,
          trimEnd: PropTypes.func,
          trimLeft: PropTypes.func,
          trimRight: PropTypes.func,
          trimStart: PropTypes.func,
          valueOf: PropTypes.func,
        }),
        PropTypes.string,
      ]),
    }),
  ),
  /**
   * Enables pagination for the table
   */
  hasPagination: PropTypes.bool,
  /**
   * Enables columns sorting
   */
  hasSorting: PropTypes.bool,
  /**
   * Flag to determine wheter data is currently loading
   */
  isDataLoading: PropTypes.bool,
  /**
   * Component rendered when table have no data
   */
  NoDataComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /**
   * Callback called when pagination is clicked
   */
  onPageChange: PropTypes.func,
  /**
   * Callback called when sorting is clicked
   */
  onSortChange: PropTypes.func,
  /**
   * List of actions available on single table row, shows last column with actions dropdown
   */
  rowActions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      name: PropTypes.string,
      onClick: PropTypes.func,
    }),
  ),
} as any;

Table.displayName = 'Table';
export default Table;
