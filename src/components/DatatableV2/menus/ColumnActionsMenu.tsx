import React from 'react';

import { ControlledDropdown } from '../../Dropdown';
import { DatatableHeader, DatatableInstance } from '../Datatable.types';

const ColumnActionsMenu = <D,>({
  buttonRef,
  setButtonRef,
  /* eslint-disable @typescript-eslint/no-unused-vars */
  header,
  table,
}: /* eslint-enable */
{
  buttonRef: HTMLButtonElement | null;
  setButtonRef: (anchorEl: HTMLButtonElement | null) => void;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => {
  return (
    <ControlledDropdown
      innerPaddingSize="sm"
      isOpen={buttonRef !== null}
      maxPaneWidth={200}
      triggerEl={buttonRef}
      onClickOut={() => {
        setButtonRef(null);
      }}
    >
      Column actions
    </ControlledDropdown>
  );
};
export default ColumnActionsMenu;
