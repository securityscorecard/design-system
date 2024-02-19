import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithProviders } from '../../../utils/tests/renderWithProviders';
import Datatable from '../Datatable';
import { columns, data } from './mocks';

/**
 * There tests right now doesn't guarantee correct functionality
 * as we only check for calling the `onColumnSizingChange` callback
 * We need to figure out some better way of teseting here
 */
describe('DatatableV2/columnResizing', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should have column resizing enabled by default', async () => {
    renderWithProviders(<Datatable data={data} columns={columns} id="test" />);

    expect(screen.getAllByRole('separator')).toHaveLength(columns.length);
  });

  describe('when is column resizing enabled', () => {
    it('should resize column by dragging handler', () => {
      const columnSizeMock = jest.fn();
      renderWithProviders(
        <Datatable
          data={data}
          columns={columns}
          onColumnSizingChange={columnSizeMock}
          id="test"
        />,
      );

      const handler = screen.getAllByRole('separator')[0];
      fireEvent.mouseDown(handler, { clientX: 10, clientY: 20 });
      fireEvent.mouseMove(handler, { clientX: 20, clientY: 30 });
      fireEvent.mouseUp(handler);
      expect(columnSizeMock).toBeCalledTimes(2);
    });

    it('should resize column by using left and right arrow keys', async () => {
      const columnSizeMock = jest.fn();
      renderWithProviders(
        <Datatable
          data={data}
          columns={columns}
          onColumnSizingChange={columnSizeMock}
          id="test"
        />,
      );

      const handler = screen.getAllByRole('separator')[0];
      await userEvent.type(handler, '{arrowright}{arrowleft}');

      expect(columnSizeMock).toBeCalledTimes(3);
    });

    it('should not resize column by using other keys', async () => {
      const columnSizeMock = jest.fn();
      renderWithProviders(
        <Datatable
          data={data}
          columns={columns}
          onColumnSizingChange={columnSizeMock}
          id="test"
        />,
      );

      const handler = screen.getAllByRole('separator')[0];
      await userEvent.type(handler, '{arrowup}{arrowdown}{space}{enter}');

      expect(columnSizeMock).toBeCalledTimes(1);
    });

    it('should reset column sizing on double click', async () => {
      const columnSizeMock = jest.fn();
      renderWithProviders(
        <Datatable
          data={data}
          columns={columns}
          initialState={{ columnSizing: { name: 500 } }}
          onColumnSizingChange={columnSizeMock}
          id="test"
        />,
      );

      const handler = screen.getAllByRole('separator')[0];
      await userEvent.dblClick(handler);

      expect(columnSizeMock).toBeCalledTimes(3);
    });

    it.skip('should reset column sizing with column action', async () => {
      const columnSizeMock = jest.fn();
      renderWithProviders(
        <Datatable
          data={data}
          columns={columns}
          initialState={{ columnSizing: { name: 500 } }}
          onColumnSizingChange={columnSizeMock}
          id="test"
        />,
      );

      await userEvent.click(
        screen.getAllByRole('button', {
          name: /Column actions/i,
        })[0],
      );
      await userEvent.click(
        screen.getByRole('button', {
          name: /❌ Reset column size/i,
        }),
      );

      expect(columnSizeMock).toBeCalledTimes(1);
    });
  });
});
