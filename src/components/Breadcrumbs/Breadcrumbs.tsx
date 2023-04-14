import type { FC, MouseEvent, ReactElement, ReactNode } from 'react';
import type { BreadcrumbsProps } from './Breadcrumbs.types';
import type { ActionKinds } from '../../types/action.types';

import { slice } from 'ramda';
import styled from 'styled-components';
import { isNotNilOrEmpty } from 'ramda-adjunct';
import cls from 'classnames';
import { Children, isValidElement } from 'react';

import { SSCIconNames } from '../../theme/icons/icons.enums';
import { Icon } from '../Icon';
import { DropdownMenu } from '../_internal/BaseDropdownMenu';
import { getColor, getFontSize, pxToRem } from '../../utils';
import { ColorTypes, SpaceSizes } from '../../theme';
import { Inline } from '../layout';
import { CLX_COMPONENT } from '../../theme/constants';
import { BreadcrumbLink } from './BreadcrumbItem';

const IconWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${getFontSize('sm')};
  width: 1rem;
  height: 1rem;
`;

const DropdownBreadcrumbLink = styled(BreadcrumbLink)`
  color: ${getColor('neutral.700')};
  width: ${pxToRem(21)};
`;

const BreadcrumbsWrapper = styled.nav`
  display: flex;
`;

const InlineOrderedList = styled(Inline)`
  padding: 0;
  margin: 0;
  list-style: none;
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
        // eslint-disable-next-line react/no-array-index-key
        <IconWrapper key={`separator-${index}`} aria-hidden>
          <Icon color={ColorTypes.neutral600} name={SSCIconNames.angleRight} />
        </IconWrapper>,
      ];
    }

    return [...prev, current];
  }, []);
};

const renderDropdown = (actions: ActionKinds<React.MouseEvent[]>[]) => (
  <li key="breadcrumbs-dropdown">
    <DropdownMenu
      actions={actions}
      paneWidth={270}
      placement="bottom-start"
      aria-hidden
    >
      <DropdownBreadcrumbLink
        aria-label="Open breadcrumbs menu"
        color="secondary"
        iconName={SSCIconNames.ellipsisH}
        variant="text"
      />
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

const Breadcrumbs: FC<BreadcrumbsProps> = ({ children, className }) => {
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
            ? children
            : renderItemsBeforeAndAfter(children, allDropdownActions),
        )}
      </InlineOrderedList>
    </BreadcrumbsWrapper>
  );
};

export default Breadcrumbs;
