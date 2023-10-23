import React, { MouseEvent, useState } from 'react';

import { DatatableHeader, DatatableInstance } from '../Datatable.types';
import ColumnActionsMenu from '../menus/ColumnActionsMenu';

const HeaderCellColumnActionsButton = <D,>({
  header,
  table,
}: {
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => {
  const [buttonRef, setButtonRef] = useState<HTMLButtonElement | null>(null);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();

    setButtonRef(e.currentTarget);
  };

  return (
    <>
      <button
        aria-label={
          buttonRef === null ? 'Show column actions' : 'Hide column actions'
        }
        className="ds-table-header-cell-column-actions-button"
        type="button"
        onClick={handleClick}
      >
        ⋮
      </button>
      <ColumnActionsMenu
        buttonRef={buttonRef}
        header={header}
        setButtonRef={setButtonRef}
        table={table}
      />
    </>
  );
};

export default HeaderCellColumnActionsButton;
