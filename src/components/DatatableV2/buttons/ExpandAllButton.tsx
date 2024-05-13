import React from 'react';

import { DatatableInstance } from '../Datatable.types';
import IconButton from './IconButton';

const ExpandAllButton = <D,>({ table }: { table: DatatableInstance<D> }) => {
  const {
    getIsSomeRowsExpanded,
    getState,
    options: { renderDetailPanel },
    toggleAllRowsExpanded,
  } = table;

  const { isLoading } = getState();
  const areSomeRowsExpanded = getIsSomeRowsExpanded();

  return (
    <IconButton
      iconProps={{
        name: 'angles-right',
        rotation: areSomeRowsExpanded ? 270 : undefined,
      }}
      isDisabled={isLoading || !renderDetailPanel}
      label={areSomeRowsExpanded ? 'Collapse all rows' : 'Expand all rows'}
      onClick={() => toggleAllRowsExpanded(!areSomeRowsExpanded)}
    />
  );
};

export default ExpandAllButton;
