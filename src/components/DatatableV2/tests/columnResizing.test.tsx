import { screen } from '@testing-library/react';
import { vi } from 'vitest';

import { setup } from '../../../utils/tests/renderWithProviders';
import Datatable from '../Datatable';
import { columns, data } from './mocks';

/**
 * The tests right now doesn't guarantee correct functionality
 * as we only check for calling the `onColumnSizingChange` callback
 * We need to figure out some better way of teseting here
 */
describe('DatatableV2/columnResizing', () => {
  it('should have column resizing enabled by default', async () => {
    setup(<Datatable data={data} columns={columns} id="test" />);

    expect(screen.getAllByRole('separator')).toHaveLength(columns.length);
  });

  describe('when is column resizing enabled', () => {
    it('should resize column by dragging handler', async () => {
      const columnSizeMock = vi.fn();
      const { user } = setup(
        <Datatable
          data={data}
          columns={columns}
          onColumnSizingChange={columnSizeMock}
          id="test"
        />,
      );

      const handler = screen.getAllByRole('separator')[0];

      await user.pointer([
        {
          keys: '[MouseLeft>]',
          target: handler,
          coords: { clientX: 10, clientY: 20 },
        },
        { keys: '[/MouseLeft]' },
      ]);
      await user.pointer([
        {
          keys: '[MouseLeft>]',
          target: handler,
          coords: { clientX: 20, clientY: 30 },
        },
        { keys: '[/MouseLeft]' },
      ]);
      expect(columnSizeMock).toBeCalledTimes(2);
      columnSizeMock.mockReset();
    });

    it('should resize column by using left and right arrow keys', async () => {
      const columnSizeMock = vi.fn();
      const { user } = setup(
        <Datatable
          data={data}
          columns={columns}
          onColumnSizingChange={columnSizeMock}
          id="test"
        />,
      );

      const handler = screen.getAllByRole('separator')[0];
      await user.click(handler);
      await user.keyboard('{ArrowRight}{ArrowLeft}');

      expect(columnSizeMock).toBeCalledTimes(3);
      columnSizeMock.mockReset();
    });

    it('should not resize column by using other keys', async () => {
      const columnSizeMock = vi.fn();
      const { user } = setup(
        <Datatable
          data={data}
          columns={columns}
          onColumnSizingChange={columnSizeMock}
          id="test"
        />,
      );

      const handler = screen.getAllByRole('separator')[0];
      await user.click(handler);
      await user.keyboard('{ArrowUp}{ArrowDown}{Space}{Enter}');

      expect(columnSizeMock).toBeCalledTimes(1);
      columnSizeMock.mockReset();
    });

    it('should reset column sizing on double click', async () => {
      const columnSizeMock = vi.fn();
      const { user } = setup(
        <Datatable
          data={data}
          columns={columns}
          initialState={{ columnSizing: { name: 500 } }}
          onColumnSizingChange={columnSizeMock}
          id="test"
        />,
      );

      const handler = screen.getAllByRole('separator')[0];
      await user.dblClick(handler);

      expect(columnSizeMock).toBeCalledTimes(3);
      columnSizeMock.mockReset();
    });

    it.skip('should reset column sizing with column action', async () => {
      const columnSizeMock = vi.fn();
      const { user } = setup(
        <Datatable
          data={data}
          columns={columns}
          initialState={{ columnSizing: { name: 500 } }}
          onColumnSizingChange={columnSizeMock}
          id="test"
        />,
      );

      await user.click(
        screen.getAllByRole('button', {
          name: /Column actions/i,
        })[1],
      );
      await user.click(
        screen.getByRole('menuitem', {
          name: /Reset column size/i,
        }),
      );

      expect(columnSizeMock).toBeCalledTimes(1);
      columnSizeMock.mockReset();
    });
  });
});
