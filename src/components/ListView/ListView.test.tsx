import { screen } from '@testing-library/react';

import ListView from './ListView';
import { setup } from '../../utils/tests/setup';

const data = [{ name: 'abc' }, { name: 'xyz' }];
describe('ListView', () => {
  it('should select row on click', async () => {
    const { user } = setup(
      <ListView
        data={data}
        renderListViewRow={({ row }) => <span>{row.name}</span>}
        enableRowSelection
      />,
    );

    const checkbox = screen.getAllByRole('checkbox')[0];

    await user.click(checkbox);

    expect(checkbox).toBeChecked();
  });
  it('should navigate to next page', async () => {
    const { user } = setup(
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

    await user.click(
      screen.getByRole('button', { name: /Go to the next page/i }),
    );

    expect(screen.getByRole('listitem')).toHaveTextContent('xyz');
  });
  it('should not throw error when data is not provided', () => {
    expect(() => {
      // @ts-expect-error - data is not provided
      setup(<ListView />);
    }).not.toThrow();
  });
});
