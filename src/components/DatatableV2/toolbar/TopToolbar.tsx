import styled from 'styled-components';
import { VisibilityState } from '@tanstack/react-table';

import { Inline, Padbox } from '../../layout';
import Button from '../../ButtonV2/Button';
import { Text } from '../../Text';
import { DatatableInstance } from '../Datatable.types';
import { abbreviateNumber } from '../../../utils';

const TopToolbarRoot = styled(Padbox)`
  border-bottom: 1px solid var(--sscds-table-color-border);
`;

function getHiddenColumns(columnVisibility: VisibilityState) {
  return Object.values(columnVisibility).reduce(
    (acc, val) => (val ? acc : acc + 1),
    0,
  );
}

function TopToolbar<D>({ table }: { table: DatatableInstance<D> }) {
  const {
    getState,
    getPrePaginationRowModel,
    options: {
      enableFullScreenMode,
      enableHiding,
      enableColumnPinning,
      enableColumnOrdering,
      rowCount,
    },
    setShowColumnSettings,
    setIsFullscreenMode,
  } = table;
  const { isFullscreenMode, columnVisibility } = getState();
  const totalRowCount = rowCount ?? getPrePaginationRowModel().rows.length;
  const hiddenColumns = getHiddenColumns(columnVisibility);

  const handleColumnSettings = () => {
    setShowColumnSettings((old) => !old);
  };
  const handleFullscreenMode = () => {
    setIsFullscreenMode((old) => !old);
  };

  return (
    <TopToolbarRoot paddingSize="md" paddingType="squish">
      <Inline align="center" gap="2x" stretch="start">
        <Text>
          <abbr title={totalRowCount.toString()}>
            {abbreviateNumber(totalRowCount)}
          </abbr>{' '}
          {totalRowCount === 1 ? 'row' : 'rows'}
        </Text>
        {enableHiding && hiddenColumns > 0 && (
          <Text variant="subtle">{`${hiddenColumns} ${
            hiddenColumns === 1 ? 'column' : 'columns'
          } hidden`}</Text>
        )}
        {(enableHiding || enableColumnPinning || enableColumnOrdering) && (
          <Button
            iconStart={{ name: 'columns-3' }}
            size="sm"
            variant="ghost"
            onClick={handleColumnSettings}
          >
            Columns
          </Button>
        )}
        {enableFullScreenMode && (
          <Button
            iconStart={{ name: isFullscreenMode ? 'compress' : 'expand' }}
            size="sm"
            variant="ghost"
            onClick={handleFullscreenMode}
          >
            Full Screen
          </Button>
        )}
      </Inline>
    </TopToolbarRoot>
  );
}

export default TopToolbar;
