import { screen } from '@testing-library/react';

import { setup } from '../../../utils/tests/renderWithProviders';
import Datatable from '../Datatable';
import { columns, data } from './mocks';

describe('DatatableV2/sorting', () => {
  it('should have pagination enabled by default', () => {
    setup(<Datatable data={data} columns={columns} id="test" />);

    expect(
      screen.getByRole('button', {
        name: /Go to the next page of table/i,
      }),
    ).toBeInTheDocument();
  });

  describe('when is pagination enabled', () => {
    it('should navigate to correct page on click', async () => {
      const { user } = setup(
        <Datatable
          data={data}
          columns={columns}
          enablePagination
          initialState={{ pagination: { pageSize: 1 } }}
          id="test"
        />,
      );

      expect(screen.getByText('Strange')).toBeInTheDocument();
      await user.click(
        screen.getByRole('button', { name: /Go to the next page of table/i }),
      );
      expect(screen.getByText('Rogers')).toBeInTheDocument();
      await user.click(
        screen.getByRole('button', {
          name: /Go to the previous page of table/i,
        }),
      );
      expect(screen.getByText('Strange')).toBeInTheDocument();
      await user.click(
        screen.getByRole('button', { name: /Go to the last page of table/i }),
      );
      expect(screen.getByText('Banner')).toBeInTheDocument();
      await user.click(
        screen.getByRole('button', { name: /Go to the first page of table/i }),
      );
      expect(screen.getByText('Strange')).toBeInTheDocument();
    });
  });

  describe('when rows per page are enabled', () => {
    it('should correctly change rows per page count', async () => {
      const { user } = setup(
        <Datatable
          data={data}
          columns={columns}
          initialState={{ pagination: { pageSize: 3 } }}
          rowsPerPageOptions={[1, 3]}
          enableRowsPerPage
          id="test"
        />,
      );

      expect(screen.getAllByRole('row')).toHaveLength(4); // 3 data rows + 1 header row

      await user.selectOptions(screen.getByLabelText('Rows per page'), '1');
      expect(screen.getAllByRole('row')).toHaveLength(2); // 1 data row + 1 header row
    });
  });
});
