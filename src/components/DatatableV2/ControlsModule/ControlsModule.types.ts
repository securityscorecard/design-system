import PropTypes from 'prop-types';

import {
  SearchBarPropType,
  SearchBarProps,
} from '../../forms/SearchBar/SearchBar.types';
import { FiltersPropType, FiltersProps } from '../../Filters/Filters.types';
import { ControlTypes } from './ControlsModule.enums';

export type Controls = typeof ControlTypes[keyof typeof ControlTypes];

export type ControlState = {
  isActive: boolean;
  isApplied: boolean;
};

export type ControlsLocalState = Record<Controls, ControlState>;

export interface ControlsConfig {
  hasSearch: boolean;
  searchConfig: Partial<SearchBarProps>;
  hasFiltering: boolean;
  filteringConfig: Partial<FiltersProps>;
  defaultIsFilteringOpen: boolean;
  defaultIsFilteringApplied: boolean;
  onControlToggle: (control: Controls, isActive: boolean) => void;
}

// TODO: commented part will be enabled when functionality is implemented
export const ControlsConfigPropType = {
  hasSearch: PropTypes.bool,
  searchConfig: PropTypes.exact(SearchBarPropType).isRequired,
  hasFiltering: PropTypes.bool,
  defaultIsFilteringOpen: PropTypes.bool,
  defaultIsFilteringApplied: PropTypes.bool,
  filteringConfig: PropTypes.exact(FiltersPropType).isRequired,
  onControlToggle: PropTypes.func,
  // hasColumnVisibility: PropTypes.bool.isRequired,
  // defaultIsColumnVisibilityOpen: PropTypes.bool.isRequired,
  // defaultIsColumnVisibilityApplied: PropTypes.bool.isRequired,
  // defaultHiddenColumns: /* TODO: add propTypes */,
  // hasColumnOrdering: PropTypes.bool.isRequired,
  // defaultIsColumnOrderingOpen: PropTypes.bool.isRequired,
  // defaultIsColumnOrderingApplied: PropTypes.bool.isRequired,
  // defaultColumnOrder: /* TODO: add propTypes */,
  // hasGrouping: PropTypes.bool.isRequired,
  // defaultIsGroupingOpen: PropTypes.bool.isRequired,
  // defaultIsGroupingApplied: PropTypes.bool.isRequired,
  // defaultGroups: /* TODO: add propTypes */,
  // hasViews: PropTypes.bool.isRequired,
  // defaultIsViewsOpen: PropTypes.bool.isRequired,
  // defaultIsViewsApplied: PropTypes.bool.isRequired,
  // defaultViews: /* TODO: add propTypes */,
};

export type ControlsModuleProps = ControlsConfig;
