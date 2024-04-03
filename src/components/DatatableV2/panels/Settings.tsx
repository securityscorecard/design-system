import React, { useMemo } from 'react';

import { Button } from '../../Button';
import { CloseButton } from '../../CloseButton';
import { Icon } from '../../Icon';
import { Inline, Padbox, Stack } from '../../layout';
import { Text } from '../../typographyLegacy';
import { getHidableColumns } from '../columns.utils';
import { DatatableInstance } from '../Datatable.types';
import IndeterminateCheckbox from '../inputs/IndeterminateCheckbox';
import SettingsItems from './SettingsItems';

const Settings = <D,>({ table }: { table: DatatableInstance<D> }) => {
  const {
    getAllLeafColumns,
    getCenterLeafColumns,
    getLeftLeafColumns,
    getRightLeafColumns,
    getState,
    options: { enableColumnPinning, enableHiding },
    setColumnOrder,
    setColumnPinning,
    setColumnVisibility,
    setShowColumnSettings,
    initialState,
  } = table;
  const { columnOrder, columnPinning } = getState();

  const canHideMoreColumns = getHidableColumns(table).length > 1;
  const allColumns = useMemo(() => {
    if (columnOrder.length > 0) {
      return [
        ...getLeftLeafColumns(),
        ...Array.from(new Set(columnOrder)).map((colId) =>
          getCenterLeafColumns().find((col) => col?.id === colId),
        ),
        ...getRightLeafColumns(),
      ]
        .filter(Boolean)
        .filter((col) => col.columnDef.columnDefType === 'data');
    }

    return getAllLeafColumns().filter(
      (col) => col.columnDef.columnDefType === 'data',
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    columnOrder,
    columnPinning,
    getAllLeafColumns,
    getLeftLeafColumns,
    getRightLeafColumns,
    getCenterLeafColumns,
  ]);

  const getColumnsVisibilityInfo = () => {
    const hideableColumns = getAllLeafColumns().filter(
      (col) => col.columnDef.enableHiding !== false,
    );
    const hiddenColumns = hideableColumns.filter(
      (col) => col.getIsVisible() === false,
    );

    return {
      areAllColumnsVisible: hiddenColumns.length === 0,
      areSomeColumnsVisible:
        hiddenColumns.length > 0 &&
        hiddenColumns.length < hideableColumns.length,
    };
  };

  const handleToggleAllColumnsVisibility = (nextVisibility: boolean) => {
    getAllLeafColumns()
      .filter((col) => col.columnDef.enableHiding !== false)
      .forEach((col, index) => {
        /**
         * if next state will be true (all cols visible) then toggle visibility
         * OR
         * if next state will be false (all cols hidden) and the current index is not 0
         * then toggle visibility so always at least one column remain visible
         */
        if (nextVisibility || (!nextVisibility && index !== 0)) {
          col.toggleVisibility(nextVisibility);
        }
      });
  };

  return (
    <div className="ds-table-settings-panel">
      <Padbox
        as="header"
        paddingSize="mdPlus"
        style={{ borderBottom: '1px solid var(--sscds-border-color' }}
      >
        <Inline align="center" gap="md" justify="space-between">
          <Inline align="center" gap="md">
            <Icon name="columns-3" />
            <Text isBold>Column settings</Text>
          </Inline>
          <CloseButton
            ariaLabel="Close column settings"
            marginCompensation="md"
            onClose={() => setShowColumnSettings(false)}
          />
        </Inline>
      </Padbox>
      <Padbox
        paddingSize="md"
        paddingType="squish"
        style={{ overflow: 'auto' }}
      >
        <Stack gap="sm">
          <Inline
            align="flex-end"
            gap="md"
            stretch="start"
            style={{ paddingRight: '1rem' }}
          >
            <div>
              <Button
                type="button"
                variant="ghost"
                onClick={() => {
                  setColumnPinning(initialState.columnPinning ?? {});
                  setColumnVisibility(initialState.columnVisibility ?? {});
                  setColumnOrder(initialState.columnOrder ?? []);
                }}
              >
                Reset to default
              </Button>
            </div>
            <Inline gap="sm">
              {enableHiding && (
                <Stack gap="sm" justify="center">
                  <Text variant="secondary">Show</Text>
                  <div
                    className="ds-table-checkbox-wrapper"
                    style={{ height: '2.25rem' }}
                  >
                    <IndeterminateCheckbox
                      aria-label={`${
                        getColumnsVisibilityInfo().areAllColumnsVisible
                          ? 'Hide'
                          : 'Show'
                      } all columns`}
                      checked={getColumnsVisibilityInfo().areAllColumnsVisible}
                      indeterminate={
                        getColumnsVisibilityInfo().areSomeColumnsVisible
                      }
                      onChange={(e) =>
                        handleToggleAllColumnsVisibility(e.target.checked)
                      }
                    />
                  </div>
                </Stack>
              )}
              {enableColumnPinning && (
                <Stack gap="sm" justify="center">
                  <Text variant="secondary">Pin</Text>
                  <Button
                    aria-label="Unpin all columns"
                    color="secondary"
                    iconStart={{ name: 'times' }}
                    type="button"
                    variant="ghost"
                    onClick={() => {
                      setColumnPinning(initialState.columnPinning ?? {});
                    }}
                  />
                </Stack>
              )}
            </Inline>
          </Inline>
          <SettingsItems
            allColumns={allColumns}
            canHideMoreColumns={canHideMoreColumns}
            table={table}
          />
        </Stack>
      </Padbox>
    </div>
  );
};

export default Settings;
