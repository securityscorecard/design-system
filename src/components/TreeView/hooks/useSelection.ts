import { useCallback, useMemo, useState } from 'react';

import { FlattenedItem } from '../TreeView.types';

interface UseSelectionProps<D> {
  items: FlattenedItem<D>[];
  selectedIds?: string[];
  defaultSelectedIds?: string[];
  onSelectionChange?: (selectedIds: string[]) => void;
  hasRecursiveSelection?: boolean;
}

export function useSelection<D>({
  items,
  selectedIds: controlledSelectedIds,
  defaultSelectedIds = [],
  onSelectionChange,
  hasRecursiveSelection = false,
}: UseSelectionProps<D>) {
  // Internal state only for uncontrolled mode
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

  // Calculate indeterminate states only if recursive selection is enabled
  const indeterminateItems = useMemo(() => {
    if (!hasRecursiveSelection) {
      return new Set<string>();
    }

    const indeterminate = new Set<string>();

    const hasSelectedDescendant = (itemId: string): boolean => {
      const { childIds } = itemRelationships.get(itemId) || { childIds: [] };
      return childIds.some(
        (childId) =>
          selectedItems.has(childId) || hasSelectedDescendant(childId),
      );
    };

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

    items.forEach((item) => {
      const { childIds } = itemRelationships.get(item.id) || { childIds: [] };
      if (childIds.length === 0) return;

      const hasSelected = hasSelectedDescendant(item.id);
      const allSelected = areAllDescendantsSelected(item.id);

      if (allSelected) {
        selectedItems.add(item.id); // Add parent to selection when all descendants are selected
      } else if (hasSelected) {
        indeterminate.add(item.id);
      }
    });

    return indeterminate;
  }, [items, selectedItems, itemRelationships, hasRecursiveSelection]);

  // Handle selection changes
  const handleSelectionChange = useCallback(
    (itemId: string, selected: boolean) => {
      const newSelection = new Set(selectedItems);

      if (hasRecursiveSelection) {
        // Existing recursive selection logic
        const getDescendantIds = (id: string): string[] => {
          const { childIds } = itemRelationships.get(id) || {
            childIds: [] as string[],
          };
          return childIds.reduce(
            (acc, childId) => [...acc, childId, ...getDescendantIds(childId)],
            [],
          );
        };

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

            updateParentState(parentId);
          }
        };

        const descendantIds = getDescendantIds(itemId);
        const affectedIds = [itemId, ...descendantIds];

        affectedIds.forEach((id) => {
          if (selected) {
            newSelection.add(id);
          } else {
            newSelection.delete(id);
          }
        });

        updateParentState(itemId);
      } else {
        selected ? newSelection.add(itemId) : newSelection.delete(itemId);
      }

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
      hasRecursiveSelection,
    ],
  );

  const clearSelection = useCallback(() => {
    const newSelection = new Set<string>();

    if (controlledSelectedIds === undefined) {
      setInternalSelectedIds(newSelection);
    }

    onSelectionChange?.(Array.from(newSelection));
  }, [controlledSelectedIds, onSelectionChange]);

  return {
    selectedItems,
    indeterminateItems,
    handleSelectionChange,
    clearSelection,
  };
}
