/* eslint-disable no-template-curly-in-string */
export default {
  columns: {
    control: {
      type: 'object',
    },
    name: 'columns',
    type: {
      name: 'array',
      value: [
        {
          raw: "Omit<\n  ColumnDef<D, V>,\n  | 'accessorFn'\n  | 'cell'\n  | 'header'\n  | 'aggregatedCell'\n  | 'aggregationFn'\n  | 'enableColumnFilter'\n  | 'enableGlobalFilter'\n  | 'enableGrouping'\n  | 'filterFn'\n  | 'footer'\n  | 'getGroupingValue'\n  | 'getUniqueValues'\n> & {\n  /**\n   * You can use this to compose cell value from multiple keys in data object.\n   *\n   * Example:\n   * If your data looks like:\n   * ```\n   * type Person = {\n   *   firstName: string;\n   *   lastName: string;\n   *   age: number;\n   * }\n   * ```\n   *\n   * You can extract full name with:\n   * ```\n   * {\n   *   header: 'Full name'\n   *   accessorFn: row => `${row.firstName} ${row.lastName}\n   *   id: 'fullname\n   * }\n   */\n  accessorFn?: AccessorFn<D, V>;\n  /**\n   * Points cell value to single key in your data object.\n   *\n   * Example:\n   * ```\n   * type Person = {\n   *   firstName: string;\n   *   lastName: string;\n   *   age: number;\n   * }\n   *\n   * {\n   *   header: 'Age'\n   *   accessorKey: 'age\n   * }\n   */\n  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);\n  /**\n   * `header` is used as a readable column name on multiple places withing the table UI.\n   *\n   *  If you want to render custom JSX in that table header cell use `headerComponent` property.\n   */\n  header: string;\n  /**\n   * Provide custom implementation for showing column header.\n   */\n  headerComponent?: (props: {\n    column: DatatableColumn<D, V>;\n    header: DatatableHeader<D>;\n    table: DatatableInstance<D>;\n  }) => ReactNode;\n  /**\n   * Provide custom implementation for showing column value.\n   */\n  cell?: (props: {\n    cell: DatatableCell<D>;\n    column: DatatableColumn<D, V>;\n    getValue: Getter<V>;\n    renderValue: Getter<V | null>;\n    row: DatatableRow<D>;\n    table: DatatableInstance<D>;\n  }) => ReactNode;\n  /**\n   * Defines column purpose. If this is left empty table will consider the column to be `data` type.\n   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property\n   * to `display`. This will filter out the column from column ordering and disables table functions\n   * (pinning, sizing, sorting, etc).\n   *\n   * @default data\n   */\n  columnDefType?: 'display' | 'data';\n  /**\n   * Enables/disables actions menu in header for given column.\n   */\n  enableColumnActions?: boolean;\n  /**\n   * You can provide your own implementation of the column header tooltip. This property accepts\n   * React component with properties:\n   *  - `column` - current column object\n   *  - `header` - current header object\n   *  - `table` - current instance of the table\n   */\n  renderHeaderTooltip?: (props: {\n    column: DatatableColumn<D, V>;\n    header: DatatableHeader<D>;\n    table: DatatableInstance<D>;\n  }) => ReactNode;\n}",
          name: 'intersection',
          value: [
            {
              raw: "Omit<\n  ColumnDef<D, V>,\n  | 'accessorFn'\n  | 'cell'\n  | 'header'\n  | 'aggregatedCell'\n  | 'aggregationFn'\n  | 'enableColumnFilter'\n  | 'enableGlobalFilter'\n  | 'enableGrouping'\n  | 'filterFn'\n  | 'footer'\n  | 'getGroupingValue'\n  | 'getUniqueValues'\n>",
              name: 'other',
              value: 'Omit',
            },
            {
              raw: "{\n  /**\n   * You can use this to compose cell value from multiple keys in data object.\n   *\n   * Example:\n   * If your data looks like:\n   * ```\n   * type Person = {\n   *   firstName: string;\n   *   lastName: string;\n   *   age: number;\n   * }\n   * ```\n   *\n   * You can extract full name with:\n   * ```\n   * {\n   *   header: 'Full name'\n   *   accessorFn: row => `${row.firstName} ${row.lastName}\n   *   id: 'fullname\n   * }\n   */\n  accessorFn?: AccessorFn<D, V>;\n  /**\n   * Points cell value to single key in your data object.\n   *\n   * Example:\n   * ```\n   * type Person = {\n   *   firstName: string;\n   *   lastName: string;\n   *   age: number;\n   * }\n   *\n   * {\n   *   header: 'Age'\n   *   accessorKey: 'age\n   * }\n   */\n  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);\n  /**\n   * `header` is used as a readable column name on multiple places withing the table UI.\n   *\n   *  If you want to render custom JSX in that table header cell use `headerComponent` property.\n   */\n  header: string;\n  /**\n   * Provide custom implementation for showing column header.\n   */\n  headerComponent?: (props: {\n    column: DatatableColumn<D, V>;\n    header: DatatableHeader<D>;\n    table: DatatableInstance<D>;\n  }) => ReactNode;\n  /**\n   * Provide custom implementation for showing column value.\n   */\n  cell?: (props: {\n    cell: DatatableCell<D>;\n    column: DatatableColumn<D, V>;\n    getValue: Getter<V>;\n    renderValue: Getter<V | null>;\n    row: DatatableRow<D>;\n    table: DatatableInstance<D>;\n  }) => ReactNode;\n  /**\n   * Defines column purpose. If this is left empty table will consider the column to be `data` type.\n   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property\n   * to `display`. This will filter out the column from column ordering and disables table functions\n   * (pinning, sizing, sorting, etc).\n   *\n   * @default data\n   */\n  columnDefType?: 'display' | 'data';\n  /**\n   * Enables/disables actions menu in header for given column.\n   */\n  enableColumnActions?: boolean;\n  /**\n   * You can provide your own implementation of the column header tooltip. This property accepts\n   * React component with properties:\n   *  - `column` - current column object\n   *  - `header` - current header object\n   *  - `table` - current instance of the table\n   */\n  renderHeaderTooltip?: (props: {\n    column: DatatableColumn<D, V>;\n    header: DatatableHeader<D>;\n    table: DatatableInstance<D>;\n  }) => ReactNode;\n}",
              name: 'object',
              value: {
                accessorFn: {
                  raw: 'AccessorFn<D, V>',
                  name: 'other',
                  value: 'AccessorFn',
                },
                accessorKey: {
                  raw: 'DeepKeys<D> | (string & Record<string, unknown>)',
                  name: 'union',
                  value: [
                    {
                      raw: 'DeepKeys<D>',
                      name: 'other',
                      value: 'DeepKeys',
                    },
                    {
                      name: 'other',
                      value: 'unknown',
                    },
                  ],
                },
                header: {
                  name: 'string',
                },
                headerComponent: {
                  raw: '(props: {\n  column: DatatableColumn<D, V>;\n  header: DatatableHeader<D>;\n  table: DatatableInstance<D>;\n}) => ReactNode',
                  name: 'function',
                },
                cell: {
                  raw: '(props: {\n  cell: DatatableCell<D>;\n  column: DatatableColumn<D, V>;\n  getValue: Getter<V>;\n  renderValue: Getter<V | null>;\n  row: DatatableRow<D>;\n  table: DatatableInstance<D>;\n}) => ReactNode',
                  name: 'function',
                },
                columnDefType: {
                  raw: "'display' | 'data'",
                  name: 'enum',
                  value: ['display', 'data'],
                },
                enableColumnActions: {
                  name: 'boolean',
                },
                renderHeaderTooltip: {
                  raw: '(props: {\n  column: DatatableColumn<D, V>;\n  header: DatatableHeader<D>;\n  table: DatatableInstance<D>;\n}) => ReactNode',
                  name: 'function',
                },
              },
            },
          ],
        },
      ],
      required: true,
      raw: 'DatatableColumnDef<D>[]',
    },
    description:
      "Definition of the table columns. Each column definition is REQUIRED to have `header` property\nset. If you define a column that is not used for displaing row data (e.g. have ...),\nplease provide `columnDefType: 'display'`. Setting this property will disable some unnecessary\nfunctionalities and filter out the column from column orderdering.",
    table: {
      type: {
        summary: 'DatatableColumnDef<D>[]',
      },
    },
  },
  data: {
    control: {
      type: 'object',
    },
    name: 'data',
    type: {
      name: 'array',
      value: [
        {
          name: 'other',
          value: 'D',
        },
      ],
      required: true,
      raw: 'D[]',
    },
    description: 'Table data that will be displayed.',
    table: {
      type: {
        summary: 'D[]',
      },
    },
  },
  enablePersistentState: {
    control: {
      type: 'boolean',
    },
    name: 'enablePersistentState',
    type: {
      name: 'boolean',
      required: false,
    },
    description:
      "Enables/disables storing table state into LocalStorage. This will automatically store pinned\nand hidden columns, columns order and size and sorting. This property REQUIRES 'id' prop to be\nset. The state will be stored in LS with key in format `sscds_dt_<id>`.",
    table: {
      type: {
        summary: 'boolean',
      },
    },
  },
  id: {
    control: {
      type: 'text',
    },
    name: 'id',
    type: {
      name: 'string',
      required: true,
    },
    description:
      'Unique table identifier. Used as id for storing table state to LocalStorage when enablePersistentState is enabled',
    table: {
      type: {
        summary: 'string',
      },
    },
  },
  initialState: {
    control: {
      type: 'object',
    },
    name: 'initialState',
    type: {
      name: 'other',
      value: 'Partial',
      required: false,
      raw: 'Partial<DatatableInitialState>',
    },
    description:
      'Default state of the table. This is used when table is initialized and is used when state is\nrestored to default.',
    table: {
      type: {
        summary: 'Partial',
      },
    },
  },
  rowsPerPageOptions: {
    control: {
      type: 'object',
    },
    name: 'rowsPerPageOptions',
    type: {
      name: 'array',
      value: [
        {
          name: 'number',
        },
      ],
      required: false,
      raw: 'number[]',
    },
    description:
      'List of options for the row count displayed on the current page.\n\ndefault: `[10, 25, 50, 100]`',
    table: {
      type: {
        summary: 'number[]',
      },
    },
  },
  getRowId: {
    name: 'getRowId',
    type: {
      name: 'function',
    },
  },
  enableColumnActions: {
    control: {
      type: 'boolean',
    },
    name: 'enableColumnActions',
    description:
      'Enables/disables actions menu in column header with column-related actions.',
    type: {
      required: false,
      name: 'boolean',
    },
    table: {
      type: {
        summary: 'boolean',
      },
    },
  },
  enableColumnOrdering: {
    control: {
      type: 'boolean',
    },
    name: 'enableColumnOrdering',
    description:
      'Enables/disables column ordering for the table.\nControlled in table column settings panel accessible through the column actions menu.',
    type: {
      required: false,
      name: 'boolean',
    },
    table: {
      type: {
        summary: 'boolean',
      },
    },
  },
  enableColumnPinning: {
    control: {
      type: 'boolean',
    },
    name: 'enableColumnPinning',
    description:
      'Enables/disables column pinning for the table. Controlled in the column actions menu or table\ncolumn settings panel accessible through the column actions menu.',
    type: {
      required: false,
      name: 'boolean',
    },
    table: {
      type: {
        summary: 'boolean',
      },
    },
  },
  enableColumnResizing: {
    control: {
      type: 'boolean',
    },
    name: 'enableColumnResizing',
    description:
      'Enables/disables column resizing for the table. Columns can be resized by dragging handler in\nthe column header.',
    type: {
      required: false,
      name: 'boolean',
    },
    table: {
      type: {
        summary: 'boolean',
      },
    },
  },
  enableExpanding: {
    control: {
      type: 'boolean',
    },
    name: 'enableExpanding',
    description: 'Enables/disables expanding detail panel for all rows.',
    type: {
      required: false,
      name: 'boolean',
    },
    table: {
      type: {
        summary: 'boolean',
      },
    },
  },
  enableExpandAll: {
    control: {
      type: 'boolean',
    },
    name: 'enableExpandAll',
    description:
      'Enables/disables button in the table header that expands all detail panels at once.',
    type: {
      required: false,
      name: 'boolean',
    },
    table: {
      type: {
        summary: 'boolean',
      },
    },
  },
  enableFullScreenMode: {
    control: {
      type: 'boolean',
    },
    name: 'enableFullScreenMode',
    description:
      'Enables/disables switching between fullscreen and normal mode.',
    type: {
      required: false,
      name: 'boolean',
    },
    table: {
      type: {
        summary: 'boolean',
      },
    },
  },
  enableHiding: {
    control: {
      type: 'boolean',
    },
    name: 'enableHiding',
    description:
      'Enables/disables column hiding for the table. Controlled in the column actions menu or table\ncolumn settings panel accessible through the column actions menu.',
    type: {
      required: false,
      name: 'boolean',
    },
    table: {
      type: {
        summary: 'boolean',
      },
    },
  },
  enableMultiRowSelection: {
    control: {
      type: 'object',
    },
    name: 'enableMultiRowSelection',
    description:
      'Enables/disables selection of multiple rows in the table. If this is `false` radio buttons will\nbe displayed instead of checkboxes and there will be no select all option in the table header.',
    type: {
      required: false,
      raw: "TableOptions<D>['enableMultiRowSelection']",
      name: 'other',
      value: "TableOptions['enableMultiRowSelection']",
    },
    table: {
      type: {
        summary: "TableOptions['enableMultiRowSelection']",
      },
    },
  },
  enableMultiSort: {
    control: {
      type: 'boolean',
    },
    name: 'enableMultiSort',
    description:
      'Enables/disables if multiple columns can be sorted at the same time. If enabled multiple columns\ncan be sorted while SHIFT key is hold',
    type: {
      required: false,
      name: 'boolean',
    },
    table: {
      type: {
        summary: 'boolean',
      },
    },
  },
  enableMultiRemove: {
    control: {
      type: 'boolean',
    },
    name: 'enableMultiRemove',
    description: 'Enables/disables the ability to remove multi-sorts',
    type: {
      required: false,
      name: 'boolean',
    },
    table: {
      type: {
        summary: 'boolean',
      },
    },
  },
  enablePagination: {
    control: {
      type: 'boolean',
    },
    name: 'enablePagination',
    description: 'Enables/disables pagination for the table.',
    type: {
      required: false,
      name: 'boolean',
    },
    table: {
      type: {
        summary: 'boolean',
      },
    },
  },
  enableRowActions: {
    control: {
      type: 'boolean',
    },
    name: 'enableRowActions',
    description: 'Enables/disables row actions column for the table.',
    type: {
      required: false,
      name: 'boolean',
    },
    table: {
      type: {
        summary: 'boolean',
      },
    },
  },
  enableRowSelection: {
    control: {
      type: 'object',
    },
    name: 'enableRowSelection',
    description: 'Enables/disables row selection for the table.',
    type: {
      required: false,
      raw: "TableOptions<D>['enableRowSelection']",
      name: 'other',
      value: "TableOptions['enableRowSelection']",
    },
    table: {
      type: {
        summary: "TableOptions['enableRowSelection']",
      },
    },
  },
  enableBatchRowSelection: {
    control: {
      type: 'boolean',
    },
    name: 'enableBatchRowSelection',
    description:
      'Enables/disables batch row selection when `Shift` key is pressed.',
    type: {
      required: false,
      name: 'boolean',
    },
    table: {
      type: {
        summary: 'boolean',
      },
    },
  },
  enableRowsPerPage: {
    control: {
      type: 'boolean',
    },
    name: 'enableRowsPerPage',
    description:
      'Enables/disables rows per page selector for the table. This property REQUIRES\n`enablePagination` to be true.',
    type: {
      required: false,
      name: 'boolean',
    },
    table: {
      type: {
        summary: 'boolean',
      },
    },
  },
  enableSelectAll: {
    control: {
      type: 'boolean',
    },
    name: 'enableSelectAll',
    description:
      'Enables/disables checkbox in the table header that selects all rows at once.',
    type: {
      required: false,
      name: 'boolean',
    },
    table: {
      type: {
        summary: 'boolean',
      },
    },
  },
  enableSelectionToolbar: {
    control: {
      type: 'boolean',
    },
    name: 'enableSelectionToolbar',
    description:
      "Enables/disables the selection toolbar with the batch action buttons. If this is set to `false`\nconsumers has to control the selection state on their own as the Datatable doesn't provide other\nway how to access the interal state.",
    type: {
      required: false,
      name: 'boolean',
    },
    table: {
      type: {
        summary: 'boolean',
      },
    },
  },
  enableSorting: {
    control: {
      type: 'boolean',
    },
    name: 'enableSorting',
    description: 'Enables/disables table sorting',
    type: {
      required: false,
      name: 'boolean',
    },
    table: {
      type: {
        summary: 'boolean',
      },
    },
  },
  enableSortingRemoval: {
    control: {
      type: 'boolean',
    },
    name: 'enableSortingRemoval',
    description:
      'Enables/disables if column can be toggled to unsorted state after sorting happened before',
    type: {
      required: false,
      name: 'boolean',
    },
    table: {
      type: {
        summary: 'boolean',
      },
    },
  },
  enableTopToolbar: {
    control: {
      type: 'boolean',
    },
    name: 'enableTopToolbar',
    description: 'Enables/disables the top toolbar with table settings buttons',
    type: {
      required: false,
      name: 'boolean',
    },
    table: {
      type: {
        summary: 'boolean',
      },
    },
  },
  onFullscreenModeChange: {
    control: {
      type: 'object',
    },
    name: 'onFullscreenModeChange',
    description:
      'If provided, this function will be called with an `updaterFn` when `state.isFullscreenMode`\nchanges. This overrides the default internal state management, so you are expected to manage\nthis state on your own. You can pass the managed state back to the table via the\n`tableOptions.state.isFullscreenMode` option.',
    type: {
      required: false,
      raw: 'Dispatch<SetStateAction<boolean>>',
      name: 'other',
      value: 'Dispatch',
    },
    table: {
      type: {
        summary: 'Dispatch',
      },
    },
  },
  onShowColumnSettings: {
    control: {
      type: 'object',
    },
    name: 'onShowColumnSettings',
    description:
      'If provided, this function will be called with an `updaterFn` when `state.showColumnSetting`\nchanges. This overrides the default internal state management, so you are expected to manage\nthis state on your own. You can pass the managed state back to the table via the\n`tableOptions.state.showColumnSettings` option.',
    type: {
      required: false,
      raw: 'Dispatch<SetStateAction<boolean>>',
      name: 'other',
      value: 'Dispatch',
    },
    table: {
      type: {
        summary: 'Dispatch',
      },
    },
  },
  onActiveRowIdChange: {
    control: {
      type: 'object',
    },
    name: 'onActiveRowIdChange',
    description:
      'If provided, this function will be called with an `updaterFn` when `state.activeRowId`\nchanges. This overrides the default internal state management, so you are expected to manage\nthis state on your own. You can pass the managed state back to the table via the\n`tableOptions.state.activeRowId` option.',
    type: {
      required: false,
      raw: 'Dispatch<SetStateAction<string>>',
      name: 'other',
      value: 'Dispatch',
    },
    table: {
      type: {
        summary: 'Dispatch',
      },
    },
  },
  onRowClick: {
    name: 'onRowClick',
    description:
      'Callback that is called when user clicks anywhere in the row area. Clicking on the selection\ncheckbox, row expand button and the row actions stops event propagation and does not trigger\nthe row click callback. We are passing argmuments into the callback:\n - `row` - current row, row data are accessible through `row.original`\n - `table` - current instance of the table',
    type: {
      required: false,
      raw: '(props: {\n  row: DatatableRow<D>;\n  table: DatatableInstance<D>;\n}) => void',
      name: 'function',
    },
    table: {
      type: {
        summary:
          '(props: {\n  row: DatatableRow<D>;\n  table: DatatableInstance<D>;\n}) => void',
      },
    },
  },
  renderDetailPanel: {
    name: 'renderDetailPanel',
    description:
      'Provide your own implementation of row details panel. This property accepts React component\nwith properties:\n - `row` - current row, row data are accessible through `row.original`\n - `table` - current instance of the table',
    type: {
      required: false,
      raw: '(props: {\n  row: DatatableRow<D>;\n  table: DatatableInstance<D>;\n}) => ReactNode',
      name: 'function',
    },
    table: {
      type: {
        summary:
          '(props: {\n  row: DatatableRow<D>;\n  table: DatatableInstance<D>;\n}) => ReactNode',
      },
    },
  },
  renderNoDataFallback: {
    name: 'renderNoDataFallback',
    description:
      'You can provide your own implementation of the state when there are no data in the table. This\nproperty accepts React component with one property `table` which holds current instance of the\ntable.',
    type: {
      required: false,
      raw: '(props: { table: DatatableInstance<D> }) => ReactNode',
      name: 'function',
    },
    table: {
      type: {
        summary: '(props: { table: DatatableInstance<D> }) => ReactNode',
      },
    },
  },
  renderRowSelectionActions: {
    name: 'renderRowSelectionActions',
    description:
      "You can provide your own implementation of the row actions container. This property accepts\nReact component with properties:\n - `selectedRows` - array of currently selected rows or list of row ids if manualPagination is enabled and rowSelectionMode is set to 'multi-page'\n - `totalRowCount` - count of all rows in the table\n - `table` - current instance of the table\n - `isVirtualSelectAll` - boolean flag if the select all checkbox is in virtual mode",
    type: {
      required: false,
      raw: '(props: {\n  selectedRows: D[] | (string | number)[];\n  totalRowCount: number;\n  table: DatatableInstance<D>;\n}) => ReactNode',
      name: 'function',
    },
    table: {
      type: {
        summary:
          '(props: {\n  selectedRows: D[] | (string | number)[];\n  totalRowCount: number;\n  table: DatatableInstance<D>;\n  isVirtualSelectAll: boolean; }) => ReactNode',
      },
    },
  },
  rowActions: {
    control: {
      type: 'object',
    },
    name: 'rowActions',
    description:
      'List of actions available on the row data. Actions will be rendered as last column of the table.\nIf only one action is provided it will be rendered directly in the column. If multiple actions\nare provided actions will be rendered in dropdown menu.',
    type: {
      required: false,
      raw: 'RowAction<D>[]',
      name: 'array',
      value: [
        {
          raw: 'null | {\n  label: RowActionCallbackUnion<Data, string>;\n  iconName: RowActionCallbackUnion<Data, IconNames>;\n  iconType?: RowActionCallbackUnion<Data, RegularIconTypes>;\n  onClick(props: {\n    row: Row<Data>;\n    table: Instance<Data>;\n  }): (event: Event) => void;\n  isDisabled?: RowActionCallbackUnion<Data, boolean>;\n  isDestructive?: boolean;\n}',
          name: 'union',
          value: [
            {
              name: 'other',
              value: 'null',
            },
            {
              raw: '{\n  label: RowActionCallbackUnion<Data, string>;\n  iconName: RowActionCallbackUnion<Data, IconNames>;\n  iconType?: RowActionCallbackUnion<Data, RegularIconTypes>;\n  onClick(props: {\n    row: Row<Data>;\n    table: Instance<Data>;\n  }): (event: Event) => void;\n  isDisabled?: RowActionCallbackUnion<Data, boolean>;\n  isDestructive?: boolean;\n}',
              name: 'object',
              value: {
                label: {
                  raw: '| Type\n| ((props: { row: Row<Data>; table: Instance<Data> }) => Type)',
                  name: 'union',
                  value: [
                    {
                      name: 'string',
                    },
                    {
                      name: 'other',
                      value: 'unknown',
                    },
                  ],
                },
                iconName: {
                  raw: '| Type\n| ((props: { row: Row<Data>; table: Instance<Data> }) => Type)',
                  name: 'union',
                  value: [
                    {
                      name: 'string',
                    },
                    {
                      name: 'other',
                      value: 'unknown',
                    },
                  ],
                },
                iconType: {
                  raw: '| Type\n| ((props: { row: Row<Data>; table: Instance<Data> }) => Type)',
                  name: 'union',
                  value: [
                    {
                      name: 'string',
                    },
                    {
                      name: 'other',
                      value: 'unknown',
                    },
                  ],
                },
                onClick: {
                  raw: '(event: Event) => void',
                  name: 'function',
                },
                isDisabled: {
                  raw: '| Type\n| ((props: { row: Row<Data>; table: Instance<Data> }) => Type)',
                  name: 'union',
                  value: [
                    {
                      name: 'string',
                    },
                    {
                      name: 'other',
                      value: 'unknown',
                    },
                  ],
                },
                isDestructive: {
                  name: 'boolean',
                },
              },
            },
          ],
        },
      ],
    },
    table: {
      type: {
        summary: 'RowAction<D>[]',
      },
    },
  },
  rowCount: {
    control: {
      type: 'number',
    },
    name: 'rowCount',
    description:
      'Expected number of rows in the dataset which is used for displaying pagination correctly when\npagination is not managed internally. This property is REQUIRED for the manual (managed,\nserver-side) pagination.',
    type: {
      required: false,
      name: 'number',
    },
    table: {
      type: {
        summary: 'number',
      },
    },
  },
  rowSelectionMode: {
    control: {
      type: 'radio',
    },
    options: ['single-page', 'multi-page'],
    name: 'rowSelectionMode',
    description:
      "Available only if `manualPagination: true`.\n\ndefault: 'single-page`",
    type: {
      required: false,
      raw: "'single-page' | 'multi-page'",
      name: 'enum',
    },
    table: {
      type: {
        summary: 'union',
      },
    },
  },
  selectAllMode: {
    control: {
      type: 'radio',
    },
    options: ['page', 'all', 'virtual'],
    name: 'selectAllMode',
    description:
      'Switch mode for the select all checkbox in the table header. When `page` is set checkbox will\nselect all rows in the current page. When `all` is set checkbox will select all rows in the\ntable.  When `virtual` is set checkbox will select all rows in the table but the selection state will not\ncontain all row ids. `isVirtualSelectAll` should be used instead.\nThis is useful when you have a large dataset and you want to select all rows for batch operations.',
    type: {
      required: false,
      raw: "'page' | 'all' | 'virtual'",
      name: 'enum',
    },
    table: {
      type: {
        summary: 'union',
      },
    },
  },
  state: {
    control: {
      type: 'object',
    },
    name: 'state',
    description:
      'Current state of the table. Used when you need to manage table state on your own.',
    type: {
      required: false,
      raw: 'Partial<DatatableState>',
      name: 'other',
      value: 'Partial',
    },
    table: {
      type: {
        summary: 'Partial',
      },
    },
  },
};
