import type { ReactElement } from 'react';
import type { IdType } from 'react-table';
import type { TableConfig } from './Table/Table.types';
import type { DatatableProps } from './Datatable.types';

import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDeepCompareMemo } from 'use-deep-compare';
import { assoc, assocPath, fromPairs, map, pipe } from 'ramda';
import { isNotUndefined, noop } from 'ramda-adjunct';

import { getColor, getRadii } from '../../utils';
import { Padbox } from '../layout';
import { FieldPropTypes, FilterStatePropType } from '../Filters/Filters.types';
import { useDataFetch } from './hooks/useDataFetch';
import { useTableRowSelect } from './hooks/useTableRowSelect';
import { ActionPropType } from './types/Action.types';
import { mergeControlsConfig, mergeTableConfig } from './defaultConfigs';
import { ControlsModule } from './ControlsModule';
import { BatchModule } from './BatchModule';
import { Table } from './Table';
import { TableConfigPropType } from './Table/Table.types';
import { DatatableStore, datatableInitialState } from './Datatable.store';
import { useColumnsControls } from './hooks/useColumnsControls';
import { CLX_COMPONENT } from '../../theme/constants';
import { useLocalStorageState } from '../../hooks/useLocalStorageState';

const StyledDatatable = styled(Padbox)`
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid ${getColor('neutral.400')};
  border-radius: ${getRadii('default')};
  background: ${getColor('neutral.200')};
`;

const mapSelectedRows = <D,>(defaultSelectedRowIds: IdType<D>[]) =>
  pipe(
    map((id: IdType<D>): [IdType<D>, boolean] => [id, true]),
    fromPairs,
  )(defaultSelectedRowIds);

function Datatable<D extends Record<string, unknown>>({
  id,
  data,
  dataSize,
  columns,
  dataPrimaryKey,
  onCancelLoading,
  isDataLoading = false,
  onDataFetch = noop,
  batchActions = [],
  isControlsEnabled = true,
  isBatchModuleEnabled = true,
  controlsConfig = {},
  tableConfig = {},
  resetSelectionFn,
}: DatatableProps<D>): ReactElement {
  const [persistedState, setPersistedState] = useLocalStorageState(
    `datatable_${id}`,
  );

  useEffect(() => {
    if (!id) {
      return;
    }
    const unsubscribe = DatatableStore.subscribe(
      (s) => {
        return { hiddenColumns: s.hiddenColumns, columnOrder: s.columnOrder };
      },
      (partial) => {
        setPersistedState(partial);
      },
    );

    // eslint-disable-next-line
    return unsubscribe;
  }, []);

  // Set canceled signal to prevent data fetch when unmounting
  useEffect(
    () => () =>
      DatatableStore.replace(assoc('isCanceled', true, datatableInitialState)),
    [],
  );

  const isCancelEnabled = isNotUndefined(onCancelLoading);

  const {
    onColumnOrderChange,
    onColumnVisibilityChange,
    ...restControlsConfig
  } = useDeepCompareMemo(
    () =>
      mergeControlsConfig(
        assocPath(
          ['filteringConfig', 'isCancelEnabled'],
          isCancelEnabled,
        )(controlsConfig),
      ),
    [controlsConfig],
  );

  const {
    onSelect,
    defaultSelectedRowIds,
    hasOnlyPerPageSelection,
    ...restTableConfig
  } = useDeepCompareMemo<TableConfig<D>>(
    () => mergeTableConfig(tableConfig),
    [tableConfig],
  );

  useDataFetch<D>(onDataFetch);
  useTableRowSelect<D>(onSelect, defaultSelectedRowIds);
  useColumnsControls(
    onColumnOrderChange,
    onColumnVisibilityChange,
    columns,
    persistedState?.columnOrder || restTableConfig.defaultColumnOrder,
    persistedState?.hiddenColumns || restTableConfig.defaultHiddenColumns,
  );

  const handleCancelLoading = isCancelEnabled
    ? () => {
        DatatableStore.update((s) => {
          s.isCanceled = true;
          s.filters = s.filters.map((filter) => ({
            ...filter,
            // mark loading filters as canceled
            isCanceled: filter.isLoading,
            isLoading: false,
          }));

          onCancelLoading();
        });
      }
    : noop;

  resetSelectionFn?.(() => {
    DatatableStore.update((s) => {
      s.shouldResetSelectedRows = true;
    });
  });

  return (
    <StyledDatatable className={CLX_COMPONENT}>
      {isControlsEnabled && (
        <ControlsModule<D>
          {...restControlsConfig}
          isDataLoading={isDataLoading}
          onCancelLoading={handleCancelLoading}
        />
      )}

      {isBatchModuleEnabled && (
        <BatchModule
          actions={batchActions}
          columns={{
            isButtonDisplayed:
              !isControlsEnabled && restControlsConfig.hasColumnsControls,
            defaultIsColumnsControlsOpen:
              restControlsConfig.defaultIsColumnsControlsOpen,
            defaultIsColumnsControlsApplied:
              restControlsConfig.defaultIsColumnsControlsApplied,
          }}
          dataSize={dataSize}
          hasOnlyPerPageSelection={hasOnlyPerPageSelection}
          hasSelection={restTableConfig.hasSelection}
        />
      )}

      <Table<D>
        columns={columns}
        data={data}
        dataPrimaryKey={dataPrimaryKey}
        dataSize={dataSize}
        defaultSelectedRows={mapSelectedRows(defaultSelectedRowIds)}
        {...restTableConfig}
        defaultColumnOrder={
          persistedState?.columnOrder || restTableConfig.defaultColumnOrder
        }
        defaultHiddenColumns={
          persistedState?.hiddenColumns || restTableConfig.defaultHiddenColumns
        }
        isCancelDisabled={!isCancelEnabled}
        isDataLoading={isDataLoading}
        onCancelLoading={handleCancelLoading}
      />
    </StyledDatatable>
  );
}

