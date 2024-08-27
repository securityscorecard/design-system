import { useContext, useMemo } from 'react';
import styled from 'styled-components';

import Button from '../../ButtonV2/Button';
import { CloseButton } from '../../CloseButton';
import { Icon } from '../../Icon';
import { Inline, Padbox, Stack } from '../../layout';
import { Text } from '../../Text';
import { getHidableColumns } from '../columns.utils';
import { DatatableInstance } from '../Datatable.types';
import IndeterminateCheckbox from '../inputs/IndeterminateCheckbox';
import SettingsItems from './SettingsItems';
import { DSContext } from '../../../theme/DSProvider/DSProvider';
import { getButtonSize } from '../../ButtonV2/utils';

const SettingsRoot = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  border-left: 1px solid var(--sscds-table-color-border);
  background: white;
  box-shadow: var(--sscds-table-shadow-settings);
  width: 100%;
  max-width: var(--sscds-table-size-settings-width);
  z-index: 2;

  .ds-table-settings-panel-item {
    padding-left: 0.5rem;
    border: 1px solid var(--sscds-table-color-border);

    &:first-of-type {
      border-top-left-radius: var(--sscds-table-radii-settings-item);
      border-top-right-radius: var(--sscds-table-radii-settings-item);
    }
    &:last-of-type {
      border-bottom-left-radius: var(--sscds-table-radii-settings-item);
      border-bottom-right-radius: var(--sscds-table-radii-settings-item);
    }
  }
  .ds-table-settings-panel-item + .ds-table-settings-panel-item {
    margin-top: -1px;
  }
  .ds-table-checkbox-wrapper {
    display: flex;
    padding: 0 0.5rem;
    align-items: center;
    justify-content: center;
  }
`;

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
  const { datatable } = useContext(DSContext);

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

  const getColumnsPinnabilityInfo = () => {
    const pineableColumns = getAllLeafColumns().filter(
      (col) => col.columnDef.enablePinning !== false,
    );
    const pinnedColumns = pineableColumns.filter(
      (col) => col.getIsPinned() === false,
    );

    return {
      areAllColumnsPinned: pinnedColumns.length === 0,
      areSomeColumnsPinned:
        pinnedColumns.length > 0 &&
        pinnedColumns.length < pineableColumns.length,
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

  const handleToggleAllColumnsPinnability = (pinned: boolean) => {
    setColumnPinning(
      pinned ? { left: getAllLeafColumns().map((col) => col.id) } : {},
    );
  };

  return (
    <SettingsRoot className="ds-table-settings-panel">
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
        style={{
          overflow: 'auto',
          position: 'sticky',
          top: datatable?.settingsOffset ?? 0,
        }}
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
                size="sm"
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
                    style={{ height: getButtonSize('sm') }}
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
                  <div
                    className="ds-table-checkbox-wrapper"
                    style={{
                      height: getButtonSize('sm'),
                      marginLeft: '0.35rem',
                    }}
                  >
                    <IndeterminateCheckbox
                      aria-label={`${
                        getColumnsPinnabilityInfo().areAllColumnsPinned
                          ? 'Unpin'
                          : 'Pin'
                      } all columns`}
                      checked={getColumnsPinnabilityInfo().areAllColumnsPinned}
                      indeterminate={
                        getColumnsPinnabilityInfo().areSomeColumnsPinned
                      }
                      onChange={(e) =>
                        handleToggleAllColumnsPinnability(e.target.checked)
                      }
                    />
                  </div>
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
    </SettingsRoot>
  );
};

export default Settings;
