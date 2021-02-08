import { ToolsTabItem } from '../ToolsTabItem/ToolsTabItem.types';
import { SearchBarProps } from '../../forms/SearchBar/SearchBar.types';
import { FiltersProps } from '../../Filters/Filters.types';

export interface ControlModuleProps extends SearchBarProps, FiltersProps {
  toolsTabItems: ToolsTabItem[];
  filteredLength?: number;
  defaultIsFilterOpen?: boolean;
}
