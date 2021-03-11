import { action } from '@storybook/addon-actions';
import { noop } from 'ramda-adjunct';

import { ControlsConfig } from '../Datatable.types';
import {
  delay,
  mockOnSearch,
  mockSuggestions,
} from '../../forms/SearchBar/mocks';
import { fields } from '../../Filters/mocks/options';
import { renderSuggestionFilter } from '../../forms/SearchBar/SearchSuggestionFormats';
import { FilterSuggestion } from '../../forms/SearchBar/SearchBar.types';

const mockOnSuggestionsFetch = async (
  query: string,
): Promise<FilterSuggestion[]> => {
  await delay(200);
  return mockSuggestions(query);
};

export const mockControlModuleProps: ControlsConfig<Record<string, unknown>> = {
  isControlsEnabled: true,
  hasSearch: true,
  searchConfig: {
    hasSuggestions: true,
    placeholder: 'Search for domains or IPs',
    onSearch: mockOnSearch,
    onClear: noop,
    onSuggestionsFetch: mockOnSuggestionsFetch,
    renderSearchSuggestion: renderSuggestionFilter,
  },
  hasFiltering: true,
  filtersConfig: {
    fields,
    onApply: action('onApply'),
    onCancel: action('onCancel'),
    onChange: action('onChange'),
    onClose: action('onClose'),
  },
  defaultIsFilteringOpen: false,
  hasColumnVisibility: true,
  defaultHiddenColumns: [],
  hasColumnOrdering: false,
  defaultColumnOrder: [],
  hasGrouping: false,
  defaultGroups: [],
  hasCustomViews: false,
  defaultCustomView: [],
  columnVisibilityActions: {
    onToolActivate: action('ActivateColumnVisibility'),
    onToolDeactivate: action('DeactivateColumnVisibility'),
  },
  filteringActions: {
    onToolActivate: action('ActivateFiltering'),
    onToolDeactivate: action('DeactivateFiltering'),
  },
  groupingActions: {
    onToolActivate: action('ActivateGrouping'),
    onToolDeactivate: action('DeactivateGrouping'),
  },
  customViewsActions: {
    onToolActivate: action('ActivateCustomViews'),
    onToolDeactivate: action('DeactivateCustomViews'),
  },
};
