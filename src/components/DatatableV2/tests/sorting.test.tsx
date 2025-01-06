import { screen } from '@testing-library/react';
import { vi } from 'vitest';

import { setup } from '../../../utils/tests/setup';
import Datatable from '../Datatable';
import { columns, data } from './mocks';

describe('DatatableV2/sorting', () => {
  it('should have sorting enabled by default', () => {
    setup(<Datatable data={data} columns={columns} id="test" />);

    expect(
      screen.getAllByRole('button', {
        name: /Sort by/i,
      }),
    ).toHaveLength(columns.length);
  });

  describe('when is sorting enabled', () => {
    // TODO: enable in UXD-1682
    it.skip('should update sorting labels on sort', async () => {
      const { user } = setup(
        <Datatable data={data} columns={columns} enableSorting id="test" />,
      );

      const sortingButtons = screen.getAllByRole('button', {
        name: /Unsorted/i,
      });

      await user.click(sortingButtons[1]);

      expect(sortingButtons[0]).toHaveAttribute('aria-label', 'Unsorted');
      expect(sortingButtons[1]).toHaveAttribute(
        'aria-label',
        'Sorted by surname ascending',
      );
      expect(sortingButtons[2]).toHaveAttribute('aria-label', 'Unsorted');
    });

    it('should correctly sort table', async () => {
      const { user } = setup(
        <Datatable
          data={data}
          columns={columns}
          enableSorting
          enableMultiSort
          id="test"
        />,
      );

      const sortingButtons = screen.getAllByRole('button', {
        name: /Sort by/i,
      });

      await user.click(sortingButtons[2]);
      const tableCellsSorted = await screen.findAllByRole('cell');
      expect(tableCellsSorted[3]).toHaveTextContent('blue');
      expect(tableCellsSorted[7]).toHaveTextContent('blue');
      expect(tableCellsSorted[11]).toHaveTextContent('green');

      await user.keyboard('[ShiftLeft>]');
      await user.click(sortingButtons[1]);
      const tableCellsMultiSorted = await screen.findAllByRole('cell');
      expect(tableCellsMultiSorted[2]).toHaveTextContent('Rogers');
      expect(tableCellsMultiSorted[6]).toHaveTextContent('Strange');
      expect(tableCellsMultiSorted[10]).toHaveTextContent('Banner');
    });

    it('should sort on header name click', async () => {
      const sortCallback = vi.fn();
      const { user } = setup(
        <Datatable
          data={data}
          columns={columns}
          id="test"
          onSortingChange={sortCallback}
        />,
      );

      const headerLabel = screen.getByRole('button', {
        name: /Sort by Name/i,
      });

      await user.click(headerLabel);

      expect(sortCallback).toHaveBeenCalledTimes(1);
    });

    it('should not become unsorted when removal is disabled', async () => {
      const { user } = setup(
        <Datatable
          data={data}
          columns={columns}
          enableSorting
          enableSortingRemoval={false}
          id="test"
        />,
      );
      const header = screen.getByRole('columnheader', { name: 'name' });
      expect(header).toHaveAttribute('data-sorted', 'false');

      const sortingButton = screen.getByRole('button', {
        name: /Sort by name/i,
      });

      await user.click(sortingButton);
      await user.click(sortingButton);
      await user.click(sortingButton);

      expect(header).toHaveAttribute('data-sorted', 'asc');
    });

    // TODO: enable in UXD-1681
    it.skip('should disable sorting for specific column if in columns definition', async () => {
      const sortCallback = vi.fn();
      const { user } = setup(
        <Datatable
          data={data}
          columns={[
            columns[0],
            columns[1],
            { ...columns[2], enableSorting: false },
          ]}
          enableSorting
          onStateChange={sortCallback}
          id="test"
        />,
      );

      const sortingButtons = screen.getAllByRole('button', {
        name: /Sort by/i,
      });

      expect(sortingButtons).toHaveLength(2);

      const unsortableLabel = screen.getByText('color');

      await user.click(unsortableLabel);

      expect(sortCallback).not.toHaveBeenCalled();
    });
  });

  describe('when is sorting disabled', () => {
    it('should not sort on header name click', async () => {
      const sortCallback = vi.fn();
      const { user } = setup(
        <Datatable
          data={data}
          columns={columns}
          onStateChange={sortCallback}
          enableSorting={false}
          id="test"
        />,
      );

      const tableHeader = screen.getAllByRole('columnheader');

      await user.click(tableHeader[0]);

      expect(sortCallback).not.toHaveBeenCalled();
    });
  });
});
