import { ReactNode } from 'react';

export interface CollapsibleProps {
  /** Main title, accepts custom react node */
  title: ReactNode;
  /** Content of collapsible panel */
  children: ReactNode;
  /** Second header line */
  subject?: string;
  /** (UNCONTROLLED) Default state of collapsible panel */
  defaultIsOpen?: boolean;
  /** (UNCONTROLLED) Callback fired when collapsible panel is opened */
  onOpen?: () => void;
  /** (CONTROLLED) Collapsible panel external state */
  isOpen?: boolean;
  /** (CONTROLLED) Callback fired on collapsible panel state change */
  onOpenChange?: (open: boolean) => void;
  className?: string;
}
