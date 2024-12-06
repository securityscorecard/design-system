import { screen } from '@testing-library/react';

import { setup } from '../../../utils/tests/renderWithProviders';
import Datatable from '../Datatable';
import { columns, data } from './mocks';

describe('DatatableV2/columnVisibility', () => {
  it('should have column visibility enabled by default', async () => {
    const { user } = setup(
      <Datatable data={data} columns={columns} id="test" />,
    );

    await user.click(
      screen.getAllByRole('button', {
        name: /Column actions/i,
      })[0],
    );
    expect(
      screen.getByRole('menuitem', {
        name: /Hide column/i,
      }),
    ).toBeInTheDocument();
  });

  describe('when is column visibility enabled', () => {
    it('should hide column', async () => {
      const { user } = setup(
        <Datatable data={data} columns={columns} id="test" />,
      );

      await user.click(
        screen.getAllByRole('button', {
          name: /Column actions/i,
        })[0],
      );
      await user.click(
        screen.getByRole('menuitem', {
          name: /Hide column/i,
        }),
      );
      expect(
        screen.queryByRole('columnheader', { name: 'name ⋮' }),
      ).not.toBeInTheDocument();
    });

    it('should hide column visibility for specific column if in columns definition', async () => {
      const { user } = setup(
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

      await user.click(
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
