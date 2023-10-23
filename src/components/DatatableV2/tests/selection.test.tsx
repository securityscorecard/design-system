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

describe('DatatableV2/selection', () => {
  it('should have selection disabled by default', () => {
    renderWithProviders(<Datatable data={data} columns={columns} />);

    expect(
      screen.queryByRole('checkbox', {
        name: /Toggle select row/i,
      }),
    ).not.toBeInTheDocument();
  });

  describe('when is selection enabled', () => {
    it('should select row on click', async () => {
      renderWithProviders(
        <Datatable data={data} columns={columns} enableRowSelection />,
      );

      await userEvent.click(screen.getAllByLabelText('Toggle select row')[0]);

      expect(screen.getAllByLabelText('Toggle select row')[0]).toBeChecked();
      expect(
        screen.getAllByLabelText('Toggle select row')[1],
      ).not.toBeChecked();
      expect(
        screen.getAllByLabelText('Toggle select row')[2],
      ).not.toBeChecked();
    });

    it('should deselect row on click', async () => {
      renderWithProviders(
        <Datatable
          data={data}
          columns={columns}
          enableRowSelection
          initialState={{ rowSelection: { 0: true } }}
        />,
      );

      await userEvent.click(screen.getAllByLabelText('Toggle select row')[0]);

      expect(
        screen.getAllByLabelText('Toggle select row')[0],
      ).not.toBeChecked();
    });

    describe('select all', () => {
      it('should select all rows on click on selection header', async () => {
        renderWithProviders(
          <Datatable data={data} columns={columns} enableRowSelection />,
        );

        await userEvent.click(screen.getByLabelText('Toggle select all'));

        expect(screen.getAllByLabelText('Toggle select row')[0]).toBeChecked();
        expect(screen.getAllByLabelText('Toggle select row')[1]).toBeChecked();
        expect(screen.getAllByLabelText('Toggle select row')[2]).toBeChecked();
      });

      it('should deselect all rows on click on selection header', async () => {
        renderWithProviders(
          <Datatable
            data={data}
            columns={columns}
            enableRowSelection
            initialState={{ rowSelection: { 0: true, 1: true, 2: true } }}
          />,
        );

        await userEvent.click(screen.getByLabelText('Toggle select all'));

        expect(
          screen.getAllByLabelText('Toggle select row')[0],
        ).not.toBeChecked();
        expect(
          screen.getAllByLabelText('Toggle select row')[1],
        ).not.toBeChecked();
        expect(
          screen.getAllByLabelText('Toggle select row')[2],
        ).not.toBeChecked();
      });

      it('should not select disabled rows on click on selection header', async () => {
        renderWithProviders(
          <Datatable
            data={data}
            columns={columns}
            enableRowSelection={(row) => row.original.color !== 'green'}
          />,
        );
        await userEvent.click(screen.getByLabelText('Toggle select all'));

        expect(
          screen.getAllByLabelText('Toggle select row')[2],
        ).not.toBeChecked();
      });
    });

    describe('selection modes', () => {
      it('should select only rows on current page when "selectionMode=page"', async () => {
        renderWithProviders(
          <Datatable
            data={data}
            columns={columns}
            enableRowSelection
            selectAllMode="page"
            initialState={{ pagination: { pageSize: 2 } }}
          />,
        );

        await userEvent.click(screen.getByLabelText('Toggle select all'));
        expect(screen.getAllByLabelText('Toggle select row')[0]).toBeChecked();
        expect(screen.getAllByLabelText('Toggle select row')[1]).toBeChecked();

        await userEvent.click(
          screen.getByRole('button', { name: /Go to the next page of table/i }),
        );
        expect(
          screen.getByLabelText('Toggle select all'),
        ).toBePartiallyChecked();
        expect(
          screen.getAllByLabelText('Toggle select row')[0],
        ).not.toBeChecked();
      });
      it('should select all rows when "selectionMode=all"', async () => {
        renderWithProviders(
          <Datatable
            data={data}
            columns={columns}
            enableRowSelection
            selectAllMode="all"
            initialState={{ pagination: { pageSize: 2 } }}
          />,
        );

        await userEvent.click(screen.getByLabelText('Toggle select all'));
        expect(screen.getAllByLabelText('Toggle select row')[0]).toBeChecked();
        expect(screen.getAllByLabelText('Toggle select row')[1]).toBeChecked();

        await userEvent.click(
          screen.getByRole('button', { name: /Go to the next page of table/i }),
        );
        expect(screen.getByLabelText('Toggle select all')).toBeChecked();
        expect(screen.getAllByLabelText('Toggle select row')[0]).toBeChecked();
      });
    });

    it('should circle through selected rows when multi select is disabled', async () => {
      renderWithProviders(
        <Datatable
          data={data}
          columns={columns}
          enableRowSelection
          enableMultiRowSelection={false}
        />,
      );

      await userEvent.click(screen.getAllByLabelText('Toggle select row')[0]);
      expect(screen.getAllByLabelText('Toggle select row')[0]).toBeChecked();
      await userEvent.click(screen.getAllByLabelText('Toggle select row')[1]);
      expect(
        screen.getAllByLabelText('Toggle select row')[0],
      ).not.toBeChecked();
      expect(screen.getAllByLabelText('Toggle select row')[1]).toBeChecked();
    });
  });
});
