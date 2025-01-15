import { act, renderHook } from '@testing-library/react';

import { useSelection } from './useSelection';
import { FlattenedItem } from '../TreeView.types';

const mockItems: FlattenedItem<unknown>[] = [
  { id: '1', parentId: null, depth: 0, index: 0 },
  { id: '1-1', parentId: '1', depth: 1, index: 1 },
  { id: '1-2', parentId: '1', depth: 1, index: 2 },
  { id: '2', parentId: null, depth: 0, index: 3 },
  { id: '2-1', parentId: '2', depth: 1, index: 4 },
];

describe('useSelection', () => {
  describe('recursive selection', () => {
    it('should initialize with defaultSelectedIds', () => {
      const { result } = renderHook(() =>
        useSelection({
          items: mockItems,
          defaultSelectedIds: ['1-1'],
          hasRecursiveSelection: true,
        }),
      );

      expect(result.current.selectedItems.has('1-1')).toBe(true);
      expect(result.current.indeterminateItems.has('1')).toBe(true);
    });

    it('should handle controlled selection', () => {
      const { result, rerender } = renderHook(
        ({ selectedIds }) =>
          useSelection({
            items: mockItems,
            selectedIds,
            hasRecursiveSelection: true,
          }),
        {
          initialProps: { selectedIds: ['1-1'] },
        },
      );

      expect(result.current.selectedItems.has('1-1')).toBe(true);

      rerender({ selectedIds: ['1-2'] });
      expect(result.current.selectedItems.has('1-2')).toBe(true);
      expect(result.current.selectedItems.has('1-1')).toBe(false);
    });

    it('should set parent to checked when all children are selected', () => {
      const { result } = renderHook(() =>
        useSelection({
          items: mockItems,
          defaultSelectedIds: ['1-1', '1-2'],
          hasRecursiveSelection: true,
        }),
      );

      expect(result.current.selectedItems.has('1')).toBe(true);
      expect(result.current.indeterminateItems.has('1')).toBe(false);
    });

    it('should set parent to indeterminate when some children are selected', () => {
      const { result } = renderHook(() =>
        useSelection({
          items: mockItems,
          defaultSelectedIds: ['1-1'],
          hasRecursiveSelection: true,
        }),
      );

      expect(result.current.selectedItems.has('1')).toBe(false);
      expect(result.current.indeterminateItems.has('1')).toBe(true);
    });

    it('should handle selection changes correctly', () => {
      const onSelectionChange = vi.fn();
      const { result } = renderHook(() =>
        useSelection({
          items: mockItems,
          onSelectionChange,
          hasRecursiveSelection: true,
        }),
      );

      // Select a parent
      act(() => {
        result.current.handleSelectionChange('1', true);
      });

      // Should select parent and all children
      expect(result.current.selectedItems.has('1')).toBe(true);
      expect(result.current.selectedItems.has('1-1')).toBe(true);
      expect(result.current.selectedItems.has('1-2')).toBe(true);
      expect(result.current.indeterminateItems.has('1')).toBe(false);

      // Deselect one child
      act(() => {
        result.current.handleSelectionChange('1-1', false);
      });

      // Parent should become indeterminate
      expect(result.current.selectedItems.has('1')).toBe(false);
      expect(result.current.selectedItems.has('1-1')).toBe(false);
      expect(result.current.selectedItems.has('1-2')).toBe(true);
      expect(result.current.indeterminateItems.has('1')).toBe(true);
    });

    it('should call onSelectionChange with updated selection', () => {
      const onSelectionChange = vi.fn();
      const { result } = renderHook(() =>
        useSelection({
          items: mockItems,
          onSelectionChange,
          hasRecursiveSelection: true,
        }),
      );

      act(() => {
        result.current.handleSelectionChange('1', true);
      });

      expect(onSelectionChange).toHaveBeenCalledWith(['1', '1-1', '1-2']);
    });

    it('should handle deep nested selection correctly', () => {
      const deepMockItems: FlattenedItem<unknown>[] = [
        { id: '1', parentId: null, depth: 0, index: 0 },
        { id: '1-1', parentId: '1', depth: 1, index: 1 },
        { id: '1-1-1', parentId: '1-1', depth: 2, index: 2 },
        { id: '1-1-2', parentId: '1-1', depth: 2, index: 3 },
        { id: '1-2', parentId: '1', depth: 1, index: 4 },
      ];

      const { result } = renderHook(() =>
        useSelection({
          items: deepMockItems,
          defaultSelectedIds: ['1-1-1', '1-1-2'],
          hasRecursiveSelection: true,
        }),
      );

      // When all children of 1-1 are selected, 1-1 should be selected
      expect(result.current.selectedItems.has('1-1')).toBe(true);
      expect(result.current.indeterminateItems.has('1-1')).toBe(false);

      // Parent (1) should be indeterminate because not all its children are selected
      expect(result.current.selectedItems.has('1')).toBe(false);
      expect(result.current.indeterminateItems.has('1')).toBe(true);

      // Select the remaining child of 1
      act(() => {
        result.current.handleSelectionChange('1-2', true);
      });

      // Now parent (1) should be selected because all its descendants are selected
      expect(result.current.selectedItems.has('1')).toBe(true);
      expect(result.current.indeterminateItems.has('1')).toBe(false);
    });

    describe('parent-child selection behavior', () => {
      it('should select all descendants when parent is selected', () => {
        const onSelectionChange = vi.fn();
        const { result } = renderHook(() =>
          useSelection({
            items: mockItems,
            onSelectionChange,
            hasRecursiveSelection: true,
          }),
        );

        act(() => {
          result.current.handleSelectionChange('1', true);
        });

        expect(onSelectionChange).toHaveBeenCalledWith(['1', '1-1', '1-2']);
        expect(result.current.selectedItems.has('1')).toBe(true);
        expect(result.current.selectedItems.has('1-1')).toBe(true);
        expect(result.current.selectedItems.has('1-2')).toBe(true);
      });

      it('should deselect all descendants when parent is deselected', () => {
        const onSelectionChange = vi.fn();
        const { result } = renderHook(() =>
          useSelection({
            items: mockItems,
            defaultSelectedIds: ['1', '1-1', '1-2'],
            onSelectionChange,
            hasRecursiveSelection: true,
          }),
        );

        act(() => {
          result.current.handleSelectionChange('1', false);
        });

        expect(onSelectionChange).toHaveBeenCalledWith([]);
        expect(result.current.selectedItems.has('1')).toBe(false);
        expect(result.current.selectedItems.has('1-1')).toBe(false);
        expect(result.current.selectedItems.has('1-2')).toBe(false);
      });

      it('should handle deselecting single child correctly', () => {
        const onSelectionChange = vi.fn();
        const { result } = renderHook(() =>
          useSelection({
            items: mockItems,
            defaultSelectedIds: ['1', '1-1', '1-2'],
            onSelectionChange,
            hasRecursiveSelection: true,
          }),
        );

        act(() => {
          result.current.handleSelectionChange('1-1', false);
        });

        expect(onSelectionChange).toHaveBeenCalledWith(['1-2']);
        expect(result.current.selectedItems.has('1')).toBe(false);
        expect(result.current.selectedItems.has('1-1')).toBe(false);
        expect(result.current.selectedItems.has('1-2')).toBe(true);
        expect(result.current.indeterminateItems.has('1')).toBe(true);
      });

      it('should handle selecting remaining child correctly', () => {
        const onSelectionChange = vi.fn();
        const { result } = renderHook(() =>
          useSelection({
            items: mockItems,
            defaultSelectedIds: ['1-2'],
            onSelectionChange,
            hasRecursiveSelection: true,
          }),
        );

        act(() => {
          result.current.handleSelectionChange('1-1', true);
        });

        expect(onSelectionChange).toHaveBeenCalledWith(['1', '1-1', '1-2']);
        expect(result.current.selectedItems.has('1')).toBe(true);
        expect(result.current.selectedItems.has('1-1')).toBe(true);
        expect(result.current.selectedItems.has('1-2')).toBe(true);
        expect(result.current.indeterminateItems.has('1')).toBe(false);
      });
    });

    describe('deep tree selection behavior', () => {
      const deepMockItems: FlattenedItem<unknown>[] = [
        { id: '1', parentId: null, depth: 0, index: 0 },
        { id: '1-1', parentId: '1', depth: 1, index: 1 },
        { id: '1-1-1', parentId: '1-1', depth: 2, index: 2 },
        { id: '1-1-2', parentId: '1-1', depth: 2, index: 3 },
        { id: '1-2', parentId: '1', depth: 1, index: 4 },
      ];

      it('should handle selecting middle level parent', () => {
        const onSelectionChange = vi.fn();
        const { result } = renderHook(() =>
          useSelection({
            items: deepMockItems,
            onSelectionChange,
            hasRecursiveSelection: true,
          }),
        );

        act(() => {
          result.current.handleSelectionChange('1-1', true);
        });

        expect(onSelectionChange).toHaveBeenCalledWith([
          '1-1',
          '1-1-1',
          '1-1-2',
        ]);
        expect(result.current.selectedItems.has('1')).toBe(false);
        expect(result.current.selectedItems.has('1-1')).toBe(true);
        expect(result.current.selectedItems.has('1-1-1')).toBe(true);
        expect(result.current.selectedItems.has('1-1-2')).toBe(true);
        expect(result.current.indeterminateItems.has('1')).toBe(true);
      });

      it('should handle deselecting middle level parent', () => {
        const onSelectionChange = vi.fn();
        const { result } = renderHook(() =>
          useSelection({
            items: deepMockItems,
            defaultSelectedIds: ['1', '1-1', '1-1-1', '1-1-2', '1-2'],
            onSelectionChange,
            hasRecursiveSelection: true,
          }),
        );

        act(() => {
          result.current.handleSelectionChange('1-1', false);
        });

        expect(onSelectionChange).toHaveBeenCalledWith(['1-2']);
        expect(result.current.selectedItems.has('1')).toBe(false);
        expect(result.current.selectedItems.has('1-1')).toBe(false);
        expect(result.current.selectedItems.has('1-1-1')).toBe(false);
        expect(result.current.selectedItems.has('1-1-2')).toBe(false);
        expect(result.current.selectedItems.has('1-2')).toBe(true);
        expect(result.current.indeterminateItems.has('1')).toBe(true);
      });
    });

    describe('selection order consistency', () => {
      it('should maintain consistent order in selection callback', () => {
        const onSelectionChange = vi.fn();
        const { result } = renderHook(() =>
          useSelection({
            items: mockItems,
            onSelectionChange,
            hasRecursiveSelection: true,
          }),
        );

        // Select items in different order
        act(() => {
          result.current.handleSelectionChange('1-2', true);
        });
        act(() => {
          result.current.handleSelectionChange('1-1', true);
        });

        // Should always be in sorted order
        expect(onSelectionChange).toHaveBeenLastCalledWith(['1', '1-1', '1-2']);
      });
    });
  });

  describe('non-recursive selection', () => {
    it('should handle independent selection of items', () => {
      const onSelectionChange = vi.fn();
      const { result } = renderHook(() =>
        useSelection({
          items: mockItems,
          onSelectionChange,
          hasRecursiveSelection: false,
        }),
      );

      act(() => {
        result.current.handleSelectionChange('1', true);
      });

      expect(onSelectionChange).toHaveBeenCalledWith(['1']);
      expect(result.current.selectedItems.has('1')).toBe(true);
      expect(result.current.selectedItems.has('1-1')).toBe(false);
      expect(result.current.selectedItems.has('1-2')).toBe(false);
      expect(result.current.indeterminateItems.size).toBe(0);
    });

    it('should not affect parent when selecting children', () => {
      const onSelectionChange = vi.fn();
      const { result } = renderHook(() =>
        useSelection({
          items: mockItems,
          onSelectionChange,
          hasRecursiveSelection: false,
        }),
      );

      act(() => {
        result.current.handleSelectionChange('1-1', true);
      });

      expect(onSelectionChange).toHaveBeenCalledWith(['1-1']);
      expect(result.current.selectedItems.has('1')).toBe(false);
      expect(result.current.selectedItems.has('1-1')).toBe(true);
      expect(result.current.indeterminateItems.size).toBe(0);
    });

    it('should maintain selection state on parent changes', () => {
      const onSelectionChange = vi.fn();
      const { result } = renderHook(() =>
        useSelection({
          items: mockItems,
          defaultSelectedIds: ['1-1', '1-2'],
          onSelectionChange,
          hasRecursiveSelection: false,
        }),
      );

      act(() => {
        result.current.handleSelectionChange('1', true);
      });

      expect(onSelectionChange).toHaveBeenCalledWith(['1', '1-1', '1-2']);
      expect(result.current.selectedItems.has('1')).toBe(true);
      expect(result.current.selectedItems.has('1-1')).toBe(true);
      expect(result.current.selectedItems.has('1-2')).toBe(true);
      expect(result.current.indeterminateItems.size).toBe(0);
    });
  });
});
