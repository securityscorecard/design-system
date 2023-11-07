import React, { useMemo } from 'react';

import { DatatableInstance } from '../Datatable.types';
import IndeterminateCheckbox from '../inputs/IndeterminateCheckbox';
import SettingsItem from './SettingsItem';

const Settings = <D,>({ table }: { table: DatatableInstance<D> }) => {
  const {
    getAllLeafColumns,
    options: { enableColumnPinning, enableHiding },
    setColumnPinning,
    setColumnVisibility,
    setShowColumnSettings,
  } = table;

  const allColumns = useMemo(() => {
    return getAllLeafColumns().filter(
      (col) => col.columnDef.columnDefType === 'data',
    );
  }, [getAllLeafColumns]);

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

  const handleToggleAllColumnsVisibility = (isVisible: boolean) => {
    getAllLeafColumns()
      .filter((col) => col.columnDef.enableHiding !== false)
      .forEach((col) => col.toggleVisibility(isVisible));
  };

  return (
    <div className="ds-table-settings-toolbar">
      <header>
        <span>Column settings</span>
        <button
          aria-label="Close column settings"
          type="button"
          onClick={() => setShowColumnSettings(false)}
        >
          ❌
        </button>
      </header>
      <div>
        <div>
          <button
            type="button"
            onClick={() => {
              setColumnPinning({});
              setColumnVisibility({});
            }}
          >
            Reset to default
          </button>
          {enableHiding && (
            <IndeterminateCheckbox
              aria-label={`${
                getColumnsVisibilityInfo().areAllColumnsVisible
                  ? 'Hide'
                  : 'Show'
              } all columns`}
              checked={getColumnsVisibilityInfo().areAllColumnsVisible}
              indeterminate={getColumnsVisibilityInfo().areSomeColumnsVisible}
              onChange={(e) =>
                handleToggleAllColumnsVisibility(e.target.checked)
              }
            />
          )}
          {enableColumnPinning && (
            <button
              aria-label="Unpin all columns"
              type="button"
              onClick={() => {
                setColumnPinning({});
              }}
            >
              ❌
            </button>
          )}
        </div>
        {allColumns.map((column) => (
          <SettingsItem key={column.id} column={column} table={table} />
        ))}
      </div>
    </div>
  );
};

export default Settings;
