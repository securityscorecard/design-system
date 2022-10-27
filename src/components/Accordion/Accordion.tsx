import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { equals, filter, includes, pipe, pluck, propEq, reject } from 'ramda';
import cls from 'classnames';

import { Stack } from '../layout';
import {
  AccordionItem,
  AccordionItemId,
  AccordionItemPropType,
  AccordionProps,
} from './Accordion.types';
import AccordionCollapsible from './AccordionCollapsible';
import { CLX_COMPONENT } from '../../theme/constants';

const pickOpen: (items: AccordionItem[]) => AccordionItemId[] = pipe(
  filter(propEq('isOpen', true)),
  pluck('id'),
);

const Accordion: React.FC<AccordionProps> = ({
  isCollapsedOnOpen = true,
  items,
  isCard = true,
  className,
  ...props
}) => {
  const [openIds, setOpenIds] = useState(pickOpen(items));

  const handleClick = useCallback(
    (id: AccordionItemId) => {
      setOpenIds((state) =>
        includes(id, state)
          ? reject(equals(id), state)
          : isCollapsedOnOpen
          ? [id]
          : [...state, id],
      );
    },
    [setOpenIds, isCollapsedOnOpen],
  );

  return (
    <Stack {...props} className={cls(CLX_COMPONENT, className)}>
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
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(AccordionItemPropType).isRequired,
  isCollapsedOnOpen: PropTypes.bool,
  className: PropTypes.string,
};

export default Accordion;
