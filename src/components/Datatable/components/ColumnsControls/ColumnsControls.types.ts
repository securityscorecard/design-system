import type { ReactNode } from 'react';

interface RenderProps {
  hiddenColumns: number;
}

export interface ColumnsControlsProps {
  isOpen?: boolean;
  onOpen: () => void;
  onClose: () => void;
  onApply: (shouldApply: boolean) => void;
  onReset?: () => void;
  children: ReactNode | ((obj: RenderProps) => ReactNode);
}
