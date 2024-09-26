import { useEffect } from 'react';
import styled from 'styled-components';
import { useDeepCompareMemo } from 'use-deep-compare';
import { assoc, assocPath, fromPairs, map, pipe } from 'ramda';
import { isNotUndefined, noop } from 'ramda-adjunct';
import { IdType } from 'react-table';

import { getColor, getRadii } from '../../utils';
import { Padbox } from '../layout';
import { useDataFetch } from './hooks/useDataFetch';
import { useTableRowSelect } from './hooks/useTableRowSelect';
import { mergeControlsConfig, mergeTableConfig } from './defaultConfigs';
import { ControlsModule } from './ControlsModule';
import { BatchModule } from './BatchModule';
import { Table } from './Table';
import { TableConfig } from './Table/Table.types';
import { DatatableProps } from './Datatable.types';
import { DatatableStore, datatableInitialState } from './Datatable.store';
import { useColumnsControls } from './hooks/useColumnsControls';
import { CLX_COMPONENT } from '../../theme/constants';
import { useLocalStorageState } from '../../hooks/useLocalStorageState';

const StyledDatatable = styled(Padbox)`
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid ${getColor('neutral.300')};
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
}: DatatableProps<D>) {
  const [persistedState, setPersistedState] = useLocalStorageState<{
    hiddenColumns: string[];
    columnOrder: string[];
  }>(`datatable_${id}`);

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

Datatable.displayName = 'Datatable';

export default Datatable;
