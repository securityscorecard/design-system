import { action } from '@storybook/addon-actions';

import { mockToolsTabItemsFiltersActive } from './toolsTabItems';
import { createMockOnSearch } from '../../forms/SearchBar/mocks';
import { dataMock, dataPointsMock } from '../../Filters/mocks/options';
import { tableActionsMock } from './actions';

export const mockControlModuleProps = {
  toolsTabItems: mockToolsTabItemsFiltersActive,
  placeholder: 'Search for domains or IPs',
  onSearch: createMockOnSearch(action(`click-suggestion`)),
  data: dataMock,
  dataPoints: dataPointsMock,
  onApply: action('onApply'),
  onCancel: action('onCancel'),
  onChange: action('onChange'),
  onClose: action('onClose'),
  actions: tableActionsMock,
  isFilterOpen: true,
};
