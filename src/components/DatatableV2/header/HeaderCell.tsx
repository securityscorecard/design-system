import { CSSProperties } from 'react';
import clx from 'classnames';

import { DatatableHeader, DatatableInstance } from '../Datatable.types';
import HeaderCellColumnActionsButton from './HeaderCellColumnActionsButton';
import { getCommonCellStyles } from '../columns.utils';
import HeaderCellResizeHandler from './HeaderCellResizeHandler';
import { Inline } from '../../layout';
import { Tooltip } from '../../Tooltip';
import { displayColumnIds } from '../hooks/useDisplayColumns';
import { parseFromValuesOrFunc } from '../utils';
import { Icon } from '../../Icon';

const getTextHeaderStyle = (
  labelLength: number | undefined,
): CSSProperties => ({
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
  const direction = getIsSorted();

  const showColumnActions =
    (enableColumnActions || cdEnableColumnActions) &&
    cdEnableColumnActions !== false;

  const tooltipPopup = renderHeaderTooltip?.({
    column,
    header,
    table,
  });
  const headerElement = parseFromValuesOrFunc(
    headerComponent ?? cdHeader,
    getContext(),
  );
  const headerStyle = getTextHeaderStyle(cdHeader?.length);
  return (
    <th
      key={id}
      className={clx('ds-table-header-cell ds-table-cell', {
        'ds-table-cell-display': columnDefType === 'display',
        'ds-table-cell-select': column.id === displayColumnIds.select,
        'ds-table-cell-expand': column.id === displayColumnIds.expand,
        'ds-table-cell-actions': column.id === displayColumnIds.actions,
      })}
      data-pinned={getIsPinned()}
      data-sorted={getIsSorted()}
      style={{
        ...getCommonCellStyles({
          table,
          header,
          column,
        }),
      }}
    >
      {isPlaceholder ? null : columnDefType === 'data' ? (
        <Inline align="center" gap="xs" justify="space-between">
          <Inline align="center" style={{ overflow: 'hidden' }}>
            <Tooltip placement="top" popup={tooltipPopup}>
              <button
                aria-label={`Sort by ${cdHeader}`}
                className="ds-table-header-cell-title ds-table-unstyled-button"
                style={{
                  ...headerStyle,
                  cursor: getCanSort() ? 'pointer' : undefined,
                }}
                title={cdHeader}
                type="button"
                onClick={getToggleSortingHandler()}
              >
                {headerElement}
              </button>
            </Tooltip>
          </Inline>
          {showColumnActions ? (
            <HeaderCellColumnActionsButton header={header} table={table} />
          ) : direction !== false ? (
            <div className="ds-table-header-cell-column-actions-button-wrapper">
              <Icon
                name={direction === 'asc' ? 'sort-up' : 'sort-down'}
                size="sm"
                hasFixedSize
              />
            </div>
          ) : null}
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
              <button className="ds-table-unstyled-button" type="button">
                {headerElement}
              </button>
            </Tooltip>
          </div>
        </Inline>
      )}
    </th>
  );
};

export default HeaderCell;
