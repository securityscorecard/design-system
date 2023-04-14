import type {
  AccordionItem,
  AccordionItemId,
  AccordionProps,
} from './Accordion.types';

import { forwardRef, useCallback, useEffect, useState } from 'react';
import { equals, filter, includes, pipe, pluck, propEq, reject } from 'ramda';
import cls from 'classnames';

import { Stack } from '../layout';
import AccordionCollapsible from './AccordionCollapsible';
import { CLX_COMPONENT } from '../../theme/constants';

const pickOpen: (items: AccordionItem[]) => AccordionItemId[] = pipe(
  filter(propEq('isOpen', true)),
  pluck('id'),
);

function filterState(
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

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      isCollapsedOnOpen = true,
      items,
      openItems,
      isCard = true,
      className,
      ...props
    },
    ref,
  ) => {
    const [openIds, setOpenIds] = useState(pickOpen(items));

    useEffect(
      () =>
        openItems?.forEach((item: AccordionItemId) =>
          setOpenIds((state) => filterState(state, item, isCollapsedOnOpen)),
        ),
      [openItems, isCollapsedOnOpen],
    );

    const handleClick = useCallback(
      (id: AccordionItemId) => {
        setOpenIds((state) => filterState(state, id, isCollapsedOnOpen));
      },
      [setOpenIds, isCollapsedOnOpen],
    );

    return (
      <Stack {...props} ref={ref} className={cls(CLX_COMPONENT, className)}>
        {items.map(({ title, id, content }) => (
          <AccordionCollapsible
            key={`accordion-item-${id}`}
            handleHeaderClick={handleClick}
            id={id}
            isCard={isCard}
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

export default Accordion;
