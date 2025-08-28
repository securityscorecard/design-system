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
import Button from '../../ButtonV2/Button';
import ElementLabel from '../../ElementLabel/ElementLabel';

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
  const canSort = getCanSort();

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
        <Inline
          align="center"
          aria-label={cdHeader}
          gap="xs"
          justify="space-between"
        >
          <Inline
            align="center"
            style={{ overflow: !canSort ? 'hidden' : 'visible' }}
          >
            <Tooltip placement="top" popup={tooltipPopup}>
              {!canSort ? (
                <ElementLabel isStrong>{headerElement}</ElementLabel>
              ) : (
                <Button
                  className="ds-table-header-ghost-button"
                  size="sm"
                  variant="ghost"
                  onClick={getToggleSortingHandler()}
                >
                  {headerElement}
                </Button>
              )}
            </Tooltip>
          </Inline>
          {showColumnActions ? (
            <HeaderCellColumnActionsButton header={header} table={table} />
          ) : direction !== false ? (
            <div className="ds-table-header-cell-column-actions-button-wrapper">
              <Icon
                aria-label={`${cdHeader} sorted in ${
                  direction === 'asc' ? 'ascending' : 'descending'
                } order`}
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
      ) : Object.values(displayColumnIds).includes(columnDef.id) ? (
        <Inline align="center" aria-label={cdHeader} justify="center">
          {headerElement}
        </Inline>
      ) : (
        <Inline align="center" aria-label={cdHeader} justify="flex-start">
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
