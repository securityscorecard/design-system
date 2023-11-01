import React from 'react';

import { DatatableInstance } from '../Datatable.types';
import BodyRow from './BodyRow';

const Body = <D,>({ table }: { table: DatatableInstance<D> }) => {
  return (
    <tbody className="ds-table-body">
      {table.getRowModel().rows.map((row) => (
        <BodyRow key={row.id} row={row} table={table} />
      ))}
    </tbody>
  );
};

export default Body;
