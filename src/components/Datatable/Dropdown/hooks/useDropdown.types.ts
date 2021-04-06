export type UseDropdownOptions = {
  defaultIsPaneDisplayed?: boolean;
  paneWidth?: number;
  onClickOut?: () => void;
};

export type UseDropdownReturnType = {
  handleToggleTooltip: () => void;
  isPaneDisplayed: boolean;
  Pane: React.FC;
};
