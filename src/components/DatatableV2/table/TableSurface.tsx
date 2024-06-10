import React from 'react';
import styled, { css, useTheme } from 'styled-components';

import { getFontWeight, getRadii } from '../../../utils';
import { getPaddingSize } from '../../../utils/space';
import { Surface } from '../../layout';
import { DatatableInstance } from '../Datatable.types';
import Pagination from '../toolbar/Pagination';
import Table from './Table';

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
  const theme = useTheme();
  const { getState } = table;
  const { isFullscreenMode } = getState();

  return (
    <DatatableRoot $isFullscreen={isFullscreenMode}>
      <Surface
        background="white"
        radius={isFullscreenMode ? 'none' : 'md'}
        style={{
          '--sscds-table-color-background': 'var(--sscds-background)',
          '--sscds-table-color-border': 'var(--sscds-border-color)',
          '--sscds-table-color-accent': 'var(--sscds-color-primary-500)',
          '--sscds-table-color-settings-background':
            'var(--sscds-table-color-background)',
          '--sscds-table-color-active': 'var(--sscds-color-neutral-3)',
          '--sscds-table-spacing-cell': getPaddingSize({
            paddingSize: 'md',
            paddingType: 'square',
            theme,
          }),
          '--sscds-table-spacing-cell-header': getPaddingSize({
            paddingSize: 'md',
            paddingType: 'squish',
            theme,
          }),
          '--sscds-table-spacing-cell-display': getPaddingSize({
            paddingSize: 'md',
            paddingType: 'stretch',
            theme,
          }),
          '--sscds-table-typography-weight-header': getFontWeight('bold', {
            theme,
          }),
          '--sscds-table-shadow-settings':
            '-6px 0px 12px 0px rgba(0, 0, 0, 0.07)',
          '--sscds-table-shadow-pin-left':
            '8px 0px 8px 0px rgba(0, 0, 0, 0.05)',
          '--sscds-table-shadow-pin-right':
            '-8px 0px 8px 0px rgba(0, 0, 0, 0.05)',
          '--sscds-table-size-settings-width': '22.5rem',
          '--sscds-table-radii-settings-item': getRadii('default', { theme }),
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
        <Table table={table} />
      </Surface>
      {table.options.enablePagination &&
        table.getRowModel().rows.length > 0 && <Pagination table={table} />}
    </DatatableRoot>
  );
};

export default TableSurface;
