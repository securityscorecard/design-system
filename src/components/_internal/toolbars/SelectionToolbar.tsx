import type { Table } from '@tanstack/react-table';
import type { ReactNode } from 'react';
import { pluck } from 'ramda';
import styled from 'styled-components';

import { abbreviateNumber } from '../../../utils';
import { Inline, Padbox, Surface } from '../../layout';
import Button from '../../ButtonV2/Button';
import { Strong } from '../../Text';
import {
  SafeTrans,
  useSafeTranslation,
} from '../../../hooks/useSafeTranslation';

type Instance<Data> = {
  options: {
    renderRowSelectionActions?: (props: {
      selectedRows: Data[];
      totalRowCount: number;
      table: unknown;
    }) => ReactNode;
    rowCount?: number;
  };
  getPrePaginationRowModel?: Table<Data>['getPrePaginationRowModel'];
  getSelectedRowModel?: Table<Data>['getSelectedRowModel'];
  toggleAllRowsSelected?: Table<Data>['toggleAllRowsSelected'];
};

const getSelectedRowsCount = <Data,>(instance: Instance<Data>) => {
  const { getSelectedRowModel } = instance;
  const selectedRows = getSelectedRowModel().rows;
  const selectedRowsCount = selectedRows.length;
  return selectedRowsCount;
};

const SelectionRoot = styled(Surface)`
  position: sticky;
  z-index: 2;
  left: 0;
  right: 0;
  bottom: var(--sscds-space-4x);
  margin: var(--sscds-space-4x) var(--sscds-space-4x) 0;
`;
function SelectionToolbar<Data>({ instance }: { instance: Instance<Data> }) {
  const {
    options: { renderRowSelectionActions, rowCount },
    getPrePaginationRowModel,
    getSelectedRowModel,
    toggleAllRowsSelected,
  } = instance;
  const { t, lng } = useSafeTranslation();

  const selectedRowsCount = getSelectedRowsCount<Data>(instance);
  const selectedRows = getSelectedRowModel().rows;
  const totalRowCount = rowCount ?? getPrePaginationRowModel().rows.length;

  if (selectedRowsCount === 0) {
    return null;
  }

  return (
    <SelectionRoot
      className="ds-table-selection-toolbar"
      elevation={2}
      radius="md"
      style={{
        '--sscds-background': 'var(--sscds-color-primary-3)',
        '--sscds-border-color': 'var(--sscds-color-primary-8)',
      }}
      hasBorder
    >
      <Padbox paddingSize="md">
        <Inline align="center" gap="md" justify="space-between">
          <Inline
            align="center"
            className="ds-table-selection-overview"
            gap="sm"
          >
            <div>
              <SafeTrans
                components={{
                  bold: (
                    <Strong className="ds-table-selection-currently-selected">
                      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                      {{ selectedRowsCount } as any}
                    </Strong>
                  ),
                }}
                i18nKey="sscds|datatable.selection.itemCounter"
                values={{
                  count: totalRowCount,
                  totalRowCount: abbreviateNumber(totalRowCount, lng),
                  selectedRowCount: selectedRowsCount.toLocaleString(lng),
                }}
              />
            </div>
            <Button
              className="ds-table-selection-clear-button"
              size="sm"
              variant="ghost"
              onClick={() => toggleAllRowsSelected(false)}
            >
              {t('sscds|datatable.selection.clearSelection')}
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
              table: instance as unknown as Table<Data>,
            })}
          </Inline>
        </Inline>
      </Padbox>
    </SelectionRoot>
  );
}

SelectionToolbar.displayName = 'SelectionToolbar';

export default SelectionToolbar;
