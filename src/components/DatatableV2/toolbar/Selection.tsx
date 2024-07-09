import React from 'react';
import { pluck } from 'ramda';
import styled from 'styled-components';

import { abbreviateNumber } from '../../../utils';
import { DatatableInstance } from '../Datatable.types';
import { Inline, Padbox } from '../../layout';
import { Button } from '../../Button';
import { useHasHorizontalScroll } from '../hooks/useHasHorizontalScroll';

export const getSelectedRowsCount = <D,>(table: DatatableInstance<D>) => {
  const { getSelectedRowModel } = table;
  const selectedRows = getSelectedRowModel().rows;
  const selectedRowsCount = selectedRows.length;
  return selectedRowsCount;
};

const SelectionRoot = styled(Padbox)<{ $hasHorizontalScroll: boolean }>`
  position: sticky;
  left: 0;
  right: 0;
  bottom: 16px;
  z-index: 1;
  /* transform: scale(1, -1); */
  background-color: var(--sscds-color-primary-050);
  border: 1px solid var(--sscds-color-primary-600);
  border-radius: var(--sscds-radii-30);
  margin: 16px 32px 0;
  box-shadow: 0 4px 12px rgba(0 0 0 / 25%);
  padding-left: 16px;
`;
const Selection = <D,>({ table }: { table: DatatableInstance<D> }) => {
  const {
    options: { renderRowSelectionActions, rowCount },
    getPrePaginationRowModel,
    getSelectedRowModel,
    toggleAllRowsSelected,
  } = table;

  const hasHorizontalScroll = useHasHorizontalScroll(table);
  const selectedRowsCount = getSelectedRowsCount(table);
  const selectedRows = getSelectedRowModel().rows;
  const totalRowCount = rowCount ?? getPrePaginationRowModel().rows.length;

  if (selectedRowsCount === 0) {
    return null;
  }

  return (
    <SelectionRoot
      $hasHorizontalScroll={hasHorizontalScroll}
      className="ds-table-selection-toolbar"
      paddingSize="sm"
    >
      <Inline align="center" gap="md" justify="space-between">
        <Inline align="center" className="ds-table-selection-overview" gap="md">
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
