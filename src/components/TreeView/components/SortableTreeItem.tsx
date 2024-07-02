import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { iOS } from '../common/utils';
import TreeItem from './TreeItem';
import { SortableTreeItemProps } from '../TreeView.types';

function SortableTreeItem<D>({
  id,
  depth,
  ...props
}: SortableTreeItemProps<D>) {
  const {
    attributes,
    isDragging,
    isSorting,
    listeners,
    transform,
    transition,
    setDraggableNodeRef,
    setDroppableNodeRef,
  } = useSortable({
    id,
  });
  return (
    <TreeItem
      depth={depth}
      disableInteraction={isSorting}
      disableSelection={iOS}
      handleAttributes={attributes}
      handleListeners={listeners}
      id={id}
      innerRef={setDraggableNodeRef}
      isGhost={isDragging}
      style={{
        transform: CSS.Translate.toString(transform),
        transition,
      }}
      wrapperRef={setDroppableNodeRef}
      {...props}
    />
  );
}

SortableTreeItem.displayName = 'SortableTreeItem';

export default SortableTreeItem;
