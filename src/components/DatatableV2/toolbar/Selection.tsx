import React from 'react';
import { pluck } from 'ramda';
import styled from 'styled-components';

import { abbreviateNumber, pxToRem } from '../../../utils';
import { DatatableInstance } from '../Datatable.types';
import { Inline, Padbox } from '../../layout';
import { Button } from '../../Button';
import SelectButton from '../buttons/SelectButton';
import { useHasHorizontalScroll } from '../hooks/useHasHorizontalScroll';

const SelectionRoot = styled(Padbox)<{ $hasHorizontalScroll: boolean }>`
  position: absolute;
  top: ${({ $hasHorizontalScroll }) => ($hasHorizontalScroll ? '1.5rem' : 0)};
  left: 0;
  right: 0;
  z-index: 1;

  background-color: var(--sscds-table-color-selection);
  height: ${pxToRem(60 + 1)};
  border-bottom: 1px solid var(--sscds-table-color-border);
`;
const Selection = <D,>({ table }: { table: DatatableInstance<D> }) => {
  const {
    options: { renderRowSelectionActions, rowCount, enableSelectAll },
    getPrePaginationRowModel,
    getSelectedRowModel,
    toggleAllRowsSelected,
  } = table;

  const hasHorizontalScroll = useHasHorizontalScroll(table);

  const selectedRows = getSelectedRowModel().rows;
  const selectedRowsCount = selectedRows.length;
  const totalRowCount = rowCount ?? getPrePaginationRowModel().rows.length;

  if (selectedRowsCount === 0) {
    return null;
  }

  return (
    <SelectionRoot
      $hasHorizontalScroll={hasHorizontalScroll}
      className="ds-table-selection-toolbar"
      paddingSize="mdPlus"
      paddingType="squish"
    >
      <Inline align="center" gap="md" justify="space-between">
        <Inline align="center" className="ds-table-selection-overview" gap="md">
          {enableSelectAll && (
            <SelectButton
              style={{ marginLeft: '-14px' }}
              table={table}
              isSelectAll
            />
          )}
          <div>
            <strong className="ds-table-selection-currently-selected">
              {selectedRowsCount.toLocaleString('en-US')}
            </strong>{' '}
            of{' '}
            <abbr title={totalRowCount.toString()}>
              {abbreviateNumber(totalRowCount)}
            </abbr>{' '}
            {totalRowCount === 1 ? 'item' : 'items'} selected
          </div>
          <Button
            className="ds-table-selection-clear-button"
            variant="ghost"
            onClick={() => toggleAllRowsSelected(false)}
          >
            Clear selection
          </Button>
        </Inline>
        <Inline
          align="center"
          className="ds-table-selection-actions-container"
          gap="md"
          justify="flex-end"
        >
          {renderRowSelectionActions?.({
            selectedRows: pluck('original', selectedRows),
            totalRowCount,
            table,
          })}
        </Inline>
      </Inline>
    </SelectionRoot>
  );
};

export default Selection;
