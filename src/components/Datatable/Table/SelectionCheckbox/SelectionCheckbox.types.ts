export interface SelectionCheckboxProps {
  id: string;
  isIndeterminate?: boolean;
  title?: string;
  hasExclusionLogic?: boolean;
  onSelect: () => void;
  onChange?: React.MouseEventHandler;
}
