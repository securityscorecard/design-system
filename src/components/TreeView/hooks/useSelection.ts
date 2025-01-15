import { useCallback, useEffect, useMemo, useState } from 'react';

import { FlattenedItem } from '../TreeView.types';

interface UseSelectionProps<D> {
  items: FlattenedItem<D>[];
  selectedIds?: string[];
  defaultSelectedIds?: string[];
  onSelectionChange?: (selectedIds: string[]) => void;
}

export function useSelection<D>({
  items,
  selectedIds: controlledSelectedIds,
  defaultSelectedIds = [],
  onSelectionChange,
}: UseSelectionProps<D>) {
  // Internal state for uncontrolled mode
  const [internalSelectedIds, setInternalSelectedIds] = useState<Set<string>>(
    () => new Set(defaultSelectedIds),
  );

  // Use controlled ids if provided, otherwise use internal state
  const selectedItems = useMemo(
    () =>
      new Set(
        controlledSelectedIds !== undefined
          ? controlledSelectedIds
          : Array.from(internalSelectedIds),
      ),
    [controlledSelectedIds, internalSelectedIds],
  );

  // Calculate parent-child relationships
  const itemRelationships = useMemo(() => {
    const relationships = new Map<
      string,
      { parentId: string | null; childIds: string[] }
    >();

    items.forEach((item) => {
      relationships.set(item.id, {
        parentId: item.parentId,
        childIds: items
          .filter((child) => child.parentId === item.id)
          .map((child) => child.id),
      });
    });

    return relationships;
  }, [items]);

  // Calculate indeterminate states
  const indeterminateItems = useMemo(() => {
    const indeterminate = new Set<string>();

    // Helper function to check if any descendant is selected
    const hasSelectedDescendant = (itemId: string): boolean => {
      const { childIds } = itemRelationships.get(itemId) || { childIds: [] };
      return childIds.some(
        (childId) =>
          selectedItems.has(childId) || hasSelectedDescendant(childId),
      );
    };

    // Helper function to check if all descendants are selected
    const areAllDescendantsSelected = (itemId: string): boolean => {
      const { childIds } = itemRelationships.get(itemId) || { childIds: [] };

      if (childIds.length === 0) return false;

      return childIds.every((childId) => {
        const hasAllDescendants = areAllDescendantsSelected(childId);
        return (
          selectedItems.has(childId) &&
          (hasAllDescendants ||
            !itemRelationships.get(childId)?.childIds.length)
        );
      });
    };

    // Calculate indeterminate state for each item
    items.forEach((item) => {
      const { childIds } = itemRelationships.get(item.id) || { childIds: [] };

      // Skip items without children
      if (childIds.length === 0) return;

      const hasSelected = hasSelectedDescendant(item.id);
      const allSelected = areAllDescendantsSelected(item.id);

      if (allSelected) {
        // If all descendants are selected, add parent to selection
        selectedItems.add(item.id);
      } else if (hasSelected) {
        // Only set indeterminate if some but not all children are selected
        indeterminate.add(item.id);
      }
    });

    return indeterminate;
  }, [items, selectedItems, itemRelationships]);

  // Update controlled state when it changes
  useEffect(() => {
    if (controlledSelectedIds !== undefined) {
      setInternalSelectedIds(new Set(controlledSelectedIds));
    }
  }, [controlledSelectedIds]);

  // Handle selection changes
  const handleSelectionChange = useCallback(
    (itemId: string, selected: boolean) => {
      const newSelection = new Set(selectedItems);

      // Helper function to get all descendant ids
      const getDescendantIds = (id: string): string[] => {
        const { childIds } = itemRelationships.get(id) || {
          childIds: [] as string[],
        };
        return childIds.reduce(
          (acc, childId) => [...acc, childId, ...getDescendantIds(childId)],
          [],
        );
      };

      // Helper function to update parent selection state
      const updateParentState = (id: string) => {
        const { parentId } = itemRelationships.get(id) || { parentId: null };
        if (parentId) {
          const { childIds } = itemRelationships.get(parentId) || {
            childIds: [],
          };
          const allChildrenSelected = childIds.every((childId) =>
            newSelection.has(childId),
          );

          if (allChildrenSelected) {
            newSelection.add(parentId);
          } else {
            newSelection.delete(parentId);
          }

          // Continue updating up the tree
          updateParentState(parentId);
        }
      };

      // Get all affected IDs (current item and its descendants)
      const descendantIds = getDescendantIds(itemId);
      const affectedIds = [itemId, ...descendantIds];

      // Update selection state for all affected IDs
      affectedIds.forEach((id) => {
        if (selected) {
          newSelection.add(id);
        } else {
          newSelection.delete(id);
        }
      });

      // Update parent states
      updateParentState(itemId);

      // Update state and trigger callback
      if (controlledSelectedIds === undefined) {
        setInternalSelectedIds(newSelection);
      }

      onSelectionChange?.(Array.from(newSelection).sort());
    },
    [
      selectedItems,
      itemRelationships,
      controlledSelectedIds,
      onSelectionChange,
    ],
  );

  return {
    selectedItems,
    indeterminateItems,
    handleSelectionChange,
  };
}
