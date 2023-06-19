/* eslint-disable filenames/match-exported */
import type { IPAsset } from './data/ipAssets';

import { createColumnHelper } from '@tanstack/react-table';

import _ipAssets from './data/ipAssets.json';
import { DT } from './DT';

const ipAssets = _ipAssets as unknown as IPAsset[];
const columnHelper = createColumnHelper<IPAsset>();
const columnDefs = [
  columnHelper.accessor('ipAddress', { footer: (info) => info.column.id }),
];

const Table = ({
  enableTableFooter = true,
  enableTableHeader = true,
}: {
  enableTableFooter?: boolean;
  enableTableHeader?: boolean;
}) => {
  return (
    <DT
      columns={columnDefs}
      data={ipAssets.slice(0, 10)}
      enableTableFooter={enableTableFooter}
      enableTableHeader={enableTableHeader}
    />
  );
};
export default Table;
