import { DatatableInstance, DatatableRow } from '../Datatable.types';
import IconButton from '../../ButtonV2/IconButton';
import { useSafeTranslation } from '../../../hooks/useSafeTranslation';

const ExpandButton = <D,>({
  table,
  row,
}: {
  table: DatatableInstance<D>;
  row: DatatableRow<D>;
}) => {
  const { t } = useSafeTranslation();
  const {
    options: { renderDetailPanel },
  } = table;
  const { getIsExpanded, getCanExpand, toggleExpanded } = row;

  const canExpand = getCanExpand();
  const isExpanded = getIsExpanded();

  return (
    <IconButton
      iconName="angle-right"
      iconRotation={isExpanded ? 90 : undefined}
      isDisabled={!canExpand && !renderDetailPanel}
      label={
        isExpanded
          ? t('sscds|datatable.expanding.collapseRow')
          : t('sscds|datatable.expanding.expandRow')
      }
      size="sm"
      variant="ghost"
      onClick={(e) => {
        e.stopPropagation();
        toggleExpanded();
      }}
    />
  );
};

export default ExpandButton;
