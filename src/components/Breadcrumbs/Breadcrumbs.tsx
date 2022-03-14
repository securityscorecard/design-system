import * as React from 'react';
import PropTypes from 'prop-types';
import { drop, dropLast, pipe, slice } from 'ramda';
import styled from 'styled-components';
import { isNilOrEmpty, isNotNilOrEmpty } from 'ramda-adjunct';

import { BreadcrumbsProps } from './Breadcrumbs.types';
import { ColorTypes, Inline, SpaceSizes, getFontSize } from '../..';
import { SSCIconNames } from '../../theme/icons/icons.enums';
import { Icon } from '../Icon';
import BreadcrumbItem from './BreadcrumbItem';
import { DropdownMenu } from '../_internal/BaseDropdownMenu';
import { ActionKinds } from '../../types/action.types';

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${getFontSize('sm')};
  width: 1rem;
  height: 1rem;
`;

const BreadcrumbsWrapper = styled.nav`
  display: flex;
`;

const itemsAfterCollapse = 2;
const itemsBeforeCollapse = 1;
const maxItems = 3;

// Build list of breadcrumbs interspersing a separator
const insertSeparators = (items: React.ReactElement[]) => {
  return items.reduce((prev, current, index) => {
    if (index < items.length - 1) {
      return [
        ...prev,
        current,
        // eslint-disable-next-line react/no-array-index-key
        <IconWrapper key={`separator-${index}`} aria-hidden>
          <Icon
            color={ColorTypes.neutral600}
            name={SSCIconNames.chevronRight}
          />
        </IconWrapper>,
      ];
    }

    return [...prev, current];
  }, []);
};

// this renders the list of items only when the quantity
// is bigger than maxItems
const renderItemsBeforeAndAfter = (
  allItems: React.ReactNode[],
  allDropdownActions: ActionKinds<React.MouseEvent[]>[],
) => {
  const dropdown = () => {
    return (
      <DropdownMenu
        key="breadcrumbs-dropdown"
        actions={allDropdownActions}
        paneWidth={270}
        placement="bottom-start"
        aria-hidden
      >
        <BreadcrumbItem>
          <IconWrapper>
            <Icon
              aria-label="Open breadcrumbs menu"
              name={SSCIconNames.ellipsisH}
            />
          </IconWrapper>
        </BreadcrumbItem>
      </DropdownMenu>
    );
  };

  return [
    ...slice(0, itemsBeforeCollapse, allItems),
    dropdown(),
    ...slice(allItems.length - itemsAfterCollapse, allItems.length, allItems),
  ];
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ children, ...props }) => {
  const allItems = React.Children.map(children, (breadcrumbItem) => {
    if (!React.isValidElement(breadcrumbItem)) {
      return null;
    }

    return React.cloneElement(breadcrumbItem, {
      isSelected:
        isNilOrEmpty(breadcrumbItem.props.to) &&
        isNilOrEmpty(breadcrumbItem.props.href),
      ...props,
    });
  });

  const allDropdownActions = pipe(
    drop(1),
    dropLast(2),
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
    <BreadcrumbsWrapper aria-label="Breadcrumb">
      <Inline align="center" as="ol" gap={SpaceSizes.xs} justify="center">
        {insertSeparators(
          maxItems && allItems.length <= maxItems
            ? allItems
            : renderItemsBeforeAndAfter(allItems, allDropdownActions),
        )}
      </Inline>
    </BreadcrumbsWrapper>
  );
};

Breadcrumbs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Breadcrumbs;
