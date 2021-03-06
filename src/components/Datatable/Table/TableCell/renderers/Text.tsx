import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { all } from 'ramda';
import { isFunction, isNotUndefined, isUndefined } from 'ramda-adjunct';

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
  formatter,
  isLinkDiscrete = true,
  column: { nullCondition, nullConditionValue, onClick, ...restColumn },
}) => {
  const isNull = nullCondition(value);

  const handleClick = useCallback(() => {
    if (isNotUndefined(onClick) && isFunction(onClick)) {
      onClick(value);
    }
  }, [onClick, value]);

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
  const returnValue = isNotUndefined(formatter) ? formatter(value) : value;

  if (all(isUndefined, [href, to, onClick])) {
    return <TableCellText>{returnValue}</TableCellText>;
  }

  return (
    <TableCellLink
      $isDiscrete={isLinkDiscrete}
      href={href}
      to={to}
      onClick={handleClick}
    >
      {returnValue}
    </TableCellLink>
  );
};

Text.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  formatter: PropTypes.func,
  isLinkDiscrete: PropTypes.bool,
  column: PropTypes.oneOfType([
    ColumnOptionsPropType,
    LinkColumnOptionsPropType,
  ]),
};

export default Text;
