import React from 'react';
import { useTheme } from 'styled-components';

import { getColor, getFontWeight, getRadii } from '../../../utils';
import { getPaddingSize } from '../../../utils/space';
import { Surface } from '../../layout';
import { DatatableInstance } from '../Datatable.types';
import Pagination from '../toolbar/Pagination';
import Table from './Table';

const TableSurface = <D,>({ table }: { table: DatatableInstance<D> }) => {
  const theme = useTheme();

  return (
    <Surface
      background="white"
      radius="md"
      style={{
        '--sscds-table-transition':
          'all 300ms cubic-bezier(0.55, 0.085, 0.68, 0.53), outline 0ms',
        '--sscds-table-color-background': 'var(--sscds-background)',
        '--sscds-table-color-border': 'var(--sscds-borderColor)',
        '--sscds-table-color-zebra': getColor('neutral.50', { theme }),
        '--sscds-table-color-accent': getColor('primary.500', { theme }),
        '--sscds-table-color-settings-background':
          'var(--sscds-table-color-background)',
        '--sscds-table-color-selection': getColor('primary.50', { theme }),
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
          paddingSize: 'sm',
          paddingType: 'square',
          theme,
        }),
        '--sscds-table-typography-weight-header': getFontWeight('bold', {
          theme,
        }),
        '--sscds-table-shadow-settings':
          '-6px 0px 12px 0px rgba(0, 0, 0, 0.07)',
        '--sscds-table-shadow-pin-left': '8px 0px 8px 0px rgba(0, 0, 0, 0.05)',
        '--sscds-table-shadow-pin-right':
          '-8px 0px 8px 0px rgba(0, 0, 0, 0.05)',
        '--sscds-table-size-settings-width': '22.5rem',
        '--sscds-table-radii-settings-item': getRadii('default', { theme }),
        position: 'relative',
        overflow: 'hidden',
      }}
      hasBorder
    >
      <Table table={table} />
      {table.options.enablePagination &&
        table.getRowModel().rows.length > 0 && <Pagination table={table} />}
    </Surface>
  );
};

export default TableSurface;
