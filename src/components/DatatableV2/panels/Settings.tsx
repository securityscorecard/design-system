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
import { useSafeTranslation } from '../../../hooks/useSafeTranslation';

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

    input[type='checkbox'] {
      width: 1.25rem;
      height: 1.25rem;
      accent-color: var(--sscds-color-background-action-highlight-default);
    }
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
      <div
        style={{
          overflow: 'auto',
          position: 'sticky',
          top: datatable?.settingsOffset ?? 0,
        }}
      >
        <Padbox
          as="header"
          paddingSize="mdPlus"
          style={{
            borderBottom: '1px solid var(--sscds-border-color',
          }}
        >
          <Inline align="center" gap="md" justify="space-between">
            <Inline align="center" gap="md">
              <Icon name="columns-3" />
              <Text isBold>{t('sscds|datatable.settings.title')}</Text>
            </Inline>
            <CloseButton
              ariaLabel={t('sscds|datatable.settings.close')}
              marginCompensation="md"
              onClose={() => setShowColumnSettings(false)}
            />
          </Inline>
        </Padbox>
        <Padbox paddingSize="md" style={{}}>
          <Stack gap="md">
            <Inline
              gap="sm"
              stretch="start"
              style={{ paddingRight: 'var(--sscds-space-2x)' }}
            >
              <div>
                <Button
                  size="sm"
                  variant="subtle"
                  onClick={() => {
                    setColumnPinning(initialState.columnPinning ?? {});
                    setColumnVisibility(initialState.columnVisibility ?? {});
                    setColumnOrder(initialState.columnOrder ?? []);
                  }}
                >
                  {t('sscds|datatable.settings.reset')}
                </Button>
              </div>
              <Inline gap="sm" stretch="all">
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
                        checked={
                          getColumnsVisibilityInfo().areAllColumnsVisible
                        }
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
                        checked={
                          getColumnsPinnabilityInfo().areAllColumnsPinned
                        }
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
      </div>
    </SettingsRoot>
  );
};

export default Settings;
