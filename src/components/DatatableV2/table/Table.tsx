import { useContext, useEffect, useMemo } from 'react';

import { DatatableInstance } from '../Datatable.types';
import Body from '../body/Body';
import Header from '../header/Header';
import { parseCSSVarId } from '../columns.utils';
import Settings from '../panels/Settings';
import TableRoot from './TableRoot';
import ProgressBar from './ProgressBar';
import { DSContext } from '../../../theme/DSProvider/DSProvider';
import { useHasHorizontalScroll } from '../hooks/useHasHorizontalScroll';

const Table = <D,>({ table }: { table: DatatableInstance<D> }) => {
  const {
    getFlatHeaders,
    getState,
    options: { columns },
    refs: { tableRef },
  } = table;
  const {
    columnSizing,
    columnSizingInfo,
    columnVisibility,
    showColumnSettings,
    showProgress,
    isFullscreenMode,
  } = getState();
  const { datatable } = useContext(DSContext);
  const hasHorizontalScroll = useHasHorizontalScroll(table);

  const columnSizeVars = useMemo(() => {
    const headers = getFlatHeaders();
    const colSizes: { [key: string]: number } = {};
    for (let i = 0; i < headers.length; i++) {
      const header = headers[i];
      let colSize = header.getSize();
      if (header.subHeaders?.length)
        colSize = colSize * 1.05 + header.subHeaders.length * 2;
      colSizes[`--header-${parseCSSVarId(header.id)}-size`] = colSize;
      colSizes[`--col-${parseCSSVarId(header.column.id)}-size`] = colSize;
    }
    return colSizes;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columns, columnSizing, columnSizingInfo, columnVisibility]);

  useEffect(() => {
    datatable?.onFullscreenModeChange(isFullscreenMode);
  }, [isFullscreenMode, datatable]);

  return (
    <>
      <TableRoot
        data-fullscreen={isFullscreenMode}
        data-horizontal-scroll={hasHorizontalScroll}
        data-settings-state={showColumnSettings ? 'open' : 'closed'}
        tabIndex={0}
      >
        {showProgress && <ProgressBar isTop />}
        <table
          ref={(ref) => {
            tableRef.current = ref;
          }}
          className="ds-table"
          style={columnSizeVars}
        >
          <Header table={table} />
          <Body table={table} />
        </table>
        {showProgress && <ProgressBar isBottom />}
      </TableRoot>
      {showColumnSettings && <Settings table={table} />}
    </>
  );
};

export default Table;
