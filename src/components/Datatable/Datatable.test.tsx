import { useState } from 'react';
import { screen, waitFor } from '@testing-library/react';
import { Column } from 'react-table';
import { filter } from 'ramda';
import { vi } from 'vitest';

import { setup } from '../../utils/tests/setup';
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

function TestDatatableComponent() {
  const [entries, setEntries] = useState(data);
  return (
    <Datatable<Data>
      data={entries}
      columns={columns}
      dataSize={entries.length}
      batchActions={[
        {
          label: 'Remove',
          name: 'remove',
          onClick: (ids, _, resetSelection) => {
            setEntries((prev) =>
              filter((entry) => String(entry.id) !== ids[0], prev),
            );
            resetSelection();
          },
        },
      ]}
    />
  );
}
describe('Datatable', () => {
  beforeEach(() => {
    DatatableStore.replace(datatableInitialState);
  });
  afterEach(() => {
    vi.resetAllMocks();
  });
  it('should not call "onDataFetch" on mount', () => {
    const onDataFetchMock = vi.fn();

    setup(
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
    it('should call "onCancelLoading"', async () => {
      const onCancelLoading = vi.fn();
      const { user } = setup(
        <Datatable<Data>
          onDataFetch={vi.fn()}
          onCancelLoading={onCancelLoading}
          data={data}
          columns={columns}
          dataSize={3}
          controlsConfig={{ filteringConfig: { fields } }}
          isDataLoading
        />,
      );

      expect(DatatableStore.getRawState().isCanceled).toBe(false);

      await user.click(
        screen.getAllByRole('button', {
          name: /Cancel/i,
        })[0],
      );

      expect(DatatableStore.getRawState().isCanceled).toBe(true);
      expect(onCancelLoading).toHaveBeenCalled();
    });
  });

  it('should reset selected rows when data changes', async () => {
    const { user } = setup(<TestDatatableComponent />);

    await user.click(
      screen.getAllByRole('checkbox', {
        name: /Toggle select/i,
      })[2],
    );

    const elementCounter = screen.getByTestId('counter-content');

    await waitFor(() =>
      expect(elementCounter).toHaveTextContent(/^1 of 3 selected$/),
    );
    await user.click(screen.getByRole('button', { name: /Remove/i }));

    await waitFor(() => expect(elementCounter).toHaveTextContent(/^2$/));

    await user.click(
      screen.getAllByRole('checkbox', {
        name: /Toggle select/i,
      })[2],
    );

    await waitFor(() =>
      expect(elementCounter).toHaveTextContent(/^1 of 2 selected$/),
    );
  });
});
