import { ToolsTabItem } from '../ToolsTabItem/ToolsTabItem.types';
import { SearchBarProps } from '../../forms/SearchBar/SearchBar.types';
import { FiltersProps } from '../../Filters/Filters.types';
import { BatchModuleProps } from '../BatchModule/BatchModule.types';

export interface ControlModuleProps
  extends SearchBarProps,
    FiltersProps,
    BatchModuleProps {
  toolsTabItems: ToolsTabItem[];
  filteredLength?: number;
  isFilterOpen?: boolean;
}
