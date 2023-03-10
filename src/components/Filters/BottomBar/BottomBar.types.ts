import type { MouseEvent } from 'react';

export interface BottomBarProps {
  onAdd: (event: MouseEvent<HTMLElement>) => void;
  onClearAll: (event: MouseEvent<HTMLElement>) => void;
  onClose: (event: MouseEvent<HTMLElement>) => void;
  onCancel: (event: MouseEvent<HTMLElement>) => void;
  onSubmit: (event: MouseEvent<HTMLElement>) => void;
  hasUnappliedFilters: boolean;
  isLoading?: boolean;
  isCancelEnabled?: boolean;
  isApplyDisabled?: boolean;
  hasCloseButton?: boolean;
  hasApplyButton?: boolean;
}
