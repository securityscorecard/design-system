import { useMemo } from 'react';
import { Row } from '@tanstack/react-table';

import ExpandAllButton from '../buttons/ExpandAllButton';
import ExpandButton from '../buttons/ExpandButton';
import SelectButton from '../buttons/SelectButton';
import { DatatableColumnDef, ParsedDatatableOptions } from '../Datatable.types';
import RowActionsButton from '../../_internal/buttons/RowActionsButton';

export const displayColumnIds = {
  expand: 'ssc_dt_expand',
  select: 'ssc_dt_select',
  actions: 'ssc_dt_actions',
};
export const useDisplayColumns = <D,>(
  tableOptions: ParsedDatatableOptions<D>,
) => {
  return useMemo(
    () =>
      (
        [
          tableOptions.enableExpanding && {
            id: displayColumnIds.expand,
            header: '',
            headerComponent: (props) => <ExpandAllButton {...props} />,
            cell: (props) => <ExpandButton {...props} />,
            size: 56,
            ...tableOptions.defaultDisplayColumn,
          },
          tableOptions.enableRowSelection && {
            id: displayColumnIds.select,
            header: '',
            headerComponent:
              tableOptions.enableSelectAll &&
              tableOptions.enableMultiRowSelection ? (
                ({ table }) => (
                  <SelectButton
                    table={table}
                    hasTargetWrapper
                    isHeaderCheckbox
                  />
                )
              ) : (
                <span className="sr-only">Row selection</span>
              ),
            cell: (props) => <SelectButton {...props} hasTargetWrapper />,
            size: 56,
            ...tableOptions.defaultDisplayColumn,
          },
          tableOptions.enableRowActions && {
            id: displayColumnIds.actions,
            header: '',
            headerComponent: <span className="sr-only">Actions</span>,
            cell: ({ table, row }) => (
              <RowActionsButton
                instance={table}
                row={row as unknown as Row<D>}
              />
            ),
            size: 56,
            ...tableOptions.defaultDisplayColumn,
          },
        ] as DatatableColumnDef<D>[]
      ).filter(Boolean),
    [
      tableOptions.enableExpanding,
      tableOptions.enableRowSelection,
      tableOptions.enableSelectAll,
      tableOptions.enableMultiRowSelection,
      tableOptions.defaultDisplayColumn,
      tableOptions.enableRowActions,
    ],
  );
};
