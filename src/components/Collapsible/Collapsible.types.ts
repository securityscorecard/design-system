export interface CollapsibleProps {
  className?: string;
  defaultIsOpened?: boolean;
  subject: string;
  title: string;
  onOpen?: () => void;
}
