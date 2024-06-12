import React, { useEffect, useState } from 'react';
import clx from 'classnames';

import { getCommonCellStyles } from '../columns.utils';
import { DatatableCell, DatatableInstance } from '../Datatable.types';
import Skeleton from '../../Skeleton/Skeleton';
import { parseFromValuesOrFunc } from '../utils';
import { displayColumnIds } from '../hooks/useDisplayColumns';

const BodyCell = <D,>({
  cell,
  table,
}: {
  cell: DatatableCell<D>;
  table: DatatableInstance<D>;
}) => {
  const { column } = cell;
  const { getIsPinned } = column;
  const { columnDefType } = column.columnDef;
  const { isLoading } = table.getState();

  const [skeletonWidth, setSkeletonWidth] = useState(100);

  useEffect(() => {
    if (!isLoading || skeletonWidth !== 100) return;
    const size = column.getSize();
    setSkeletonWidth(
      columnDefType === 'display'
        ? size / 2
        : Math.round(Math.random() * (size - size / 3) + size / 3),
    );
  }, [column, columnDefType, isLoading, skeletonWidth]);

  return (
    <td
      className={clx('ds-table-body-cell ds-table-cell', {
        'ds-table-cell-display': columnDefType === 'display',
        'ds-table-cell-select': column.id === displayColumnIds.select,
        'ds-table-cell-expand': column.id === displayColumnIds.expand,
        'ds-table-cell-actions': column.id === displayColumnIds.actions,
      })}
      data-pinned={getIsPinned()}
      style={getCommonCellStyles({
        table,
        column,
      })}
    >
      {isLoading ? (
        <Skeleton width={skeletonWidth} />
      ) : (
        parseFromValuesOrFunc(cell.column.columnDef.cell, cell.getContext())
      )}
    </td>
  );
};

export default BodyCell;
