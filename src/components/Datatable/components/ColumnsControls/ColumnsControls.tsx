import { useRef } from 'react';
import { pluck } from 'ramda';
import { noop } from 'ramda-adjunct';

import { ControlDropdown } from '../../../ControlDropdown';
import { SortableList } from '../../../SortableList';
import { DatatableStore } from '../../Datatable.store';
import { useColumnOrder } from './hooks/useColumnOrder';
import { useColumnVisibility } from './hooks/useColumnVisibility';
import { ColumnsControlsProps } from './ColumnsControls.types';
import { Inline } from '../../../layout';
import { Text } from '../../../Text';
import { TextSizes } from '../../../Text/Text.enums';
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
      {typeof children === 'function'
        ? children({ hiddenColumns: hiddenColumns.length })
        : children}
      <ControlDropdown
        isOpen={isOpen}
        parentRef={parentRef}
        title="Toggle columns"
        onClose={handleCloseColumnsControl}
        onReset={handleResetColumnsControl}
        onSubmit={handleApplyColumnsControl}
      >
        <SortableList
          items={orderedColumns}
          labels={pluck('label')(allColumns)}
          maxHeight={300}
          renderItem={({ label, id }) => {
            const isVisible = !hiddenColumns.includes(id);
            return (
              <Inline
                align="center"
                data-id={id}
                gap={SpaceSizes.sm}
                justify="space-between"
              >
                <Text size={TextSizes.md}>{label}</Text>
                <Switch
                  aria-label={`${isVisible ? 'Hide' : 'Show'} ${label} column`}
                  checked={isVisible}
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
