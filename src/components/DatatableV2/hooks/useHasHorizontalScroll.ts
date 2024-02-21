import type { DatatableInstance } from '../Datatable.types';

export const useHasHorizontalScroll = <D>(table: DatatableInstance<D>) => {
  const { getState, getVisibleFlatColumns } = table;
  const { width } = getState();

  const totalWidth = getVisibleFlatColumns().reduce(
    (acc, col) => acc + col.getSize(),
    0,
  );

  return totalWidth > width;
};
