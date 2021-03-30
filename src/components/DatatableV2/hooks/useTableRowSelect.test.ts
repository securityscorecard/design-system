import { renderHook } from '@testing-library/react-hooks';

import { DatatableStore, datatableInitialState } from '../Datatable.store';
import { useTableRowSelect } from './useTableRowSelect';

const selectCallback = jest.fn();
const selectedRowIds = ['a', 'b', 'c'];

describe('useTableRowSelect', () => {
  beforeEach(() => {
    DatatableStore.replace(datatableInitialState);
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should store default selected row ids on init', () => {
    renderHook(() => useTableRowSelect(selectCallback, selectedRowIds));

    expect(DatatableStore.getRawState().selectedIds).toBe(selectedRowIds);
  });
  it('should not call callback on init', () => {
    renderHook(() => useTableRowSelect(selectCallback, []));

    expect(selectCallback).not.toHaveBeenCalled();
  });
  it('should call callback function on "selectedIds" change', () => {
    renderHook(() => useTableRowSelect(selectCallback, []));

    DatatableStore.update((s) => {
      s.selectedIds = selectedRowIds;
    });
    expect(selectCallback).toBeCalledWith(
      selectedRowIds,
      datatableInitialState.hasExclusiveSelection,
    );
  });
  it('should call callback function on "hasExclusiveSelection" change', () => {
    renderHook(() => useTableRowSelect(selectCallback, []));

    DatatableStore.update((s) => {
      s.hasExclusiveSelection = true;
    });
    expect(selectCallback).toBeCalledWith(
      datatableInitialState.selectedIds,
      true,
    );
  });
  it('should call callback function only once when multiple values are changed', () => {
    renderHook(() => useTableRowSelect(selectCallback, []));

    DatatableStore.update((s) => {
      s.selectedIds = selectedRowIds;
      s.hasExclusiveSelection = true;
    });
    expect(selectCallback).toBeCalledTimes(1);
    expect(selectCallback).toBeCalledWith(selectedRowIds, true);
  });
});
