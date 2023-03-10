import type { ReactNode } from 'react';

export interface CollapsibleProps {
  className?: string;
  defaultIsOpened?: boolean;
  subject?: string;
  title: ReactNode;
  onOpen?: () => void;
}
