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
import { CLX_COMPONENT } from '../../theme/constants';
import { Collapsible } from '../Collapsible';
import { SpaceSizes } from '../../theme';
import { CollapsibleVariants } from '../Collapsible/Collapsible.enums';

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

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      isCollapsedOnOpen = true,
      items,
      openItems,
      className,
      variant: _variant = CollapsibleVariants.regular,
      isCard,
      ...props
    },
    ref,
  ) => {
    const [openIds, setOpenIds] = useState(pickOpen(items));
    const variant = isCard === false ? CollapsibleVariants.inline : _variant;

    useEffect(
      () =>
        openItems?.forEach((item: AccordionItemId) =>
          setOpenIds((state) => filterState(state, item, isCollapsedOnOpen)),
        ),
      [openItems, isCollapsedOnOpen],
    );

    const handleChange = useCallback(
      (id: AccordionItemId) => {
        setOpenIds((state) => filterState(state, id, isCollapsedOnOpen));
      },
      [setOpenIds, isCollapsedOnOpen],
    );

    return (
      <Stack
        gap={
          variant === CollapsibleVariants.regular
            ? SpaceSizes.sm
            : SpaceSizes.none
        }
        {...props}
        ref={ref}
        className={cls(CLX_COMPONENT, className)}
      >
        {items.map(({ title, content, id }) => (
          <Collapsible
            isOpen={openIds.includes(id)}
            title={title}
            variant={variant}
            onChange={() => handleChange(id)}
          >
            {content}
          </Collapsible>
        ))}
      </Stack>
    );
  },
);

Accordion.propTypes = {
  items: PropTypes.arrayOf(AccordionItemPropType).isRequired,
  isCollapsedOnOpen: PropTypes.bool,
  variant: PropTypes.string,
  className: PropTypes.string,
  openItems: PropTypes.arrayOf(AccordionItemIdPropType),
};

export default Accordion;
