import type { Row, TableBodyProps } from 'react-table';

export interface BodyProps<D extends Record<string, unknown>>
  extends TableBodyProps {
  prepareRow: (row: Row<D>) => void;
  rows: Row<D>[];
}
