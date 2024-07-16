import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSortable } from '@dnd-kit/sortable';

import SortableTreeItem from './SortableTreeItem';

jest.mock('@dnd-kit/sortable', () => ({
  useSortable: jest.fn(),
}));

const mockUseSortable = useSortable as jest.Mock;

describe('SortableTreeItem', () => {
  test('should render component', () => {
    mockUseSortable.mockReturnValue({
      attributes: {},
      isDragging: false,
      isSorting: false,
      listeners: {},
      transform: null,
      transition: null,
      setDraggableNodeRef: jest.fn(),
      setDroppableNodeRef: jest.fn(),
    });

    render(
      <SortableTreeItem
        id="test-id"
        depth={1}
        row={{ id: 'test-id', collapsed: false, subRows: [] }}
      />,
    );

    expect(screen.getByText('test-id')).toBeInTheDocument();
  });
});
