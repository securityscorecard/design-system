import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { pluck } from 'ramda';
import { noop } from 'ramda-adjunct';

import { ControlDropdown } from '../../../ControlDropdown';
import { SortableList } from '../../../SortableList';
import { DatatableStore } from '../../Datatable.store';
import { useColumnOrder } from './hooks/useColumnOrder';
import { ColumnsControlsProps } from './ColumnsControls.types';

const ColumnsControls: React.FC<ColumnsControlsProps> = ({
  children,
  isOpen = false,
  onOpen = noop,
  onClose = noop,
  onApply = noop,
  onReset = noop,
}) => {
  const parentRef = useRef(null);
  const {
    orderedColumns,
    setLocalColumnOrder,
    storeOrderedColumns,
    reinitializeOrderedColumns,
    resetOrderedColumns,
    isInDefaultOrder,
  } = useColumnOrder();
  const allColumns = DatatableStore.useState((s) => s.columns);

  const handleOpenColumnsControl = () => {
    onOpen();
  };
  const handleCloseColumnsControl = () => {
    onClose();
    reinitializeOrderedColumns();
  };
  const handleApplyColumnsControl = () => {
    onApply(!isInDefaultOrder);
    storeOrderedColumns();
  };

  const handleResetColumnsControl = () => {
    onReset();
    resetOrderedColumns();
  };

  return (
    <span ref={parentRef}>
      {children}
      <ControlDropdown
        isOpen={isOpen}
        parentRef={parentRef}
        title="Columns"
        onClose={handleCloseColumnsControl}
        onOpen={handleOpenColumnsControl}
        onReset={handleResetColumnsControl}
        onSubmit={handleApplyColumnsControl}
      >
        <SortableList
          items={orderedColumns}
          labels={pluck('label')(allColumns)}
          onOrderChange={setLocalColumnOrder}
        />
      </ControlDropdown>
    </span>
  );
};

ColumnsControls.propTypes = {
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  onReset: PropTypes.func,
};

export default ColumnsControls;
