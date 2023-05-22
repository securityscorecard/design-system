import type { IdType } from 'react-table';
import type { SearchProps } from '../components/Search/Search.types';
import type { FiltersProps } from '../../Filters/Filters.types';
import type { ControlTypes } from './ControlsModule.enums';

export type Controls = (typeof ControlTypes)[keyof typeof ControlTypes];

export type ControlState = {
  isActive: boolean;
  isApplied: boolean;
};

export type ControlsLocalState = Record<Controls, ControlState>;

export interface ControlsConfig<D> {
  hasSearch: boolean;
  searchConfig: Partial<SearchProps>;
  hasFiltering: boolean;
  filteringConfig: Partial<FiltersProps>;
  defaultIsFilteringOpen: boolean;
  defaultIsFilteringApplied: boolean;
  hasColumnsControls: boolean;
  defaultIsColumnsControlsOpen: boolean;
  defaultIsColumnsControlsApplied: boolean;
  onColumnOrderChange: (columnOrder: IdType<D>[]) => void;
  onColumnVisibilityChange: (hiddenColumns: IdType<D>[]) => void;
  onControlToggle: (control: Controls, isActive: boolean) => void;
  onCancelLoading: () => void;
  isDataLoading: boolean;
}

export type ControlsModuleProps<D> = Omit<
  ControlsConfig<D>,
  'onColumnOrderChange'
>;
