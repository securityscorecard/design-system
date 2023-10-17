import React from 'react';
import { flexRender } from '@tanstack/react-table';

import HeaderCell from './header/HeaderCell';
import { useDatatable } from './hooks/useDatatable';
import { DatatableOptions } from './Datatable.types';
import Pagination from './toolbar/Pagination';
import { useLogger } from '../../hooks/useLogger';

const Datatable = <D,>(props: DatatableOptions<D>) => {
  const logger = useLogger('DatatableV2');
  const table = useDatatable(props);

  logger.log('DatatableInstance', table);

  return (
    <div>
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
      {table.options.enablePagination && <Pagination table={table} />}
    </div>
  );
};

export default Datatable;
