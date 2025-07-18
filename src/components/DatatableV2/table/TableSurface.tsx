import styled, { css } from 'styled-components';

import { Surface } from '../../layout';
import { DatatableInstance } from '../Datatable.types';
import Table from './Table';
import TopToolbar from '../toolbar/TopToolbar';
import { SelectionToolbarReactTable } from '../../_internal/toolbars/SelectionToolbar';
import PaginationToolbar from '../../_internal/toolbars/PaginationToolbar';

const DatatableRoot = styled.div<{ $isFullscreen }>`
  ${({ $isFullscreen }) =>
    $isFullscreen &&
    css`
      --sscds-table-height-pagination: 3rem;
      --sscds-table-height-selection: 5.125rem;

      position: fixed;
      inset: 0;
      padding: 0 !important;
      margin: 0 !important;
      z-index: 999;
      width: 100vw;
      height: 100vh;
      background: white;
      display: grid;
      grid-template-rows: 1fr;

      &:has(.ds-table-pagination-toolbar) {
        grid-template-rows: 1fr var(--sscds-table-height-pagination);
      }
      &:has(.ds-table-selection-toolbar) {
        grid-template-rows: 1fr var(--sscds-table-height-selection);
      }
      &:has(.ds-table-pagination-toolbar):has(.ds-table-selection-toolbar) {
        grid-template-rows: 1fr var(--sscds-table-height-selection) var(
            --sscds-table-height-pagination
          );
      }
    `};
`;

const TableSurface = <D,>({ table }: { table: DatatableInstance<D> }) => {
  const { getState } = table;
  const { isFullscreenMode } = getState();

  return (
    <DatatableRoot $isFullscreen={isFullscreenMode}>
      <Surface
        radius={isFullscreenMode ? 'none' : 'md'}
        style={{
          '--sscds-table-color-background': 'var(--sscds-background)',
          '--sscds-table-color-border': 'var(--sscds-border-color)',
          '--sscds-table-color-accent': 'var(--sscds-color-primary-9)',
          '--sscds-table-color-header-background':
            'var(--sscds-color-neutral-2)',
          '--sscds-table-color-settings-background':
            'var(--sscds-table-color-background)',
          '--sscds-table-spacing-cell': 'var(--sscds-space-2x)',
          '--sscds-table-spacing-cell-header': 'var(--sscds-space-2x)',
          '--sscds-table-spacing-cell-display':
            'var(--sscds-space-1x) var(--sscds-space-3x)',
          '--sscds-table-typography-weight-header':
            'var(--sscds-font-weight-elementlabel-strong)',
          '--sscds-table-shadow-settings':
            '-6px 0px 12px 0px rgba(0, 0, 0, 0.07)',
          '--sscds-table-shadow-pin-left':
            '8px 0px 8px 0px rgba(0, 0, 0, 0.05)',
          '--sscds-table-shadow-pin-right':
            '-8px 0px 8px 0px rgba(0, 0, 0, 0.05)',
          '--sscds-table-size-settings-width': '25rem',
          '--sscds-table-size-settings-height': '22.5rem',
          '--sscds-table-radii-settings-item': 'var(--sscds-radii-default)',
          position: 'relative',
          overflow: 'clip',
          ...(isFullscreenMode
            ? {
                overflow: 'hidden',
                width: '100%',
                maxWidth: '100%',
              }
            : {}),
        }}
        hasBorder
      >
        {table.options.enableTopToolbar && <TopToolbar table={table} />}
        <Table table={table} />
      </Surface>
      {table.options.enableRowSelection &&
        table.options.enableSelectionToolbar && (
          <SelectionToolbarReactTable<D> instance={table} />
        )}
      {table.options.enablePagination &&
        table.getRowModel().rows.length > 0 && (
          <PaginationToolbar instance={table} />
        )}
    </DatatableRoot>
  );
};

export default TableSurface;
