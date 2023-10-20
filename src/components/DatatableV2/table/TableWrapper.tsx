import React from 'react';

import { DatatableInstance } from '../Datatable.types';
import Pagination from '../toolbar/Pagination';
import Table from './Table';

const TableWrapper = <D,>({ table }: { table: DatatableInstance<D> }) => {
  return (
    <div className="ds-table-wrapper">
      <Table table={table} />
      {table.options.enablePagination && <Pagination table={table} />}
    </div>
  );
};

export default TableWrapper;
