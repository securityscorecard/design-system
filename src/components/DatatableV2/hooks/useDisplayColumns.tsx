import React, { useMemo } from 'react';

import SelectButton from '../buttons/SelectButton';
import { DatatableColumnDef, ParsedDatatableOptions } from '../Datatable.types';

export const displayColumnIds = {
  select: 'ssc_dt_select',
};
export const useDisplayColumns = <D,>(
  tableOptions: ParsedDatatableOptions<D>,
) => {
  return useMemo(
    () =>
      (
        [
          tableOptions.enableRowSelection && {
            id: displayColumnIds.select,
            header: '',
            headerComponent:
              tableOptions.enableSelectAll &&
              tableOptions.enableMultiRowSelection
                ? ({ table }) => <SelectButton table={table} isSelectAll />
                : null,
            cell: ({ table, row }) => <SelectButton row={row} table={table} />,
            size: 40,
            ...tableOptions.defaultDisplayColumn,
          },
        ] as DatatableColumnDef<D>[]
      ).filter(Boolean),
    [
      tableOptions.enableRowSelection,
      tableOptions.enableSelectAll,
      tableOptions.enableMultiRowSelection,
      tableOptions.defaultDisplayColumn,
    ],
  );
};
