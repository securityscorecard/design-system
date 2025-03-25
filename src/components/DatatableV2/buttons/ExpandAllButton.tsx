import { DatatableInstance } from '../Datatable.types';
import IconButton from '../../ButtonV2/IconButton';
import { useSafeTranslation } from '../../../hooks/useSafeTranslation';

const ExpandAllButton = <D,>({ table }: { table: DatatableInstance<D> }) => {
  const { t } = useSafeTranslation();
  const {
    getIsSomeRowsExpanded,
    getState,
    options: { renderDetailPanel, enableExpandAll },
    toggleAllRowsExpanded,
  } = table;

  const { isLoading } = getState();
  const areSomeRowsExpanded = getIsSomeRowsExpanded();

  if (!enableExpandAll)
    return <span className="sr-only">Expand detail panel</span>;

  return (
    <IconButton
      iconName="angles-right"
      iconRotation={areSomeRowsExpanded ? 270 : undefined}
      isDisabled={isLoading || !renderDetailPanel}
      label={
        areSomeRowsExpanded
          ? t('sscds|datatable.expanding.collapseAll')
          : t('sscds|datatable.expanding.expandAll')
      }
      size="sm"
      variant="ghost"
      onClick={() => toggleAllRowsExpanded(!areSomeRowsExpanded)}
    />
  );
};

export default ExpandAllButton;
