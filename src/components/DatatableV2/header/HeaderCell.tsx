import type { DatatableHeader, DatatableInstance } from '../Datatable.types';

import { flexRender } from '@tanstack/react-table';
import clx from 'classnames';

import HeaderCellSortButton from './HeaderCellSortButton';
import HeaderCellColumnActionsButton from './HeaderCellColumnActionsButton';
import { getCommonCellStyles } from '../columns.utils';
import HeaderCellResizeHandler from './HeaderCellResizeHandler';
import { Inline } from '../../layout';
import { Tooltip } from '../../Tooltip';

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
  const {
    columnDefType,
    enableColumnActions: cdEnableColumnActions,
    header: cdHeader,
    headerComponent,
    renderHeaderTooltip,
  } = columnDef;

  const showColumnActions =
    (enableColumnActions || cdEnableColumnActions) &&
    cdEnableColumnActions !== false;

  const tooltipPopup = renderHeaderTooltip?.({
    column,
    header,
    table,
  });
  const headerElement = flexRender(headerComponent, getContext()) ?? cdHeader;

  return (
    <th
      key={id}
      className={clx('ds-table-header-cell ds-table-cell', {
        'is-sorted': getIsSorted(),
        'ds-table-cell-display': columnDefType === 'display',
      })}
      style={{
        ...getCommonCellStyles({
          table,
          header,
          column,
        }),
      }}
    >
      {columnDefType === 'display' ? (
        <Inline align="center" justify="center">
          {headerElement}
        </Inline>
      ) : isPlaceholder ? null : (
        <Inline align="center" gap="xs" justify="space-between">
          <Inline align="center" style={{ overflow: 'hidden' }}>
            {/* I know what I'm doing here */}
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
            <div
              className="ds-table-header-cell-title"
              style={{
                whiteSpace: (cdHeader?.length ?? 0) < 20 ? 'nowrap' : 'normal',
                minWidth: `${Math.min(cdHeader?.length ?? 0, 4)}ch`,
                overflow: columnDefType === 'data' ? 'hidden' : undefined,
                cursor: getCanSort() ? 'pointer' : undefined,
              }}
              title={columnDefType === 'data' ? cdHeader : undefined}
              onClick={getToggleSortingHandler()}
            >
              <Tooltip placement="top" popup={tooltipPopup}>
                {headerElement}
              </Tooltip>
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
