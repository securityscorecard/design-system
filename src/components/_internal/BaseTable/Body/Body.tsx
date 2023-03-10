import type { ReactElement } from 'react';
import type { BodyProps } from './Body.types';

import { isNotUndefined, isOdd } from 'ramda-adjunct';
import cls from 'classnames';

import { shrinkIfSticky } from '../utils';

function Body<D extends Record<string, unknown>>({
  rows,
  prepareRow,
  ...bodyProps
}: BodyProps<D>): ReactElement {
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    <tbody {...bodyProps}>
      {rows.map((row, index) => {
        prepareRow(row);
        return (
          <tr
            {...row.getRowProps()}
            className={cls('ds-table-row', { 'is-selected': row.isSelected })}
          >
            {row.cells.map((cell) => {
              return (
                <td
                  className={cls('ds-table-cell', {
                    'is-sticky': isNotUndefined(cell.column.sticky),
                    'is-sticky-left': cell.column.sticky === 'left',
                    'is-sticky-right': cell.column.sticky === 'right',
                    'is-odd': isOdd(index),
                  })}
                  {...cell.getCellProps(shrinkIfSticky(cell.column.sticky))}
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
