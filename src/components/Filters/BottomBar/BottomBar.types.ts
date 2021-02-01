export interface BottomBarProps {
  onAdd: () => void;
  onClearAll: () => void;
  onApply: () => void;
  onClose: () => void;
  onCancel: () => void;
  isLoading?: boolean;
}
