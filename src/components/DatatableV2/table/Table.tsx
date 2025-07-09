import { useContext, useEffect, useMemo, useRef } from 'react';

import { DatatableInstance } from '../Datatable.types';
import Body from '../body/Body';
import Header from '../header/Header';
import { parseCSSVarId } from '../columns.utils';
import TableRoot from './TableRoot';
import ProgressBar from './ProgressBar';
import HorizontalScrollbar from './HorizontalScrollbar';
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
    showProgress,
    isFullscreenMode,
  } = getState();
  const { datatable } = useContext(DSContext);
  const hasHorizontalScroll = useHasHorizontalScroll(table);
  const tableRootRef = useRef<HTMLDivElement>(null);

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

  // Scroll handlers for keyboard navigation
  const handleScrollLeft = () => {
    if (tableRootRef.current) {
      tableRootRef.current.scrollLeft -= 100;
    }
  };

  const handleScrollRight = () => {
    if (tableRootRef.current) {
      tableRootRef.current.scrollLeft += 100;
    }
  };

  const handleScrollToStart = () => {
    if (tableRootRef.current) {
      tableRootRef.current.scrollLeft = 0;
    }
  };

  const handleScrollToEnd = () => {
    if (tableRootRef.current) {
      tableRootRef.current.scrollLeft = tableRootRef.current.scrollWidth;
    }
  };

  return (
    <TableRoot
      ref={tableRootRef}
      data-fullscreen={isFullscreenMode}
      data-horizontal-scroll={hasHorizontalScroll}
      tabIndex={0}
    >
      {showProgress && <ProgressBar aria-label="Refreshing data" isTop />}
      <table
        ref={(ref) => {
          tableRef.current = ref;
        }}
        className="ds-table"
        id="datatable-content"
        style={columnSizeVars}
      >
        <Header table={table} />
        <Body table={table} />
      </table>
      {showProgress && <ProgressBar aria-hidden isBottom />}
      <HorizontalScrollbar
        isVisible={hasHorizontalScroll}
        onScrollLeft={handleScrollLeft}
        onScrollRight={handleScrollRight}
        onScrollToEnd={handleScrollToEnd}
        onScrollToStart={handleScrollToStart}
      />
    </TableRoot>
  );
};

export default Table;
