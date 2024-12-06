import { screen } from '@testing-library/react';

import { setup } from '../../../utils/tests/renderWithProviders';
import Datatable from '../Datatable';
import { columns, data } from './mocks';

describe('DatatableV2/columnPinning', () => {
  it('should have column pinning enabled by default', async () => {
    const { user } = setup(
      <Datatable
        data={data}
        columns={columns}
        id="test"
        enableRowSelection={false}
      />,
    );

    await user.click(
      screen.getAllByRole('button', {
        name: /Column actions/i,
      })[0],
    );
    expect(
      screen.getByRole('menuitem', {
        name: 'Pin column',
      }),
    ).toBeInTheDocument();
  });

  describe('when is column pinning enabled', () => {
    it('should pin column to left', async () => {
      const { user } = setup(
        <Datatable
          data={data}
          columns={columns}
          enableColumnPinning
          enableRowSelection={false}
          id="test"
        />,
      );

      await user.click(
        screen.getAllByRole('button', {
          name: /Column actions/i,
        })[2],
      );
      await user.click(
        screen.getByRole('menuitem', {
          name: 'Pin column',
        }),
      );

      expect(screen.getAllByRole('columnheader')[0]).toHaveTextContent('color');
    });

    it('should unpin column', async () => {
      const { user } = setup(
        <Datatable
          data={data}
          columns={columns}
          enableColumnPinning
          enableRowSelection={false}
          initialState={{ columnPinning: { left: ['color'] } }}
          id="test"
        />,
      );

      expect(screen.getAllByRole('columnheader')[0]).toHaveTextContent('color');
      await user.click(
        screen.getAllByRole('button', {
          name: /Column actions/i,
        })[0],
      );
      await user.click(
        screen.getByRole('menuitem', {
          name: /Unpin column/i,
        }),
      );
      expect(screen.getAllByRole('columnheader')[0]).toHaveTextContent('name');
      expect(screen.getAllByRole('columnheader')[2]).toHaveTextContent('color');
    });

    it('should hide column pinning for specific column if in columns definition', async () => {
      const { user } = setup(
        <Datatable
          data={data}
          columns={[
            columns[0],
            columns[1],
            { ...columns[2], enablePinning: false },
          ]}
          enableColumnPinning
          id="test"
        />,
      );

      await user.click(
        screen.getAllByRole('button', {
          name: /Column actions/i,
        })[2],
      );
      expect(
        screen.queryByRole('menuitem', {
          name: 'Pin column',
        }),
      ).not.toBeInTheDocument();
    });
  });
});
