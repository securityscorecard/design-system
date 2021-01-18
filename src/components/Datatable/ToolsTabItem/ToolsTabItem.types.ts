import { ButtonProps } from '../../Button/Button.types';
import { ToolsTabItemStates } from './ToolsTabItem.enum';

export type ItemStates = typeof ToolsTabItemStates[keyof typeof ToolsTabItemStates];

export interface ToolsTabItemProps extends ButtonProps {
  itemState?: ItemStates;
  activateTool: React.MouseEventHandler;
  deactivateTool: React.MouseEventHandler;
  isDisabled: never;
  disabled?: boolean;
}
