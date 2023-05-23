import type { Field } from '../Filters.types';

import { renderHook } from '@testing-library/react';

import { mockTestFields } from '../mocks/options';
import { useFilterRow } from './useFilterRow';

describe('useFilterRow', () => {
  it('should return filter row configuration when field and condition are found', () => {
    const { result } = renderHook(() =>
      useFilterRow(mockTestFields, 'option a', 'is'),
    );

    expect(result.current).toMatchObject({
      field: { value: 'option a', label: 'Option A' },
      conditions: [
        { value: 'is', label: 'is' },
        { value: 'is not', label: 'is not' },
      ],
      condition: { value: 'is', label: 'is' },
    });
  });

  it('should throw error when field is not found', () => {
    expect(() =>
      renderHook(() => useFilterRow(mockTestFields, 'option x', 'xxx')),
    ).toThrow(
      Error(
        '[design-system/useFilterRow] Field value "option x" was not found in the fields array',
      ),
    );
  });
  it('should throw error when condition is not found', () => {
    expect(() =>
      renderHook(() => useFilterRow(mockTestFields, 'option a', 'xxx')),
    ).toThrow(
      Error(
        '[design-system/useFilterRow] For field value "option a" was not found condition matching condition value "xxx"',
      ),
    );
  });
  it('should throw error when conditions are not provided', () => {
    expect(() =>
      renderHook(() =>
        useFilterRow(
          [{ value: 'option z', label: 'Option Z' }] as Field[],
          'option z',
          'xxx',
        ),
      ),
    ).toThrow(
      Error(
        '[design-system/useFilterRow] Field item does not contain any conditions',
      ),
    );
  });
});
