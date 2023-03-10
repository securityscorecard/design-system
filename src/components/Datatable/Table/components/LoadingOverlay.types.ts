import type { MouseEvent } from 'react';

export interface LoadingOverlayProps {
  onCancel: (event: MouseEvent<HTMLElement>) => void;
  isCancelable?: boolean;
}
