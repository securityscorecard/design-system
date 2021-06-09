export interface ColumnsControlsProps {
  isOpen?: boolean;
  onOpen: () => void;
  onClose: () => void;
  onApply: (shouldApply: boolean) => void;
  onReset?: () => void;
}
