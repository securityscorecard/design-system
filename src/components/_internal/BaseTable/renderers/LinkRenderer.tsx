import React from 'react';
import cls from 'classnames';
import { isNotUndefined, isUndefined, noop } from 'ramda-adjunct';

import { LinkRendererProps } from './renderers.types';

function LinkRenderer<D extends Record<string, unknown>>({
  value,
  isDiscrete = false,
  onClick = noop,
  hrefComposer,
  toComposer,
  component,
  rowData,
  className,
}: LinkRendererProps<D>): React.ReactElement {
  const isRelativeLink = isNotUndefined(toComposer);
  if (isRelativeLink && isUndefined(component)) {
    throw new Error(`You are trying to use 'toComposer' property but you didn't provide 'cellLinkComponent'.
Add valid component to 'cellLinkComponent', e.g. Link or NavLink from 'react-router'`);
  }

  const to = isRelativeLink ? toComposer(value, rowData) : undefined;

  const isAbsoluteLink = isNotUndefined(hrefComposer);
  const href = isAbsoluteLink ? hrefComposer(value, rowData) : undefined;

  const LinkComponent = component || (isAbsoluteLink ? 'a' : 'button');

  return (
    <LinkComponent
      className={cls('ds-table-cell-link', className, {
        'is-discrete': isDiscrete,
      })}
      href={href}
      to={to}
      onClick={() => onClick(value, rowData)}
    >
      {value}
    </LinkComponent>
  );
}

export default LinkRenderer;
