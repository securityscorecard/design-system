export interface StateButtonProps {
  uuid: string;
  onClick: (uuid: string) => void;
  isFilterApplied?: boolean;
}
