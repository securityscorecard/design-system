import type { DatatableHeader, DatatableInstance } from '../Datatable.types';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import IconButton from '../buttons/IconButton';
import ColumnActionsMenu from '../menus/ColumnActionsMenu';

const HeaderCellColumnActionsButton = <D,>({
  header,
  table,
}: {
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <IconButton
          className="ds-table-header-cell-column-actions-button"
          iconName="ellipsis-v"
          label="Column actions"
        />
      </DropdownMenu.Trigger>

      <ColumnActionsMenu header={header} table={table} />
    </DropdownMenu.Root>
  );
};

export default HeaderCellColumnActionsButton;
