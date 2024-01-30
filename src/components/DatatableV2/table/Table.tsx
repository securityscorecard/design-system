import React, { useMemo } from 'react';

import { DatatableInstance } from '../Datatable.types';
import Body from '../body/Body';
import Header from '../header/Header';
import { parseCSSVarId } from '../columns.utils';
import Settings from '../panels/Settings';
import TableRoot from './TableRoot';
import ProgressBar from './ProgressBar';
import Selection from '../toolbar/Selection';

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
  } = getState();

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

  return (
    <TableRoot tabIndex={0}>
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
      {showColumnSettings && <Settings table={table} />}
      {table.options.enableRowSelection && <Selection table={table} />}
    </TableRoot>
  );
};

export default Table;
