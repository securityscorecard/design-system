import type { DatatableHeader, DatatableInstance } from '../Datatable.types';
import type { CSSProperties } from 'react';

import { flexRender } from '@tanstack/react-table';
import clx from 'classnames';

import HeaderCellSortButton from './HeaderCellSortButton';
import HeaderCellColumnActionsButton from './HeaderCellColumnActionsButton';
import { getCommonCellStyles } from '../columns.utils';
import HeaderCellResizeHandler from './HeaderCellResizeHandler';
import { Inline } from '../../layout';
import { Tooltip } from '../../Tooltip';
import { useHasHorizontalScroll } from '../hooks/useHasHorizontalScroll';
import { displayColumnIds } from '../hooks/useDisplayColumns';

const getTextHeaderStyle = (
  labelLength: number | undefined,
): CSSProperties => ({
  whiteSpace: (labelLength ?? 0) < 20 ? 'nowrap' : 'normal',
  minWidth: `${Math.min(labelLength ?? 0, 4)}ch`,
  overflow: 'hidden',
});

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
    getIsPinned,
    getToggleSortingHandler,
  } = column;
  const {
    columnDefType,
    enableColumnActions: cdEnableColumnActions,
    header: cdHeader,
    headerComponent,
    renderHeaderTooltip,
  } = columnDef;

  const hasHorizontalScroll = useHasHorizontalScroll(table);

  const showColumnActions =
    (enableColumnActions || cdEnableColumnActions) &&
    cdEnableColumnActions !== false;

  const tooltipPopup = renderHeaderTooltip?.({
    column,
    header,
    table,
  });
  const headerElement = flexRender(headerComponent, getContext()) ?? cdHeader;
  const headerStyle = getTextHeaderStyle(cdHeader?.length);
  return (
    <th
      key={id}
      className={clx('ds-table-header-cell ds-table-cell', {
        'is-sorted': getIsSorted(),
        'is-pinned': getIsPinned(),
        'ds-table-cell-display': columnDefType === 'display',
      })}
      style={{
        ...getCommonCellStyles({
          table,
          header,
          column,
          hasHorizontalScroll,
        }),
      }}
    >
      {isPlaceholder ? null : columnDefType === 'data' ? (
        <Inline align="center" gap="xs" justify="space-between">
          <Inline align="center" style={{ overflow: 'hidden' }}>
            {/* I know what I'm doing here */}
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
            <div
              className="ds-table-header-cell-title"
              style={{
                ...headerStyle,
                cursor: getCanSort() ? 'pointer' : undefined,
              }}
              title={cdHeader}
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
      ) : Object.values(displayColumnIds).indexOf(columnDef.id) > 0 ? (
        <Inline align="center" justify="center">
          {headerElement}
        </Inline>
      ) : (
        <Inline align="center" justify="flex-start">
          <div
            className="ds-table-header-cell-title"
            style={headerStyle}
            title={cdHeader}
          >
            <Tooltip placement="top" popup={tooltipPopup}>
              {headerElement}
            </Tooltip>
          </div>
        </Inline>
      )}
    </th>
  );
};

export default HeaderCell;
