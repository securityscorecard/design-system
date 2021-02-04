import { Types as IconTypes, SSCIcons } from '../../Icon/Icon.types';
import { SpacingSizeValue } from '../../../types/spacing.types';
import { ToolsTabItemStates } from './ToolsTabItem.enum';

type ToolStates = typeof ToolsTabItemStates[keyof typeof ToolsTabItemStates];

export type ToolsTabItem = {
  label: string;
  toolState?: ToolStates;
  onToolActivate: React.MouseEventHandler;
  onToolDeactivate: React.MouseEventHandler;
  iconName?: SSCIcons | string;
  iconType?: IconTypes | string;
  margin?: SpacingSizeValue;
  isDisabled?: boolean;
};

export interface ToolsTabItemProps {
  ToolsTabItem;
  className?: string;
}

export interface ToolsTabButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  margin?: SpacingSizeValue;
}
