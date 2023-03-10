import type { MouseEventHandler } from 'react';

export interface StateButtonProps {
  index: number;
  onClick: (index: number) => MouseEventHandler;
  isApplied?: boolean;
  isLoading?: boolean;
}
