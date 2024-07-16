import { FlattenedItem, TreeItems } from '../TreeView.types';
import {
  buildTree,
  findItem,
  findItemDeep,
  flattenTree,
  getMaxDepth,
  getMinDepth,
  getProjection,
  getSubRowCount,
  removeSubRowsOf,
  setProperty,
} from './utils';

describe('TreeView/utils', () => {
  describe('getMaxDepth', () => {
    test('should return the depth of the previous item plus one when a previous item exists', () => {
      const previousItem: FlattenedItem<unknown> = {
        parentId: '1',
        depth: 2,
        index: 0,
        id: '2',
      };

      const result = getMaxDepth({ previousItem });
      expect(result).toBe(3);
    });

    test('should return 0 when there is no previous item', () => {
      const result = getMaxDepth({ previousItem: undefined });
      expect(result).toBe(0);
    });
  });

  describe('getMinDepth', () => {
    test('returns the depth of the next item if it exists', () => {
      const nextItem: FlattenedItem<unknown> = {
        parentId: '1',
        depth: 2,
        index: 1,
        id: '2',
      };
      const result = getMinDepth({ nextItem });
      expect(result).toBe(2);
    });

    test('returns 0 when nextItem is not provided', () => {
      const result = getMinDepth({ nextItem: undefined });
      expect(result).toBe(0);
    });
  });

  describe('getProjection', () => {
    const items: FlattenedItem<unknown>[] = [
      { id: '1', parentId: null, depth: 0, index: 0 },
      { id: '2', parentId: '1', depth: 1, index: 1 },
      { id: '3', parentId: '1', depth: 1, index: 2 },
    ];

    test('should correctly calculate the projected depth based on the drag offset and indentation width', () => {
      const result = getProjection(items, '2', '3', 2);
      expect(result.depth).toBe(1);
    });

    test('should handle cases where the projected depth exceeds the maximum depth', () => {
      const result = getProjection(items, '2', '3', 100);
      expect(result.depth).toBe(2); // maxDepth is 2 in this case
    });

    test('should return the correct parent ID based on the calculated depth', () => {
      const result = getProjection(items, '2', '3', 1);
      expect(result.parentId).toBe('1');
    });
  });

  describe('flattenTree', () => {
    it('should correctly flatten a nested tree structure into a single-level array', () => {
      const items: TreeItems<unknown> = [
        {
          id: '1',
          subRows: [
            {
              id: '1-1',
            },
            {
              id: '1-2',
              subRows: [
                {
                  id: '1-2-1',
                },
              ],
            },
          ],
        },
        {
          id: '2',
        },
      ];

      const expected: FlattenedItem<unknown>[] = [
        { id: '1', parentId: null, depth: 0, index: 0 },
        { id: '1-1', parentId: '1', depth: 1, index: 0 },
        { id: '1-2', parentId: '1', depth: 1, index: 1 },
        { id: '1-2-1', parentId: '1-2', depth: 2, index: 0 },
        { id: '2', parentId: null, depth: 0, index: 1 },
      ];

      expect(flattenTree(items)).toMatchObject(expected);
    });

    it('should handle an empty array without errors and return an empty array', () => {
      const items: TreeItems<unknown> = [];
      const expected: FlattenedItem<unknown>[] = [];
      expect(flattenTree(items)).toEqual(expected);
    });

    it('should handle deeply nested tree structures correctly', () => {
      const items: TreeItems<unknown> = [
        {
          id: '1',
          subRows: [
            {
              id: '1-1',
              subRows: [
                {
                  id: '1-1-1',
                  subRows: [
                    {
                      id: '1-1-1-1',
                      subRows: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ];

      const expected: FlattenedItem<unknown>[] = [
        { id: '1', parentId: null, depth: 0, index: 0 },
        { id: '1-1', parentId: '1', depth: 1, index: 0 },
        { id: '1-1-1', parentId: '1-1', depth: 2, index: 0 },
        { id: '1-1-1-1', parentId: '1-1-1', depth: 3, index: 0 },
      ];

      expect(flattenTree(items)).toMatchObject(expected);
    });
  });

  describe('findItem', () => {
    const items: TreeItems<unknown> = [{ id: '1' }, { id: '2' }, { id: '3' }];

    test('should return corrent item when id exist', () => {
      const result = findItem(items, '2');
      expect(result).toMatchObject({ id: '2' });
    });

    test('should return undefined when id does not exist', () => {
      const result = findItem(items, '4');
      expect(result).toBeUndefined();
    });

    test('should return undefined when items array is empty', () => {
      const result = findItem([], '1');
      expect(result).toBeUndefined();
    });
  });

  describe('buildTree', () => {
    test('should build correct nested structure', () => {
      const flattenedItems: FlattenedItem<unknown>[] = [
        { id: '1', parentId: null, depth: 0, index: 0 },
        { id: '2', parentId: '1', depth: 1, index: 1 },
        { id: '3', parentId: '1', depth: 1, index: 2 },
        { id: '4', parentId: '2', depth: 2, index: 3 },
      ];

      const tree = buildTree(flattenedItems);

      expect(tree).toEqual([
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
              subRows: [
                {
                  id: '4',
                  parentId: '2',
                  depth: 2,
                  index: 3,
                  subRows: [],
                },
              ],
            },
            {
              id: '3',
              parentId: '1',
              depth: 1,
              index: 2,
              subRows: [],
            },
          ],
        },
      ]);
    });

    test('should return empty array if input array is empty', () => {
      const flattenedItems: FlattenedItem<unknown>[] = [];

      const tree = buildTree(flattenedItems);

      expect(tree).toEqual([]);
    });

    test('should throw if item parent is missing', () => {
      const flattenedItems: FlattenedItem<unknown>[] = [
        { id: '1', parentId: null, depth: 0, index: 0 },
        { id: '2', parentId: '3', depth: 1, index: 1 }, // Missing parent
      ];

      expect(() => buildTree(flattenedItems)).toThrow();
    });
  });

  describe('findItemDeep', () => {
    const items: TreeItems<unknown> = [
      { id: '1', subRows: [] },
      { id: '2', subRows: [{ id: '2-1', subRows: [] }] },
      {
        id: '3',
        subRows: [{ id: '3-1', subRows: [{ id: '3-1-1', subRows: [] }] }],
      },
    ];

    test('should return correct top-level item', () => {
      const result = findItemDeep(items, '1');
      expect(result).toEqual({ id: '1', subRows: [] });
    });

    test('should return correct deeply nested item', () => {
      const result = findItemDeep(items, '3-1-1');
      expect(result).toEqual({ id: '3-1-1', subRows: [] });
    });

    test('should return undefined if item is not found', () => {
      const result = findItemDeep(items, '4');
      expect(result).toBeUndefined();
    });
  });

  describe('setProperty', () => {
    const items: TreeItems<unknown> = [
      { id: '1', collapsed: false, subRows: [] },
      {
        id: '2',
        collapsed: false,
        subRows: [{ id: '2-1', collapsed: false, subRows: [] }],
      },
    ];

    test('should update given property value', () => {
      const updatedItems = setProperty(
        items,
        '2-1',
        'collapsed',
        (val) => !val,
      );
      expect(updatedItems[1].subRows?.[0].collapsed).toBeTruthy();
    });

    test('should return original array if item not found', () => {
      const updatedItems = setProperty(items, '3', 'collapsed', (val) => !val);
      expect(updatedItems).toEqual(items);
    });
  });

  describe('getSubRowCount', () => {
    const items = [
      {
        id: '1',
        subRows: [
          {
            id: '1-1',
            subRows: [
              { id: '1-1-1', subRows: [] },
              { id: '1-1-2', subRows: [] },
            ],
          },
          { id: '1-2', subRows: [] },
        ],
      },
      { id: '2', subRows: [] },
    ];

    test('should return the correct count of sub-rows for a given item', () => {
      const result = getSubRowCount(items, '1');
      expect(result).toBe(4);
    });

    test('should return 0 when the given item does not exist', () => {
      const result = getSubRowCount(items, '3');
      expect(result).toBe(0);
    });

    test('should return 0 when the given item exists but has no sub-rows', () => {
      const result = getSubRowCount(items, '2');
      expect(result).toBe(0);
    });
  });

  describe('removeSubRowsOf', () => {
    const items = [
      { id: '1', parentId: null, depth: 0, index: 0, subRows: [] },
      { id: '1-1', parentId: '1', depth: 1, index: 1, subRows: [] },
      { id: '1-2', parentId: '1', depth: 1, index: 2, subRows: [] },
      { id: '1-1-1', parentId: '1-1', depth: 2, index: 3, subRows: [] },
    ];

    test('should correctly remove items that are sub-rows of the given ids', () => {
      const result = removeSubRowsOf(items, ['1', '1-1']);
      expect(result).toEqual([items[0]]);
    });

    test(' should return empty array the items array is empty', () => {
      const result = removeSubRowsOf([], ['1']);
      expect(result).toEqual([]);
    });

    test('should return original array if ids array is empty', () => {
      const result = removeSubRowsOf(items, []);
      expect(result).toEqual(items);
    });
  });
});
