import { slice } from 'ramda';
import styled from 'styled-components';
import { isNilOrEmpty, isNotNilOrEmpty } from 'ramda-adjunct';
import cls from 'classnames';
import {
  Children,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
  cloneElement,
  isValidElement,
} from 'react';

import type {
  BreadcrumbItemProps,
  BreadcrumbsProps,
} from './Breadcrumbs.types';
import { SSCIconNames } from '../../theme/icons/icons.enums';
import { Icon } from '../Icon';
import { DropdownMenu } from '../_internal/BaseDropdownMenu';
import { ActionKinds } from '../../types/action.types';
import { ColorTypes, SpaceSizes } from '../../theme';
import { Inline } from '../layout';
import { CLX_COMPONENT } from '../../theme/constants';
import { IconLink } from './BreadcrumbItem';

const BreadcrumbsWrapper = styled.nav`
  display: flex;
`;

const InlineOrderedList = styled(Inline)`
  padding: 0;
  margin: 0;
  list-style: none;
`;
const SeparatorListItem = styled.li`
  display: flex;
`;

const itemsAfterCollapse = 3;
const itemsBeforeCollapse = 1;

// Build list of breadcrumbs interspersing a separator
const insertSeparators = (items: ReactElement[]) => {
  return items.reduce((prev, current, index) => {
    if (index < items.length - 1) {
      return [
        ...prev,
        current,
        <SeparatorListItem aria-hidden="true" style={{ display: 'flex' }}>
          <Icon
            // eslint-disable-next-line react/no-array-index-key
            key={`separator-${index}`}
            color={ColorTypes.neutral600}
            name={SSCIconNames.angleRight}
            size="sm"
            hasFixedSize
          />
        </SeparatorListItem>,
      ];
    }

    return [...prev, current];
  }, []);
};

const renderDropdown = (actions: ActionKinds<MouseEvent[]>[]) => (
  <li key="breadcrumbs-dropdown">
    <DropdownMenu
      actions={actions}
      paneWidth={270}
      placement="bottom-start"
      aria-hidden
    >
      <IconLink aria-label="Open breadcrumbs menu" color="secondary">
        <Icon name="ellipsis-h" size="sm" />
      </IconLink>
    </DropdownMenu>
  </li>
);

// this renders the list of items only when the count of the actions is bigger than 2
const renderItemsBeforeAndAfter = (
  allItems: ReactNode[],
  allDropdownActions: ActionKinds<MouseEvent[]>[],
) => {
  const dropdown = renderDropdown(allDropdownActions);
  return [
    ...slice(0, itemsBeforeCollapse, allItems),
    dropdown,
    ...slice(allItems.length - itemsAfterCollapse, allItems.length, allItems),
  ];
};

const Breadcrumbs = ({ children, className, ...props }: BreadcrumbsProps) => {
  const allItems = Children.map(children, (breadcrumbItem) => {
    if (!isValidElement(breadcrumbItem)) {
      return null;
    }

    return cloneElement(breadcrumbItem as ReactElement<BreadcrumbItemProps>, {
      isSelected:
        isNilOrEmpty(breadcrumbItem.props.to) &&
        isNilOrEmpty(breadcrumbItem.props.href),
      ...props,
    });
  });

  const allDropdownActions = slice(
    itemsBeforeCollapse,
    -Math.abs(itemsAfterCollapse),
  )(
    Children.toArray(children).map((breadcrumbItem) => {
      if (!isValidElement(breadcrumbItem)) {
        return null;
      }
      return {
        label: breadcrumbItem.props.children,
        name: breadcrumbItem.props.children,
        ...(isNotNilOrEmpty(breadcrumbItem.props.to) && {
          to: breadcrumbItem.props.to,
        }),
        ...(isNotNilOrEmpty(breadcrumbItem.props.href) && {
          href: breadcrumbItem.props.href,
        }),
      };
    }),
  );

  return (
    <BreadcrumbsWrapper
      aria-label="Breadcrumb"
      className={cls(CLX_COMPONENT, className)}
    >
      <InlineOrderedList
        align="center"
        as="ol"
        gap={SpaceSizes.xs}
        justify="center"
      >
        {insertSeparators(
          allDropdownActions.length < 2
            ? allItems
            : renderItemsBeforeAndAfter(allItems, allDropdownActions),
        )}
      </InlineOrderedList>
    </BreadcrumbsWrapper>
  );
};

export default Breadcrumbs;
