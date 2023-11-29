import React from 'react';

import { useLogger } from '../../hooks/useLogger';
import { useDatatable } from './hooks/useDatatable';
import { DatatableOptions } from './Datatable.types';
import TableSurface from './table/TableSurface';

const Datatable = <D,>(props: DatatableOptions<D>) => {
  const logger = useLogger('DatatableV2');
  const table = useDatatable(props);

  logger.log('Datatable Instance', table);
  logger.log('Datatable State', table.getState());

  return <TableSurface table={table} />;
};

export default Datatable;
