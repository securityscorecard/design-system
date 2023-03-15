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

export const BatchActionsType = `| HandlerActionKind
| AbsoluteLinkActionKind
| RelativeLinkActionKind
| ActionWithSubactions
`;

export const TableConfigType = `{
  hasSelection: boolean;
  onSelect: (
    ids: IdType<D>[],
    hasExclusiveSelection: boolean,
  ) => void;
  defaultSelectedRowIds: IdType<D>[];
  hasPagination: boolean;
  hasServerSidePagination: boolean;
  defaultPageSize: number;
  hasSorting: boolean;
  hasServerSideSorting: boolean;
  defaultSortBy: {
    id: IdType<D>;
    desc?: boolean;
  }[];
  rowActions: RowAction<D>[];
  NoMatchingDataComponent: ReactComponentLike;
  NoDataComponent: ReactComponentLike;
}`;

export const ControlsConfigType = `{
  hasSearch: boolean;
  searchConfig: Partial<SearchBarProps>;
  hasFiltering: boolean;
  filteringConfig: Partial<FiltersProps>;
  defaultIsFilteringOpen: boolean;
  defaultIsFilteringApplied: boolean;
  onControlToggle: (control: Controls, isActive: boolean) => void;
}`;

export const OnDataFetchFnType = `({
  pageSize: number;
  pageIndex: number;
  sortBy: SortingRule<D>[];
  filters: Filter[];
  query: string;
}) => void;`;
