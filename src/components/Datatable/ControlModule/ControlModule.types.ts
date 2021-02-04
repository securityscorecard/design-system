import { ToolsTabItem } from '../ToolsTabItem/ToolsTabItem.types';
import { SearchBarProps } from '../../forms/SearchBar/SearchBar.types';
import { FiltersProps } from '../../Filters/Filters.types';

export interface BatchActionsProps {
  actions: boolean[];
}
export interface ControlModuleProps
  extends SearchBarProps,
    FiltersProps,
    BatchActionsProps {
  toolsTabItems: ToolsTabItem[];
  filteredLength?: number;
}
