import React from 'react';

import BaseHandle from '../../_internal/BaseHandle/BaseHandle';
import { DatatableInstance } from '../Datatable.types';

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
    <BaseHandle
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
