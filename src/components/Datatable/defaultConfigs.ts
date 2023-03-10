import type { ControlsConfig } from './ControlsModule/ControlsModule.types';
import type { TableConfig } from './Table/Table.types';

import { mergeDeepRight } from 'ramda';
import { noop } from 'ramda-adjunct';

import { NoMatchingData } from './Table/components';
import { NoData } from '../_internal/BaseTable';

export const defaultTableConfig: TableConfig<Record<string, unknown>> = {
  hasSelection: true,
  isMultiSelect: true,
  onSelect: noop,
  isCancelDisabled: true,
  onCancelLoading: noop,
  isDataLoading: false,
  hasOnlyPerPageSelection: true,
  defaultSelectedRowIds: [],
  pageButtonsCount: undefined,
  hasPagination: true,
  hasServerSidePagination: true,
  defaultPageSize: 50,
  defaultPageIndex: 0,
  hasSorting: true,
  hasServerSideSorting: true,
  defaultSortBy: [],
  defaultColumnOrder: [],
  defaultHiddenColumns: [],
  rowActions: [],
  NoMatchingDataComponent: NoMatchingData,
  NoDataComponent: NoData,
};
export const mergeTableConfig = mergeDeepRight(defaultTableConfig);

// TODO: commented part will be enabled when functionality is implemented
export const defaultControlsConfig: ControlsConfig<Record<string, unknown>> = {
  onControlToggle: noop,
  hasSearch: true,
  searchConfig: {
    placeholder: 'Search',
    onSearch: noop,
    onClear: noop,
  },
  hasFiltering: true,
  isDataLoading: false,
  filteringConfig: {
    onChange: noop,
    onApply: noop,
    onClose: noop,
    state: [],
    fields: [],
    isCancelEnabled: true,
  },
  defaultIsFilteringOpen: false,
  defaultIsFilteringApplied: false,
  hasColumnsControls: true,
  defaultIsColumnsControlsOpen: false,
  defaultIsColumnsControlsApplied: false,
  onCancelLoading: noop,
  onColumnOrderChange: noop,
  onColumnVisibilityChange: noop,
  // hasGrouping: true,
  // defaultIsGroupingOpen: false,
  // defaultIsGroupingApplied: false,
  // hasCustomViews: true,
  // defaultIsustomViewsOpen: false,
  // defaultIsustomViewsApplied: false,
};
export const mergeControlsConfig = mergeDeepRight(defaultControlsConfig);
