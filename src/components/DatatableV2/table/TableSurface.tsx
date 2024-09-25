import React from 'react';
import styled, { css } from 'styled-components';

import { Surface } from '../../layout';
import { DatatableInstance } from '../Datatable.types';
import Pagination from '../toolbar/Pagination';
import Selection from '../toolbar/Selection';
import Table from './Table';
import TopToolbar from '../toolbar/TopToolbar';

const DatatableRoot = styled.div<{ $isFullscreen }>`
  ${({ $isFullscreen }) =>
    $isFullscreen &&
    css`
      --sscds-table-height-pagination: 4.25rem;

      position: fixed;
      inset: 0;
      padding: 0 !important;
      margin: 0 !important;
      z-index: 999;
      width: 100vw;
      height: 100vh;
      background: white;
      display: grid;
      grid-template-rows: 1fr var(--sscds-table-height-pagination);
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
          '--sscds-table-color-active': 'var(--sscds-color-neutral-3)',
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
          '--sscds-table-size-settings-width': '22.5rem',
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
      {table.options.enableRowSelection && <Selection table={table} />}
      {table.options.enablePagination &&
        table.getRowModel().rows.length > 0 && <Pagination table={table} />}
    </DatatableRoot>
  );
};

export default TableSurface;
