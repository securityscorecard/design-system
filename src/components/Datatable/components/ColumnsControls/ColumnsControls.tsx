import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { pluck } from 'ramda';
import { noop } from 'ramda-adjunct';
import { useDeepCompareEffect } from 'use-deep-compare';

import { ControlDropdown } from '../../../ControlDropdown';
import { SortableList } from '../../../SortableList';
import { DatatableStore } from '../../Datatable.store';
import { useColumnOrder } from './hooks/useColumnOrder';
import { useColumnVisibility } from './hooks/useColumnVisibility';
import { ColumnsControlsProps } from './ColumnsControls.types';
import { Inline } from '../../../layout';
import { Text } from '../../../typographyLegacy';
import { TextSizes } from '../../../typographyLegacy/Text/Text.enums';
import { Switch } from '../../../forms';
import { SwitchSizes } from '../../../forms/Switch/Switch.enums';
import { SpaceSizes } from '../../../../theme';

const ColumnsControls: React.FC<ColumnsControlsProps> = ({
  children,
  isOpen = false,
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
  const { isInDefaultVisibility } = useColumnVisibility();
  const allColumns = DatatableStore.useState((s) => s.columns);
  const hiddenColumns = DatatableStore.useState((s) => s.hiddenColumns);
  console.log(
    '🚀 ~ file: ColumnsControls.tsx:38 ~ hiddenColumns:',
    hiddenColumns,
  );

  const [localHiddenColumns, setLocalHiddenColumns] = useState(hiddenColumns);
  console.log(
    '🚀 ~ file: ColumnsControls.tsx:42 ~ localHiddenColumns:',
    localHiddenColumns,
  );

  useDeepCompareEffect(() => {
    setLocalHiddenColumns(hiddenColumns);
  }, [hiddenColumns]);

  const handleCloseColumnsControl = () => {
    onClose();
    reinitializeOrderedColumns();
  };
  const handleApplyColumnsControl = () => {
    onApply(!isInDefaultOrder || !isInDefaultVisibility);
    storeOrderedColumns();
    DatatableStore.update((s) => {
      s.hiddenColumns = localHiddenColumns;
    });
  };

  const handleResetColumnsControl = () => {
    onReset();
    resetOrderedColumns();
    DatatableStore.update((s) => {
      s.hiddenColumns = [];
    });
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
            return (
              <Inline
                align="center"
                data-id={id}
                gap={SpaceSizes.sm}
                justify="space-between"
              >
                <Text size={TextSizes.md}>{label}</Text>
                <Switch
                  checked={!localHiddenColumns.includes(id)}
                  name={`visibility-${id}`}
                  size={SwitchSizes.sm}
                  switchId={`visibility-${id}`}
                  onChange={(e) => {
                    const { checked } = e.target;
                    setLocalHiddenColumns((prev) => {
                      console.log(
                        '🚀 ~ file: ColumnsControls.tsx:101 ~ setLocalHiddenColumns ~ prev:',
                        prev,
                      );
                      const next = checked
                        ? prev.filter((col) => col !== id)
                        : [...prev, id];
                      console.log(
                        '🚀 ~ file: ColumnsControls.tsx:102 ~ next:',
                        next,
                      );
                      return next;
                    });
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

ColumnsControls.propTypes = {
  children: PropTypes.oneOf([PropTypes.func, PropTypes.node]).isRequired,
  onClose: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  onReset: PropTypes.func,
};

export default ColumnsControls;
