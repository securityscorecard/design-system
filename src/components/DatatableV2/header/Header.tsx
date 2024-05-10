import React from 'react';

import { DatatableInstance } from '../Datatable.types';
import HeaderRow from './HeaderRow';
import { getSelectedRowsCount } from '../toolbar/Selection';

const Header = <D,>({ table }: { table: DatatableInstance<D> }) => {
  const {
    options: { enableRowSelection },
  } = table;
  const selectedRowsCount = getSelectedRowsCount<D>(table);

  return (
    <thead
      className="ds-table-header"
      style={
        enableRowSelection && selectedRowsCount > 0 ? { display: 'none' } : null
      }
    >
      {table.getHeaderGroups().map((headerGroup) => (
        <HeaderRow
          key={headerGroup.id}
          headerGroup={headerGroup}
          table={table}
        />
      ))}
    </thead>
  );
};

export default Header;
