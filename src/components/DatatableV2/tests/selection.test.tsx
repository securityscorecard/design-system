import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { renderWithProviders } from '../../../utils/tests/renderWithProviders';
import Datatable from '../Datatable';
import { columns, data } from './mocks';

describe('DatatableV2/selection', () => {
  it('should have selection enabled by default', () => {
    renderWithProviders(<Datatable data={data} columns={columns} id="test" />);

    expect(
      screen.getByRole('checkbox', {
        name: /Toggle select all/i,
      }),
    ).toBeInTheDocument();
  });

  describe('when is selection enabled', () => {
    it('should select row on click', async () => {
      renderWithProviders(
        <Datatable
          data={data}
          columns={columns}
          enableRowSelection
          id="test"
        />,
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
          id="test"
        />,
      );

      await userEvent.click(screen.getAllByLabelText('Toggle select row')[0]);

      expect(
        screen.getAllByLabelText('Toggle select row')[0],
      ).not.toBeChecked();
    });

    describe('batch selection', () => {
      it('should select row in batches when Shift key is pressed', async () => {
        renderWithProviders(
          <Datatable
            data={data}
            columns={columns}
            enableRowSelection
            id="test"
          />,
        );
        const rows = screen.getAllByLabelText('Toggle select row');
        await userEvent.click(rows[0]);
        await userEvent.click(rows[2], { shiftKey: true });

        expect(rows[1]).toBeChecked();
        expect(screen.getAllByLabelText('Toggle select all')[0]).toBeChecked();
      });
    });

    describe('select all', () => {
      it('should select all rows on click on selection header', async () => {
        renderWithProviders(
          <Datatable
            data={data}
            columns={columns}
            enableRowSelection
            id="test"
          />,
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
            id="test"
          />,
        );

        await userEvent.click(screen.getAllByLabelText('Toggle select all')[0]);

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
            id="test"
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
            id="test"
          />,
        );

        await userEvent.click(screen.getAllByLabelText('Toggle select all')[0]);
        expect(screen.getAllByLabelText('Toggle select row')[0]).toBeChecked();
        expect(screen.getAllByLabelText('Toggle select row')[1]).toBeChecked();

        await userEvent.click(
          screen.getByRole('button', { name: /Go to the next page of table/i }),
        );
        expect(
          screen.getAllByLabelText('Toggle select all')[0],
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
            id="test"
          />,
        );

        await userEvent.click(screen.getAllByLabelText('Toggle select all')[0]);
        expect(screen.getAllByLabelText('Toggle select row')[0]).toBeChecked();
        expect(screen.getAllByLabelText('Toggle select row')[1]).toBeChecked();

        await userEvent.click(
          screen.getByRole('button', { name: /Go to the next page of table/i }),
        );
        expect(screen.getAllByLabelText('Toggle select all')[0]).toBeChecked();
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
          id="test"
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
