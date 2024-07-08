import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import TreeView from './TreeView';

const mockData = [
  { id: '1', name: 'Item 1', subRows: [{ id: '1-1', name: 'SubItem 1-1' }] },
  { id: '2', name: 'Item 2' },
];

const renderPrimaryContent = (row) => <div>{row.name}</div>;

describe('TreeView', () => {
  test('should render correct number of rows', () => {
    render(
      <TreeView data={mockData} renderPrimaryContent={renderPrimaryContent} />,
    );
    const rows = screen.getAllByRole('listitem');
    expect(rows).toHaveLength(3);
  });

  test('should correctly collapse and expand rows', () => {
    render(
      <TreeView data={mockData} renderPrimaryContent={renderPrimaryContent} />,
    );

    // Initially, sub-item should be visible
    expect(screen.getByText('SubItem 1-1')).toBeInTheDocument();

    // Click to collapse
    fireEvent.click(
      screen.getAllByRole('button', {
        name: /To collapse nested rows, press the space bar./i,
      })[0],
    );
    expect(screen.queryByText('SubItem 1-1')).not.toBeInTheDocument();

    // Click to expand
    fireEvent.click(
      screen.getAllByRole('button', {
        name: /To expand nested rows, press the space bar./i,
      })[0],
    );
    expect(screen.getByText('SubItem 1-1')).toBeInTheDocument();
  });
});
