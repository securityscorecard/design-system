import { screen } from '@testing-library/react';

import { setup } from '../../../utils/tests/renderWithProviders';
import Datatable from '../Datatable';
import { columns, data } from './mocks';

describe('DatatableV2/columnSettingsPanel', () => {
  it('should open the column settings panel via column actions menu', async () => {
    const { user } = setup(
      <Datatable data={data} columns={columns} id="test" />,
    );

    await user.click(
      screen.getByRole('button', {
        name: /Columns/i,
      }),
    );

    expect(screen.getByText('Column settings')).toBeInTheDocument();
  });

  it('should close the column settings panel on close button click', async () => {
    const { user } = setup(
      <Datatable
        data={data}
        columns={columns}
        initialState={{ showColumnSettings: true }}
        id="test"
      />,
    );

    expect(screen.getByText('Column settings')).toBeInTheDocument();

    await user.click(
      screen.getByRole('button', {
        name: /Close column settings/i,
      }),
    );

    expect(screen.queryByText('Column settings')).not.toBeInTheDocument();
  });

  it('should hide column in table', async () => {
    const { user } = setup(
      <Datatable
        data={data}
        columns={columns}
        initialState={{ showColumnSettings: true }}
        id="test"
      />,
    );

    expect(
      screen.getByRole('columnheader', { name: 'name' }),
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole('checkbox', {
        name: /Hide name column/i,
      }),
    );

    expect(
      screen.queryByRole('columnheader', { name: 'name' }),
    ).not.toBeInTheDocument();
  });

  it('should show column in table', async () => {
    const { user } = setup(
      <Datatable
        data={data}
        columns={columns}
        initialState={{
          showColumnSettings: true,
          columnVisibility: { name: false },
        }}
        id="test"
      />,
    );
    expect(
      screen.queryByRole('columnheader', { name: 'name' }),
    ).not.toBeInTheDocument();

    await user.click(
      screen.getByRole('checkbox', {
        name: /Show name column/i,
      }),
    );

    expect(
      screen.getByRole('columnheader', { name: 'name' }),
    ).toBeInTheDocument();
  });

  it('should show all column', async () => {
    const { user } = setup(
      <Datatable
        data={data}
        columns={columns}
        initialState={{
          showColumnSettings: true,
          columnVisibility: { name: false, surname: false, color: false },
        }}
        id="test"
        enableRowSelection={false}
      />,
    );
    expect(screen.queryByRole('columnheader')).not.toBeInTheDocument();

    await user.click(
      screen.getByRole('checkbox', {
        name: /Show all columns/i,
      }),
    );

    expect(screen.getAllByRole('columnheader')).toHaveLength(3);
  });

  it('should hide all column except one', async () => {
    const { user } = setup(
      <Datatable
        data={data}
        columns={columns}
        initialState={{
          showColumnSettings: true,
        }}
        id="test"
        enableRowSelection={false}
      />,
    );
    expect(screen.getAllByRole('columnheader')).toHaveLength(3);

    await user.click(
      screen.getByRole('checkbox', {
        name: /Hide all columns/i,
      }),
    );
    // eslint-disable-next-line jest-dom/prefer-in-document
    expect(screen.getAllByRole('columnheader')).toHaveLength(1);
  });

  it('should pin column in table', async () => {
    const { user } = setup(
      <Datatable
        data={data}
        columns={columns}
        initialState={{ showColumnSettings: true }}
        id="test"
      />,
    );

    await user.click(
      screen.getByRole('checkbox', {
        name: /Pin color column/i,
      }),
    );

    expect(screen.getAllByRole('columnheader')[1]).toHaveTextContent('color');
  });

  it('should unpin column in table', async () => {
    const { user } = setup(
      <Datatable
        data={data}
        columns={columns}
        initialState={{
          showColumnSettings: true,
          columnPinning: { left: ['color'] },
        }}
        id="test"
      />,
    );

    expect(screen.getAllByRole('columnheader')[1]).toHaveTextContent('color');

    await user.click(
      screen.getByRole('checkbox', {
        name: /Pin color column/i,
      }),
    );

    expect(screen.getAllByRole('columnheader')[1]).toHaveTextContent('name');
    expect(screen.getAllByRole('columnheader')[3]).toHaveTextContent('color');
  });

  it('should reset column pinning', async () => {
    const { user } = setup(
      <Datatable
        data={data}
        columns={columns}
        initialState={{
          showColumnSettings: true,
        }}
        id="test"
      />,
    );

    await user.click(
      screen.getByRole('checkbox', {
        name: /Pin color column/i,
      }),
    );
    expect(screen.getAllByRole('columnheader')[1]).toHaveTextContent('color');

    await user.click(
      screen.getByRole('checkbox', {
        name: /Pin all columns/i,
      }),
    );
    await user.click(
      screen.getByRole('checkbox', {
        name: /Unpin all columns/i,
      }),
    );
    expect(screen.getAllByRole('columnheader')[1]).toHaveTextContent('name');
  });

  it('should pin all columns', async () => {
    const { user } = setup(
      <Datatable
        data={data}
        columns={columns}
        initialState={{
          showColumnSettings: true,
        }}
        id="test"
      />,
    );

    expect(
      screen
        .getAllByRole('columnheader')
        .filter((element) => element.getAttribute('data-pinned') === 'left'),
    ).toHaveLength(1);
    await user.click(
      screen.getByRole('checkbox', {
        name: /Pin all columns/i,
      }),
    );
    expect(
      screen
        .getAllByRole('columnheader')
        .filter((element) => element.getAttribute('data-pinned') === 'left'),
    ).toHaveLength(4);
  });

  it('should unpin all columns', async () => {
    const { user } = setup(
      <Datatable
        data={data}
        columns={columns}
        initialState={{
          showColumnSettings: true,
        }}
        id="test"
      />,
    );

    expect(
      screen
        .getAllByRole('columnheader')
        .filter((element) => element.getAttribute('data-pinned') === 'left'),
    ).toHaveLength(1);
    await user.click(
      screen.getByRole('checkbox', {
        name: /Pin all columns/i,
      }),
    );
    expect(
      screen
        .getAllByRole('columnheader')
        .filter((element) => element.getAttribute('data-pinned') === 'left'),
    ).toHaveLength(4);
    await user.click(
      screen.getByRole('checkbox', {
        name: /Unpin all columns/i,
      }),
    );
    expect(
      screen
        .getAllByRole('columnheader')
        .filter((element) => element.getAttribute('data-pinned') === 'left'),
    ).toHaveLength(0);
  });
});
