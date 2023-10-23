import React from 'react';

import { DatatableInstance } from '../Datatable.types';
import Pagination from '../toolbar/Pagination';
import Selection from '../toolbar/Selection';
import Table from './Table';

const TableWrapper = <D,>({ table }: { table: DatatableInstance<D> }) => {
  return (
    <div className="ds-table-wrapper">
      {table.options.enableRowSelection && <Selection table={table} />}
      <Table table={table} />
      {table.options.enablePagination && <Pagination table={table} />}
    </div>
  );
};

export default TableWrapper;
