import React from 'react';

export interface ColumnsControlsProps {
  defaultIsOpen?: boolean;
  onOpen: () => void;
  onClose: () => void;
  onApply: (shouldApply: boolean) => void;
  onReset: () => void;
  children: (onClick: () => void) => React.ReactElement;
}
