import { keys } from 'ramda';

import { compare, sortColumns } from './useColumnOrder';

describe('compare', () => {
  it('should return 0 when none of items is in order array', () => {
    expect(compare(['c', 'd'])('a', 'b')).toBe(0);
    expect(compare([])('a', 'b')).toBe(0);
  });
  it('should return -1 when only first item is in order array', () => {
    expect(compare(['a'])('a', 'b')).toBe(-1);
  });
  it('should return 1 when only second item is in order array', () => {
    expect(compare(['b'])('a', 'b')).toBe(1);
  });
  it('should return -1 when first item is before second item in order array', () => {
    expect(compare(['a', 'b'])('a', 'b')).toBe(-1);
  });
  it('should return 1 when second item is before first item in order array', () => {
    expect(compare(['b', 'a'])('a', 'b')).toBe(1);
  });
});

const columns = {
  col1: { label: 'Column 1' },
  col2: { label: 'Column 2' },
  col3: { label: 'Column 3' },
  col4: { label: 'Column 4' },
  col5: { label: 'Column 5' },
};

describe('sortColumns', () => {
  it('should leave original columns order when empty order array is provided', () => {
    expect(sortColumns([], columns)).toMatchObject(keys(columns));
  });
  it('should correctly order columns when order array is provided', () => {
    expect(sortColumns(['col5'], columns)).toMatchObject([
      'col5',
      'col1',
      'col2',
      'col3',
      'col4',
    ]);
    expect(sortColumns(['col3', 'col2'], columns)).toMatchObject([
      'col3',
      'col2',
      'col1',
      'col4',
      'col5',
    ]);
    expect(
      sortColumns(['col5', 'col4', 'col3', 'col2', 'col1'], columns),
    ).toMatchObject(['col5', 'col4', 'col3', 'col2', 'col1']);
  });
  it('should leave original columns order when order array contains unknown columns', () => {
    expect(sortColumns(['x', 'y', 'z'], columns)).toMatchObject(keys(columns));
  });
});
