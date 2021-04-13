export type UseDropdownOptions = {
  defaultIsPaneDisplayed?: boolean;
  paneWidth?: number;
  onClickOut?: () => void;
};

export type UseDropdownReturnType = {
  handleToggleDropdown: () => void;
  handleShowDropdown: () => void;
  handleHideDropdown: () => void;
  isPaneDisplayed: boolean;
  Pane: React.FC;
};
