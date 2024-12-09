import { screen } from '@testing-library/react';

import TreeView from './TreeView';
import { setup } from '../../utils/tests/setup';

const mockData = [
  { id: '1', name: 'Item 1', subRows: [{ id: '1-1', name: 'SubItem 1-1' }] },
  { id: '2', name: 'Item 2' },
];

const renderPrimaryContent = (row) => <div>{row.name}</div>;

describe('TreeView', () => {
  test('should render correct number of rows', () => {
    setup(
      <TreeView data={mockData} renderPrimaryContent={renderPrimaryContent} />,
    );
    const rows = screen.getAllByRole('listitem');
    expect(rows).toHaveLength(3);
  });

  test('should correctly collapse and expand rows', async () => {
    const { user } = setup(
      <TreeView data={mockData} renderPrimaryContent={renderPrimaryContent} />,
    );

    // Initially, sub-item should be visible
    expect(screen.getByText('SubItem 1-1')).toBeInTheDocument();

    // Click to collapse
    await user.click(
      screen.getAllByRole('button', {
        name: /To collapse nested rows, press the space bar./i,
      })[0],
    );
    expect(screen.queryByText('SubItem 1-1')).not.toBeInTheDocument();

    // Click to expand
    await user.click(
      screen.getAllByRole('button', {
        name: /To expand nested rows, press the space bar./i,
      })[0],
    );
    expect(screen.getByText('SubItem 1-1')).toBeInTheDocument();
  });
  test('should rerender items when data change', () => {
    const { rerender } = setup(
      <TreeView data={mockData} renderPrimaryContent={renderPrimaryContent} />,
    );

    expect(screen.getAllByRole('listitem')).toHaveLength(3);

    rerender(
      <TreeView
        data={[mockData[0]]}
        renderPrimaryContent={renderPrimaryContent}
      />,
    );
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });
});
