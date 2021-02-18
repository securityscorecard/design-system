export interface StateButtonProps {
  index: number;
  onClick: (index: number) => React.MouseEventHandler;
  isApplied?: boolean;
}
