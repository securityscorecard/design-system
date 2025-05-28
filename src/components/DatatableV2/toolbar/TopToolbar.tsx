import styled from 'styled-components';
import { VisibilityState } from '@tanstack/react-table';

import { Inline, Padbox } from '../../layout';
import Button from '../../ButtonV2/Button';
import { Text } from '../../Text';
import { DatatableInstance } from '../Datatable.types';
import { abbreviateNumber } from '../../../utils';
import { useSafeTranslation } from '../../../hooks/useSafeTranslation';
import { Skeleton } from '../../Skeleton';
import ColumnsSettingsDropdown from './ColumnsSettingsDropdown';

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
    setIsFullscreenMode,
  } = table;
  const { isFullscreenMode, columnVisibility, isLoading } = getState();
  const totalRowCount = rowCount ?? getPrePaginationRowModel().rows.length;
  const hiddenColumns = getHiddenColumns(columnVisibility);
  const { t, lng } = useSafeTranslation();

  const handleFullscreenMode = () => {
    setIsFullscreenMode((old) => !old);
  };

  return (
    <TopToolbarRoot paddingSize="md" paddingType="squish">
      <Inline align="center" gap="2x" stretch="start">
        {isLoading ? (
          <div>
            <Skeleton width={80} />
          </div>
        ) : (
          <Text
            className="sscds-test-itemCounter"
            data-test-itemcount={totalRowCount}
          >
            {t('sscds|datatable.topToolbar.itemCounter', {
              count: totalRowCount,
              totalRowCount: abbreviateNumber(totalRowCount, lng),
            })}
          </Text>
        )}
        {enableHiding && hiddenColumns > 0 && (
          <Text variant="subtle">
            {t('sscds|datatable.topToolbar.hiddenColumns', {
              count: hiddenColumns,
            })}
          </Text>
        )}
        {(enableHiding || enableColumnPinning || enableColumnOrdering) && (
          <ColumnsSettingsDropdown table={table} />
        )}
        {enableFullScreenMode && (
          <Button
            iconStart={{ name: isFullscreenMode ? 'compress' : 'expand' }}
            size="sm"
            variant="ghost"
            onClick={handleFullscreenMode}
          >
            {t('sscds|datatable.topToolbar.fullScreen')}
          </Button>
        )}
      </Inline>
    </TopToolbarRoot>
  );
}

export default TopToolbar;
