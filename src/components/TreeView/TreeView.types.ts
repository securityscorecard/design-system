import type { ComponentProps, MutableRefObject, ReactNode } from 'react';
import type {
  DragCancelEvent,
  DragMoveEvent,
  DragOverEvent,
  DragStartEvent,
  DraggableAttributes,
} from '@dnd-kit/core';
import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';

import { IconNames, RegularIconTypes } from '../Icon';

type RowActionCallbackUnion<D, Type> =
  | Type
  | ((props: { row: TreeViewRow<D> }) => Type);

export type RowAction<D> = null | {
  label: RowActionCallbackUnion<D, string>;
  iconName: RowActionCallbackUnion<D, IconNames>;
  iconType?: RowActionCallbackUnion<D, RegularIconTypes>;
  onClick(props: { row: TreeViewRow<D> }): (event: Event) => void;
  isDisabled?: RowActionCallbackUnion<D, boolean>;
  isDestructive?: boolean;
};

export interface BaseTreeItem<D> {
  id: string;
  collapsed?: boolean;
  subRows?: TreeViewRow<D>[];
}
export type TreeViewRow<D> = BaseTreeItem<D> & D;

export type TreeItems<D> = TreeViewRow<D>[];

export interface TreeViewProps<D> {
  /** The tree data structure to be rendered */
  data: TreeItems<D>;

  /** Height of each row in pixels */
  rowHeight?: number;

  /** Whether rows can be collapsed/expanded */
  isCollapsible?: boolean;

  /** Whether rows can be dragged and reordered */
  isSortable?: boolean;

  /** Whether rows can be selected with checkboxes */
  isSelectable?: boolean;

  /** Whether selection of a parent row should automatically select/deselect all its descendants.
   * When true, selecting a parent selects all children, and parent shows indeterminate state when some children are selected.
   * When false, each row's selection state is independent.
   */
  hasRecursiveSelection?: boolean;

  /** Callback fired when drag operation is cancelled
   */
  onDragCancel?: (event: DragCancelEvent) => void;

  /** Callback fired when drag operation ends
   */
  onDragEnd?: (
    movedId: string,
    rows: {
      newItems: TreeItems<D>;
      oldItems: TreeItems<D>;
      flattenedNewItems?: TreeItems<D>;
      flattenedOldItems?: TreeItems<D>;
    },
  ) => void;

  /** Callback fired while dragging
   */
  onDragMove?: (event: DragMoveEvent) => void;

  /** Callback fired when dragging over a droppable area
   */
  onDragOver?: (event: DragOverEvent) => void;

  /** Callback fired when drag operation starts
   */
  onDragStart?: (event: DragStartEvent) => void;

  /** Callback fired when a row is clicked
   */
  onRowClick?: (row: TreeViewRow<D>) => void;

  /** Function to render the main content of each row
   */
  renderPrimaryContent: (row: TreeViewRow<D>) => ReactNode;

  /** Function to render additional content for each row
   */
  renderSecondaryContent?: (row: TreeViewRow<D>) => ReactNode;

  /** ID of the currently active (focused/highlighted) row */
  activeRowId?: string;

  /** Callback fired when active row changes
   */
  onActiveRowIdChange?: (id: string) => void;

  /** Array of actions available for each row */
  rowActions?: RowAction<D>[];

  /** Selected row IDs in controlled mode. Use this prop along with onSelectionChange
   * to control the selection state externally
   */
  selectedIds?: string[];

  /** Initially selected row IDs in uncontrolled mode. Use this prop when you want
   * the component to manage selection state internally
   */
  defaultSelectedIds?: string[];

  /** Callback fired when selection changes.
   * The `selectedIds` is array of currently selected row IDs, sorted in ascending order.
   * When a parent is selected, it and all its descendants will be included.
   * When some children of a parent are selected, the parent will be in indeterminate state
   * and won't be included in the array.
   */
  onSelectionChange?: (selectedIds: string[]) => void;
}

export type SortableTreeItemProps<D> = Omit<
  TreeItemProps<D>,
  'handleAttributes' | 'handleListeners'
>;

export interface TreeItemProps<D> extends Omit<ComponentProps<'li'>, 'id'> {
  depth: number;
  id: string;
  row: TreeViewRow<D>;
  childCount?: number;
  collapsed?: boolean;
  disableInteraction?: boolean;
  disableSelection?: boolean;
  handleAttributes: DraggableAttributes;
  handleListeners: SyntheticListenerMap;
  innerRef?: (node: HTMLDivElement) => void;
  isClone?: boolean;
  isGhost?: boolean;
  onCollapse?: () => void;
  wrapperRef?: (node: HTMLLIElement) => void;
  activeRowId?: TreeViewProps<D>['activeRowId'];
  isCollapsible?: TreeViewProps<D>['isCollapsible'];
  isSortable?: TreeViewProps<D>['isSortable'];
  onActiveRowIdChange?: TreeViewProps<D>['onActiveRowIdChange'];
  onRowClick?: TreeViewProps<D>['onRowClick'];
  renderPrimaryContent?: TreeViewProps<D>['renderPrimaryContent'];
  renderSecondaryContent?: TreeViewProps<D>['renderSecondaryContent'];
  rowActions?: TreeViewProps<D>['rowActions'];
  rowHeight?: TreeViewProps<D>['rowHeight'];
  /** Whether the item is selected */
  isSelected?: boolean;
  /** Whether the item is in indeterminate state (some children selected) */
  isIndeterminate?: boolean;
  /** Callback fired when selection changes */
  onSelectionChange?: (id: string, selected: boolean) => void;
  isSelectable?: TreeViewProps<D>['isSelectable'];
}

export type FlattenedItem<D> = {
  parentId: string | null;
  depth: number;
  index: number;
} & TreeViewRow<D>;

export type SensorContext<D> = MutableRefObject<{
  items: FlattenedItem<D>[];
  offset: number;
}>;
