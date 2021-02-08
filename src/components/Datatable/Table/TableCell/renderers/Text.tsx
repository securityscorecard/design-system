import React from 'react';
import PropTypes from 'prop-types';
import { all } from 'ramda';
import { isNotUndefined, isUndefined } from 'ramda-adjunct';

import { TextVariants } from '../../../../typography/Text/Text.enums';
import TableCellLink from './components/TableCellLink';
import TableCellText from './components/TableCellText';
import {
  ColumnOptionsPropType,
  LinkCellRendererProps,
  LinkColumnOptionsPropType,
} from './renderers.types';

const Text: React.FC<LinkCellRendererProps<string | number>> = ({
  value,
  formater,
  isLinkDiscrete = true,
  column: { nullCondition, nullConditionValue, onClick, ...restColumn },
}) => {
  const isNull = nullCondition(value);

  if (isNull) {
    return (
      <TableCellText variant={TextVariants.context}>
        {isNotUndefined(nullConditionValue) ? nullConditionValue : value}
      </TableCellText>
    );
  }

  const href =
    'hrefComposer' in restColumn ? restColumn.hrefComposer(value) : undefined;
  const to =
    'toComposer' in restColumn ? restColumn.toComposer(value) : undefined;
  const returnValue = isNotUndefined(formater) ? formater(value) : value;

  if (all(isUndefined, [href, to, onClick])) {
    return <TableCellText>{returnValue}</TableCellText>;
  }

  return (
    <TableCellLink
      $isDiscrete={isLinkDiscrete}
      href={href}
      to={to}
      onClick={() => onClick(value)}
    >
      {returnValue}
    </TableCellLink>
  );
};

Text.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  formater: PropTypes.func,
  isLinkDiscrete: PropTypes.bool,
  column: PropTypes.oneOfType([
    ColumnOptionsPropType,
    LinkColumnOptionsPropType,
  ]),
};

export default Text;
