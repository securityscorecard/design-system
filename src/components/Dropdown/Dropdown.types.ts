import type {
  CSSProperties,
  HTMLAttributes,
  PropsWithChildren,
  ReactElement,
  Ref,
} from 'react';
import type { SpaceSize } from '../../theme/space.types';
import type { PaddingType } from '../../utils/space';
import type {
  DropdownPlacements,
  DropdownTriggerEvents,
} from './Dropdown.enums';

export type TriggerEvents =
  typeof DropdownTriggerEvents[keyof typeof DropdownTriggerEvents];
export type Placements =
  typeof DropdownPlacements[keyof typeof DropdownPlacements];

export interface DropdownPaneStyles {
  $isElevated?: boolean;
  $maxWidth: number | 'auto';
}
export type DropdownPaneProps = PropsWithChildren<
  {
    isElevated: DropdownPaneStyles['$isElevated'];
    maxWidth: DropdownPaneStyles['$maxWidth'];
    onClickOut?: () => void;
    hasArrow: boolean;
    arrowRef: (el: HTMLElement) => void;
    arrowStyles: CSSProperties;
    contentPaddingSize: SpaceSize;
    contentPaddingType: PaddingType;
  } & HTMLAttributes<HTMLDivElement>
>;

interface BaseDropdownProps {
  /**
   * Alignement of the dropdown pane.
   */
  placement?: Placements;
  /**
   * Size of padding in the dropdown pane.
   */
  innerPaddingSize?: DropdownPaneProps['contentPaddingSize'];
  /**
   * Type of padding in the dropdown pane.
   */
  innerPaddingType?: DropdownPaneProps['contentPaddingType'];
  /**
   * Maximal width of the dropdown pane. When set to 'auto',
   * the pane width is controlled by it's content.
   */
  maxPaneWidth?: DropdownPaneProps['maxWidth'];
  /**
   * Should have the dropdown pane box shadow.
   */
  isPaneElevated?: DropdownPaneProps['isElevated'];
  /**
   * Should show arrow tip pointing to the center of trigger element.
   */
  hasPaneArrow?: DropdownPaneProps['hasArrow'];
}

export interface ControlledDropdownProps extends BaseDropdownProps {
  /**
   * Reference to trigger element used for calculation of the dropdown pane.
   */
  triggerEl: HTMLElement;
  /**
   * Boolean that control the dropdown pane visibility.
   */
  isOpen: boolean;
  /**
   * Boolean that enabled the dropdown pane focus trap.
   */
  focusTrap?: boolean;
  /**
   * Callback called when user clicks outside the dropdown pane.
   */
  onClickOut?: DropdownPaneProps['onClickOut'];
}
export interface DropdownProps extends BaseDropdownProps {
  /**
   * React element used to trigger the dropdown pane.
   */
  trigger: ReactElement;
  /**
   * Array of events which triggers the dropdown pane visibility change.
   */
  triggerEvents?: TriggerEvents[];
  /**
   * Delay until the dropdown pane is closed. Used only for `hover` triggerEvent, in ms.
   */
  hoverHideDelay?: number;
  /**
   * Default visibility state.
   */
  defaultIsOpen?: boolean;
  /**
   * Callback called when the dropdown pane is closed.
   */
  onClose?: () => void;
  /**
   * Callback called when the dropdown pane is opened.
   */
  onOpen?: () => void;
  /**
   * Imperative handle ref
   */
  ref?: Ref<{
    togglePane: () => void;
    hidePane: () => void;
    showPane: () => void;
  }>;
}

export type InteractiveElement = HTMLButtonElement | HTMLAnchorElement;
