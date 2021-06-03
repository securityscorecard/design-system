import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDeepCompareMemo } from 'use-deep-compare';
import { fromPairs, map, pipe } from 'ramda';
import { noop } from 'ramda-adjunct';
import { IdType } from 'react-table';

import { getBorderRadius, getColor } from '../../utils';
import { FlexContainer } from '../FlexContainer';
import { FieldPropTypes, FilterStatePropType } from '../Filters/Filters.types';
import { useDataFetch } from './hooks/useDataFetch';
import { useTableRowSelect } from './hooks/useTableRowSelect';
import { ActionPropType } from './types/Action.types';
import { mergeControlsConfig, mergeTableConfig } from './defaultConfigs';
import { ControlsModule } from './ControlsModule';
import { BatchModule } from './BatchModule';
import { Table } from './Table';
import { TableConfig, TableConfigPropType } from './Table/Table.types';
import { DatatableProps } from './Datatable.types';
import { DatatableStore, datatableInitialState } from './Datatable.store';
import { useColumnsControls } from './hooks/useColumnsControls';

const StyledDatatable = styled(FlexContainer)`
  position: relative;
  border: 1px solid ${getColor('graphiteH')};
  border-radius: ${getBorderRadius};
  background: ${getColor('graphite3H')};
`;

const mapSelectedRows = <D,>(defaultSelectedRowIds: IdType<D>[]) =>
  pipe(
    map((id: IdType<D>): [IdType<D>, boolean] => [id, true]),
    fromPairs,
  )(defaultSelectedRowIds);

const Datatable = <D extends Record<string, unknown>>({
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
}: DatatableProps<D>): React.ReactElement => {
  useEffect(
    () => () => {
      DatatableStore.replace(datatableInitialState);
    },
    [],
  );

  const {
    onColumnOrderChange,
    ...restControlsConfig
  } = useDeepCompareMemo(() => mergeControlsConfig(controlsConfig), [
    controlsConfig,
  ]);
  const {
    onSelect,
    defaultSelectedRowIds,
    hasOnlyPerPageSelection,
    ...restTableConfig
  } = useDeepCompareMemo<TableConfig<D>>(() => mergeTableConfig(tableConfig), [
    tableConfig,
  ]);

  useDataFetch<D>(onDataFetch);
  useTableRowSelect<D>(onSelect, defaultSelectedRowIds);
  useColumnsControls(
    onColumnOrderChange,
    columns,
    restTableConfig.defaultColumnOrder,
  );

  const handleCancelLoading = onCancelLoading
    ? () => {
        DatatableStore.update((s) => {
          s.isCanceled = true;
          onCancelLoading();
        });
      }
    : noop;

  return (
    <StyledDatatable flexDirection="column">
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
        isDataLoading={isDataLoading}
        onCancelLoading={handleCancelLoading}
      />
    </StyledDatatable>
  );
};

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
    hasSearch: PropTypes.bool,
    searchConfig: PropTypes.exact({
      placeholder: PropTypes.string,
      onSearch: PropTypes.func,
      onClear: PropTypes.func,
    }),
    hasFiltering: PropTypes.bool,
    filteringConfig: PropTypes.exact({
      onChange: PropTypes.func,
      onApply: PropTypes.func,
      onClose: PropTypes.func,
      state: PropTypes.arrayOf(FilterStatePropType),
      fields: PropTypes.arrayOf(FieldPropTypes),
    }),
    defaultIsFilteringOpen: PropTypes.bool,
    defaultIsFilteringApplied: PropTypes.bool,
  }),
  tableConfig: PropTypes.exact(TableConfigPropType),
  onDataFetch: PropTypes.func,
  onCancelLoading: PropTypes.func,
};

export default Datatable;
