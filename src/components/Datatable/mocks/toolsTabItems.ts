import { ToolsTabItem } from '../ToolsTabItem/ToolsTabItem.types';
import { SSCIconNames } from '../../../theme/icons/icons.enums';

const toolActions = {
  onToolActivate: () => {
    return 0;
  },
  onToolDeactivate: () => {
    return 0;
  },
};

export const mockToolsTabItems: ToolsTabItem[] = [
  {
    label: 'Show/Hide',
    iconName: SSCIconNames.reorder,
    ...toolActions,
  },
  {
    label: 'Filter',
    iconName: SSCIconNames.filter,
    ...toolActions,
  },
  {
    label: 'Group',
    iconName: SSCIconNames.sitemap,
    ...toolActions,
  },
  {
    label: 'Views',
    iconName: SSCIconNames.cog,
    ...toolActions,
  },
];

export const mockToolsTabItemsFiltersActive: ToolsTabItem[] = [
  {
    label: 'Show/Hide',
    iconName: SSCIconNames.reorder,
    ...toolActions,
  },
  {
    label: 'Filter',
    iconName: SSCIconNames.filter,
    toolState: 'active',
    ...toolActions,
  },
  {
    label: 'Group',
    iconName: SSCIconNames.sitemap,
    ...toolActions,
  },
  {
    label: 'Views',
    iconName: SSCIconNames.cog,
    ...toolActions,
  },
];
