import { useMemo } from 'react';
import styled from 'styled-components';

import Button from '../../ButtonV2/Button';
import { Icon } from '../../Icon';
import { Inline, Padbox, Stack } from '../../layout';
import { Text } from '../../Text';
import { getHidableColumns } from '../columns.utils';
import { DatatableInstance } from '../Datatable.types';
import IndeterminateCheckbox from '../inputs/IndeterminateCheckbox';
import SettingsItems from './SettingsItems';
import { useSafeTranslation } from '../../../hooks/useSafeTranslation';
import { pxToRem } from '../../../utils';

const SettingsRoot = styled.div`
  .ds-table-settings-panel-item {
    width: ${pxToRem(368)};

    &:not(:last-child) {
      border-bottom: 1px solid var(--sscds-color-border-default);
    }

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

    input[type='checkbox'] {
      width: 1.25rem;
      height: 1.25rem;
      accent-color: var(--sscds-color-background-action-highlight-default);
    }
  }
  .ds-table-settings-items {
    max-height: 16.5rem;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .ds-table-settings-header {
    padding: 8px 18px;
    border-bottom: 1px solid var(--sscds-color-border-default);
  }

  .ds-table-settings-footer {
    border-top: 1px solid var(--sscds-color-border-default);
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
    initialState,
  } = table;
  const { columnOrder, columnPinning } = getState();
  const { t } = useSafeTranslation();

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
      <div className="ds-table-settings-header">
        <Inline align="center" gap="md" justify="space-between">
          <Inline align="center" gap="md">
            <Icon name="columns-3" />
            <Text isBold>{t('sscds|datatable.settings.title')}</Text>
          </Inline>

          <Inline align="center" gap="sm">
            {enableHiding && (
              <Stack gap="1x" justify="center">
                <Icon name="eye" size="md" hasFixedSize />
                <div className="ds-table-checkbox-wrapper">
                  <IndeterminateCheckbox
                    aria-label={
                      getColumnsVisibilityInfo().areAllColumnsVisible
                        ? t('sscds|datatable.settings.hiding.hideAll')
                        : t('sscds|datatable.settings.hiding.showAll')
                    }
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
              <Stack gap="1x" justify="center">
                <Icon name="thumbtack" size="md" hasFixedSize />
                <div className="ds-table-checkbox-wrapper">
                  <IndeterminateCheckbox
                    aria-label={
                      getColumnsPinnabilityInfo().areAllColumnsPinned
                        ? t('sscds|datatable.settings.pinnig.unpinAll')
                        : t('sscds|datatable.settings.pinnig.pinAll')
                    }
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
      </div>
      <Padbox paddingSize="xs">
        <div className="ds-table-settings-items">
          <SettingsItems
            allColumns={allColumns}
            canHideMoreColumns={canHideMoreColumns}
            table={table}
          />
        </div>
      </Padbox>
      <div className="ds-table-settings-footer">
        <Padbox paddingSize="xs">
          <Button
            size="sm"
            variant="ghost"
            onClick={() => {
              setColumnPinning(initialState.columnPinning ?? {});
              setColumnVisibility(initialState.columnVisibility ?? {});
              setColumnOrder(initialState.columnOrder ?? []);
            }}
          >
            {t('sscds|datatable.settings.reset')}
          </Button>
        </Padbox>
      </div>
    </SettingsRoot>
  );
};

export default Settings;
