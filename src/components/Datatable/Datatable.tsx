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
  border-radius: ${getRadii('double')};
  background: ${getColor('neutral.0')};
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

Datatable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  dataSize: PropTypes.number.isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isDataLoading: PropTypes.bool,
  batchActions: PropTypes.arrayOf(ActionPropType),
  dataPrimaryKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  isControlsEnabled: PropTypes.bool,
  controlsConfig: PropTypes.exact({
    onControlToggle: PropTypes.func,
    onCancelLoading: PropTypes.func,
    onColumnVisibilityChange: PropTypes.func,
    hasSearch: PropTypes.bool,
    searchConfig: PropTypes.exact({
      placeholder: PropTypes.string,
      onSearch: PropTypes.func,
      onClear: PropTypes.func,
      defaultValue: PropTypes.string,
      isValidatedOnSubmit: PropTypes.bool,
      pattern: PropTypes.string,
      errorMessage: PropTypes.string,
    }),
    hasFiltering: PropTypes.bool,
    filteringConfig: PropTypes.exact({
      onChange: PropTypes.func,
      onApply: PropTypes.func,
      onClose: PropTypes.func,
      state: PropTypes.arrayOf(FilterStatePropType),
      fields: PropTypes.arrayOf(FieldPropTypes),
      isCancelEnabled: PropTypes.bool,
    }),
    defaultIsFilteringOpen: PropTypes.bool,
    defaultIsFilteringApplied: PropTypes.bool,
    hasColumnsControls: PropTypes.bool,
    onColumnOrderChange: PropTypes.func,
    defaultIsColumnsControlsOpen: PropTypes.bool,
    defaultIsColumnsControlsApplied: PropTypes.bool,
  }),
  tableConfig: PropTypes.exact(TableConfigPropType),
  pageButtonsCount: PropTypes.number,
  resetSelectionFn: PropTypes.func,
  onDataFetch: PropTypes.func,
  onCancelLoading: PropTypes.func,
};

Datatable.displayName = 'Datatable';
export default Datatable;
