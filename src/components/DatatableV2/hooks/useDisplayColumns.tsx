import React, { useMemo } from 'react';

import SelectButton from '../buttons/SelectButton';
import { DatatableColumnDef, ParsedDatatableOptions } from '../Datatable.types';

export const useDislayColumns = <D,>(
  tableOptions: ParsedDatatableOptions<D>,
) => {
  return useMemo(
    () =>
      (
        [
          tableOptions.enableRowSelection && {
            id: 'select',
            header:
              tableOptions.enableSelectAll &&
              tableOptions.enableMultiRowSelection
                ? ({ table }) => <SelectButton table={table} isSelectAll />
                : null,
            cell: ({ table, row }) => <SelectButton row={row} table={table} />,
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
