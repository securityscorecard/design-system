import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Column } from 'react-table';

import { renderWithProviders } from '../../utils/tests/renderWithProviders';
import { fields } from '../Filters/mocks/options';
import Datatable from './Datatable';
import { DatatableStore, datatableInitialState } from './Datatable.store';

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

describe('Datatable', () => {
  beforeEach(() => {
    DatatableStore.replace(datatableInitialState);
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('should not call "onDataFetch" on mount', () => {
    const onDataFetchMock = jest.fn();

    renderWithProviders(
      <Datatable<Data>
        onDataFetch={onDataFetchMock}
        data={data}
        columns={columns}
        dataSize={3}
        controlsConfig={{ filteringConfig: { fields } }}
      />,
    );

    expect(onDataFetchMock).not.toHaveBeenCalled();
  });
  describe('on request cancelation', () => {
    it('should call "onCancelLoading"', () => {
      const onCancelLoading = jest.fn();
      renderWithProviders(
        <Datatable<Data>
          onDataFetch={jest.fn()}
          onCancelLoading={onCancelLoading}
          data={data}
          columns={columns}
          dataSize={3}
          controlsConfig={{ filteringConfig: { fields } }}
          isDataLoading
        />,
      );

      expect(DatatableStore.getRawState().isCanceled).toBe(false);

      userEvent.click(
        screen.getAllByRole('button', {
          name: /Cancel/i,
        })[0],
      );

      expect(DatatableStore.getRawState().isCanceled).toBe(true);
      expect(onCancelLoading).toHaveBeenCalled();
    });
  });
});
