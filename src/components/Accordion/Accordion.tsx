import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import { FlexContainer } from '../FlexContainer';
import {
  AccordionItemId,
  AccordionItemPropType,
  AccordionProps,
} from './Accordion.types';
import AccordionCollapsible from './AccordionCollapsible';

const Accordion: React.FC<AccordionProps> = ({
  isCollapsedOnOpen = true,
  items,
  ...props
}) => {
  const [openIds, setOpenIds] = useState(
    items.filter((item) => item.isOpen).map((item) => item.id),
  );

  const handleClick = useCallback(
    (id: AccordionItemId) => {
      setOpenIds(
        openIds.includes(id)
          ? openIds.filter((i) => i !== id)
          : isCollapsedOnOpen
          ? [id]
          : [...openIds, id],
      );
    },
    [setOpenIds, openIds, isCollapsedOnOpen],
  );

  return (
    <FlexContainer
      alignItems="flex-start"
      flexDirection="column"
      margin="none"
      padding="none"
      {...props}
    >
      {items.map((item) => (
        <AccordionCollapsible
          key={`accordion-item-${item.title}`}
          handleHeaderClick={handleClick}
          id={item.id}
          isOpen={openIds.includes(item.id)}
          title={item.title}
        >
          {item.content}
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
