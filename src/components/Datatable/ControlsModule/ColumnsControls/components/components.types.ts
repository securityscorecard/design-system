export interface ColumnsItemProps {
  columnId: string;
  label: string;
}

export interface ColumnsListProps {
  columns: string[];
  setColumns: React.Dispatch<React.SetStateAction<string[]>>;
}
