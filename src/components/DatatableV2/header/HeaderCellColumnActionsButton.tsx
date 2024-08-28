import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { DatatableHeader, DatatableInstance } from '../Datatable.types';
import ColumnActionsMenu from '../menus/ColumnActionsMenu';
import IconButton from '../../ButtonV2/IconButton';

const HeaderCellColumnActionsButton = <D,>({
  header,
  table,
}: {
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => {
  const { column } = header;
  const { getIsSorted } = column;
  const direction = getIsSorted();
  return (
    <div className="ds-table-header-cell-column-actions-button-wrapper">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <IconButton
            className="ds-table-header-cell-column-actions-button"
            iconName={
              direction === 'desc'
                ? 'sort-down'
                : direction === 'asc'
                ? 'sort-up'
                : 'ellipsis-v'
            }
            label="Column actions"
            size="sm"
            variant="ghost"
          />
        </DropdownMenu.Trigger>

        <ColumnActionsMenu header={header} table={table} />
      </DropdownMenu.Root>
    </div>
  );
};

export default HeaderCellColumnActionsButton;
