import { screen } from '@testing-library/react';
import { useSortable } from '@dnd-kit/sortable';
import { type Mock, vi } from 'vitest';

import SortableTreeItem from './SortableTreeItem';
import { setup } from '../../../utils/tests/setup';

vi.mock('@dnd-kit/sortable', () => ({
  useSortable: vi.fn(),
}));

const mockUseSortable = useSortable as Mock;

describe('SortableTreeItem', () => {
  test('should render component', () => {
    mockUseSortable.mockReturnValue({
      attributes: {},
      isDragging: false,
      isSorting: false,
      listeners: {},
      transform: null,
      transition: null,
      setDraggableNodeRef: vi.fn(),
      setDroppableNodeRef: vi.fn(),
    });

    setup(
      <SortableTreeItem
        id="test-id"
        depth={1}
        row={{ id: 'test-id', collapsed: false, subRows: [] }}
      />,
    );

    expect(screen.getByText('test-id')).toBeInTheDocument();
  });
});
