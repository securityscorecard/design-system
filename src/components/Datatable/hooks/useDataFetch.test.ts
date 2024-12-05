import { renderHook } from '@testing-library/react';
import { vi } from 'vitest';

import { Operators } from '../../Filters/Filters.enums';
import { DatatableStore, datatableInitialState } from '../Datatable.store';
import { useDataFetch } from './useDataFetch';

const fetchCallback = vi.fn();
const pageIndex = 10;
const pageSize = 20;
const sortBy = [{ id: 'colId', desc: true }];
const filters = [
  {
    operator: Operators.and,
    field: 'colId',
    condition: '=',
    isApplied: true,
    isLoading: false,
    isCanceled: false,
    value: 'value',
  },
];
const query = 'searched query';

describe('useDataFetch', () => {
  beforeEach(() => {
    DatatableStore.replace(datatableInitialState);
  });
  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should not call callback funtion on init', () => {
    renderHook(() => useDataFetch(fetchCallback));

    expect(fetchCallback).not.toBeCalled();
  });
  it('should call callback function on "pageIndex" change', () => {
    renderHook(() => useDataFetch(fetchCallback));

    DatatableStore.update((s) => {
      s.pageIndex = pageIndex;
    });
    expect(fetchCallback).toBeCalledWith(
      expect.objectContaining({ pageIndex }),
    );
  });
  it('should call callback function on "pageSize" change', () => {
    renderHook(() => useDataFetch(fetchCallback));

    DatatableStore.update((s) => {
      s.pageSize = pageSize;
    });
    expect(fetchCallback).toBeCalledWith(expect.objectContaining({ pageSize }));
  });
  it('should call callback function on "sortBy" change', () => {
    renderHook(() => useDataFetch(fetchCallback));

    DatatableStore.update((s) => {
      s.sortBy = sortBy;
    });
    expect(fetchCallback).toBeCalledWith(expect.objectContaining({ sortBy }));
  });
  it('should call callback function on "filters" change', () => {
    renderHook(() => useDataFetch(fetchCallback));

    DatatableStore.update((s) => {
      s.filters = filters;
    });
    expect(fetchCallback).toBeCalledWith(expect.objectContaining({ filters }));
  });
  it('should call callback function on "query" change', () => {
    renderHook(() => useDataFetch(fetchCallback));

    DatatableStore.update((s) => {
      s.query = query;
    });
    expect(fetchCallback).toBeCalledWith(expect.objectContaining({ query }));
  });
  it('should call callback function only once when multiple values are changed', () => {
    renderHook(() => useDataFetch(fetchCallback));

    DatatableStore.update((s) => {
      s.pageIndex = pageIndex;
      s.pageSize = pageSize;
      s.sortBy = sortBy;
      s.filters = filters;
      s.query = query;
    });
    expect(fetchCallback).toBeCalledTimes(1);
    expect(fetchCallback).toBeCalledWith(
      expect.objectContaining({ pageIndex, pageSize, sortBy, filters, query }),
    );
  });
});
