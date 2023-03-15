export interface DropdownPaneStyles {
  $isElevated?: boolean;
}
export interface DropdownPaneProps extends DropdownPaneStyles {
  isElevated: DropdownPaneStyles['$isElevated'];
  onClickOut: () => void;
  style: React.CSSProperties;
}
