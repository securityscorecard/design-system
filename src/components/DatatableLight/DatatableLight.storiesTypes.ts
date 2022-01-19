export const ColumnsType = `{
  Header: string;
  cellType?: CellTypes;
  cellLinkComponent?: ReactComponentLike;
  cellOnClick?: (value: CellValue, rowData: D) => void;
  cellHrefComposer?: (value: CellValue, rowData: D) => string;
  cellToComposer?: (value: CellValue, rowData: D) => To;
  cellFormatter?: (value: CellValue, rowData: D) => string;
  cellTooltipPopupComposer?: (value: CellValue, rowData: D) => JSX.Element;
  nullCondition?: (value: CellValue) => boolean;
  nullConditionValue?: string;
  multiValueDisplayLimit?: number;
  headerTooltip?: JSX.Element;

  ...rest of Column options from 'react-table'
}`;

export const DataPrimaryKeyType = `| string
| (originalRow: D, relativeIndex: number, parent?: Row<D>) => string`;

export const TableConfigType = `{
  hasPagination: boolean;
  defaultPageSize: number;
  hasSorting: boolean;
  defaultSortBy: {
    id: IdType<D>;
    desc?: boolean;
  }[];
  NoDataComponent: ReactComponentLike;
}`;
