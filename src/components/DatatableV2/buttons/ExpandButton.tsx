import { DatatableInstance, DatatableRow } from '../Datatable.types';
import IconButton from '../../ButtonV2/IconButton';

const ExpandButton = <D,>({
  table,
  row,
}: {
  table: DatatableInstance<D>;
  row: DatatableRow<D>;
}) => {
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
      label={isExpanded ? 'Collapse row' : 'Expand row'}
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
