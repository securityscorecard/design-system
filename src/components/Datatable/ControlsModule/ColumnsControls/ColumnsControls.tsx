import React from 'react';
import PropTypes from 'prop-types';

import { ControlDropdown } from '../ControlDropdown';
import { ColumnsControlsProps } from './ColumnsControls.types';
import ColumnsList from './components/ColumnsList';
import { useColumnOrder } from './hooks/useColumnOrder';

const ColumnsControls: React.FC<ColumnsControlsProps> = ({
  children,
  defaultIsOpen = false,
  onOpen,
  onClose,
  onApply,
  onReset,
}) => {
  const {
    orderedColumns,
    setLocalColumnOrder,
    storeOrderedColumns,
    reinitializeOrderedColumns,
    resetOrderedColumns,
    isInDefaultOrder,
  } = useColumnOrder();

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
    <ControlDropdown
      defaultIsControlPaneOpen={defaultIsOpen}
      renderHandler={children}
      title="Columns"
      onApply={handleApplyColumnsControl}
      onClose={handleCloseColumnsControl}
      onOpen={handleOpenColumnsControl}
      onReset={handleResetColumnsControl}
    >
      <ColumnsList columns={orderedColumns} setColumns={setLocalColumnOrder} />
    </ControlDropdown>
  );
};

ColumnsControls.propTypes = {
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  defaultIsOpen: PropTypes.bool,
};

export default ColumnsControls;
