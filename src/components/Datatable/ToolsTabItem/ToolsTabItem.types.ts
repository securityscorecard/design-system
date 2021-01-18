import { Types as IconTypes, SSCIcons } from '../../Icon/Icon.types';
import { SpacingSizeValue } from '../../../types/spacing.types';
import { ToolsTabItemStates } from './ToolsTabItem.enum';

export type ItemStates = typeof ToolsTabItemStates[keyof typeof ToolsTabItemStates];

export interface ToolsTabItemProps {
  itemState?: ItemStates;
  onToolActivate: React.MouseEventHandler;
  onToolDeactivate: React.MouseEventHandler;
  iconName?: SSCIcons | string;
  iconType?: IconTypes | string;
  margin?: SpacingSizeValue;
  isDisabled: never;
  disabled?: boolean;
}
