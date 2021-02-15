import { action } from '@storybook/addon-actions';

import { mockToolsTabItemsFiltersActive } from './toolsTabItems';
import { createMockOnSearch } from '../../forms/SearchBar/mocks';
import { fieldsMock, stateMock } from '../../Filters/mocks/options';

export const mockControlModuleProps = {
  isControlsEnabled: true,
  hasSearch: true,
  searchConfig: {
    placeholder: 'Search for domains or IPs',
    onSearch: createMockOnSearch(action(`click-suggestion`)),
  },
  hasFiltering: true,
  filtersConfig: {
    fields: fieldsMock,
    state: stateMock,
    onApply: action('onApply'),
    onCancel: action('onCancel'),
    onChange: action('onChange'),
    onClose: action('onClose'),
  },
  defaultIsFilteringOpen: false,
  hasColumnVisibility: true,
  defaultHiddenColumns: [],
  hasColumnOrdering: true,
  defaultColumnOrder: [],
  toolsTabItems: mockToolsTabItemsFiltersActive,
};
