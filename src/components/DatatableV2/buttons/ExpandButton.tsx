import React from 'react';

import BaseHandle from '../../_internal/BaseHandle/BaseHandle';
import { DatatableInstance, DatatableRow } from '../Datatable.types';

const ExpandButton = <D,>({
  table,
  row,
}: {
  table: DatatableInstance<D>;
  row: DatatableRow<D>;
}) => {
  const {
    options: { renderDetailPanel },
  } = table;
  const { getIsExpanded, getCanExpand, toggleExpanded } = row;

  const canExpand = getCanExpand();
  const isExpanded = getIsExpanded();

  return (
    <BaseHandle
      iconProps={{
        name: 'angle-right',
        rotation: isExpanded ? 90 : undefined,
      }}
      isDisabled={!canExpand && !renderDetailPanel}
      label={isExpanded ? 'Collapse row' : 'Expand row'}
      onClick={(e) => {
        e.stopPropagation();
        toggleExpanded();
      }}
    />
  );
};

export default ExpandButton;
