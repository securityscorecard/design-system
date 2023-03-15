export interface CollapsibleProps {
  className?: string;
  defaultIsOpened?: boolean;
  subject?: string;
  title: React.ReactNode;
  onOpen?: () => void;
}
