import { ReactNode } from 'react';

export interface BaseFocusTrapProps {
  children: ReactNode;
  onDeactivate: () => void;
}
