import { DatatableInstance } from '../Datatable.types';
import IconButton from '../../ButtonV2/IconButton';

const ExpandAllButton = <D,>({ table }: { table: DatatableInstance<D> }) => {
  const {
    getIsSomeRowsExpanded,
    getState,
    options: { renderDetailPanel },
    toggleAllRowsExpanded,
  } = table;

  const { isLoading } = getState();
  const areSomeRowsExpanded = getIsSomeRowsExpanded();

  return (
    <IconButton
      iconName="angles-right"
      iconRotation={areSomeRowsExpanded ? 270 : undefined}
      isDisabled={isLoading || !renderDetailPanel}
      label={areSomeRowsExpanded ? 'Collapse all rows' : 'Expand all rows'}
      size="sm"
      variant="ghost"
      onClick={() => toggleAllRowsExpanded(!areSomeRowsExpanded)}
    />
  );
};

export default ExpandAllButton;
