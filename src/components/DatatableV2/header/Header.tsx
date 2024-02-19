import type { DatatableInstance } from '../Datatable.types';

import HeaderRow from './HeaderRow';

const Header = <D,>({ table }: { table: DatatableInstance<D> }) => {
  return (
    <thead className="ds-table-header">
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
