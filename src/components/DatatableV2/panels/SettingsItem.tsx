import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { Inline, Padbox } from '../../layout';
import { DatatableColumn, DatatableInstance } from '../Datatable.types';
import IconButton from '../../ButtonV2/IconButton';
import { useSafeTranslation } from '../../../hooks/useSafeTranslation';

const SettingsItem = <D,>({
  column,
  table,
  canColumnHide,
}: {
  column: DatatableColumn<D>;
  table: DatatableInstance<D>;
  canColumnHide: boolean;
}) => {
  const {
    options: { enableColumnPinning, enableHiding, enableColumnOrdering },
  } = table;
  const {
    attributes,
    listeners,
    setActivatorNodeRef,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: column.id });
  const { t } = useSafeTranslation();

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <Padbox
      ref={setNodeRef}
      className="ds-table-settings-panel-item"
      paddingSize="sm"
      style={style}
    >
      <Inline
        align="center"
        gap="md"
        stretch={enableColumnOrdering ? 2 : 'start'}
      >
        {enableColumnOrdering && (
          <IconButton
            ref={setActivatorNodeRef}
            iconName="grip-dots-vertical"
            label={t('sscds|datatable.settings.ordering.reorder', {
              columnName: column.columnDef.header,
            })}
            {...attributes}
            {...listeners}
            size="sm"
            style={{ cursor: 'grab' }}
            variant="ghost"
          />
        )}
        <span>{column.columnDef.header}</span>
        <Inline gap="sm" stretch="all">
          {enableHiding && (
            <div className="ds-table-checkbox-wrapper">
              <input
                aria-label={
                  column.getIsVisible()
                    ? t('sscds|datatable.settings.hiding.hideColumn', {
                        columnName: column.columnDef.header,
                      })
                    : t('sscds|datatable.settings.hiding.showColumn', {
                        columnName: column.columnDef.header,
                      })
                }
                checked={column.getIsVisible()}
                disabled={
                  (!canColumnHide && column.getIsVisible()) ||
                  !column.getCanHide()
                }
                type="checkbox"
                onChange={(e) => column.toggleVisibility(e.target.checked)}
              />
            </div>
          )}
          {enableColumnPinning && (
            <div className="ds-table-checkbox-wrapper">
              <input
                aria-label={
                  column.getIsPinned() !== false
                    ? t('sscds|datatable.settings.pinnig.unpinColumn', {
                        columnName: column.columnDef.header,
                      })
                    : t('sscds|datatable.settings.pinnig.pinColumn', {
                        columnName: column.columnDef.header,
                      })
                }
                checked={column.getIsPinned() !== false}
                disabled={!column.getCanPin()}
                type="checkbox"
                onChange={(e) => column.pin(e.target.checked ? 'left' : false)}
              />
            </div>
          )}
        </Inline>
      </Inline>
    </Padbox>
  );
};

export default SettingsItem;
