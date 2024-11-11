import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ListView from './ListView';

const data = [{ name: 'abc' }, { name: 'xyz' }];
describe('ListView', () => {
  it('should select row on click', () => {
    render(
      <ListView
        data={data}
        renderListViewRow={({ row }) => <span>{row.name}</span>}
        enableRowSelection
      />,
    );

    const checkbox = screen.getAllByRole('checkbox')[0];

    userEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });
  it('should navigate to next page', () => {
    render(
      <ListView
        data={data}
        renderListViewRow={({ row }) => <span>{row.name}</span>}
        enableRowSelection
        initialState={{
          pagination: {
            pageSize: 1,
          },
        }}
      />,
    );

    userEvent.click(
      screen.getByRole('button', { name: /Go to the next page/i }),
    );

    expect(screen.getByRole('listitem')).toHaveTextContent('xyz');
  });
});
