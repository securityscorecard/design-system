import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { renderWithProviders } from '../../../utils/tests/renderWithProviders';
import Datatable from '../Datatable';
import { columns, data } from './mocks';

describe('DatatableV2/columnVisibility', () => {
  it.skip('should have column visibility enabled by default', async () => {
    renderWithProviders(<Datatable data={data} columns={columns} id="test" />);

    await userEvent.click(
      screen.getAllByRole('button', {
        name: /Column actions/i,
      })[0],
    );
    expect(
      screen.getByRole('button', {
        name: /👀 Hide column/i,
      }),
    ).toBeInTheDocument();
  });

  describe('when is column visibility enabled', () => {
    it.skip('should hide column', async () => {
      renderWithProviders(
        <Datatable data={data} columns={columns} id="test" />,
      );

      await userEvent.click(
        screen.getAllByRole('button', {
          name: /Column actions/i,
        })[0],
      );
      await userEvent.click(
        screen.getByRole('button', {
          name: /👀 Hide column/i,
        }),
      );
      expect(
        screen.queryByRole('columnheader', { name: 'name ⋮' }),
      ).not.toBeInTheDocument();
    });

    it('should hide column visibility for specific column if in columns definition', async () => {
      renderWithProviders(
        <Datatable
          data={data}
          columns={[
            columns[0],
            columns[1],
            { ...columns[2], enableHiding: false },
          ]}
          enableHiding
          id="test"
        />,
      );

      await userEvent.click(
        screen.getAllByRole('button', {
          name: /Column actions/i,
        })[2],
      );
      expect(
        screen.queryByRole('button', {
          name: /👀 Hide column/i,
        }),
      ).not.toBeInTheDocument();
    });
  });
});
