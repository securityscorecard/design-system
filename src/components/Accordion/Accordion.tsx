import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { equals, filter, includes, pipe, pluck, propEq, reject } from 'ramda';

import { FlexContainer } from '../FlexContainer';
import {
  AccordionItem,
  AccordionItemId,
  AccordionItemPropType,
  AccordionProps,
} from './Accordion.types';
import AccordionCollapsible from './AccordionCollapsible';

const pickOpen: (items: AccordionItem[]) => AccordionItemId[] = pipe(
  filter(propEq('isOpen', true)),
  pluck('id'),
);

const Accordion: React.FC<AccordionProps> = ({
  isCollapsedOnOpen = true,
  items,
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
    <FlexContainer
      alignItems="flex-start"
      flexDirection="column"
      margin="none"
      padding="none"
      {...props}
    >
      {items.map(({ title, id, content }) => (
        <AccordionCollapsible
          key={`accordion-item-${title}`}
          handleHeaderClick={handleClick}
          id={id}
          isOpen={includes(id, openIds)}
          title={title}
        >
          {content}
        </AccordionCollapsible>
      ))}
    </FlexContainer>
  );
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(AccordionItemPropType).isRequired,
  isCollapsedOnOpen: PropTypes.bool,
};

export default Accordion;
