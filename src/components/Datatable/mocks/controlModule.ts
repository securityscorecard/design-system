import { action } from '@storybook/addon-actions';

import { mockToolsTabItemsFiltersActive } from './toolsTabItems';
import { createMockOnSearch } from '../../forms/SearchBar/mocks';
import { dataMock, dataPointsMock } from '../../Filters/mocks/options';

export const mockControlModuleProps = {
  toolsTabItems: mockToolsTabItemsFiltersActive,
  placeholder: 'Search for domains or IPs',
  onSearch: createMockOnSearch(action(`click-suggestion`)),
  data: dataMock,
  dataPoints: dataPointsMock,
  onApply: action('onApply'),
  onCancel: action('onCancel'),
  onChangeFilter: action('onChangeFilter'),
  onClose: action('onClose'),
  defaultIsFilterOpen: true,
};
