import React from 'react';

import { DatatableInstance, DatatableRow } from '../Datatable.types';
import IconButton from './IconButton';

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
    <IconButton
      iconProps={{
        name: 'angle-right',
        rotation: isExpanded ? 90 : undefined,
      }}
      isDisabled={!canExpand && !renderDetailPanel}
      label={isExpanded ? 'Collapse row' : 'Expand row'}
      onClick={() => toggleExpanded()}
    />
  );
};

export default ExpandButton;
