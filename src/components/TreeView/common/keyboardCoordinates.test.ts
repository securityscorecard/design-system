import { KeyboardCode } from '@dnd-kit/core';
import { vi } from 'vitest';

import { SensorContext } from '../TreeView.types';
import { INDENTATION_WIDTH } from './constants';
import { sortableTreeKeyboardCoordinates } from './keyboardCoordinates';

describe('sortableTreeKeyboardCoordinates', () => {
  // Moves item right when Right arrow key is pressed and depth < maxDepth
  it('should move item right when Right arrow key is pressed and depth < maxDepth', () => {
    const context: SensorContext<{
      parentId: string | null;
      depth: number;
      index: number;
    }> = {
      current: {
        items: [
          {
            id: '1',
            parentId: null,
            depth: 0,
            index: 0,
            subRows: [
              {
                id: '2',
                parentId: '1',
                depth: 1,
                index: 1,
                subRows: [],
              },
            ],
          },
          {
            id: '2',
            parentId: '1',
            depth: 1,
            index: 0,
            subRows: [],
          },
        ],
        offset: 0,
      },
    };
    const event = { code: KeyboardCode.Right, preventDefault: vi.fn() };
    const active = {
      id: '1',
      data: {
        current: {
          sortable: {
            containerId: 'Sortable-1',
            index: 1,
            items: ['1', '2'],
          },
        },
      },
      rect: {
        current: {
          initial: null,
          translated: null,
        },
      },
    };
    const over = {
      id: '2',
      rect: {
        width: 366,
        height: 56,
        top: 74,
        bottom: 130,
        right: 383,
        left: 17,
      },
      data: {
        current: {
          sortable: {
            containerId: 'Sortable-1',
            index: 1,
            items: ['1', '2'],
          },
        },
      },
      disabled: false,
    };
    const collisionRect = {
      top: 74,
      left: 17,
      width: 84.828125,
      height: 61,
      bottom: 135,
      right: 101.828125,
    };
    const droppableRects = new Map([
      [
        '1',
        {
          width: 366,
          height: 57,
          top: 17,
          bottom: 74,
          right: 383,
          left: 17,
        },
      ],
      [
        '2',
        {
          width: 366,
          height: 56,
          top: 74,
          bottom: 130,
          right: 383,
          left: 17,
        },
      ],
    ]);
    const droppableContainers = new Map([
      [
        '1',
        {
          id: '1',
          key: 'Droppable-6',
          disabled: false,
        },
      ],
      [
        '2',
        {
          id: '2',
          key: 'Droppable-300',
          disabled: false,
        },
      ],
    ]);

    const result = sortableTreeKeyboardCoordinates(context)(
      event as unknown as KeyboardEvent,
      {
        currentCoordinates: {
          x: 0,
          y: 0,
        },
        context: {
          active,
          over,
          collisionRect,
          droppableRects,
          // @ts-expect-error this is typing BS
          droppableContainers,
        },
      },
    );

    expect(result).toEqual({ x: INDENTATION_WIDTH, y: 0 });
    expect(event.preventDefault).toHaveBeenCalled();
  });

  // Handles case when over.id is null or undefined
  it('should return undefined when over.id is null or undefined', () => {
    const context = {
      current: {
        items: [
          { id: '1', depth: 0 },
          { id: '2', depth: 1 },
        ],
        offset: 0,
      },
    };
    const event = { code: KeyboardCode.Right, preventDefault: vi.fn() };
    const active = { id: '1' };
    const collisionRect = { top: 0, left: 0 };
    const droppableRects = new Map();
    const droppableContainers = new Map();

    // @ts-expect-error this is typing BS
    const result = sortableTreeKeyboardCoordinates(context)(event, {
      currentCoordinates: { x: 0, y: 0 },
      context: {
        active,
        over: null,
        collisionRect,
        droppableRects,
        droppableContainers,
      },
    });

    expect(result).toBeUndefined();
  });
});
