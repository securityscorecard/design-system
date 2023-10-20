import React from 'react';

import { DatatableInstance } from '../Datatable.types';
import Body from '../body/Body';
import Header from '../header/Header';

const Table = <D,>({ table }: { table: DatatableInstance<D> }) => {
  return (
    <table className="ds-table">
      <Header table={table} />
      <Body table={table} />
    </table>
  );
};

export default Table;
