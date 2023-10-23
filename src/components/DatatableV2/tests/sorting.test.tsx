import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { renderWithProviders } from '../../../utils/tests/renderWithProviders';
import Datatable from '../Datatable';
import { DatatableColumnDef } from '../Datatable.types';

type Data = {
  name: string;
  surname: string;
  color: string;
};

const data: Data[] = [
  { name: 'Stephen', surname: 'Strange', color: 'blue' },
  { name: 'Steve', surname: 'Rogers', color: 'blue' },
  { name: 'Bruce', surname: 'Banner', color: 'green' },
];

const columns: DatatableColumnDef<Data>[] = [
  { accessorKey: 'name' },
  { accessorKey: 'surname' },
  { accessorKey: 'color' },
];

describe('DatatableV2/sorting', () => {
  it('should have sorting enabled by default', () => {
    renderWithProviders(<Datatable data={data} columns={columns} />);

    expect(
      screen.getAllByRole('button', {
        name: /Unsorted/i,
      }),
    ).toHaveLength(columns.length);
  });

  describe('when is sorting enabled', () => {
    it('should update sorting labels on sort', async () => {
      renderWithProviders(
        <Datatable data={data} columns={columns} enableSorting />,
      );

      const sortingButtons = screen.getAllByRole('button', {
        name: /Unsorted/i,
      });

      await userEvent.click(sortingButtons[1]);

      expect(sortingButtons[0]).toHaveAttribute('aria-label', 'Unsorted');
      expect(sortingButtons[1]).toHaveAttribute(
        'aria-label',
        'Sorted by surname ascending',
      );
      expect(sortingButtons[2]).toHaveAttribute('aria-label', 'Unsorted');
    });

    it('should correctly sort table', async () => {
      renderWithProviders(
        <Datatable data={data} columns={columns} enableSorting />,
      );

      const sortingButtons = screen.getAllByRole('button', {
        name: /Unsorted/i,
      });

      await userEvent.click(sortingButtons[2]);
      const tableCellsSorted = await screen.findAllByRole('cell');
      expect(tableCellsSorted[2]).toHaveTextContent('blue');
      expect(tableCellsSorted[5]).toHaveTextContent('blue');
      expect(tableCellsSorted[8]).toHaveTextContent('green');

      await userEvent.click(sortingButtons[1]);
      const tableCellsMultiSorted = await screen.findAllByRole('cell');
      expect(tableCellsMultiSorted[1]).toHaveTextContent('Rogers');
      expect(tableCellsMultiSorted[4]).toHaveTextContent('Strange');
      expect(tableCellsMultiSorted[7]).toHaveTextContent('Banner');
    });

    it('should sort on header name click', async () => {
      const sortCallback = jest.fn();
      renderWithProviders(
        <Datatable
          data={data}
          columns={columns}
          onStateChange={sortCallback}
        />,
      );

      const headerLabel = screen.getByText('name');

      await userEvent.click(headerLabel);

      expect(sortCallback).toHaveBeenCalledTimes(1);
    });

    it('should not become unsorted when removal is disabled', async () => {
      renderWithProviders(
        <Datatable
          data={data}
          columns={columns}
          enableSorting
          enableSortingRemoval={false}
        />,
      );

      const sortingButtons = screen.getAllByRole('button', {
        name: /Unsorted/i,
      });

      await userEvent.click(sortingButtons[0]);
      await userEvent.click(sortingButtons[0]);
      await userEvent.click(sortingButtons[0]);

      expect(sortingButtons[0]).toHaveAttribute(
        'aria-label',
        'Sorted by name ascending',
      );
    });

    it('should disable sorting for specific column if in columns definition', async () => {
      const sortCallback = jest.fn();
      renderWithProviders(
        <Datatable
          data={data}
          columns={[
            columns[0],
            columns[1],
            { ...columns[2], enableSorting: false },
          ]}
          enableSorting
          onStateChange={sortCallback}
        />,
      );

      const sortingButtons = screen.getAllByRole('button', {
        name: /Unsorted/i,
      });

      expect(sortingButtons).toHaveLength(2);

      const unsortableLabel = screen.getByText('color');

      await userEvent.click(unsortableLabel);

      expect(sortCallback).not.toHaveBeenCalled();
    });
  });

  describe('when is sorting disabled', () => {
    it('should not sort on header name click', async () => {
      const sortCallback = jest.fn();
      renderWithProviders(
        <Datatable
          data={data}
          columns={columns}
          onStateChange={sortCallback}
          enableSorting={false}
        />,
      );

      const tableHeader = screen.getAllByRole('columnheader');

      await userEvent.click(tableHeader[0]);

      expect(sortCallback).not.toHaveBeenCalled();
    });
  });
});
