import PropTypes from 'prop-types';
import type { IdType } from 'react-table';

import { SearchPropType, SearchProps } from '../components/Search/Search.types';
import { FiltersPropType, FiltersProps } from '../../Filters/Filters.types';
import { ControlTypes } from './ControlsModule.enums';

export type Controls = typeof ControlTypes[keyof typeof ControlTypes];

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

// TODO: commented part will be enabled when functionality is implemented
export const ControlsConfigPropType = {
  hasSearch: PropTypes.bool,
  searchConfig: PropTypes.exact(SearchPropType).isRequired,
  hasFiltering: PropTypes.bool,
  defaultIsFilteringOpen: PropTypes.bool,
  defaultIsFilteringApplied: PropTypes.bool,
  filteringConfig: PropTypes.exact(FiltersPropType).isRequired,
  isDataLoading: PropTypes.bool,
  onCancelLoading: PropTypes.func,
  onControlToggle: PropTypes.func,
  hasColumnsControls: PropTypes.bool.isRequired,
  defaultIsColumnsControlsOpen: PropTypes.bool.isRequired,
  defaultIsColumnsControlsApplied: PropTypes.bool.isRequired,
  // hasGrouping: PropTypes.bool.isRequired,
  // defaultIsGroupingOpen: PropTypes.bool.isRequired,
  // defaultIsGroupingApplied: PropTypes.bool.isRequired,
  // defaultGroups: /* TODO: add propTypes */,
  // hasViews: PropTypes.bool.isRequired,
  // defaultIsViewsOpen: PropTypes.bool.isRequired,
  // defaultIsViewsApplied: PropTypes.bool.isRequired,
  // defaultViews: /* TODO: add propTypes */,
};

export type ControlsModuleProps<D> = Omit<
  ControlsConfig<D>,
  'onColumnOrderChange'
>;
