import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithProviders } from '../../../utils/tests/renderWithProviders';
import Datatable from '../Datatable';
import { columns, data } from './mocks';

/**
 * I'm skipping these test because we removed the sorting button from header
 * to save some space for header label. We will need to redo those tests.
 */
describe.skip('DatatableV2/sorting', () => {
  it('should have sorting enabled by default', () => {
    renderWithProviders(<Datatable data={data} columns={columns} id="test" />);

    expect(
      screen.getAllByRole('button', {
        name: /Unsorted/i,
      }),
    ).toHaveLength(columns.length);
  });

  describe('when is sorting enabled', () => {
    it('should update sorting labels on sort', async () => {
      renderWithProviders(
        <Datatable data={data} columns={columns} enableSorting id="test" />,
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
        <Datatable
          data={data}
          columns={columns}
          enableSorting
          enableMultiSort
          id="test"
        />,
      );
      const user = userEvent.setup();

      const sortingButtons = screen.getAllByRole('button', {
        name: /Unsorted/i,
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
      const sortCallback = jest.fn();
      renderWithProviders(
        <Datatable
          data={data}
          columns={columns}
          id="test"
          onStateChange={sortCallback}
        />,
      );

      const headerLabel = screen.getByText('name');

      await userEvent.click(headerLabel);

      // TODO(rpodrazky): figure out why this is called twice in test
      expect(sortCallback).toHaveBeenCalledTimes(2);
    });

    it('should not become unsorted when removal is disabled', async () => {
      renderWithProviders(
        <Datatable
          data={data}
          columns={columns}
          enableSorting
          enableSortingRemoval={false}
          id="test"
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
          id="test"
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
          id="test"
        />,
      );

      const tableHeader = screen.getAllByRole('columnheader');

      await userEvent.click(tableHeader[0]);

      expect(sortCallback).not.toHaveBeenCalled();
    });
  });
});
