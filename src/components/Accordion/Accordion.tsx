import type {
  AccordionItem,
  AccordionItemId,
  AccordionProps,
} from './Accordion.types';

import { forwardRef, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { equals, filter, includes, pipe, pluck, propEq, reject } from 'ramda';
import cls from 'classnames';

import { Stack } from '../layout';
import {
  AccordionItemIdPropType,
  AccordionItemPropType,
} from './Accordion.types';
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

Accordion.propTypes /* remove-proptypes */ = {
  //
  // =============== WARNING ================
  // | These PropTypes are auto-generated   |
  // | from the TypeScript type definitions  |
  // ========================================
  //
  className: PropTypes.string,
  isCard: PropTypes.bool,
  isCollapsedOnOpen: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.node.isRequired,
      id: PropTypes.oneOfType([
        PropTypes.number.isRequired,
        PropTypes.string.isRequired,
      ]).isRequired,
      isOpen: PropTypes.bool.isRequired.isRequired,
      title: PropTypes.node.isRequired,
    }).isRequired,
  ).isRequired,
  openItems: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number.isRequired,
      PropTypes.string.isRequired,
    ]).isRequired,
  ).isRequired,
} as any;

export default Accordion;
