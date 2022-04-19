import {
  DragCancelEvent,
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
} from '@dnd-kit/core';

export interface SortableItemProps {
  id: string;
  label: string;
}

export interface SortableListProps {
  /**
   * Sorted array of list items keys. Items has to be unique.
   */
  items: SortableItemProps['id'][];
  /**
   * Object of items label. Keys should be values from `items` array.
   */
  labels?: Record<SortableItemProps['id'], SortableItemProps['label']>;
  /**
   * Callback called when items order is changed
   */
  onOrderChange?: (items: SortableItemProps['id'][]) => void;
  /**
   * Callback when dragging starts
   */
  onDragStart?: (event: DragStartEvent) => void;
  /**
   * Callback when dragging over another item
   */
  onDragOver?: (event: DragOverEvent) => void;
  /**
   * Callback when dragging ends
   */
  onDragEnd?: (event: DragEndEvent) => void;
  /**
   * Callback when dragging is canceled (e.g. by pressing ESC)
   */
  onDragCancel?: (event: DragCancelEvent) => void;
}
