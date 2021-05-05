export interface DropdownPaneStyles {
  width: number;
  space: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  isElevated?: boolean;
}
export interface DropdownPaneProps extends DropdownPaneStyles {
  onClickOut: () => void;
}
