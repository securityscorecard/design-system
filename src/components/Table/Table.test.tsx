import { screen } from '@testing-library/react';
import { Column } from 'react-table';
import { vi } from 'vitest';

import { renderWithProviders } from '../../utils/tests/renderWithProviders';
import Table from './Table';

type Data = {
  id: number;
  col1: string;
  col2: string;
};
const data: Data[] = [
  {
    id: 1,
    col1: 'col11 value',
    col2: 'col21 value',
  },
  {
    id: 2,
    col1: 'col12 value',
    col2: 'col22 value',
  },
  {
    id: 3,
    col1: 'col13 value',
    col2: 'col23 value',
  },
];
const columns: Column<Data>[] = [
  { accessor: 'id', Header: 'ID' },
  { accessor: 'col1', Header: 'Col1' },
  { accessor: 'col2', Header: 'Col2' },
];

describe('DatatableLight/Table', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  describe('given isDataLoading', () => {
    it('should display empty loading page when no data is present', () => {
      renderWithProviders(
        <Table<Data> data={[]} columns={columns} dataSize={0} isDataLoading />,
      );

      expect(
        screen.getByRole('heading', {
          name: /Loading/i,
        }),
      ).toBeInTheDocument();
    });

    it('should display loading overlay without Cancel button when data is present and canceling is disabled', () => {
      renderWithProviders(
        <Table<Data>
          data={data}
          columns={columns}
          dataSize={data.length}
          isDataLoading
        />,
      );

      expect(
        screen.queryByRole('button', {
          name: /Cancel/i,
        }),
      ).not.toBeInTheDocument();
    });
  });
});
