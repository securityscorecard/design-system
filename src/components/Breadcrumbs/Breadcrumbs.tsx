import * as React from 'react';
import PropTypes from 'prop-types';
import { slice } from 'ramda';
import styled from 'styled-components';
import { isNilOrEmpty, isNotNilOrEmpty } from 'ramda-adjunct';
import cls from 'classnames';

import type {
  BreadcrumbItemProps,
  BreadcrumbsProps,
} from './Breadcrumbs.types';
import { SSCIconNames } from '../../theme/icons/icons.enums';
import { Icon } from '../Icon';
import { DropdownMenu } from '../_internal/BaseDropdownMenu';
import { ActionKinds } from '../../types/action.types';
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
const insertSeparators = (items: React.ReactElement[]) => {
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
  allItems: React.ReactNode[],
  allDropdownActions: ActionKinds<React.MouseEvent[]>[],
) => {
  const dropdown = renderDropdown(allDropdownActions);
  return [
    ...slice(0, itemsBeforeCollapse, allItems),
    dropdown,
    ...slice(allItems.length - itemsAfterCollapse, allItems.length, allItems),
  ];
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  children,
  className,
  ...props
}) => {
  const allItems = React.Children.map(children, (breadcrumbItem) => {
    if (!React.isValidElement(breadcrumbItem)) {
      return null;
    }

    return React.cloneElement(
      breadcrumbItem as React.ReactElement<BreadcrumbItemProps>,
      {
        isSelected:
          isNilOrEmpty(breadcrumbItem.props.to) &&
          isNilOrEmpty(breadcrumbItem.props.href),
        ...props,
      },
    );
  });

  const allDropdownActions = slice(
    itemsBeforeCollapse,
    -Math.abs(itemsAfterCollapse),
  )(
    React.Children.toArray(children).map((breadcrumbItem) => {
      if (!React.isValidElement(breadcrumbItem)) {
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

Breadcrumbs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  className: PropTypes.string,
};

export default Breadcrumbs;
