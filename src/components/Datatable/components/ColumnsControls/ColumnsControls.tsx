import type { ColumnsControlsProps } from './ColumnsControls.types';

import { useRef } from 'react';
import { pluck } from 'ramda';
import { noop } from 'ramda-adjunct';

import { ControlDropdown } from '../../../ControlDropdown';
import { SortableList } from '../../../SortableList';
import { DatatableStore } from '../../Datatable.store';
import { useColumnOrder } from './hooks/useColumnOrder';
import { useColumnVisibility } from './hooks/useColumnVisibility';
import { Inline } from '../../../layout';
import { Text } from '../../../typographyLegacy';
import { TextSizes } from '../../../typographyLegacy/Text/Text.enums';
import { Switch } from '../../../forms';
import { SwitchSizes } from '../../../forms/Switch/Switch.enums';
import { SpaceSizes } from '../../../../theme';

const ColumnsControls = ({
  children,
  isOpen = false,
  onClose = noop,
  onApply = noop,
  onReset = noop,
}: ColumnsControlsProps) => {
  const parentRef = useRef(null);
  const {
    orderedColumns,
    setLocalColumnOrder,
    storeOrderedColumns,
    reinitializeOrderedColumns,
    resetOrderedColumns,
    isInDefaultOrder,
  } = useColumnOrder();
  const {
    hiddenColumns,
    setHiddenColumn,
    storeVisibleColumns,
    reinitializeVisibleColumns,
    resetVisisbleColumns,
    isInDefaultVisibility,
  } = useColumnVisibility();
  const allColumns = DatatableStore.useState((s) => s.columns);

  const handleCloseColumnsControl = () => {
    onClose();
    reinitializeOrderedColumns();
    reinitializeVisibleColumns();
  };
  const handleApplyColumnsControl = () => {
    onApply(!isInDefaultOrder || !isInDefaultVisibility);
    storeOrderedColumns();
    storeVisibleColumns();
  };

  const handleResetColumnsControl = () => {
    onReset();
    resetOrderedColumns();
    resetVisisbleColumns();
  };

  return (
    <span ref={parentRef}>
      {children}
      <ControlDropdown
        isOpen={isOpen}
        parentRef={parentRef}
        title="Columns"
        onClose={handleCloseColumnsControl}
        onReset={handleResetColumnsControl}
        onSubmit={handleApplyColumnsControl}
      >
        <SortableList
          items={orderedColumns}
          labels={pluck('label')(allColumns)}
          maxHeight={300}
          renderItem={({ label, id }) => {
            return (
              <Inline
                align="center"
                data-id={id}
                gap={SpaceSizes.sm}
                justify="space-between"
              >
                <Text size={TextSizes.md}>{label}</Text>
                <Switch
                  checked={!hiddenColumns.includes(id)}
                  name={`visibility-${id}`}
                  size={SwitchSizes.sm}
                  switchId={`visibility-${id}`}
                  onChange={(e) => {
                    setHiddenColumn(id, e.target.checked);
                  }}
                />
              </Inline>
            );
          }}
          onOrderChange={setLocalColumnOrder}
        />
      </ControlDropdown>
    </span>
  );
};

export default ColumnsControls;
