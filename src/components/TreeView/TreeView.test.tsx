import { screen } from '@testing-library/react';

import TreeView from './TreeView';
import { setup } from '../../utils/tests/setup';

const mockData = [
  {
    id: '1',
    name: 'Item 1',
    subRows: [
      { id: '1-1', name: 'SubItem 1-1' },
      { id: '1-2', name: 'SubItem 1-2' },
    ],
  },
  { id: '2', name: 'Item 2' },
];

const renderPrimaryContent = (row) => <div>{row.name}</div>;

describe('TreeView', () => {
  test('should render correct number of rows', () => {
    setup(
      <TreeView data={mockData} renderPrimaryContent={renderPrimaryContent} />,
    );
    const rows = screen.getAllByRole('listitem');
    expect(rows).toHaveLength(4);
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

    expect(screen.getAllByRole('listitem')).toHaveLength(4);

    rerender(
      <TreeView
        data={[mockData[0]]}
        renderPrimaryContent={renderPrimaryContent}
      />,
    );
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });
});

describe('TreeView Selection', () => {
  describe('non-recursive selection', () => {
    test('should not render checkboxes when isSelectable is false', () => {
      setup(
        <TreeView
          data={mockData}
          renderPrimaryContent={renderPrimaryContent}
        />,
      );

      expect(screen.queryByRole('checkbox')).not.toBeInTheDocument();
    });

    test('should render checkboxes when isSelectable is true', () => {
      setup(
        <TreeView
          data={mockData}
          isSelectable
          renderPrimaryContent={renderPrimaryContent}
        />,
      );

      expect(screen.getAllByRole('checkbox')).toHaveLength(4); // Total number of items
    });

    test('should handle independent selection of parent and children', async () => {
      const onSelectionChange = vi.fn();
      const { user } = setup(
        <TreeView
          data={mockData}
          isSelectable
          renderPrimaryContent={renderPrimaryContent}
          onSelectionChange={onSelectionChange}
        />,
      );

      // Select parent
      await user.click(screen.getAllByRole('checkbox')[0]);
      expect(onSelectionChange).toHaveBeenCalledWith(['1']);

      // Select child - parent should remain selected
      await user.click(screen.getAllByRole('checkbox')[1]);
      expect(onSelectionChange).toHaveBeenCalledWith(['1', '1-1']);

      // Deselect parent - child should remain selected
      await user.click(screen.getAllByRole('checkbox')[0]);
      expect(onSelectionChange).toHaveBeenCalledWith(['1-1']);
    });

    test('should handle controlled selection without affecting parent-child relationship', () => {
      const { rerender } = setup(
        <TreeView
          data={mockData}
          isSelectable
          selectedIds={['1-1']}
          renderPrimaryContent={renderPrimaryContent}
        />,
      );

      let checkboxes = screen.getAllByRole('checkbox');
      expect(checkboxes[1]).toBeChecked(); // 1-1 is checked
      expect(checkboxes[0]).not.toBeChecked(); // parent remains unchecked
      expect(checkboxes[0]).not.toBePartiallyChecked(); // parent is not indeterminate

      rerender(
        <TreeView
          data={mockData}
          isSelectable
          selectedIds={['1', '1-1', '1-2']}
          renderPrimaryContent={renderPrimaryContent}
        />,
      );

      checkboxes = screen.getAllByRole('checkbox');
      expect(checkboxes[0]).toBeChecked(); // parent is checked
      expect(checkboxes[1]).toBeChecked(); // child 1-1 is checked
      expect(checkboxes[2]).toBeChecked(); // child 1-2 is checked
      expect(checkboxes[0]).not.toBePartiallyChecked(); // no indeterminate state
    });

    test('should maintain independent selection state after collapse/expand', async () => {
      const onSelectionChange = vi.fn();
      const { user } = setup(
        <TreeView
          data={mockData}
          isSelectable
          isCollapsible
          renderPrimaryContent={renderPrimaryContent}
          onSelectionChange={onSelectionChange}
        />,
      );

      // Select child
      await user.click(screen.getAllByRole('checkbox')[1]);
      expect(onSelectionChange).toHaveBeenCalledWith(['1-1']);

      // Collapse parent
      await user.click(
        screen.getAllByRole('button', {
          name: /To collapse nested rows, press the space bar./i,
        })[0],
      );

      // Expand parent
      await user.click(
        screen.getAllByRole('button', {
          name: /To expand nested rows, press the space bar./i,
        })[0],
      );

      // Check selection state is preserved
      expect(screen.getAllByRole('checkbox')[1]).toBeChecked();
      expect(screen.getAllByRole('checkbox')[0]).not.toBeChecked();
    });

    test('should handle multiple independent selections', async () => {
      const onSelectionChange = vi.fn();
      const { user } = setup(
        <TreeView
          data={mockData}
          isSelectable
          renderPrimaryContent={renderPrimaryContent}
          onSelectionChange={onSelectionChange}
        />,
      );

      // Select multiple items independently
      await user.click(screen.getAllByRole('checkbox')[1]); // Select 1-1
      expect(onSelectionChange).toHaveBeenCalledWith(['1-1']);

      await user.click(screen.getAllByRole('checkbox')[3]); // Select 2
      expect(onSelectionChange).toHaveBeenCalledWith(['1-1', '2']);

      // Deselect middle item
      await user.click(screen.getAllByRole('checkbox')[1]); // Deselect 1-1
      expect(onSelectionChange).toHaveBeenCalledWith(['2']);
    });
  });

  describe('recursive selection', () => {
    test('should handle selection correctly', async () => {
      const onSelectionChange = vi.fn();
      const { user } = setup(
        <TreeView
          data={mockData}
          isSelectable
          hasRecursiveSelection
          renderPrimaryContent={renderPrimaryContent}
          onSelectionChange={onSelectionChange}
        />,
      );

      // Select parent
      await user.click(screen.getAllByRole('checkbox')[0]);
      expect(onSelectionChange).toHaveBeenCalledWith(['1', '1-1', '1-2']);

      // Deselect child
      await user.click(screen.getAllByRole('checkbox')[1]);
      expect(onSelectionChange).toHaveBeenCalledWith(['1-2']);
    });

    test('should handle controlled selection', () => {
      const { rerender } = setup(
        <TreeView
          data={mockData}
          isSelectable
          hasRecursiveSelection
          selectedIds={['1-1']}
          renderPrimaryContent={renderPrimaryContent}
        />,
      );

      let checkboxes = screen.getAllByRole('checkbox');
      expect(checkboxes[1]).toBeChecked(); // 1-1 is checked
      expect(checkboxes[0]).toBePartiallyChecked(); // parent is indeterminate

      rerender(
        <TreeView
          data={mockData}
          isSelectable
          hasRecursiveSelection
          selectedIds={['1-1', '1-2']}
          renderPrimaryContent={renderPrimaryContent}
        />,
      );

      // Get fresh references to checkboxes after rerender
      checkboxes = screen.getAllByRole('checkbox');
      expect(checkboxes[0]).toBeChecked(); // parent is checked
      expect(checkboxes[0]).not.toBePartiallyChecked(); // parent is not indeterminate
    });
  });

  describe('selection toolbar', () => {
    test('should clear selection when Clear selection button is clicked', async () => {
      const onSelectionChange = vi.fn();
      const { user } = setup(
        <TreeView
          data={mockData}
          isSelectable
          renderPrimaryContent={renderPrimaryContent}
          onSelectionChange={onSelectionChange}
        />,
      );

      // Select some items first
      await user.click(screen.getAllByRole('checkbox')[0]); // Select parent
      expect(onSelectionChange).toHaveBeenLastCalledWith(['1']);

      // Verify selection toolbar is shown
      const clearButton = screen.getByRole('button', {
        name: /Clear selection/i,
      });
      expect(clearButton).toBeInTheDocument();

      // Click clear selection button
      await user.click(clearButton);

      // Verify selection is cleared
      expect(onSelectionChange).toHaveBeenLastCalledWith([]);
      expect(screen.getAllByRole('checkbox')[0]).not.toBeChecked();
      expect(screen.getAllByRole('checkbox')[1]).not.toBeChecked();
      expect(screen.getAllByRole('checkbox')[2]).not.toBeChecked();

      // Verify selection toolbar is hidden
      expect(clearButton).not.toBeInTheDocument();
    });

    test('should clear selection in controlled mode', async () => {
      const onSelectionChange = vi.fn();
      const { user } = setup(
        <TreeView
          data={mockData}
          isSelectable
          selectedIds={['1', '1-1']}
          renderPrimaryContent={renderPrimaryContent}
          onSelectionChange={onSelectionChange}
        />,
      );

      const clearButton = screen.getByRole('button', {
        name: /Clear selection/i,
      });

      await user.click(clearButton);
      expect(onSelectionChange).toHaveBeenCalledWith([]);
    });

    test('should pass correct props to renderRowSelectionActions', async () => {
      const renderRowSelectionActions = vi.fn();
      const { user } = setup(
        <TreeView
          data={mockData}
          isSelectable
          renderPrimaryContent={renderPrimaryContent}
          renderRowSelectionActions={renderRowSelectionActions}
        />,
      );

      // Initially no selection, shouldn't be called
      expect(renderRowSelectionActions).not.toHaveBeenCalled();

      // Select some items
      await user.click(screen.getAllByRole('checkbox')[0]); // Select parent
      await user.click(screen.getAllByRole('checkbox')[3]); // Select item 2

      // Should be called with selected IDs and total count
      expect(renderRowSelectionActions).toHaveBeenLastCalledWith({
        selectedIds: ['1', '2'],
        totalRowCount: 4, // Total number of items in mockData
      });

      // Clear selection of first item
      await user.click(screen.getAllByRole('checkbox')[0]);

      // Should be called with updated selection
      expect(renderRowSelectionActions).toHaveBeenLastCalledWith({
        selectedIds: ['2'],
        totalRowCount: 4,
      });
    });

    test('should pass correct props in controlled mode', () => {
      const renderRowSelectionActions = vi.fn();
      const { rerender } = setup(
        <TreeView
          data={mockData}
          isSelectable
          selectedIds={['1', '1-1']}
          renderPrimaryContent={renderPrimaryContent}
          renderRowSelectionActions={renderRowSelectionActions}
        />,
      );

      expect(renderRowSelectionActions).toHaveBeenLastCalledWith({
        selectedIds: ['1', '1-1'],
        totalRowCount: 4,
      });

      // Update controlled selection
      rerender(
        <TreeView
          data={mockData}
          isSelectable
          selectedIds={['2']}
          renderPrimaryContent={renderPrimaryContent}
          renderRowSelectionActions={renderRowSelectionActions}
        />,
      );

      expect(renderRowSelectionActions).toHaveBeenLastCalledWith({
        selectedIds: ['2'],
        totalRowCount: 4,
      });
    });

    test('should not render selection actions when no items are selected', async () => {
      const renderRowSelectionActions = vi.fn();
      const { user } = setup(
        <TreeView
          data={mockData}
          isSelectable
          selectedIds={['1']}
          renderPrimaryContent={renderPrimaryContent}
          renderRowSelectionActions={renderRowSelectionActions}
        />,
      );

      expect(renderRowSelectionActions).toHaveBeenCalled();

      // Clear selection
      const clearButton = screen.getByRole('button', {
        name: /Clear selection/i,
      });
      await user.click(clearButton);

      // Should not be called after clearing selection
      expect(renderRowSelectionActions).not.toHaveBeenCalledTimes(2);
    });
  });
});
