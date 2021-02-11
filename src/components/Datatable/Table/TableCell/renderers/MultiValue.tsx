import React from 'react';
import PropTypes from 'prop-types';
import { omit } from 'ramda';
import { isNotUndefined } from 'ramda-adjunct';

import { TextVariants } from '../../../../typography/Text/Text.enums';
import TableCellPill, {
  TableCellPillWrapper,
} from './components/TableCellPill';
import TableCellText from './components/TableCellText';
import {
  MultiValueCellRendererProps,
  MultiValueColumnOptionsPropType,
} from './renderers.types';
import Text from './Text';

const MultiValue: React.FC<MultiValueCellRendererProps<
  Array<number | string>
>> = ({ value, column }) => {
  const { nullCondition, nullConditionValue, displayLimit = 2 } = column;
  const isNull = nullCondition(value);
  const valueCount = value.length;

  if (isNull) {
    return isNotUndefined(nullConditionValue) ? (
      <TableCellText variant={TextVariants.context}>
        {isNull && isNotUndefined(nullConditionValue)
          ? nullConditionValue
          : value}
      </TableCellText>
    ) : null;
  }

  return (
    <TableCellPillWrapper flexWrap="wrap">
      {value.map((item, index) => {
        if (displayLimit !== 0 && index >= displayLimit) return null;

        return (
          <TableCellPill key={item}>
            <Text column={omit('displayLimit', column)} value={item} />
          </TableCellPill>
        );
      })}
      {displayLimit !== 0 && valueCount > displayLimit && (
        /*
         * TODO:
         * Implement tooltip with list of remaining values
         * We need to change implementation of Tooltip to use react-portals
         * otherwise tooltip will mess table layout
         */
        <TableCellPill>
          <TableCellText>+ {valueCount - displayLimit}</TableCellText>
        </TableCellPill>
      )}
    </TableCellPillWrapper>
  );
};

MultiValue.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.number),
  ]).isRequired,
  column: MultiValueColumnOptionsPropType,
};

export default MultiValue;
