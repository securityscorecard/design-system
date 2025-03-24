import type { RowSelectionState, Table } from '@tanstack/react-table';
import { type ReactNode } from 'react';
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

const SelectionRoot = styled(Surface)`
  position: sticky;
  z-index: 2;
  left: 0;
  right: 0;
  bottom: var(--sscds-space-4x);
  margin: var(--sscds-space-4x) var(--sscds-space-4x) 0;
`;

function SelectionToolbarRoot({ children }: { children: ReactNode }) {
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
          {children}
        </Inline>
      </Padbox>
    </SelectionRoot>
  );
}
function SelectionToolbarItemCounter({
  selectedRowsCount,
  totalRowCount,
  selectAllMode,
  deselectAllRows,
  isVirtualSelectAll,
  setVirtualSelectAll,
}: {
  selectAllMode?: 'page' | 'all' | 'virtual';
  selectedRowsCount: number;
  totalRowCount: number;
  deselectAllRows: () => void;
  isVirtualSelectAll?: boolean;
  setVirtualSelectAll?: (value: boolean) => void;
}) {
  const { t, lng } = useSafeTranslation();

  return (
    <Inline
      align="center"
      className="ds-table-selection-overview"
      data-testid="table-selection-overview"
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
            selectedRowCount: isVirtualSelectAll
              ? abbreviateNumber(totalRowCount, lng)
              : selectedRowsCount.toLocaleString(lng),
          }}
        />
      </div>
      {!isVirtualSelectAll &&
        selectAllMode === 'virtual' &&
        selectedRowsCount < totalRowCount && (
          <Button
            className="ds-table-selection-clear-button"
            size="sm"
            variant="ghost"
            onClick={() => {
              // Virtual select all - clear the current selection first
              deselectAllRows();
              setVirtualSelectAll(true);
            }}
          >
            {t('sscds|datatable.selection.selectAllCount', {
              count: totalRowCount,
              totalRowCount: abbreviateNumber(totalRowCount, lng),
            })}
          </Button>
        )}
      <Button
        className="ds-table-selection-clear-button"
        size="sm"
        variant="ghost"
        onClick={deselectAllRows}
      >
        {t('sscds|datatable.selection.clearSelection')}
      </Button>
    </Inline>
  );
}
function SelectionToolbarActions({ children }: { children: ReactNode }) {
  return (
    <Inline
      align="center"
      className="ds-table-selection-actions-container"
      gap="md"
      justify="flex-end"
    >
      {children}
    </Inline>
  );
}

/**
 * SPECIFIC IMPLEMENTATION
 */
type Instance<Data> = {
  options: {
    renderRowSelectionActions?: (props: {
      selectedRows: Data[] | (string | number)[];
      totalRowCount: number;
      table: unknown;
      isVirtualSelectAll?: boolean;
    }) => ReactNode;
    rowCount?: number;
    manualPagination?: boolean;
    rowSelectionMode?: 'single-page' | 'multi-page';
    selectAllMode?: 'page' | 'all' | 'virtual';
  };
  getState?: () => {
    rowSelection: RowSelectionState;
    isVirtualSelectAll?: boolean;
  };
  getPrePaginationRowModel?: Table<Data>['getPrePaginationRowModel'];
  getSelectedRowModel?: Table<Data>['getSelectedRowModel'];
  toggleAllRowsSelected?: Table<Data>['toggleAllRowsSelected'];
  setVirtualSelectAll?: (value: boolean) => void;
};

const getSelectedRowsCount = <Data,>(instance: Instance<Data>) => {
  const {
    getSelectedRowModel,
    options: { manualPagination, rowSelectionMode },
    getState,
  } = instance;
  const { rowSelection } = getState();
  return (manualPagination && rowSelectionMode === 'multi-page') ||
    typeof rowSelectionMode === 'undefined'
    ? Object.keys(rowSelection).filter((id) => rowSelection[id])
    : getSelectedRowModel().rows;
};

function SelectionToolbarReactTable<Data>({
  instance,
}: {
  instance: Instance<Data>;
}) {
  const {
    getState,
    options: {
      renderRowSelectionActions,
      rowCount,
      manualPagination,
      rowSelectionMode,
      selectAllMode,
    },
    getPrePaginationRowModel,
    toggleAllRowsSelected,
    setVirtualSelectAll,
  } = instance;

  const { isVirtualSelectAll } = getState();

  const totalRowCount = rowCount ?? getPrePaginationRowModel().rows.length;

  const selectedRows = getSelectedRowsCount<Data>(instance);

  if (selectedRows.length === 0 && !isVirtualSelectAll) {
    return null;
  }

  return (
    <SelectionToolbarRoot>
      <SelectionToolbarItemCounter
        deselectAllRows={() => {
          toggleAllRowsSelected(false);
          setVirtualSelectAll(false);
        }}
        isVirtualSelectAll={isVirtualSelectAll}
        selectAllMode={selectAllMode}
        selectedRowsCount={selectedRows.length}
        setVirtualSelectAll={setVirtualSelectAll}
        totalRowCount={totalRowCount}
      />
      <SelectionToolbarActions>
        {renderRowSelectionActions?.({
          isVirtualSelectAll,
          selectedRows:
            (manualPagination && rowSelectionMode === 'multi-page') ||
            typeof rowSelectionMode === 'undefined'
              ? selectedRows
              : pluck('original', selectedRows),
          totalRowCount,
          table: instance as unknown as Table<Data>,
        })}
      </SelectionToolbarActions>
    </SelectionToolbarRoot>
  );
}

SelectionToolbarRoot.displayName = 'SelectionToolbarRoot';
SelectionToolbarItemCounter.displayName = 'SelectionToolbarItemCounter';
SelectionToolbarActions.displayName = 'SelectionToolbarActions';
SelectionToolbarReactTable.displayName = 'SelectionToolbarReactTable';

export {
  SelectionToolbarRoot,
  SelectionToolbarItemCounter,
  SelectionToolbarActions,
  SelectionToolbarReactTable,
};
