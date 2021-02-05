import React from 'react';
import PropTypes from 'prop-types';
import { isNotUndefined } from 'ramda-adjunct';

import { TextVariants } from '../../../../typography/Text/Text.enums';
import TableCellText from './components/TableCellText';
import TableCellLink from './components/TableCellLink';
import {
  LinkCellRendererProps,
  LinkColumnOptionsPropType,
} from './renderers.types';

const Link: React.FC<LinkCellRendererProps<string | number>> = ({
  value,
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

  return (
    <TableCellLink href={href} to={to} onClick={() => onClick(value)}>
      {value}
    </TableCellLink>
  );
};

Link.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  column: LinkColumnOptionsPropType,
};

export default Link;
