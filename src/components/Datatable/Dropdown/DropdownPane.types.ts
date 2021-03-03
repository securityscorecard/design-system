export interface DropdownPaneStyles {
  width: number;
  space: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}
export interface DropdownPaneProps extends DropdownPaneStyles {
  onClickOut: () => void;
}
