import { ReactElement } from 'react';

import { SpaceSize } from '../../theme/space.types';
import { PaddingType } from '../../utils/space';
import { DropdownPlacements, DropdownTriggerEvents } from './Dropdown.enums';

export type TriggerEvents = typeof DropdownTriggerEvents[keyof typeof DropdownTriggerEvents];
export type Placements = typeof DropdownPlacements[keyof typeof DropdownPlacements];

export interface DropdownPaneStyles {
  $isElevated?: boolean;
  $maxWidth: number | 'auto';
}
export type DropdownPaneProps = React.PropsWithChildren<
  {
    isElevated: DropdownPaneStyles['$isElevated'];
    maxWidth: DropdownPaneStyles['$maxWidth'];
    onClickOut: () => void;
    hasArrow: boolean;
    arrowRef: (el: HTMLElement) => void;
    arrowStyles: React.CSSProperties;
    contentPaddingSize: SpaceSize;
    contentPaddingType: PaddingType;
  } & React.HTMLAttributes<HTMLDivElement>
>;

export interface DropdownProps {
  trigger: ReactElement;
  triggerEvents?: TriggerEvents[];
  placement?: Placements;
  innerPaddingSize?: DropdownPaneProps['contentPaddingSize'];
  innerPaddingType?: DropdownPaneProps['contentPaddingType'];
  maxPaneWidth?: DropdownPaneProps['maxWidth'];
  isPaneElevated?: DropdownPaneProps['isElevated'];
  hasPaneArrow?: DropdownPaneProps['hasArrow'];
  hoverHideDelay?: number;
  defaultIsOpen?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
}
