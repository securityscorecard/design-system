import React from 'react';
import { pluck } from 'ramda';
import styled from 'styled-components';

import { abbreviateNumber } from '../../../utils';
import { DatatableInstance } from '../Datatable.types';
import { Inline, Padbox } from '../../layout';
import { Button } from '../../Button';

const SelectionRoot = styled(Padbox)`
  border-bottom: 1px solid var(--sscds-table-color-border);
`;
const Selection = <D,>({ table }: { table: DatatableInstance<D> }) => {
  const {
    options: { renderRowSelectionActions, rowCount },
    getPrePaginationRowModel,
    getSelectedRowModel,
    toggleAllRowsSelected,
  } = table;

  const selectedRows = getSelectedRowModel().rows;
  const selectedRowsCount = selectedRows.length;
  const totalRowCount = rowCount ?? getPrePaginationRowModel().rows.length;

  if (selectedRowsCount === 0) {
    return null;
  }

  return (
    <SelectionRoot
      className="ds-table-selection-toolbar"
      paddingSize="mdPlus"
      paddingType="squish"
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
