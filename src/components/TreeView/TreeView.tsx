import React, { useState } from 'react';
import {
  DndContext,
  DragOverlay,
  DropAnimation,
  MeasuringStrategy,
  closestCenter,
  defaultDropAnimation,
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { getSubRowCount, setProperty } from './common/utils';
import type { TreeViewProps, TreeViewRow } from './TreeView.types';
import SortableTreeItem from './components/SortableTreeItem';
import { Surface } from '../layout';
import { useDnD } from './hooks/useDnD';

const measuring = {
  droppable: {
    strategy: MeasuringStrategy.Always,
  },
};

const dropAnimationConfig: DropAnimation = {
  keyframes({ transform }) {
    return [
      { opacity: 1, transform: CSS.Transform.toString(transform.initial) },
      {
        opacity: 0,
        transform: CSS.Transform.toString({
          ...transform.final,
          x: transform.final.x + 5,
          y: transform.final.y + 5,
        }),
      },
    ];
  },
  easing: 'ease-out',
  sideEffects({ active }) {
    active.node.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: defaultDropAnimation.duration,
      easing: defaultDropAnimation.easing,
    });
  },
};

function TreeView<D>({
  data,
  rowHeight = 56,
  isCollapsible = true,
  isSortable = true,
  renderPrimaryContent,
  renderSecondaryContent,
  onDragCancel,
  onDragEnd,
  onDragMove,
  onDragOver,
  onDragStart,
  onRowClick,
  activeRowId,
  onActiveRowIdChange,
}: TreeViewProps<D>) {
  const [items, setItems] = useState(() => data);

  const {
    activeId,
    activeItem,
    announcements,
    flattenedItems,
    projected,
    sensors,
    sortedIds,
    handleDragCancel,
    handleDragEnd,
    handleDragMove,
    handleDragOver,
    handleDragStart,
  } = useDnD({ items, setItems });

  const handleCollapse = (id: string) => {
    setItems((prevItems) =>
      setProperty(
        prevItems,
        id,
        'collapsed',
        (value) => !value as TreeViewRow<D>['collapsed'],
      ),
    );
  };

  return (
    <Surface background="white" elevation={2} radius="md" hasBorder>
      <DndContext
        accessibility={{ announcements }}
        collisionDetection={closestCenter}
        measuring={measuring}
        sensors={sensors}
        onDragCancel={(e) => {
          onDragCancel?.(e);
          handleDragCancel();
        }}
        onDragEnd={(e) => {
          onDragEnd?.(e);
          handleDragEnd(e);
        }}
        onDragMove={(e) => {
          onDragMove?.(e);
          handleDragMove(e);
        }}
        onDragOver={(e) => {
          onDragOver?.(e);
          handleDragOver(e);
        }}
        onDragStart={(e) => {
          onDragStart?.(e);
          handleDragStart(e);
        }}
      >
        <SortableContext
          items={sortedIds}
          strategy={verticalListSortingStrategy}
        >
          <ul>
            {flattenedItems.map((row) => {
              const { id, subRows, collapsed, depth } = row;
              return (
                <SortableTreeItem
                  key={id}
                  activeRowId={activeRowId}
                  collapsed={Boolean(collapsed && subRows?.length)}
                  depth={id === activeId && projected ? projected.depth : depth}
                  id={id}
                  isCollapsible={isCollapsible}
                  isSortable={isSortable}
                  renderPrimaryContent={renderPrimaryContent}
                  renderSecondaryContent={renderSecondaryContent}
                  row={row}
                  rowHeight={rowHeight}
                  value={id}
                  onActiveRowIdChange={onActiveRowIdChange}
                  onCollapse={
                    isCollapsible && subRows?.length
                      ? () => handleCollapse(id)
                      : undefined
                  }
                  onRowClick={onRowClick}
                />
              );
            })}
          </ul>
          <DragOverlay dropAnimation={dropAnimationConfig}>
            {activeId && activeItem ? (
              <SortableTreeItem
                childCount={getSubRowCount(items, activeId) + 1}
                depth={activeItem.depth}
                id={activeId}
                isSortable={isSortable}
                renderPrimaryContent={renderPrimaryContent}
                row={activeItem}
                rowHeight={rowHeight}
                value={activeItem.id.toString()}
                isClone
              />
            ) : null}
          </DragOverlay>
        </SortableContext>
      </DndContext>
    </Surface>
  );
}

TreeView.displayName = 'TreeView';

export default TreeView;
