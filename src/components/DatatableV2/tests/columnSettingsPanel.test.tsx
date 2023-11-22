import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { renderWithProviders } from '../../../utils/tests/renderWithProviders';
import Datatable from '../Datatable';
import { columns, data } from './mocks';

describe('DatatableV2/columnSettingsPanel', () => {
  it.skip('should open the column settings panel via column actions menu', async () => {
    renderWithProviders(<Datatable data={data} columns={columns} />);

    await userEvent.click(
      screen.getAllByRole('button', {
        name: /Column actions/i,
      })[0],
    );
    await userEvent.click(
      screen.getByRole('button', {
        name: /⚙️ Column settings/i,
      }),
    );

    expect(screen.getByText('Column settings')).toBeInTheDocument();
  });

  it('should close the column settings panel on close button click', async () => {
    renderWithProviders(
      <Datatable
        data={data}
        columns={columns}
        initialState={{ showColumnSettings: true }}
      />,
    );

    expect(screen.getByText('Column settings')).toBeInTheDocument();

    await userEvent.click(
      screen.getByRole('button', {
        name: /Close column settings/i,
      }),
    );

    expect(screen.queryByText('Column settings')).not.toBeInTheDocument();
  });

  it('should hide column in table', async () => {
    renderWithProviders(
      <Datatable
        data={data}
        columns={columns}
        initialState={{ showColumnSettings: true }}
      />,
    );

    expect(
      screen.getByRole('columnheader', { name: 'name' }),
    ).toBeInTheDocument();

    await userEvent.click(
      screen.getByRole('checkbox', {
        name: /Hide name column/i,
      }),
    );

    expect(
      screen.queryByRole('columnheader', { name: 'name' }),
    ).not.toBeInTheDocument();
  });

  it('should show column in table', async () => {
    renderWithProviders(
      <Datatable
        data={data}
        columns={columns}
        initialState={{
          showColumnSettings: true,
          columnVisibility: { name: false },
        }}
      />,
    );
    expect(
      screen.queryByRole('columnheader', { name: 'name' }),
    ).not.toBeInTheDocument();

    await userEvent.click(
      screen.getByRole('checkbox', {
        name: /Show name column/i,
      }),
    );

    expect(
      screen.getByRole('columnheader', { name: 'name' }),
    ).toBeInTheDocument();
  });

  it('should show all column', async () => {
    renderWithProviders(
      <Datatable
        data={data}
        columns={columns}
        initialState={{
          showColumnSettings: true,
          columnVisibility: { name: false, surname: false, color: false },
        }}
      />,
    );
    expect(screen.queryByRole('columnheader')).not.toBeInTheDocument();

    await userEvent.click(
      screen.getByRole('checkbox', {
        name: /Show all columns/i,
      }),
    );

    expect(screen.getAllByRole('columnheader')).toHaveLength(3);
  });

  it('should hide all column', async () => {
    renderWithProviders(
      <Datatable
        data={data}
        columns={columns}
        initialState={{
          showColumnSettings: true,
        }}
      />,
    );
    expect(screen.getAllByRole('columnheader')).toHaveLength(3);

    await userEvent.click(
      screen.getByRole('checkbox', {
        name: /Hide all columns/i,
      }),
    );

    expect(screen.queryByRole('columnheader')).not.toBeInTheDocument();
  });

  it('should pin column in table', async () => {
    renderWithProviders(
      <Datatable
        data={data}
        columns={columns}
        initialState={{ showColumnSettings: true }}
      />,
    );

    await userEvent.click(
      screen.getByRole('checkbox', {
        name: /Pin color column/i,
      }),
    );

    expect(screen.getAllByRole('columnheader')[0]).toHaveTextContent('color');
  });

  it('should unpin column in table', async () => {
    renderWithProviders(
      <Datatable
        data={data}
        columns={columns}
        initialState={{
          showColumnSettings: true,
          columnPinning: { left: ['color'] },
        }}
      />,
    );

    expect(screen.getAllByRole('columnheader')[0]).toHaveTextContent('color');

    await userEvent.click(
      screen.getByRole('checkbox', {
        name: /Pin color column/i,
      }),
    );

    expect(screen.getAllByRole('columnheader')[0]).toHaveTextContent('name');
    expect(screen.getAllByRole('columnheader')[2]).toHaveTextContent('color');
  });

  it('should reset column pinning', async () => {
    renderWithProviders(
      <Datatable
        data={data}
        columns={columns}
        initialState={{
          showColumnSettings: true,
        }}
      />,
    );

    await userEvent.click(
      screen.getByRole('checkbox', {
        name: /Pin color column/i,
      }),
    );
    expect(screen.getAllByRole('columnheader')[0]).toHaveTextContent('color');

    await userEvent.click(
      screen.getByRole('button', {
        name: /Unpin all columns/i,
      }),
    );
    expect(screen.getAllByRole('columnheader')[0]).toHaveTextContent('name');
  });
});
