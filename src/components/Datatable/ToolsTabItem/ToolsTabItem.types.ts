import PropTypes from 'prop-types';

import { Types as IconTypes, SSCIcons } from '../../Icon/Icon.types';
import {
  SSCIconNames,
  IconTypes as SSCIconTypes,
} from '../../../theme/icons/icons.enums';
import {
  SpacingSizeValue,
  SpacingSizeValuePropType,
} from '../../../types/spacing.types';
import { ToolsTabItemStates } from './ToolsTabItem.enum';

type ToolStates = typeof ToolsTabItemStates[keyof typeof ToolsTabItemStates];

export type ToolsTabItem = {
  label: string;
  toolState?: ToolStates;
  onToolActivate?: React.MouseEventHandler;
  onToolDeactivate?: React.MouseEventHandler;
  iconName?: SSCIcons | string;
  iconType?: IconTypes | string;
  isDisabled?: boolean;
};

export interface ToolsTabItemProps extends ToolsTabItem {
  margin?: SpacingSizeValue;
  className?: string;
}

export interface ToolsTabButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  margin?: SpacingSizeValue;
}

export const ToolsTabItemPropType = {
  label: PropTypes.string.isRequired,
  toolState: PropTypes.oneOf(Object.values(ToolsTabItemStates)),
  isDisabled: PropTypes.bool,
  iconName: PropTypes.oneOfType([
    PropTypes.oneOf<SSCIcons>(Object.values(SSCIconNames)),
    PropTypes.string,
  ]),
  iconType: PropTypes.oneOfType([
    PropTypes.oneOf<IconTypes>(Object.values(SSCIconTypes)),
    PropTypes.string,
  ]),
  margin: SpacingSizeValuePropType,
  className: PropTypes.string,
  onToolActivate: PropTypes.func,
  onToolDeactivate: PropTypes.func,
};
