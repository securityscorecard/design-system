import React from 'react';

import { useLogger } from '../../hooks/useLogger';
import { useDatatable } from './hooks/useDatatable';
import { DatatableOptions } from './Datatable.types';
import TableWrapper from './table/TableWrapper';

const Datatable = <D,>(props: DatatableOptions<D>) => {
  const logger = useLogger('DatatableV2');
  const table = useDatatable(props);

  logger.log('Datatable Instance', table);
  logger.log('Datatable State', table.getState());

  return <TableWrapper table={table} />;
};

export default Datatable;
