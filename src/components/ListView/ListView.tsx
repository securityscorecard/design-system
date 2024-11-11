import {
  type ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ComponentPropsWithoutRef, useMemo, useState } from 'react';

import { useLogger } from '../../hooks/useLogger';
import ListViewRow from './ListViewRow';
import {
  ListViewInstance,
  ListViewOptions,
  ParsedListViewOptions,
} from './ListView.types';
import SelectionToolbar from '../_internal/toolbars/SelectionToolbar';
import PaginationToolbar from '../_internal/toolbars/PaginationToolbar';

function ListView<D>({
  data,
  renderListViewRow,
  state,
  initialState,
  enableRowSelection = false,
  enableMultiRowSelection = true,
  enablePagination = true,
  enableRowsPerPage = false,
  rowsPerPageOptions = [10, 25, 50, 100],
  manualPagination,
  rowActions = [],
  rowCount,
  renderRowSelectionActions,
  onRowClick,
  onActiveRowIdChange,
  onPaginationChange,
  onRowSelectionChange,
  getRowId,
  ...props
}: ListViewOptions<D> & ComponentPropsWithoutRef<'ul'>) {
  const rowActionsCount = rowActions.filter(Boolean).length;

  const styles = useMemo(
    () => ({
      ...props.style,
      '--sscds-listView-size-action': '3rem',
      '--sscds-listView-size-action-double': '5rem',
      '--sscds-listView-size-select': enableRowSelection
        ? 'var(--sscds-listView-size-action)'
        : '0rem',
      '--sscds-listView-size-rowActions':
        rowActionsCount > 0 ? 'var(--sscds-listView-size-action)' : '0rem',
      '--sscds-listView-height-min':
        enableRowSelection || rowActionsCount > 0
          ? 'var(--sscds-listView-size-action)'
          : 'auto',
    }),
    [enableRowSelection, props.style, rowActionsCount],
  );
  const columns = useMemo<ColumnDef<D>[]>(
    () => [
      {
        id: 'listView-content',
        cell: ({ row }) => renderListViewRow({ row: row.original }),
      },
    ],
    [renderListViewRow],
  );
  const listData: D[] = useMemo(
    () =>
      state?.isLoading && !data.length
        ? [
            ...Array(
              state?.pagination?.pageSize ||
                initialState?.pagination?.pageSize ||
                10,
            ).fill(null),
          ].map(() => ({} as D))
        : data,
    [
      initialState?.pagination?.pageSize,
      data,
      state?.isLoading,
      state?.pagination?.pageSize,
    ],
  );
  const [activeRowId, setActiveRowId] = useState<string>(
    initialState?.activeRowId ?? undefined,
  );
  const listView = useReactTable({
    columns,
    data: listData,
    enableMultiRowSelection,
    enableRowSelection,
    enableRowsPerPage,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: enablePagination
      ? getPaginationRowModel()
      : undefined,
    getRowId,
    initialState,
    manualPagination,
    onRowClick,
    onPaginationChange,
    onRowSelectionChange,
    renderRowSelectionActions,
    rowActions,
    rowActionsCount,
    rowCount,
    rowsPerPageOptions,
    state: {
      activeRowId,
      ...state,
    },
  } as ParsedListViewOptions<D>) as unknown as ListViewInstance<D>;
  listView.setActiveRowId = onActiveRowIdChange ?? setActiveRowId;

  const logger = useLogger('ListView');
  logger.log('ListView Instance', listView);
  logger.log('ListView State', listView.getState());

  return (
    <div>
      {/**
       * Webkit removes implicit "list" semantics when "list-style-type: none" is set.
       * Explicitly setting the "list" role ensures assistive technology in webkit
       * browsers correctly announce the semantics.
       *
       * Ref https://bugs.webkit.org/show_bug.cgi?id=170179#c1 */}
      {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
      <ul {...props} role="list" style={styles}>
        {listView.getRowModel().rows.map((row) => {
          return <ListViewRow key={row.id} listView={listView} row={row} />;
        })}
      </ul>
      {enableRowSelection && <SelectionToolbar<D> instance={listView} />}
      {enablePagination && <PaginationToolbar<D> instance={listView} />}
    </div>
  );
}

ListView.displayName = 'ListView';

export default ListView;
