import React from 'react';
import { flexRender } from '@tanstack/react-table';
import clx from 'classnames';

import HeaderCellSortButton from './HeaderCellSortButton';
import { DatatableHeader, DatatableInstance } from '../Datatable.types';
import HeaderCellColumnActionsButton from './HeaderCellColumnActionsButton';
import { getCommonCellStyles } from '../columns.utils';
import HeaderCellResizeHandler from './HeaderCellResizeHandler';
import { Inline } from '../../layout';

const HeaderCell = <D,>({
  header,
  table,
}: {
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => {
  const {
    options: { enableColumnActions },
  } = table;
  const { column, getContext, id, isPlaceholder } = header;
  const {
    columnDef,
    getCanResize,
    getCanSort,
    getIsSorted,
    getToggleSortingHandler,
  } = column;

  const showColumnActions =
    (enableColumnActions || columnDef?.enableColumnActions) &&
    columnDef?.enableColumnActions !== false;

  const headerElement =
    flexRender(columnDef.headerComponent, getContext()) ?? columnDef.header;

  return (
    <th
      key={id}
      className={clx('ds-table-header-cell ds-table-cell', {
        isSorted: getIsSorted(),
        'ds-table-cell-display': columnDef.columnDefType === 'display',
      })}
      style={{
        ...getCommonCellStyles({
          table,
          header,
          column,
        }),
      }}
    >
      {isPlaceholder ? null : (
        <Inline align="center" gap="xs" justify="space-between">
          <Inline align="center" style={{ overflow: 'hidden' }}>
            {/* I know what I'm doing here */}
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
            <div
              className="ds-table-header-cell-title"
              style={{
                whiteSpace:
                  (columnDef.header?.length ?? 0) < 20 ? 'nowrap' : 'normal',
                minWidth: `${Math.min(columnDef.header?.length ?? 0, 4)}ch`,
                overflow:
                  columnDef.columnDefType === 'data' ? 'hidden' : undefined,
                cursor: getCanSort() ? 'pointer' : undefined,
              }}
              title={
                columnDef.columnDefType === 'data'
                  ? columnDef.header
                  : undefined
              }
              onClick={getToggleSortingHandler()}
            >
              {headerElement}
            </div>
            {getCanSort() && (
              <HeaderCellSortButton
                direction={getIsSorted()}
                header={header}
                table={table}
              />
            )}
          </Inline>
          {showColumnActions && (
            <HeaderCellColumnActionsButton header={header} table={table} />
          )}
          {getCanResize() && (
            <HeaderCellResizeHandler header={header} table={table} />
          )}
        </Inline>
      )}
    </th>
  );
};

export default HeaderCell;
