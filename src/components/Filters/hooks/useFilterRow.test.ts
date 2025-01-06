import { renderHook } from '@testing-library/react-hooks';
import { vi } from 'vitest';

import { Field } from '../Filters.types';
import { mockTestFields } from '../mocks/options';
import { useFilterRow } from './useFilterRow';

describe('useFilterRow', () => {
  let loggerSpy;
  beforeAll(() => {
    loggerSpy = vi.spyOn(console, 'error').mockImplementation(() => vi.fn());
  });
  afterAll(() => {
    loggerSpy.mockRestore();
  });
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
    const { result } = renderHook(() =>
      useFilterRow(mockTestFields, 'option x', 'xxx'),
    );
    expect(result.error).toEqual(
      Error(
        '[design-system/useFilterRow] Field value "option x" was not found in the fields array',
      ),
    );
  });
  it('should throw error when condition is not found', () => {
    const { result } = renderHook(() =>
      useFilterRow(mockTestFields, 'option a', 'xxx'),
    );

    expect(result.error).toEqual(
      Error(
        '[design-system/useFilterRow] For field value "option a" was not found condition matching condition value "xxx"',
      ),
    );
  });
  it('should throw error when conditions are not provided', () => {
    const { result } = renderHook(() =>
      useFilterRow(
        [{ value: 'option z', label: 'Option Z' }] as Field[],
        'option z',
        'xxx',
      ),
    );

    expect(result.error).toEqual(
      Error(
        '[design-system/useFilterRow] Field item does not contain any conditions',
      ),
    );
  });
});
