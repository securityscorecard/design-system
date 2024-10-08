import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithProviders } from '../../../utils/tests/renderWithProviders';
import Datatable from '../Datatable';
import { columns, data } from './mocks';

describe('DatatableV2/columnPinning', () => {
  it.skip('should have column pinning enabled by default', async () => {
    renderWithProviders(<Datatable data={data} columns={columns} id="test" />);

    await userEvent.click(
      screen.getAllByRole('button', {
        name: /Column actions/i,
      })[0],
    );
    expect(
      screen.getByRole('button', {
        name: /📌 Pin column/i,
      }),
    ).toBeInTheDocument();
  });

  describe('when is column pinning enabled', () => {
    it.skip('should pin column to left', async () => {
      renderWithProviders(
        <Datatable
          data={data}
          columns={columns}
          enableColumnPinning
          id="test"
        />,
      );

      await userEvent.click(
        screen.getAllByRole('button', {
          name: /Column actions/i,
        })[2],
      );
      await userEvent.click(
        screen.getByRole('button', {
          name: /📌 Pin column/i,
        }),
      );
      expect(screen.getAllByRole('columnheader')[0]).toHaveTextContent('color');
    });

    // it('should pin column to right', async () => {
    //   renderWithProviders(
    //     <Datatable data={data} columns={columns} enableColumnPinning />,
    //   );

    //   await userEvent.click(
    //     screen.getAllByRole('button', {
    //       name: /Show column actions/i,
    //     })[0],
    //   );
    //   await userEvent.click(
    //     screen.getByRole('button', {
    //       name: /📌 Pin column to right/i,
    //     }),
    //   );
    //   expect(screen.getAllByRole('columnheader')[2]).toHaveTextContent('name');
    // });

    it.skip('should unpin column', async () => {
      renderWithProviders(
        <Datatable
          data={data}
          columns={columns}
          enableColumnPinning
          initialState={{ columnPinning: { left: ['color'] } }}
          id="test"
        />,
      );

      expect(screen.getAllByRole('columnheader')[0]).toHaveTextContent('color');
      await userEvent.click(
        screen.getAllByRole('button', {
          name: /Column actions/i,
        })[0],
      );
      await userEvent.click(
        screen.getByRole('button', {
          name: /❌ Unpin column/i,
        }),
      );
      expect(screen.getAllByRole('columnheader')[0]).toHaveTextContent('name');
      expect(screen.getAllByRole('columnheader')[2]).toHaveTextContent('color');
    });

    it('should hide column pinning for specific column if in columns definition', async () => {
      renderWithProviders(
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

      await userEvent.click(
        screen.getAllByRole('button', {
          name: /Column actions/i,
        })[2],
      );
      expect(
        screen.queryByRole('button', {
          name: /📌 Pin column/i,
        }),
      ).not.toBeInTheDocument();
    });
  });
});
