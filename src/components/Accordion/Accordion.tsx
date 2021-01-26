import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import { FlexContainer } from '../FlexContainer';
import { AccordionProps } from './Accordion.types';
import AccordionCollapsible from './AccordionCollapsible';

const Accordion: React.FC<AccordionProps> = ({
  isCollapsedOnOpen = true,
  items,
  ...props
}) => {
  const [openIndexes, setOpenIndexes] = useState(
    items.filter((item) => item.isOpen).map((item, index) => index),
  );

  const handleClick = useCallback(
    (index: number) => {
      setOpenIndexes(
        openIndexes.includes(index)
          ? openIndexes.filter((i) => i !== index)
          : isCollapsedOnOpen
          ? [index]
          : [...openIndexes, index],
      );
    },
    [setOpenIndexes, openIndexes, isCollapsedOnOpen],
  );

  return (
    <FlexContainer
      alignItems="flex-start"
      flexDirection="column"
      margin="none"
      padding="none"
      {...props}
    >
      {items.map((item, index) => (
        <AccordionCollapsible
          key={`accordion-item-${item.title}`}
          handleHeaderClick={handleClick}
          index={index}
          isOpen={openIndexes.includes(index)}
          title={item.title}
        >
          {item.content} {isCollapsedOnOpen}
        </AccordionCollapsible>
      ))}
    </FlexContainer>
  );
};

const AccordionItemPropType = PropTypes.exact({
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
});

Accordion.propTypes = {
  items: PropTypes.arrayOf(AccordionItemPropType).isRequired,
  isCollapsedOnOpen: PropTypes.bool,
};

export default Accordion;
