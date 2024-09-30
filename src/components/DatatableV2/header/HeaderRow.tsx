import { DatatableHeaderGroup, DatatableInstance } from '../Datatable.types';
import HeaderCell from './HeaderCell';

const HeaderRow = <D,>({
  headerGroup,
  table,
}: {
  headerGroup: DatatableHeaderGroup<D>;
  table: DatatableInstance<D>;
}) => {
  return (
    <tr className="ds-table-header-row ds-table-row">
      {headerGroup.headers.map((header) => (
        <HeaderCell key={header.id} header={header} table={table} />
      ))}
    </tr>
  );
};

export default HeaderRow;
