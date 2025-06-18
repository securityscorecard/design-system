import { useRef } from 'react';

import Button from '../../ButtonV2/Button';
import { DatatableInstance } from '../Datatable.types';
import { useSafeTranslation } from '../../../hooks/useSafeTranslation';
import { ControlledDropdown } from '../../Dropdown';
import Settings from '../panels/Settings';

const ColumnsSettingsDropdown = <D,>({
  table,
}: {
  table: DatatableInstance<D>;
}) => {
  const { t } = useSafeTranslation();
  const buttonRef = useRef();

  const { getState, setShowColumnSettings } = table;
  const { showColumnSettings } = getState();

  return (
    <div className="ds-table-header-cell-column-actions-button-wrapper">
      <Button
        ref={buttonRef}
        iconStart={{ name: 'columns-3' }}
        size="sm"
        variant="ghost"
        onClick={() => setShowColumnSettings((open) => !open)}
      >
        {t('sscds|datatable.topToolbar.columns')}
      </Button>
      <ControlledDropdown
        innerPaddingSize="sm"
        isOpen={showColumnSettings}
        maxPaneWidth={400}
        triggerEl={buttonRef.current}
        isPaneElevated
        onClickOut={() => {
          setShowColumnSettings(false);
        }}
      >
        <Settings table={table} />
      </ControlledDropdown>
    </div>
  );
};

export default ColumnsSettingsDropdown;
