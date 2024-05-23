import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { equals, filter, includes, pipe, pluck, propEq, reject } from 'ramda';
import cls from 'classnames';

import { Stack } from '../layout';
import {
  AccordionItem,
  AccordionItemId,
  AccordionItemIdPropType,
  AccordionItemPropType,
  AccordionProps,
} from './Accordion.types';
import AccordionCollapsible from './AccordionCollapsible';
import { CLX_COMPONENT } from '../../theme/constants';

const pickOpen: (items: AccordionItem[]) => AccordionItemId[] = pipe(
  filter(propEq('isOpen', true)),
  pluck('id'),
);

export function filterState(
  state: AccordionItemId[],
  item: AccordionItemId,
  isCollapsedOnOpen: boolean,
) {
  if (includes(item, state)) {
    return reject(equals(item), state);
  }
  if (isCollapsedOnOpen) {
    return [item];
  }

  return [...state, item];
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      isCollapsedOnOpen = true,
      items,
      openItems,
      className,
      onChange,
      ...props
    },
    ref,
  ) => {
    const [openIds, setOpenIds] = useState(pickOpen(items));

    useEffect(() => {
      if (openItems !== undefined) {
        setOpenIds(isCollapsedOnOpen ? [openItems[0]] : openItems);
      }
    }, [openItems, isCollapsedOnOpen]);

    const handleClick = useCallback(
      (id: AccordionItemId) => {
        const nextState = filterState(openIds, id, isCollapsedOnOpen);
        setOpenIds(nextState);
        onChange?.(nextState);
      },
      [openIds, setOpenIds, onChange, isCollapsedOnOpen],
    );

    return (
      <Stack {...props} ref={ref} className={cls(CLX_COMPONENT, className)}>
        {items.map(({ title, id, content }) => (
          <AccordionCollapsible
            key={`accordion-item-${id}`}
            handleHeaderClick={handleClick}
            id={id}
            isOpen={includes(id, openIds)}
            title={title}
          >
            {content}
          </AccordionCollapsible>
        ))}
      </Stack>
    );
  },
);

Accordion.propTypes = {
  items: PropTypes.arrayOf(AccordionItemPropType).isRequired,
  isCollapsedOnOpen: PropTypes.bool,
  className: PropTypes.string,
  openItems: PropTypes.arrayOf(AccordionItemIdPropType),
  onChange: PropTypes.func,
};

export default Accordion;
