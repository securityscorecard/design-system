import { flexRender } from '@tanstack/react-table';
import React, { useEffect, useState } from 'react';
import clx from 'classnames';

import { getCommonCellStyles } from '../columns.utils';
import { DatatableCell, DatatableInstance } from '../Datatable.types';
import Skeleton from './Skeleton';

const BodyCell = <D,>({
  cell,
  table,
}: {
  cell: DatatableCell<D>;
  table: DatatableInstance<D>;
}) => {
  const { column } = cell;
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
      })}
      style={getCommonCellStyles({
        table,
        column,
      })}
    >
      {isLoading ? (
        <Skeleton width={skeletonWidth} />
      ) : (
        flexRender(cell.column.columnDef.cell, cell.getContext())
      )}
    </td>
  );
};

export default BodyCell;
