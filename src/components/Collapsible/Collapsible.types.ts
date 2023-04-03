import { CollapsibleVariants } from './Collapsible.enums';

export interface CollapsibleProps {
  className?: string;
  defaultIsOpened?: boolean;
  isOpen?: boolean;
  subject?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  onChange?: (value: boolean) => void;
  onOpen?: () => void;
  variant?: CollapsibleVariants;
}
