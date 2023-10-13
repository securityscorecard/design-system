import React from 'react';
import { flexRender } from '@tanstack/react-table';

import HeaderCell from './header/HeaderCell';
import { useDatatable } from './hooks/useDatatable';
import { DatatableOptions } from './Datatable.types';

const Datatable = <D,>(props: DatatableOptions<D>) => {
  const table = useDatatable(props);

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <HeaderCell key={header.id} header={header} table={table} />
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Datatable;