Datatable.propTypes /* remove-proptypes */ = {
  //
  // =============== WARNING ================
  // | These PropTypes are auto-generated   |
  // | from the TypeScript type definitions  |
  // ========================================
  //
  /**
   * List of available batch actions for table
   *
   * See: [action.types.ts](https://github.com/securityscorecard/design-system/blob/alpha/src/types/action.types.ts)
   */
  batchActions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
      name: PropTypes.string,
      onClick: PropTypes.func,
      tooltip: PropTypes.node,
    }),
  ),
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
   * Config object for controls module
   *
   * See: [ControlsModule.types.ts](https://github.com/securityscorecard/design-system/blob/alpha/src/components/Datatable/ControlsModule/ControlsModule.types.ts)
   */
  controlsConfig: PropTypes.shape({
    defaultIsColumnsControlsApplied: PropTypes.bool,
    defaultIsColumnsControlsOpen: PropTypes.bool,
    defaultIsFilteringApplied: PropTypes.bool,
    defaultIsFilteringOpen: PropTypes.bool,
    filteringConfig: PropTypes.shape({
      defaultOperator: PropTypes.oneOf(['and', 'or']),
      fields: PropTypes.arrayOf(
        PropTypes.shape({
          conditions: PropTypes.arrayOf(PropTypes.shape({})),
          label: PropTypes.string,
          value: PropTypes.string,
        }),
      ),
      isCancelEnabled: PropTypes.bool,
      isLoading: PropTypes.bool,
      isOperatorFieldEnabled: PropTypes.bool,
      onApply: PropTypes.func,
      onCancel: PropTypes.func,
      onChange: PropTypes.func,
      onClose: PropTypes.func,
      onError: PropTypes.func,
      state: PropTypes.arrayOf(
        PropTypes.shape({
          condition: PropTypes.string,
          field: PropTypes.string,
          isApplied: PropTypes.bool,
          isCanceled: PropTypes.bool,
          isLoading: PropTypes.bool,
          operator: PropTypes.oneOf(['and', 'or']),
          value: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.string),
            PropTypes.instanceOf(Date),
            PropTypes.shape({}),
            PropTypes.string,
          ]),
        }),
      ),
    }),
    hasColumnsControls: PropTypes.bool,
    hasFiltering: PropTypes.bool,
    hasSearch: PropTypes.bool,
    isDataLoading: PropTypes.bool,
    onCancelLoading: PropTypes.func,
    onColumnOrderChange: PropTypes.func,
    onColumnVisibilityChange: PropTypes.func,
    onControlToggle: PropTypes.func,
    searchConfig: PropTypes.shape({}),
  }),
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
  id: PropTypes.string,
  /**
   * Flag to enable/disable batch actions module with element counter
   */
  isBatchModuleEnabled: PropTypes.bool,
  /**
   * Flag to enable/disable top controls module
   */
  isControlsEnabled: PropTypes.bool,
  /**
   * Flag to determine wheter data is currently loading
   */
  isDataLoading: PropTypes.bool,
  /**
   * Cancel function called upon request cancellation.
   */
  onCancelLoading: PropTypes.func,
  /**
   * Data fetch function called upon pagination, sorting, filtering and searching
   */
  onDataFetch: PropTypes.func,
  /**
   * Function that allow storing selection reset function in the parent component
   */
  resetSelectionFn: PropTypes.func,
  /**
   * Config object for table
   *
   * See: [Table.types.ts](https://github.com/securityscorecard/design-system/blob/alpha/src/components/Datatable/Table/Table.types.ts)
   */
  tableConfig: PropTypes.shape({
    defaultColumnOrder: PropTypes.arrayOf(
      PropTypes.oneOfType([
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
    ),
    defaultHiddenColumns: PropTypes.arrayOf(
      PropTypes.oneOfType([
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
    ),
    defaultPageIndex: PropTypes.number,
    defaultPageSize: PropTypes.number,
    defaultSelectedRowIds: PropTypes.arrayOf(
      PropTypes.oneOfType([
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
    ),
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
    hasOnlyPerPageSelection: PropTypes.bool,
    hasPagination: PropTypes.bool,
    hasSelection: PropTypes.bool,
    hasServerSidePagination: PropTypes.bool,
    hasServerSideSorting: PropTypes.bool,
    hasSorting: PropTypes.bool,
    isCancelDisabled: PropTypes.bool,
    isDataLoading: PropTypes.bool,
    isMultiSelect: PropTypes.bool,
    NoDataComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    NoMatchingDataComponent: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string,
    ]),
    onCancelLoading: PropTypes.func,
    onSelect: PropTypes.func,
    pageButtonsCount: PropTypes.number,
    rowActions: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        name: PropTypes.string,
        onClick: PropTypes.func,
      }),
    ),
  }),
} as any;

Datatable.displayName = 'Datatable';
export default Datatable;
