import React from 'react';
import { isNotUndefined, isOdd } from 'ramda-adjunct';
import cls from 'classnames';

import { BodyProps } from './Body.types';
import { shrinkIfSticky } from '../utils';

function Body<D extends Record<string, unknown>>({
  rows,
  prepareRow,
  ...bodyProps
}: BodyProps<D>): React.ReactElement {
  return (
    <tbody {...bodyProps}>
      {rows.map((row, index) => {
        prepareRow(row);

        const { key: rowKey, ...rowRest } = row.getRowProps();
        return (
          <tr
            key={rowKey}
            {...rowRest}
            className={cls('ds-table-row', { 'is-selected': row.isSelected })}
          >
            {row.cells.map((cell) => {
              const { key: cellKey, ...cellRest } = cell.getCellProps(
                shrinkIfSticky(cell.column.sticky),
              );
              return (
                <td
                  key={cellKey}
                  className={cls('ds-table-cell', {
                    'is-sticky': isNotUndefined(cell.column.sticky),
                    'is-sticky-left': cell.column.sticky === 'left',
                    'is-sticky-right': cell.column.sticky === 'right',
                    'is-odd': isOdd(index),
                  })}
                  {...cellRest}
                >
                  {cell.render('Cell')}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
}

Body.displayName = 'Body';
export default Body;
